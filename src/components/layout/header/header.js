import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      id="inicio"
      className="text-white py-4 top-0 left-0 w-full z-50 shadow-md"
      style={{
        background: "linear-gradient(to bottom, #27C0EF 0%, #0DB0E2 66%, #00A8DB 100%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <button onClick={() => scrollToSection("inicio")}>
            <Image
              src="/EAGLES_LOGOTIPO6.png"
              alt="EAGLE'S SOFTWARE"
              width={200}
              height={100}
              className="cursor-pointer"
            />
          </button>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg">
            <li>
              <button onClick={() => scrollToSection("inicio")} className="hover:underline">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("features")} className="hover:underline">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("precos")} className="hover:underline">
                Preços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("team")} className="hover:underline">
                Equipe
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link href="/login">
            <button className="bg-dark-blue text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-white hover:text-blue-500 transition">
              Login
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-center py-4 transition-all duration-300 ${
          menuOpen ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"
        }`}
        style={{
          zIndex: 99,
          transition: "all 0.3s ease",
        }}
      >
        <button onClick={() => scrollToSection("inicio")} className="py-2 px-6 w-full text-center hover:bg-blue-600 transition-colors rounded-lg mb-2">
          Início
        </button>
        <button onClick={() => scrollToSection("features")} className="py-2 px-6 w-full text-center hover:bg-blue-600 transition-colors rounded-lg mb-2">
          Features
        </button>
        <button onClick={() => scrollToSection("precos")} className="py-2 px-6 w-full text-center hover:bg-blue-600 transition-colors rounded-lg mb-2">
          Preços
        </button>
        <button onClick={() => scrollToSection("team")} className="py-2 px-6 w-full text-center hover:bg-blue-600 transition-colors rounded-lg mb-2">
          Equipe
        </button>
        <Link
          href="/login"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg mt-2 hover:bg-blue-100 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>
    </header>
  );
}
