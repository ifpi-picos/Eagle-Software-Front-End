"use client";
import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiShow } from 'react-icons/bi';
import '../components/css/formLoginCadastro.css';

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
          <img src="/logo.png" alt="Logo do Eagles Software" className="logo" />
          <h1 className="site-name">Eagles Software</h1>
        </div>

        <h1 className="h1-login-cadastro">Login</h1>

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

        <div className="forgot-password">
          <a className= "forgot-password-link" href="#">Esqueceu a senha?</a>
        </div>

        <input type="submit" value="Entrar" name="login" />
        <div className="link-page">
          <span className="text-login-cadastro">
            Ainda não tem uma conta? <a className="link-cadastro" href="/cadastro">Cadastre-se</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
