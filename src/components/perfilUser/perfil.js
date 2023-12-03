import React, { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import styles from './perfil.module.css';

export default function Perfil() {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('Nome do Administrador');
    const [email, setEmail] = useState('admin@example.com');
    const [profileImage, setProfileImage] = useState('/perfil_imagem.png');

    const imageUploadRef = useRef(null);

    const changeProfilePicture = () => {
        if (imageUploadRef.current) {
            imageUploadRef.current.click();
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
    };

    return (
        <div className={styles.containerPerfil}>
            <div className={styles.profile}>
                <div className={styles['edit-profile']} onClick={changeProfilePicture}>
                </div>
                <div className={styles['profile-picture']}>
                    <img
                        className={styles['profile-img']}
                        src={profileImage}
                        alt="Foto de perfil"
                        onClick={changeProfilePicture}
                    />
                    {editing && (
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            ref={imageUploadRef}
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    )}
                </div>
                <div className={styles['profile-info']}>
                    <label className={styles['profile-text']} htmlFor="nome">
                        Nome do Administrador
                    </label>
                    {editing ? (
                        <input
                            className={styles['profile-user']}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    ) : (
                        <span className={styles['profile-user']}>{name}</span>
                    )}
                    <label className={styles['profile-text']} htmlFor="email">
                        E-mail do Administrador
                    </label>
                    {editing ? (
                        <input
                            className={styles['profile-user']}
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    ) : (
                        <span className={styles['profile-user']}>{email}</span>
                    )}
                </div>
                {editing && (
                    <button className={`${styles['buttonPerfil']} ${styles['save-button']}`} onClick={handleSaveClick}>
                        Salvar
                    </button>
                )}
                {!editing && (
                    <button className={`${styles['buttonPerfil']} ${styles['edit-button']}`} onClick={handleEditClick}>
                        Editar
                    </button>
                )}
            </div>
        </div>
    );
}
