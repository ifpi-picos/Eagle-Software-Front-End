import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import styles from './itemForm.module.css';

export default function ItemForm() {
    const [formData, setFormData] = useState({
        achadoPor: '',
        local: '',
        armazenado: '',
        data: '',
        detalhes: '',
    });

    const handleFormClear = () => {
        setFormData({
          achadoPor: '',
          local: '',
          armazenado: '',
          data: '',
          detalhes: '',
        });
      };

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/itens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {
                setSuccessMessage('Item cadastrado com sucesso!');
                setShowSuccessModal(true);
                setTimeout(() => {
                    setFormData({
                        achadoPor: '',
                        local: '',
                        armazenado: '',
                        data: '',
                        detalhes: '',
                    });
                    setShowSuccessModal(false);
                }, 3000);

            } else {
                const errorData = await response.json();
                console.error('Erro ao cadastrar item:', errorData);
                setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
                setShowErrorModal(true);
            }
        } catch (error) {
            console.error('Erro ao cadastrar item:', error);
            setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
            setShowErrorModal(true);
        }
    };

    return (
        <div className={`${styles['bodyItem']} ${styles['form-container']}`}>

            <form className={styles['formItem']} id="itemForm" onSubmit={handleFormSubmit}>
                <div>
                    <h1 className={styles['titulo']}>Cadastro de Itens</h1>
                </div>

                <div className="grid grid-cols md:grid-cols-2 gap-4 justify-center">
                    <div>
                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="achador">
                                Achado por:
                            </label>
                            <input
                                className={styles['input-cadastro']}
                                type="text"
                                id="achador"
                                name="achadoPor"
                                value={formData.achadoPor}
                                onChange={(e) => setFormData({ ...formData, achadoPor: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="local">
                                Local:
                            </label>
                            <input
                                className={styles['input-cadastro']}
                                type="text"
                                id="local"
                                name="local"
                                value={formData.local}
                                onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="armazenado">
                                Armazenado:
                            </label>
                            <input
                                className={styles['input-cadastro']}
                                type="text"
                                id="armazenado"
                                name="armazenado"
                                value={formData.armazenado}
                                onChange={(e) => setFormData({ ...formData, armazenado: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="data">
                                Data:
                            </label>
                            <input
                                className={styles['input-cadastro']}
                                type="date"
                                id="data"
                                name="data"
                                value={formData.data}
                                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="detalhes">
                                Detalhes do item:
                            </label>
                            <textarea
                                className={styles['itemDetails']}
                                type="text"
                                id="detalhes"
                                name="detalhes"
                                value={formData.detalhes}
                                onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                                rows="4"
                                cols="50"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles['input-upload']}>
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
                    <button className={styles['btn-submit']} type="submit">
                        Cadastrar <BiPlus />
                    </button>
                    <button className={styles['btn-reset']} type="reset" onClick={handleFormClear}>
                        Limpar
                    </button>

                </div>

                {showSuccessModal && (
                    <div className={styles.modalBackground}>
                        <div className={styles.modalContent}>
                            <div className={styles.successIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p>{successMessage}</p>
                            <button onClick={() => setShowSuccessModal(false)}>Fechar</button>
                        </div>
                    </div>
                )}

                {showErrorModal && (
                    <div className={styles.modalBackground}>
                        <div className={styles.modalContent}>
                            <div className={styles.errorIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <p>{errorMessage}</p>
                            <button onClick={() => setShowErrorModal(false)}>Fechar</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
