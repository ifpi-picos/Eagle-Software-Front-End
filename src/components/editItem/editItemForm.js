import React, {useState} from 'react';
import styles from '../CadastroItem/itemForm.module.css';
import { BeatLoader } from 'react-spinners';

const EditItemForm = ({
    editedItem,
    setEditedItem,
    handleSave,
    handleEditCancel,
    handleFileChange,
    localImage,
    imageLoaded,
}) => {

    const [loadingSave, setLoadingSave] = useState(false);

    return (
        <div className={`${styles['bodyItem']} ${styles['form-container']}`}>
            <form className={styles['formItem']} id="itemForm" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <h1 className={styles['titulo']}>Editar Item</h1>
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
                            ) : editedItem.imagem_URL && imageLoaded ? (
                                <img src={editedItem.imagem_URL} alt="Imagem do item" className={styles['image-preview']} />
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
                        disabled={loadingSave}
                    >
                        {loadingSave ? (
                            <BeatLoader size={10} color={'#fff'} loading={loadingSave} />
                        ) : (
                            'Salvar'
                        )}
                    </button>

                    <button className={styles['btn-reset']} type="reset" onClick={handleEditCancel}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditItemForm;
