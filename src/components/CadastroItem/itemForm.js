import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

export default function ItemForm() {
  const [formData, setFormData] = useState({
    // achadoPor: '',
    local: '',
    armazenado: '',
    data: '',
    detalhes: '',
  });

  const [localImage, setLocalImage] = useState(null);
  const [readyToUpload, setReadyToUpload] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleImageClear = () => {
    setLocalImage(null);
    setReadyToUpload(false);
    setImage(null);
    setImageLoaded(false);
  };

  const handleFormClear = () => {
    setFormData({
      // achadoPor: '',
      local: '',
      armazenado: '',
      data: '',
      detalhes: '',
    });
    handleImageClear();
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [image, setImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const cloudinaryUploadPreset = 'my-uploads';
  const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dsrnunimq/image/upload';

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const localImageUrl = URL.createObjectURL(file);
        setLocalImage(localImageUrl);
        setReadyToUpload(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', cloudinaryUploadPreset);

        const response = await fetch(cloudinaryAPI, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('Data from Cloudinary:', data); // Log para verificar a resposta do Cloudinary
        setImage(data.secure_url);
        setImageLoaded(true);
      } catch (error) {
        console.error('Erro ao enviar imagem para o Cloudinary:', error);
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const fieldsInOrder = ['data', 'local', 'armazenado', 'detalhes'];
    let firstEmptyField = null;

    for (const field of fieldsInOrder) {
      if (!formData[field]) {
        firstEmptyField = field;
        break;
      }
    }

    if (firstEmptyField) {
      setErrorMessage(`O campo "${firstEmptyField}" é obrigatório.`);
      setShowErrorModal(true);
      return;
    }

    try {
      setButtonDisabled(true);
      const response = await fetch('https://api-eagles-software.onrender.com/itens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imagem_URL: image,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Item cadastrado com sucesso!');
        setShowSuccessModal(true);
        setTimeout(() => {
          setFormData({
            // achadoPor: '',
            local: '',
            armazenado: '',
            data: '',
            detalhes: '',
          });
          setShowSuccessModal(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar item. Detalhes:', errorData); // Log para verificar os detalhes do erro
        setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Erro ao cadastrar item. Detalhes:', error); // Log para verificar os detalhes do erro
      setErrorMessage('Erro ao cadastrar item. Por favor, tente novamente.');
      setShowErrorModal(true);
    } finally {
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    return () => {
      if (localImage) {
        URL.revokeObjectURL(localImage);
      }
    };
  }, [localImage]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white ml-12">
      <div className="w-full bg-gray-100 max-w-screen-lg mx-auto p-6 rounded-lg shadow-lg">
        <form className="space-y-6" id="itemForm" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl font-semibold text-center">Cadastro de Itens</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="achador">
                  Achado Por:
                </label>
                <input
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="achador"
                  name="achadoPor"
                  value={formData.achadoPor}
                  onChange={(e) => setFormData({ ...formData, achadoPor: e.target.value })}
                  maxLength={40}
                  required
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
                  name="data"
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  required
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
                  name="local"
                  value={formData.local}
                  onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                  maxLength={50}
                  required
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
                  name="armazenado"
                  value={formData.armazenado}
                  onChange={(e) => setFormData({ ...formData, armazenado: e.target.value })}
                  maxLength={50}
                  required
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
                  value={formData.detalhes}
                  onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                  rows="4"
                  maxLength={100}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-48 h-48 border-4 bg-white rounded-md overflow-hidden">
                {localImage ? (
                  <img src={localImage} alt="Imagem do item" className="object-cover w-full h-full" />
                ) : imageLoaded ? (
                  <img src={image} alt="Imagem do item" className="object-cover w-full h-full" />
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
              className="w-32 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 disabled:bg-blue-300 focus:outline-none"
              type="submit"
              onClick={(event) => handleFormSubmit(event)}
              disabled={isButtonDisabled}
            >
              {loadingSubmit ? (
                <BeatLoader size={10} color={'#fff'} loading={loadingSubmit} />
              ) : (
                'Cadastrar'
              )}
            </button>

            <button
              className="w-32 py-2 bg-gray-300 text-black rounded-md cursor-pointer hover:bg-gray-400 focus:outline-none"
              type="reset"
              onClick={handleFormClear}
            >
              Limpar
            </button>
          </div>

          {showSuccessModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-green-600">Item cadastrado com sucesso!</p>
                <button className="mt-4 text-blue-500" onClick={() => setShowSuccessModal(false)}>
                  Fechar
                </button>
              </div>
            </div>
          )}

          {showErrorModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-red-600">{errorMessage}</p>
                <button className="mt-4 text-blue-500" onClick={() => setShowErrorModal(false)}>
                  Fechar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>

  );
}
