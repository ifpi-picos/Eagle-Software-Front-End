import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-mar text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src="/EAGLES_LOGOTIPO6.svg" alt="EAGLES Software" width={150} height={100} />
                </div>

                <div className="flex flex-col items-center text-base">
                    <div className="flex items-center space-x-2 mt-4">
                        <Mail className="w-5 h-5" />
                        <p>eaglessoftware.suporte@gmail.com</p>
                    </div>
                    <div className="border-t border-white my-4">
                        <p className="text-center text-base" style={{ fontSize: '1rem', lineHeight: '2rem' }}>
                            &copy; 2025 Eagles Software. Todos os direitos reservados.
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="relative group">
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Apoio
                        </span>
                        <Image src="/Guaribas.svg" alt="Guaribas Valley" width={100} height={40} />
                    </div>

                    <div className="relative group">
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Apoio
                        </span>
                        <Image src="/mambee.svg" alt="Mambee" width={100} height={40} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
