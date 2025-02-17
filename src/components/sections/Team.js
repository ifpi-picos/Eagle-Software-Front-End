import Image from "next/image";

const teamMembers = [
  {
    name: "João Victor Pereira Borges",
    role: "Team Leader & Desenvolvedor Back-End",
    image: "/joaoVictor.jpeg",
  },
  {
    name: "Renan Lucas de Lime Oliveira",
    role: "Product Owner & Desenvolvedor Front-End",
    image: "/Renan.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-white-500">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Conheça o time por trás desta solução
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
              <div className="mt-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}