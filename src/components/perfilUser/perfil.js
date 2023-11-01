import React, { useRef } from 'react'
import { FaEdit } from 'react-icons/fa'
import styles from './perfil.module.css'

export default function Perfil() {
    const imageUploadRef = useRef(null);

    const changeProfilePicture = () => {
        if (imageUploadRef.current) {
            imageUploadRef.current.click();
        }
    };

    return (
        <div className={styles.containerPerfil}>
            <div className={styles.profile}>
                <div className={styles['edit-profile']} onClick={changeProfilePicture}>
                    <FaEdit size={24} />
                </div>
                <div className={styles['profile-picture']}>
                    <img className={styles['profile-img']} src='/perfil_imagem.png' alt="Foto de perfil" onClick={changeProfilePicture} />
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        ref={imageUploadRef}
                        style={{ display: 'none' }}
                    />
                </div>
                <div className={styles['profile-info']}>
                    <label className={styles['profile-text']} htmlFor="nome">Nome do Administrador</label>
                    <input className={styles['profile-user']} type="text" id="name" />
                    <label className={styles['profile-text']} htmlFor="email">E-mail do Administrador</label>
                    <input className={styles['profile-user']} type="text" id="email" />
                </div>
            </div>
        </div>
    );
};

