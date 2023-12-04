import React, { useState } from 'react';
import { BiEnvelope, BiLock } from 'react-icons/bi'; 
import styles from './formLoginCadastro.module.css';
import Link from 'next/link';
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const router = useRouter();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const showWelcome = () => {
    setShowWelcomeModal(true);
    setTimeout(() => {
      setShowWelcomeModal(false);
    }, 5000);
  };

  const handleFormEdit = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos.');
      setShowErrorModal(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://api-eagles-software.onrender.com/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
    
        localStorage.setItem('token', data.token);
    
        if (data.token) {
          fetchUserProfile();
          router.push('/home');
          showWelcome();
        } else {
          setError('Falha ao obter token de autenticação.');
          setShowErrorModal(true);
        }
    
        return;
      } else {
        const errorData = await response.json();
        console.error('Erro ao fazer login:', errorData);
        setError('Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      setError('Ocorreu um erro ao processar o login. Tente novamente mais tarde.');
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para buscar informações do perfil do usuário
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
          console.log('Perfil do usuário:', userData);
        }
      }
    } catch (error) {
      console.error('Erro ao obter perfil do usuário:', error);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };



  return (
    <form className={styles['form-login-cadastro']} onSubmit={handleFormSubmit}>
      <div className={styles.center}>
        <div className={styles.header}>
          <img src="/logo.png" alt="Logo do Eagles Software" className={styles.logo} />
          <h1 className={styles['site-name']}>Eagles Software</h1>
        </div>

        <h1 className={styles['h1-login-cadastro']}>Login</h1>

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

        <div className={styles['forgot-password']}>
          <a className={styles['forgot-password-link']} href="/recuperarSenha">Esqueceu a senha?</a>
        </div>

        <button type="submit" className={styles['button-style']} disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>

        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Não tem uma conta? <Link className={styles['link-cadastro']} href="/cadastro">Cadastre-se</Link>
          </span>
        </div>
      </div>
      {showErrorModal && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContent}>
            <div className={styles.errorIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <p>{error}</p>
            <button onClick={closeErrorModal}>Fechar</button>
          </div>
        </div>
      )}

      {showWelcomeModal && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContent}>
            <p>Bem-vindo! Você fez login com sucesso.</p>
            <button onClick={() => setShowWelcomeModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
