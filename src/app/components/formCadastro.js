"use client";
import React, { useState } from 'react';
import '../components/css/formLoginCadastro.css';
import { BiUser, BiEnvelope, BiLock, BiShow } from 'react-icons/bi';

function CadastroForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, email, password });
  };

  return (
    <form className="form-login-cadastro" onSubmit={handleSubmit}>
      <div className="center">
        <div className="header">
          <img src="caminho/para/sua/imagem.jpg" alt="Logo do Eagles Software" className="logo" />
          <h1 className="site-name">Eagles Software</h1>
        </div>

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

        <div className="forgot-password">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <input type="submit" value="Cadastrar" name="cadastrar" />
        <div className="link-page">
          <span>
            Já tem uma conta? <a className="link-login" href="/login">Faça login</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default CadastroForm;
