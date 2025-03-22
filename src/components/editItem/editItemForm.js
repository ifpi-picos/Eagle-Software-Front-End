import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const EditItemForm = ({
  editedItem,
  setEditedItem,
  handleSave,
  handleEditCancel,
  handleFileChange,
  localImage,
  imageLoaded,
}) => {
  const [loadingSave, setLoadingSave] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white ml-12">
      <div className="w-full mx-auto p-10 rounded-lg bg-gray-200 shadow-lg">
        <form className="space-y-6" id="itemForm" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl font-semibold text-center">Editar Item</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="achadoPor">
                  Achado Por:
                </label>
                <input
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="achadoPor"
                  value={editedItem.achadoPor}
                  onChange={(e) => setEditedItem({ ...editedItem, achadoPor: e.target.value })}
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="data">
                  Data:
                </label>
                <input
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  id="data"
                  value={editedItem.data}
                  onChange={(e) => setEditedItem({ ...editedItem, data: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="local">
                  Local:
                </label>
                <input
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="local"
                  value={editedItem.local}
                  onChange={(e) => setEditedItem({ ...editedItem, local: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="armazenado">
                  Armazenado:
                </label>
                <input
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="armazenado"
                  value={editedItem.armazenado}
                  onChange={(e) => setEditedItem({ ...editedItem, armazenado: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="detalhes">
                  Descrição:
                </label>
                <textarea
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="detalhes"
                  name="detalhes"
                  value={editedItem.detalhes}
                  onChange={(e) => setEditedItem({ ...editedItem, detalhes: e.target.value })}
                  rows="4"
                  maxLength={100}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-md overflow-hidden">
                {localImage ? (
                  <img src={localImage} alt="Imagem do item" className="object-cover w-full h-full" />
                ) : imageLoaded ? (
                  <img src={editedItem.imagem_URL} alt="Imagem do item" className="object-cover w-full h-full" />
                ) : (
                  <img src="/camera.jpg" alt="Imagem padrão" className="object-cover w-full h-full" />
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="imagem" className="cursor-pointer text-blue-600">
                  <span className="block py-2 px-4 bg-blue-100 rounded-md text-sm font-medium hover:bg-blue-200">
                    Selecione o arquivo
                    <input
                      type="file"
                      id="imagem"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="w-32 py-2 bg-blue-500 text-white mr-4 rounded-md cursor-pointer hover:bg-blue-600 disabled:bg-blue-300 focus:outline-none"
              type="button"
              onClick={handleSave}
              disabled={loadingSave}
            >
              {loadingSave ? (
                <BeatLoader size={10} color={'#fff'} loading={loadingSave} />
              ) : (
                'Salvar'
              )}
            </button>

            <button
              className="w-32 py-2 bg-gray-300 text-black rounded-md cursor-pointer hover:bg-gray-400 focus:outline-none"
              type="reset"
              onClick={handleEditCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemForm;
