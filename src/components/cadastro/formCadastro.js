import React, { useState } from 'react'
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi'
import styles from '../login/formLoginCadastro.module.css'
import Link from 'next/link'
import {setCookie} from 'cookies-next'
import {useRouter} from 'next/router'

export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('')
  const router = useRouter() 

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    });
  };

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch ('/api/user/cadastro',{
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const json = await response.json()
      console.log(response.status)
      console.log(json)
      if(response.status !== 201) throw new Error(json)

      setCookie('authorization', json)
      router.push('/home')

    }catch(err){
      setError(err.message)
    }
  }

  return (
    <form className={styles['form-login-cadastro']} onSubmit={handleForm}>
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
            onChange={(e) => handleFormEdit(e, 'name')}
            placeholder="Nome"
            required value = {formData.name}
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
            required value = {formData.email}
          />
        </div>

        <h2 className={styles['nomeIcon']}>Senha</h2>

        <div className={styles['input-wrapper']}>
          <span className={styles['icon-wrapper']}><BiLock /></span>
          <input className={styles['input-text']}
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={(e) => handleFormEdit(e, 'password')}
            placeholder="*******"
            required value = {formData.password}
            minLength="8"
          />
          <BiShow
            className={styles['show-password']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button className={styles['button-style']}>
          Cadastrar
        </button>

        {error && <p className={styles['error']}>{error}</p>}

        <div className={styles['link-page']}>
          <span className={styles['text-login-cadastro']}>
            Já tem uma conta? <Link className={styles['link-login']} href="/login">Faça login</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
