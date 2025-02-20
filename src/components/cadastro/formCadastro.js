import React, { useState } from "react";
import { BiUser, BiEnvelope, BiLock } from "react-icons/bi";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import Link from "next/link";
import { useRouter } from "next/router";
import SuccessModal from "../modals/modalSucess";
import ErrorModal from "../modals/modalError";
import { cadastrarUsuario } from "../../services/userService";
import { BeatLoader } from "react-spinners";

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFormEdit = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await cadastrarUsuario(formData);
      if (result.success) {
        setShowSuccessModal(true);
      } else {
        setErrorMessage(result.error);
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage("Erro interno do servidor");
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl"
        onSubmit={handleFormSubmit}
      >
        <div className="text-center mb-6">
          <img src="/LOGO-INSTA.svg" alt="Eagles Software" className="w-24 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">Eagles Software</h2>
        </div>

        <h1 className="text-xl font-semibold text-center mb-4">Cadastre-se</h1>

        <label className="block text-gray-700 font-medium">Usuário</label>
        <div className="flex items-center border border-gray-400 rounded-lg p-2 mb-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <BiUser className="text-gray-600" />
          <input
            type="text"
            className="w-full focus:outline-none px-2"
            placeholder="Nome"
            onChange={(e) => handleFormEdit(e, "nome")}
            required
            value={formData.nome}
          />
        </div>

        <label className="block text-gray-700 font-medium">Email</label>
        <div className="flex items-center border border-gray-400 rounded-lg p-2 mb-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <BiEnvelope className="text-gray-600" />
          <input
            type="email"
            className="w-full focus:outline-none px-2"
            placeholder="example@gmail.com"
            onChange={(e) => handleFormEdit(e, "email")}
            required
            value={formData.email}
          />
        </div>

        <label className="block text-gray-700 font-medium">Senha</label>
        <div className="flex items-center border border-gray-400 rounded-lg p-2 relative focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <BiLock className="text-gray-600" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full focus:outline-none px-2"
            placeholder="*******"
            onChange={(e) => handleFormEdit(e, "senha")}
            required
            minLength="8"
            value={formData.senha}
          />
          {showPassword ? (
            <ImEye
              className="absolute right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <ImEyeBlocked
              className="absolute right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          disabled={isLoading}
        >
          {isLoading ? <BeatLoader size={10} color={"#fff"} /> : "Cadastrar"}
        </button>

        <p className="text-center mt-4 text-gray-600">
          Já tem uma conta?
          <Link href="/login" className="text-blue-600 ml-1">
            Faça login
          </Link>
        </p>
      </form>

      {showSuccessModal && (
        <SuccessModal message="Usuário cadastrado com sucesso!" onClose={closeModal} />
      )}

      {showErrorModal && (
        <ErrorModal errorMessage={errorMessage} onClose={() => setShowErrorModal(false)} />
      )}
    </div>
  );
}