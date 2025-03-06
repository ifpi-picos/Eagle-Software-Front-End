// import React from 'react';
// import Modal from 'react-modal';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { IoIosClose } from 'react-icons/io';
// import Styles from '../itensModals/modal.module.css'

// const ItemModal = ({ item, isOpen, onClose, onEdit, onDelete }) => {
//     if (!item) {
//         return null;
//     }

//     const formatDate = (isoDate) => {
//         const date = new Date(isoDate);

//         const options = { timeZone: 'UTC' };
//         const formattedDate = date.toLocaleDateString('pt-BR', options);

//         return formattedDate;
//     };

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onClose}
//             contentLabel="Item Modal"
//             shouldCloseOnOverlayClick={false}
//             shouldCloseOnEsc={false}
//             style={{
//                 overlay: {
//                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 },
//                 content: {
//                     width: '85vw',
//                     maxWidth: '40rem',
//                     maxHeight: '42rem',
//                     borderRadius: '10px',
//                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                 },
//             }}
//         >
//             <div className="flex justify-end">
//                 <button className="text-gray-500" onClick={onClose}>
//                     <IoIosClose size={30} />
//                 </button>
//             </div>

//             {item && (
//                 <div className="flex flex-col -mt-2 items-center p-4">
//                     <img
//                         src={item.imagem_URL}
//                         alt={`${item.id}`}
//                         className="mb-2 rounded-full border-2 mx-auto w-52 h-52"
//                     />

//                     <h2 className="text-xl font-bold mb-2">Item Achado</h2>

//                     <div className="mb-2 w-10/12">
//                         <div className="flex flex-col mb-2">
//                             <p className="font-bold whitespace-pre-wrap">Achado Por:</p>
//                             <p>{item.achadoPor}</p>
//                         </div>

//                         <div className="flex flex-col mb-2">
//                             <p className="font-bold whitespace-pre-wrap">Data:</p>
//                             <p>{formatDate(item.data)}</p>
//                         </div>

//                         <div className="flex flex-col mb-2">
//                             <p className="font-bold whitespace-pre-wrap">Local:</p>
//                             <p>{item.local}</p>
//                         </div>

//                         <div className="flex flex-col mb-2">
//                             <p className="font-bold whitespace-pre-wrap">Armazenado:</p>
//                             <p>{item.armazenado}</p>
//                         </div>

//                         <div className="flex flex-col">
//                             <p className="font-bold whitespace-pre-wrap">Descrição:</p>
//                             <p>{item.detalhes}</p>
//                         </div>
//                     </div>

//                     <div className="flex justify-center mt-4">
//                         <button
//                             className="bg-blue-500 text-white w-32 px-4 py-2 mr-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md"
//                             onClick={() => onEdit(item)}
//                         >
//                             <FaEdit className="mr-2" /> Editar
//                         </button>

//                         <button
//                             className="bg-red-500 text-white w-32 px-4 py-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-md"
//                             onClick={() => onDelete(item)}
//                         >
//                             <FaTrash className="mr-2" /> Remover
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </Modal>
//     );
// };

// export default ItemModal;
