import React from 'react';
import Modal from 'react-modal';

const SuccessMessageModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Success Message Modal"
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
                <p className="ml-4">Item excluido com sucesso</p>
            </div>
        </Modal>
    );
};

export default SuccessMessageModal;
