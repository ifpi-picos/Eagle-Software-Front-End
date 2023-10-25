import React, { useState } from 'react'
import { BiEnvelope, BiLock, BiShow } from 'react-icons/bi'
import styles from './formLoginCadastro.module.css'
import Link from 'next/link'  

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className={styles['form-login-cadastro']} onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <h2 className={styles['nomeIcon']}>Senha</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiLock /></span>
          <input className={styles['input-text']}
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            required
            minLength="8"
          />
          <BiShow
            className={styles['show-password']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <div className={styles['forgot-password']}>
          <a className={styles['forgot-password-link']} href="#">Esqueceu a senha?</a>
        </div>

        <input 
          className={styles['button-style']} 
          type="submit" 
          value="Entrar" 
          name="login" 
        />
        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Ainda não tem uma conta? <Link className={styles['link-cadastro']} href="/cadastro">Cadastre-se</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
