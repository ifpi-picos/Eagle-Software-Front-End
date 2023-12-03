import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import Sidebar from '../components/sidebar/menu';
import styles from '../components/CadastroItem/itemForm.module.css';

const Itens = () => {
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
    fetch(`https://api-eagles-software.onrender.com/itens?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Erro ao obter itens:', error));
  }, [searchTerm]);


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  return (
    <div className='flex bg-aliceblue'>
      <Sidebar />
      <div className="mx-auto self-center lg:w-2/3 p-4">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">Lista de Itens</h1>

        {/* <form>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" value={searchTerm} onChange={handleSearchTermChange} class="block mb-4 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar itens" required></input>
          </div>  
        </form> */}

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 sm:ml-28 ml-[50px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gray-300 mx-auto w-80 sm:w-full h-full p-4 rounded-2xl shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] cursor-pointer transform hover:shadow-[0px_8px_14px_8px_rgba(0,0,0,0.4)] transition duration-500 ease-in-out ${isEditingMode ? 'hidden' : ''}`}
              onClick={() => openModal(item)}
            >
              <div className="image-container mb-2 flex justify-center">
                <img
                  src={item.imagem_URL}
                  alt={`${item.id}`}
                  className="rounded-full border-2 object-cover w-52 h-52"
                />
              </div>

              <div className='flex'>
                <p className="font-bold">Achado Por:</p>
                <p className='ml-2'>{item.achadoPor}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Data:</p>
                <p className='ml-2'>{formatDate(item.data)}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Local:</p>
                <p className='ml-2'>{item.local}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Armazenado:</p>
                <p className='ml-2'>{item.armazenado}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Descrição:</p>
                <p className='ml-2'>{item.detalhes}</p>
              </div>
            </div>
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

        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Modal de Confirmação de Exclusão"
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            },
            content: {
              width: '24rem',
              height: '16rem',
              margin: 'auto',
              position: 'absolute',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            },
          }}
        >
          <div className="flex justify-center items-center flex-col">
            <img
              src="/warning.webp"
              alt="Ícone de Aviso"
              className="w-14 h-14 mb-4"
            />
            <p>Tem certeza que deseja excluir este item?</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white w-32 px-4 py-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-md mr-2"
              onClick={handleDeleteConfirmation}
            >
              Confirmar
            </button>
            <button
              className="bg-gray-500 text-white w-32 px-4 py-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-gray-600 hover:shadow-md"
              onClick={closeDeleteModal}
            >
              Cancelar
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={showSuccessModal}
          onRequestClose={() => setShowSuccessModal(false)}
          contentLabel="Success Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            },
            content: {
              width: '90%', 
              maxWidth: '22rem', 
              height: '90%', 
              maxHeight: '14rem', 
              margin: 'auto',
              position: 'absolute',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            },
          }}
        >
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-green-500 w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="ml-4">Item excluído com sucesso!</p>
          </div>
        </Modal>

        {showForm && (
          <div className={`${styles['bodyItem']} ${styles['form-container']}`}>
            <form className={styles['formItem']} id="itemForm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h1 className={styles['titulo']}>Editar Itens</h1>
              </div>

              <div className="grid grid-cols md:grid-cols-2 gap-4 justify-center">
                <div>
                  <div className={styles['campoItem']}>
                    <p className="font-bold mb-2 whitespace-pre-wrap">Achado Por:</p>
                    <input
                      className={styles['input-cadastro']}
                      type="text"
                      id="achadoPor"
                      value={editedItem.achadoPor}
                      onChange={(e) => setEditedItem({ ...editedItem, achadoPor: e.target.value })}
                    />
                  </div>

                  <div className={styles['campoItem']}>
                    <p className="font-bold mb-2 whitespace-pre-wrap">Data:</p>
                    <input
                      className={styles['input-cadastro']}
                      type="date"
                      id="data"
                      value={editedItem.data}
                      onChange={(e) => setEditedItem({ ...editedItem, data: e.target.value })}
                    />
                  </div>

                  <div className={styles['campoItem']}>
                    <p className="font-bold mb-2 whitespace-pre-wrap">Local:</p>
                    <input
                      className={styles['input-cadastro']}
                      type="text"
                      id="local"
                      value={editedItem.local}
                      onChange={(e) => setEditedItem({ ...editedItem, local: e.target.value })}
                    />
                  </div>

                  <div className={styles['campoItem']}>
                    <p className="font-bold mb-2 whitespace-pre-wrap">Armazenado:</p>
                    <input
                      className={styles['input-cadastro']}
                      type="text"
                      id="armazenado"
                      value={editedItem.armazenado}
                      onChange={(e) => setEditedItem({ ...editedItem, armazenado: e.target.value })}
                    />
                  </div>

                  <div className={styles['campoItem']}>
                    <p className="font-bold mb-2 whitespace-pre-wrap">Descrição:</p>
                    <textarea
                      className={styles['itemDetails']}
                      type="text"
                      id="detalhes"
                      name="detalhes"
                      value={editedItem.detalhes}
                      onChange={(e) => setEditedItem({ ...editedItem, detalhes: e.target.value })}
                      rows="4"
                      cols="50"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                <div className={styles['input-upload']}>
                  <div className={styles['image-preview-container']}>
                    {localImage ? (
                      <img src={localImage} alt="Imagem do item" className={styles['image-preview']} />
                    ) : imageLoaded ? (
                      <img src={image} alt="Imagem do item" className={styles['image-preview']} />
                    ) : (
                      <img src="/camera.jpg" alt="Imagem padrão" className={styles['image-preview']} />
                    )}
                  </div>

                  <div className={styles['input-file-upload']}>
                    <div className={styles['upload-button']}>
                      <button className={styles['btn-upload']}>
                        Selecione o arquivo
                        <input type="file" id="imagem" onChange={handleFileChange} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              <div className={styles['btn-acao']}>
                <button
                  className={styles['btn-submit']}
                  type="button"
                  onClick={handleSave}
                >
                  Salvar
                </button>

                <button
                  className={styles['btn-reset']}
                  type="reset"
                  onClick={handleEditCancel}

                >
                  Cancelar
                </button>

              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default Itens;
