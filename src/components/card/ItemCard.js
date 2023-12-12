import React from 'react';

const ItemCard = ({ item, openModal, isEditingMode, formatDate }) => {
    return (
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
    );
};

export default ItemCard;
