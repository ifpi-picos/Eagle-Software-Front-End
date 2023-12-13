// // itemService.js

// const cloudinaryUploadPreset = 'my-uploads';
// const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dsrnunimq/image/upload';
// const apiEndpoint = 'https://api-eagles-software.onrender.com/itens';   

// async function uploadImage(file) {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', cloudinaryUploadPreset);

//     const response = await fetch(cloudinaryAPI, {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     return data.secure_url;
//   } catch (error) {
//     console.error('Erro ao enviar imagem para o Cloudinary:', error);
//     throw error;
//   }
// }

// async function createItem(formData, image) {
//   try {
//     const response = await fetch(apiEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         ...formData,
//         imagem_URL: image,
//       }),
//     });

//     if (response.ok) {
//       return response.json();
//     } else {
//       const errorData = await response.json();
//       throw new Error('Erro ao cadastrar item. Por favor, tente novamente.');
//     }
//   } catch (error) {
//     console.error('Erro ao cadastrar item:', error);
//     throw error;
//   }
// }

// export { uploadImage, createItem };
