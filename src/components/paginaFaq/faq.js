import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl p-8 bg-gray-200 ml-16 shadow-md rounded-md text-center lg:flex lg:items-center lg:justify-start">
        <div className="lg:w-1/3 lg:mr-6 mb-6 lg:mb-0">
          <img
            src="/FAQ.avif"
            alt="Imagem de Perguntas Frequentes"
            className="w-full h-auto max-h-64 object-cover rounded-md"
          />
        </div>
        <div className="lg:w-2/3 text-left">
          <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes</h1>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-semibold">
                  {index === 0 && 'Como funciona o sistema de achados e perdidos do IFPI - Campus Picos?'}
                  {index === 1 && 'O que devo fazer se encontrar um item perdido?'}
                  {index === 2 && 'Como posso recuperar um item perdido?'}
                  {index === 3 && 'Posso relatar uma perda ou encontrar um item perdido online?'}
                </h3>
                <div className="transform transition-transform duration-300 ease-in-out">
                  <AiOutlineArrowDown
                    className={`text-gray-600 ${expandedIndex === index ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
              <div className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out ${expandedIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                <p className="text-gray-700">
                  {index === 0 &&
                    'O sistema de achados e perdidos do IFPI - Campus Picos é uma ferramenta tecnológica online oferecida para ajudar os membros da comunidade acadêmica a recuperar itens perdidos ou devolver itens encontrados nas dependências do campus. Os itens encontrados são armazenados em um local seguro e podem ser recuperados pelos proprietários mediante ida ao setor do controle de disciplina.'}
                  {index === 1 &&
                    'Se você encontrar um item perdido nas dependências do IFPI - Campus Picos, leve-o imediatamente ao controle de disciplina. Os funcionários irão registrar o item e tomar as providências necessárias para devolvê-lo ao proprietário.'}
                  {index === 2 &&
                    'Para recuperar um item perdido, entre em contato com o controle de disciplina do IFPI - Campus Picos. Eles irão fornecer informações sobre o item encontrado e orientar sobre o processo de recuperação. Geralmente, é necessário comprovar a propriedade do item antes de recuperá-lo.'}
                  {index === 3 &&
                    'Atualmente, o sistema de achados e perdidos do IFPI - Campus Picos requer que você vá pessoalmente ao controle de disciplina para entregar ou resgatar o item. O sistema até o momento apenas facilita que o estudante encontre seu item sem precisar ir até o local de armazenamento.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
