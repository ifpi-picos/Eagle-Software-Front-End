import React, { useState } from 'react'
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi'
import { ImEye, ImEyeBlocked } from "react-icons/im";
import styles from '../login/formLoginCadastro.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleFormEdit = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api-eagles-software.onrender.com/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuário cadastrado com sucesso:', data);
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar usuário:', errorData);
        setErrorMessage(errorData.error || 'Erro desconhecido');
        setShowErrorModal(true);
      }

    } catch (error) {
      console.error('Erro inesperado:', error);
      setErrorMessage('Erro interno do servidor');
      setShowErrorModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    router.push('/login');
  };

  return (
    <form className={styles['form-login-cadastro']} onSubmit={handleFormSubmit}>
      <div className={styles.center}>
        <div className={styles.header}>
          <img src="/logo.png" alt="Logo do Eagles Software" className={styles.logo} />
          <h1 className={styles['site-name']}>Eagles Software</h1>
        </div>

        <h1 className={styles['h1-login-cadastro']}>Cadastre-se</h1>

        <h2 className={styles['nomeIcon']}>Usuário</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiUser /></span>
          <input className={styles['input-text']}
            type="text"
            id="nome"
            name="nome"
            onChange={(e) => handleFormEdit(e, 'nome')}
            placeholder="Nome"
            required value={formData.nome}
          />
        </div>

        <h2 className={styles['nomeIcon']}>Email</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiEnvelope /></span>
          <input className={styles['input-text']}
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleFormEdit(e, 'email')}
            placeholder="example@gmail.com"
            required value={formData.email}
          />
        </div>

        <h2 className={styles['nomeIcon']}>Senha</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiLock /></span>
          <input className={styles['input-text']}
            type={showPassword ? 'text' : 'password'}
            id="senha"
            name="senha"
            onChange={(e) => handleFormEdit(e, 'senha')}
            placeholder="*******"
            required value={formData.senha}
            minLength="8"
          />
          {showPassword ? (
            <ImEye
              className={styles['show-password']}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <ImEyeBlocked
              className={styles['show-password']}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button type="submit" className={styles['button-style']}>
          Cadastrar
        </button>

        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Já tem uma conta? <Link className={styles['link-login']} href="/login">Faça login</Link>
          </span>
        </div>

        {showSuccessModal && (
          <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
              <div className={styles.successIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p>Usuário cadastrado com sucesso!</p>
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

        {showModal && (
          <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
              <p>Usuário cadastrado com sucesso!</p>
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}