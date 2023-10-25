import React, { useState } from 'react'
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi'
import styles from '../login/formLoginCadastro.module.css'
import Link from 'next/link'

export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChangeForm = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!form.name) return setError('O nome é obrigatório');
    if (!form.email) return setError('O e-mail é obrigatório');
    if (!form.password) return setError('A senha é obrigatória');

    setError('');
    try {
        const response = await fetch('/api/user/cadastro', { 
          method: 'POST',
          body: JSON.stringify(form)
        })
  
        const json = await response.json()
  
        if (response.status !== 200) throw new Error(json)
        setCookie('authorization', json)
        router.push('/')
      } catch (err) {
        setError(err.message)
      }
  };

  return (
    <form className={styles['form-login-cadastro']}>
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
            value={form['name']}
            onChange={(event) => handleChangeForm(event, 'name')}
            placeholder="Nome"
            required
          />
        </div>

        <h2 className={styles['nomeIcon']}>Email</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiEnvelope /></span>
          <input className={styles['input-text']}
            type="email"
            id="email"
            name="email"
            value={form['email']}
            onChange={(event) => handleChangeForm(event, 'email')}
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
            value={form['password']}
            onChange={(event) => handleChangeForm(event, 'password')}
            placeholder="*******"
            required
            minLength="8"
          />
          <BiShow
            className={styles['show-password']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <input 
          className={styles['button-style']} 
          type="submit" 
          value="Cadastrar" 
          name="cadastro" 
          onClick={handleForm}
        />

        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Já tem uma conta? <Link className={styles['link-login']} href="/login">Faça login</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
