import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const Itens = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
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

  useEffect(() => {
    fetch('http://localhost:4000/itens')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Erro ao obter itens:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Lista de Itens</h1>
      <div className="grid gap-8 grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 p-4 rounded-2xl shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] cursor-pointer transform hover:shadow-[0px_8px_14px_8px_rgba(0,0,0,0.4)] transition duration-500 ease-in-out"
            onClick={() => openModal(item)}
          >
            <img
              src={item.imageUrl}
              alt={`Imagem do Item ${item.id}`}
              className="mb-2 rounded-full border-2 mx-auto w-40 h-40"
            />

            <div className='flex'>
              <p className="font-bold">Encontrado Por:</p>
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
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            width: '40rem',
            height: '40rem',
            margin: 'auto',
            position: 'absolute',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        {selectedItem && (
          <div className="flex flex-col items-center p-4">
            <img
              src={selectedItem.imageUrl}
              alt={`Imagem do Item ${selectedItem.id}`}
              className="mb-2 rounded-full border-2 mx-auto w-40 h-40"
            />

            <h2 className="text-xl font-bold mb-2">Item Achado</h2>

            <div className="w-96 mb-2">
              <div className='flex justify-between'>
                <div className="mb-2">
                  <p className="font-bold mr-2">Encontrado Por:</p>
                  <p>{selectedItem.achadoPor}</p>
                </div>

                <div className="mb-2">
                  <p className="font-bold mr-2">Data:</p>
                  <p>{formatDate(selectedItem.data)}</p>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="mb-2">
                  <p className="font-bold mr-2">Armazenado:</p>
                  <p>{selectedItem.armazenado}</p>
                </div>

                <div className="mb-2">
                  <p className="font-bold mr-2">Local:</p>
                  <p>{selectedItem.local}</p>
                </div>
              </div>


              <div className="mb-2">
                <p className="font-bold">Descrição:</p>
                <p>{selectedItem.detalhes}</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={() => handleEdit(selectedItem)}>Editar</button>
              <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleRemove(selectedItem)}>Remover</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Itens;
