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
      className="absolute top-0 left-0 w-full z-50 shadow-md bg-gradient-to-b from-[#27C0EF] via-[#0DB0E2] to-[#00A8DB] text-white"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <button onClick={() => scrollToSection("inicio")}>
          <Image
            src="/EAGLES_LOGOTIPO6.svg"
            alt="Eagles Software"
            width={200}
            height={100}
            className="cursor-pointer"
          />
        </button>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg">
            <li>
              <button onClick={() => scrollToSection("inicio")} className="hover:underline">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("features")} className="hover:underline">
                Benefícios
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
            <button className="bg-white text-blue-customize px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition">
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
        className={`absolute top-16 right-4 w-[92%] bg-[#005F8C] text-white flex flex-col items-center py-6 rounded-lg shadow-lg transition-all duration-300 ${menuOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"
          }`}
        style={{ zIndex: 99 }}
      >
        <button onClick={() => scrollToSection("inicio")} className="py-4 text-lg font-semibold w-full text-center hover:bg-[#0080B3] rounded">
          Início
        </button>
        <button onClick={() => scrollToSection("features")} className="py-4 text-lg font-semibold w-full text-center hover:bg-[#0080B3] rounded">
          Benefícios
        </button>
        <button onClick={() => scrollToSection("team")} className="py-4 text-lg font-semibold w-full text-center hover:bg-[#0080B3] rounded">
          Equipe
        </button>
        <Link href="/login" className="w-40">
          <button
            className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
