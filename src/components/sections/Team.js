import Image from "next/image";

const teamMembers = [
  {
    name: "João Victor Pereira Borges",
    role: "Team Leader & Desenvolvedor Back-End",
    image: "/placeholder-avatar.png",
  },
  {
    name: "Renan Lucas de Lime Oliveira",
    role: "Product Owner & Desenvolvedor Front-End",
    image: "/placeholder-avatar.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700">Conheça o time por trás desta solução</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={128} 
                  height={128} 
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
