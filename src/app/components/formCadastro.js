import React, { useState } from 'react';
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi';
import "../styles/css/formLoginCadastro.css";

function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChangeForm = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  const handleForm = async (e) => {
    e.preventDefault()

    if (!form.name) return setError('O nome é obrigatório')
    if (!form.email) return setError('O e-mail é obrigatório')
    if (!form.password) return setError('a senha é obrigatório')

    setError('')
    try {
      const response = await fetch("../src/app/api/user/cadastro", {
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
  }

  return (
    <form className="form-login-cadastro">
      <div className="center">
        <div className="header">
          <img src="/logo.png" alt="Logo do Eagles Software" className="logo" />
          <h1 className="site-name">Eagles Software</h1>
        </div>

        <h1 className="h1-login-cadastro">Cadastre-se</h1>

        <h2>Usuário</h2>

        <div className="input-wrapper">
          <span className="icon-wrapper"><BiUser /></span>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form['name']} onChange={(event) => handleChangeForm(event, 'name')}
            placeholder="Nome"
            required
          />
        </div>

        <h2>Email</h2>

        <div className="input-wrapper">
          <span className="icon-wrapper"><BiEnvelope /></span>
          <input
            type="email"
            id="email"
            name="email"
            value={form['email']} onChange={(event) => handleChangeForm(event, 'email')}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <h2>Senha</h2>

        <div className="input-wrapper">
          <span className="icon-wrapper"><BiLock /></span>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={form['password']} onChange={(event) => handleChangeForm(event, 'password')}
            placeholder="*******"
            required
            minLength="8"
          />
          <BiShow
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          type="button"
          className="button-style"
          onClick={handleForm}
        >
          Cadastrar
        </button>

        <div className="link-page">
          <span className="text-login-cadastro">
            Já tem uma conta? <a className="link-login" href="/login">Faça login</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default CadastroForm;
