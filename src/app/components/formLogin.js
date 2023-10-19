"use client";
import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiShow } from 'react-icons/bi';
import '../components/css/formLoginCadastro.css';
import Image from 'next/image';



function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="form-login-cadastro" onSubmit={handleSubmit}>
      <div className="center">
        <div className="header">
          <img src="src/app/components/imagens/logo.png" alt="Logo do Eagles Software" className="logo" />
          <h1 className="site-name">Eagles Software</h1>
        </div>

        <h1 className="h1-login">Login</h1>

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

        <input type="submit" value="Entrar" name="login" />
        <div className="link-page">
          <span>
            Ainda não tem uma conta? <a className="link-cadastro" href="">Cadastre-se</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
