import React, { useState, useEffect } from 'react';
import styles from './itemForm.module.css';
import { BeatLoader } from 'react-spinners';

export default function ItemForm() {
    const [formData, setFormData] = useState({
        achadoPor: '',
        local: '',
        armazenado: '',
        data: '',
        detalhes: '',
    });

    const [localImage, setLocalImage] = useState(null);
    const [readyToUpload, setReadyToUpload] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const handleImageClear = () => {
        setLocalImage(null);
        setReadyToUpload(false);
        setImage(null);
        setImageLoaded(false);
    };

    const handleFormClear = () => {
        setFormData({
            achadoPor: '',
            local: '',
            armazenado: '',
            data: '',
            detalhes: '',
        });
        handleImageClear();
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [image, setImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const cloudinaryUploadPreset = 'my-uploads';
    const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dsrnunimq/image/upload';

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            try {
                const localImageUrl = URL.createObjectURL(file);
                setLocalImage(localImageUrl);
                setReadyToUpload(true);

                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', cloudinaryUploadPreset);

                const response = await fetch(cloudinaryAPI, {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                console.log('Data from Cloudinary:', data); // Log para verificar a resposta do Cloudinary
                setImage(data.secure_url);
                setImageLoaded(true);
            } catch (error) {
                console.error('Erro ao enviar imagem para o Cloudinary:', error);
            }
        }
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const fieldsInOrder = ['achadoPor', 'data', 'local', 'armazenado', 'detalhes'];
        let firstEmptyField = null;

        for (const field of fieldsInOrder) {
            if (!formData[field]) {
                firstEmptyField = field;
                break;
            }
        }

        if (firstEmptyField) {
            setErrorMessage(`O campo "${firstEmptyField}" é obrigatório.`);
            setShowErrorModal(true);
            return;
        }

        try {
            setButtonDisabled(true);
            const response = await fetch('http://localhost:3000/itens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    imagem_URL: image,
                }),
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
                console.error('Erro ao cadastrar item. Detalhes:', errorData); // Log para verificar os detalhes do erro
                setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
                setShowErrorModal(true);
            }
        } catch (error) {
            console.error('Erro ao cadastrar item. Detalhes:', error); // Log para verificar os detalhes do erro
            setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
            setShowErrorModal(true);
        } finally {
            setButtonDisabled(false);
        }
    };

    useEffect(() => {
        return () => {
            if (localImage) {
                URL.revokeObjectURL(localImage);
            }
        };
    }, [localImage]);

    return (
        <div className={`${styles['bodyItem']} ${styles['form-container']}`}>

            <form className={styles['formItem']} id="itemForm" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <h1 className={styles['titulo']}>Cadastro de Itens</h1>
                </div>

                <div className="grid grid-cols md:grid-cols-2 gap-4 justify-center">
                    <div>
                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="achador">
                                Achado Por:
                            </label>
                            <input
                                className={styles['input-cadastro']}
                                type="text"
                                id="achador"
                                name="achadoPor"
                                value={formData.achadoPor}
                                onChange={(e) => setFormData({ ...formData, achadoPor: e.target.value })}
                                maxLength={40}
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
                                maxLength={50}
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
                                maxLength={50}
                                required
                            />
                        </div>


                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="detalhes">
                                Descrição:
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
                                    <label aria-label='Botão de Selecionar Imagem'>
                                        <input type="file" id="imagem" onChange={handleFileChange} />

                                    </label>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['btn-acao']}>
                    <button
                        className={styles['btn-submit']}
                        type='submit'
                        onClick={(event) => handleFormSubmit(event)}
                        disabled={isButtonDisabled}
                    >
                        {loadingSubmit ? (
                            <BeatLoader size={10} color={'#fff'} loading={loadingSubmit} />
                        ) : (
                            'Cadastrar'
                        )}
                    </button>

                    <button
                        className={styles['btn-reset']}
                        type="reset"
                        onClick={handleFormClear}
                    >
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
