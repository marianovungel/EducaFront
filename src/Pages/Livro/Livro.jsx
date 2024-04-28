import React, { useState } from 'react';
import {firebase} from '../../Services/firebase';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';



const Livro = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };



const handlePDFUpload = async () => {
  try {
    // Referência para o armazenamento no Firebase
    const storageRef = ref(firebase, `files/${uuidv4()}`);

    // Faz o upload do arquivo PDF
    const snapshot = await uploadBytes(storageRef, file);

    // Obtém o URL de download do arquivo PDF
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(downloadURL)
    
    return downloadURL;
  } catch (error) {
    console.error('Erro durante o upload do arquivo PDF:', error);
    throw error; // Lança o erro para que seja tratado pelo código que chamou essa função, se necessário
  }
};


  return (
    <div>
      <h2>Upload de PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handlePDFUpload}>
        Upload
      </button>
    </div>
  );
};

export default Livro;