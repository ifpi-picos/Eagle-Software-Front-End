import React from 'react';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaBoxOpen, FaInfoCircle } from 'react-icons/fa';

const ItemCard = ({ item, openModal, isEditingMode, formatDate }) => {
    return (
        <div
            key={item.id}
            className={`bg-gray-200 border border-gray-300 mx-auto w-80 sm:w-full h-full p-2 px-3 rounded-2xl shadow-md cursor-pointer transform hover:shadow-lg hover:bg-gray-300 transition duration-500 ease-in-out ${isEditingMode ? 'hidden' : ''}`}
            onClick={() => openModal(item)}
        >
            <div className="image-container mb-4 flex justify-center">
                <img
                    src={item.imagem_URL}
                    alt={`${item.id}`}
                    className="rounded-full border-4 border-white object-cover w-48 h-48 shadow-sm"
                />
            </div>
            <div className='mb-2 flex items-center'>
                <FaUser className="text-gray-600 mr-2" />
                <p className="font-bold text-gray-700">Achado Por:</p>
                <p className='ml-2 text-gray-800 truncate'>{item.achadoPor}</p>
            </div>

            <div className='mb-2 flex items-center'>
                <FaCalendarAlt className="text-gray-600 mr-2" />
                <p className="font-bold text-gray-700">Data:</p>
                <p className='ml-2 text-gray-800 truncate'>{formatDate(item.data)}</p>
            </div>

            <div className='mb-2 flex items-center'>
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <p className="font-bold text-gray-700">Local:</p>
                <p className='ml-2 text-gray-800 truncate'>{item.local}</p>
            </div>

            <div className='mb-2 flex items-center'>
                <FaBoxOpen className="text-gray-600 mr-2" />
                <p className="font-bold text-gray-700">Armazenado:</p>
                <p className='ml-2 text-gray-800 truncate'>{item.armazenado}</p>
            </div>

            <div className='mb-2 flex items-center'>
                <FaInfoCircle className="text-gray-600 mr-2" />
                <p className="font-bold text-gray-700">Descrição:</p>
                <p className='ml-2 text-gray-800 truncate'>{item.detalhes}</p>
            </div>
        </div>
    );
};

export default ItemCard;
