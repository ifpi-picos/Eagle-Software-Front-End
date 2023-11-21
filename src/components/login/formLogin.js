import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiShow } from 'react-icons/bi';
import styles from './formLoginCadastro.module.css';
import Link from 'next/link';
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
      const response = await fetch('http://localhost:4000/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);

        // Armazenar o token no localStorage
        localStorage.setItem('token', data.token);

        // Redirecionar para a página de home
        router.push('/home');
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
          <BiShow
            className={styles['show-password']}
            onClick={() => setShowPassword(!showPassword)}
          />
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
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{error}</p>
            <button onClick={closeErrorModal}>Fechar</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
