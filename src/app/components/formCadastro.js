"use client";
import React, { useState } from 'react';
import '../components/css/formLoginCadastro.css';
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi';
import { validationSchema } from './validation';


function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ nome, email, password }, { abortEarly: false });
      setErrors({});

      const response = await axios.post('', { nome, email, password });
        // Retorna sucesso na validação
      console.log('Usuário cadastrado com sucesso:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Retorna um erro de validação
        setErrors(error.response.data);
      } else {
        console.error('Erro ao cadastrar o usuário:', error);
      }
    }
  };

  return (
    <form className="form-login-cadastro" onSubmit={handleSubmit}>
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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            required
            minLength="8"
          />
          <BiShow
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <input type="submit" value="Cadastrar" name="cadastrar" />
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
