import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      id='inicio'
      className="text-white py-4"
      style={{
        background: "linear-gradient(to bottom, #27C0EF 0%, #0DB0E2 66%, #00A8DB 100%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">

        <div className="flex items-center">
          <Link href="#inicio">
            <Image src="/EAGLES_LOGOTIPO6.png" alt="EAGLE'S SOFTWARE" width={200} height={100} className="cursor-pointer"/>
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="#inicio" className="hover:underline hover:underline-offset-4 hover:decoration-2">
                Início
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:underline hover:underline-offset-4 hover:decoration-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#precos" className="hover:underline hover:underline-offset-4 hover:decoration-2">
                Preços
              </Link>
            </li>
            <li>
              <Link href="#team" className="hover:underline hover:underline-offset-4 hover:decoration-2">
                Equipe
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/login">
          <button className="bg-dark-blue text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-white hover:text-blue-500 transition">
            Login
          </button>
        </Link>

      </div>
    </header>
  );
}
