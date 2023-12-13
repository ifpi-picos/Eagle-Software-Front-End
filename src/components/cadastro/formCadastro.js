import React, { useState } from 'react'
import { BiUser, BiEnvelope, BiLock } from 'react-icons/bi'
import { ImEye, ImEyeBlocked } from "react-icons/im";
import styles from '../login/formLoginCadastro.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SuccessModal from '../modals/modalSucess';
import ErrorModal from '../modals/modalError';
import { cadastrarUsuario } from '../../services/userService';
import { BeatLoader } from 'react-spinners';

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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFormEdit = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 

    setIsLoading(true);

    try {
      const result = await cadastrarUsuario(formData);

      if (result.success) {
        setShowSuccessModal(true);
      } else {
        setErrorMessage(result.error);
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage('Erro interno do servidor');
      setShowErrorModal(true);
    }finally {
      setIsLoading(false);
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

        <button type="submit" className={styles['button-style']} disabled={isLoading}>
          {isLoading ? (
            <BeatLoader size={10} color={'#fff'} loading={isLoading} />
          ) : (
            'Cadastrar'
          )}
        </button>

        {/* <button type="submit" className={styles['button-style']} disabled={isLoading}>
          {isLoading ? (
            <div className={styles['spinner']}>
              <BeatLoader size={10} color={'#fff'} loading={isLoading} />
            </div>
          ) : (
            'Cadastrar'
          )}
        </button> */}

        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Já tem uma conta? <Link className={styles['link-login']} href="/login">Faça login</Link>
          </span>
        </div>

        {showSuccessModal && (
          <SuccessModal message="Usuário cadastrado com sucesso!" onClose={closeModal} />
        )}

        {showErrorModal && (
          <ErrorModal errorMessage={errorMessage} onClose={closeModal} />
        )}

      </div>
    </form>
  );
}