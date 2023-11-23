// pages/itens.js
import React, { useEffect, useState } from 'react';

const Itens = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/itens')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Erro ao obter itens:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Lista de Itens</h1>
      <div className="grid gap-4 grid-cols-2">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-300 p-4 rounded-2xl">
            <div className=''>

              <img src={item.imagemUrl} alt={`Imagem do Item ${item.id}`} className="mb-2 rounded-full border-2 flex justify-center w-28 h-28  first-line:" />

              <div className='flex'>
                <p className="font-bold">Detalhes:</p>
                <p className='ml-2'>{item.detalhes}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Data:</p>
                <p className='ml-2'>{item.data}</p>
              </div>

              <div className='flex'>
                <p className="font-bold">Local:</p>
                <p className='ml-2'>{item.local}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Itens;
