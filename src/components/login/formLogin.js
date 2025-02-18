import React, { useState } from "react";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useRouter } from "next/router";
import Link from "next/link";
import ErrorModal from "../modals/modalError";
import SuccessModal from "../modals/modalSucess";
import { BeatLoader } from "react-spinners";
import { fazerLogin } from "../../services/userService";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();

  const handleFormEdit = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await fazerLogin(formData);
      if (result.success) {
        localStorage.setItem("token", result.data.token);
        router.push("/home");
        setShowSuccessModal(true);
      } else {
        setError(result.error);
        setShowErrorModal(true);
      }
    } catch {
      setError("Ocorreu um erro ao processar o login. Tente novamente.");
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl"
        onSubmit={handleFormSubmit}
      >
        <div className="text-center mb-6">
          <img src="/LOGO-INSTA.svg" alt="Eagles Software" className="w-24 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">Eagles Software</h2>
        </div>

        <h1 className="text-xl font-semibold text-center mb-4">Login</h1>

        <label className="block text-gray-700 font-medium">Email</label>
        <div className="flex items-center border border-gray-400 rounded-lg p-2 mb-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <BiEnvelope className="text-gray-600" />
          <input
            type="email"
            className="w-full focus:outline-none px-2"
            placeholder="example@gmail.com"
            onChange={(e) => handleFormEdit(e, "email")}
            required
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

        <div className="text-right mt-2">
          <Link href="/recuperarSenha" className="text-blue-600 text-sm">
            Esqueceu a senha?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          disabled={isLoading}
        >
          {isLoading ? <BeatLoader size={10} color={"#fff"} /> : "Entrar"}
        </button>

        <p className="text-center mt-4 text-gray-600">
          Não tem uma conta?
          <Link href="/cadastro" className="text-blue-600 ml-1">
            Cadastre-se
          </Link>
        </p>
      </form>

      {showSuccessModal && (
        <SuccessModal message="Login bem-sucedido." onClose={() => setShowSuccessModal(false)} />
      )}

      {showErrorModal && (
        <ErrorModal errorMessage={error} onClose={() => setShowErrorModal(false)} />
      )}
    </div>
  );
};

export default LoginForm;