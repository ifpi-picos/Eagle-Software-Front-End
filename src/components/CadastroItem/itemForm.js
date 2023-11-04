import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import styles from './itemForm.module.css';

export default function ItemForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className={styles['bodyItem']}>

            <form className={styles['formItem']} id="itemForm">
                <div>
                    <h1 className={styles['titulo']}>Cadastro de Itens</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="achador">
                                Achado por:
                            </label>
                            <input className={styles['input-cadastro']} type="text" id="achador" name="achador" required />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="local">
                                Local:
                            </label>
                            <input className={styles['input-cadastro']} type="text" id="local" name="local" required />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="armazenado">
                                Armazenado:
                            </label>
                            <input className={styles['input-cadastro']} type="text" id="armazenado" name="armazenado" required />
                        </div>

                        <div className={styles['campoItem']}>
                            <label className={styles['textItem']} htmlFor="data">
                                Data:
                            </label>
                            <input className={styles['input-cadastro']} type="date" id="data" name="data" required />
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
                            {selectedFile && (
                                <img className={styles['upload_img']} src={selectedFile} alt="Imagem do upload" />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles['details']}>
                    <label htmlFor="detalhes">Detalhes do Item:</label>
                    <textarea className={styles['itemDetails']} id="detalhes" name="detalhes" rows="4" cols="50" required></textarea>
                </div>

                <div className={styles['btn-acao']}>
                    <button className={styles['btn-submit']} type="submit">
                        Cadastrar <BiPlus />
                    </button>
                    <button className={styles['btn-reset']} type="reset">
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}
