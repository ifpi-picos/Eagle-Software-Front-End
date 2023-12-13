import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import Sidebar from '../sidebar/menu.js';
import SuccessMessageModal from '../modals/itensModals/SucessModal.js';
import DeleteConfirmationModal from '../modals/itensModals/DeleteItem.js';
import EditItemForm from '../editItem/editItemForm.js';
import SuccessModal from '../modals/modalSucess.js';
import ItemCard from '../card/ItemCard.js';


const Itens = ({ sortingCriteria }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editedItem, setEditedItem] = useState({});
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [localImage, setLocalImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLocalImageLoaded, setIsLocalImageLoaded] = useState(false);
  const [newItemImage, setNewItemImage] = useState(null);
  const [pageTitle, setPageTitle] = useState('Lista de Itens');
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false);


  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const options = { timeZone: 'UTC' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);

    return formattedDate;
  };


  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(`https://api-eagles-software.onrender.com/itens/${selectedItem.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setItems(items.filter((item) => item.id !== selectedItem.id));
        setShowSuccessModal(true);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    } finally {
      closeDeleteModal();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const localImageUrl = URL.createObjectURL(file);
        setLocalImage(localImageUrl);
        setNewItemImage(file);
      } catch (error) {
        console.error('Erro ao processar nova imagem:', error);
      }
    }
  };

  useEffect(() => {
    let apiUrl = 'https://api-eagles-software.onrender.com/itens';

    if (sortingCriteria === 'recentes') {
      apiUrl += '/recentes';
      setPageTitle('Itens Recentes');
    } else if (sortingCriteria === 'antigos') {
      apiUrl += '/antigos';
      setPageTitle('Itens Antigos');
    } else {
      setPageTitle('Lista de Itens');
    }

    apiUrl += `?search=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Erro ao obter itens:', error));
  }, [searchTerm, sortingCriteria]);


  const filteredItems = items.filter((item) =>
    item.detalhes.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const cloudinaryUploadPreset = 'my-uploads';
  const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dsrnunimq/image/upload';

  const handleSave = async () => {
    try {
      let updatedItem = { ...editedItem };

      if (newItemImage) {
        const formData = new FormData();
        formData.append('file', newItemImage);
        formData.append('upload_preset', cloudinaryUploadPreset);

        const responseCloudinary = await fetch(cloudinaryAPI, {
          method: 'POST',
          body: formData,
        });

        const dataCloudinary = await responseCloudinary.json();
        updatedItem = { ...updatedItem, imagem_URL: dataCloudinary.secure_url };
      }

      const responseUpdate = await fetch(`https://api-eagles-software.onrender.com/itens/${editedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (responseUpdate.ok) {
        const updatedItems = items.map((item) =>
          item.id === editedItem.id ? updatedItem : item
        );

        setItems(updatedItems);
        setIsEditingMode(false);
        setEditedItem({});
        setNewItemImage(null);
        setShowForm(false);
        setShowUpdateSuccessModal(true);
      } else {
        console.error('Erro ao atualizar item:', responseUpdate);
      }
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  const handleEdit = (item) => {
    setEditedItem(item);
    setIsEditingMode(true);
    setShowForm(true);
    closeModal();

    if (item.imagem_URL) {
      setLocalImage(item.imagem_URL);
      setIsLocalImageLoaded(true);
    } else {

      setLocalImage(null);
      setIsLocalImageLoaded(false);
    }

    setNewItemImage(null);
  };

  const handleEditCancel = () => {
    setIsEditingMode(false);
    setEditedItem({});
    setShowForm(false);
  };


  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className='flex bg-aliceblue'>
      <Sidebar onSearch={handleSearch} />
      <div className="mx-auto self-center lg:w-2/3 p-4">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">{pageTitle}</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 sm:ml-28 ml-[50px]">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              openModal={openModal}
              isEditingMode={isEditingMode}
              formatDate={formatDate}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Item Modal"
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              width: '90vw',
              maxWidth: '40rem',
              height: '92vh',
              maxHeight: '43rem',
              margin: 'auto',
              position: 'absolute',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <div className="flex justify-end">
            <button className="text-gray-500" onClick={closeModal}>
              <IoIosClose size={30} />
            </button>
          </div>

          {selectedItem && (
            <div className="flex flex-col -mt-2 items-center p-4">
              <img
                src={selectedItem.imagem_URL}
                alt={`${selectedItem.id}`}
                className="mb-2 rounded-full border-2 mx-auto w-52 h-52"
              />

              <h2 className="text-xl font-bold mb-2">Item Achado</h2>

              <div className="mb-2 w-10/12">
                <div className="flex flex-col mb-2">
                  <p className="font-bold whitespace-pre-wrap">Achado Por:</p>
                  <p>{selectedItem.achadoPor}</p>
                </div>

                <div className="flex flex-col mb-2">
                  <p className="font-bold whitespace-pre-wrap">Data:</p>
                  <p>{formatDate(selectedItem.data)}</p>
                </div>

                <div className="flex flex-col mb-2">
                  <p className="font-bold whitespace-pre-wrap">Local:</p>
                  <p>{selectedItem.local}</p>
                </div>

                <div className="flex flex-col mb-2">
                  <p className="font-bold whitespace-pre-wrap">Armazenado:</p>
                  <p>{selectedItem.armazenado}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-bold whitespace-pre-wrap">Descrição:</p>
                  <p>{selectedItem.detalhes}</p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 text-white w-32 px-4 py-2 mr-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md"
                  onClick={() => { handleEdit(selectedItem); }}
                >
                  <FaEdit className="mr-2" /> Editar
                </button>

                <button
                  className="bg-red-500 text-white w-32 px-4 py-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-md"
                  onClick={() => openDeleteModal(selectedItem)}
                >
                  <FaTrash className="mr-2" /> Remover
                </button>
              </div>
            </div>
          )}
        </Modal>

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirmation}
        />

        <SuccessMessageModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />

        {showForm && (
          <div>
            <EditItemForm
              localImage={localImage}
              imageLoaded={imageLoaded}
              editedItem={editedItem}
              setEditedItem={setEditedItem}
              handleSave={handleSave}
              handleEditCancel={handleEditCancel}
            />
          </div>
        )}

        {showUpdateSuccessModal && (
          <SuccessModal
            message="Item atualizado com sucesso!"
            onClose={() => setShowUpdateSuccessModal(false)}
          />
        )}

      </div>
    </div>
  );
};

export default Itens;
