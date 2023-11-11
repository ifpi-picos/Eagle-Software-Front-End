// ResetPassword.js
import React from 'react';

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-blue">
      <div className="bg-white p-16 rounded-md shadow-md w-full max-w-2xl">
        <h2 className="text-3xl mb-4 text-center text-gray-800 relative">
          Recuperar Senha
          <div className="h-0.5 w-full bg-gray-300 mx-auto mt-2"></div>
        </h2>

        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-md transition-border border-gray-300 focus:border-indigo-500 focus:outline-none"
              placeholder="Seu e-mail"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <button
            type="submit"
            className="w-1/2 md:w-1/4 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 mx-auto block"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
