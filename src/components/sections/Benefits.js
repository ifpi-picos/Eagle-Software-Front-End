import { FaLaptop, FaBolt, FaUsers } from "react-icons/fa";

export default function Benefits() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center">
            <div className="bg-blue-light rounded-full p-6 mb-4">
              <FaLaptop className="text-white text-6xl" />
            </div>
            <h3 className="text-blue-700 text-xl font-bold">Compatível com qualquer dispositivo</h3>
            <p className="text-gray-600 mt-2">Acesse nossa plataforma de qualquer lugar, a qualquer momento.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-light rounded-full p-6 mb-4">
              <FaBolt className="text-white text-6xl" />
            </div>
            <h3 className="text-blue-700 text-xl font-bold">Intuitivo, simples e eficiente</h3>
            <p className="text-gray-600 mt-2">Uma interface amigável que facilita sua experiência.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-light rounded-full p-6 mb-4">
              <FaUsers className="text-white text-6xl" />
            </div>
            <h3 className="text-blue-700 text-xl font-bold">Treinamento para sua equipe</h3>
            <p className="text-gray-600 mt-2">Oferecemos suporte completo para o seu time.</p>
          </div>

        </div>
      </div>
    </section>
  );
}