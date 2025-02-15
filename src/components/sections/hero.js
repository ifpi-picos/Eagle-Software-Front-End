import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Vector.png')",
        backgroundPosition: "bottom",
        minHeight: "80vh",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Melhorar a experiência de encontrar objetos perdidos nunca foi tão fácil
          </h1>
          <p className="mt-4 text-lg">
            Com o <span className="font-bold">EAGLE'S SOFTWARE</span>, você encontra o que precisa rapidamente.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link href="/contratar">
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
                Contratar Agora
              </button>
            </Link>
            <Link href="/demo">
              <button className="border-2 border-white px-6 py-3 flex items-center rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition">
                Agendar Demonstração
                <MdArrowForward className="ml-2 text-xl" />
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image src="/Illustration.png" alt="Ilustração Hero" width={400} height={400} />
        </div>

      </div>
    </section>
  );
}