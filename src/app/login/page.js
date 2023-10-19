"use client";
import React from 'react';
import LoginForm from 'src/app/components/formLogin.js';

function Login() {
  return (
    <div className="body-loginCadastro">
      <div className="main-log">
        <LoginForm />
        <div className="link-page">
        </div>
      </div>
    </div>
  );
}

export default Login;
