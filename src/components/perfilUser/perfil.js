import React, { useState, useEffect } from 'react';
import styles from './perfil.module.css';

const Perfil = () => {
    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        usuario_IMG: '',
    });

    const [editing, setEditing] = useState(false);
    const [newImage, setNewImage] = useState(null);
    const [tempUserData, setTempUserData] = useState({});
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const response = await fetch('https://api-eagles-software.onrender.com/usuarios/perfil', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        setUserData(userData);
                        setTempUserData(userData);
                    }
                }
            } catch (error) {
                console.error('Erro ao obter perfil do usuário:', error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelClick = () => {
        setTempUserData(userData);
        setEditing(false);
    };

    const handleSaveClick = async () => {
        try {
            const token = localStorage.getItem('token');

            if (editing) {
                const formData = new FormData();
                formData.append('nome', tempUserData.nome);
                formData.append('email', tempUserData.email);
                if (newImage) {
                    formData.append('usuario_IMG', newImage);
                }

                const response = await fetch('https://api-eagles-software.onrender.com/usuarios/atualizar-perfil', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    setUserData(tempUserData);
                    setEditing(false);
                } else {
                    console.error('Erro ao salvar alterações do perfil');
                }
            } else {
                setEditing(true);
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setTempUserData((prevTempUserData) => ({ ...prevTempUserData, usuario_IMG: URL.createObjectURL(file) }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (field, value) => {
        setTempUserData((prevTempUserData) => ({ ...prevTempUserData, [field]: value }));
    };

    return (
        <div className={styles.containerPerfil}>
            <div className={styles.profile}>
                <div className={styles['profile-picture']}>
                {editing ? (
                        <>
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <img
                                className={styles['profile-img-preview']}
                                src={previewImage || '/perfil_imagem.png'}
                                alt="Prévia da foto de perfil"
                            />
                        </>
                    ) : (
                        <img
                            className={styles['profile-img']}
                            src={userData.usuario_IMG || '/perfil_imagem.png'}
                            alt="Foto de perfil"
                        />
                    )}
                </div>

                <div className={styles['profile-info']}>
                    <label className={styles['profile-text']} htmlFor="nome">
                        Nome do Usuário
                    </label>
                    {editing ? (
                        <input
                            className={styles['profile-user']}
                            type="text"
                            value={tempUserData.nome}
                            onChange={(e) => handleInputChange('nome', e.target.value)}
                        />
                    ) : (
                        <span className={styles['profile-user']}>{userData.nome}</span>
                    )}

                    <label className={styles['profile-text']} htmlFor="email">
                        Email do Usuário
                    </label>
                    {editing ? (
                        <input
                            className={styles['profile-user']}
                            type="text"
                            value={tempUserData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                    ) : (
                        <span className={styles['profile-user']}>{userData.email}</span>
                    )}
                </div>

                <div className={styles['button-container']}>
                    {editing ? (
                        <>
                             <button className={`${styles['buttonPerfil']} ${styles['save-button']}`} onClick={handleSaveClick}>
                                Salvar
                            </button>
                            <button className={`${styles['buttonPerfil']} ${styles['cancel-button']}`} onClick={handleCancelClick}>
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <button className={`${styles['buttonPerfil']} ${styles['edit-button']}`} onClick={handleEditClick}>
                            Editar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Perfil;
