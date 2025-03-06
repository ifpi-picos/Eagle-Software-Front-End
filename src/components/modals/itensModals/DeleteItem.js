import React from 'react';
import Modal from 'react-modal';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
          inset: '4rem',
          width: '20rem',
          height: '16rem',
          maxHeight: '20rem',
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
          onClick={onConfirm}
        >
          Confirmar
        </button>
        <button
          className="bg-gray-500 text-white w-32 px-4 py-2 flex justify-center shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-lg items-center self-center transition duration-300 ease-in-out hover:bg-gray-600 hover:shadow-md"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
