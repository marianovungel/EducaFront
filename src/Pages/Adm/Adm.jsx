import React, { useContext, useEffect } from 'react'
import './Adm.css'
import { useState } from 'react';
import api from '../../Services/api';
import Swal from 'sweetalert2';
import {firebase} from '../../Services/firebase';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../Context/Context';
import Header from '../../Components/Header/Header';

export default function Adm() {
    const { user } = useContext(Context)
    console.log(user)
    //disciplinas
    const [nome, setNome] = useState(null)
    const [classe, setClasse] = useState(null)

    //Material
    const [tipoM, setTipoM] = useState("livro")
    const [titleM, setTitleM] = useState(null)
    const [descM, setDescM] = useState(null)
    const [capaM, setCapaM] = useState(null)
    const [linkM, setLinkM] = useState(null)
    const [classeM, setClasseM] = useState(null)
    const [disciplinaM, setDisciplinaM] = useState(null)
    const [file, setFile] = useState(null)


    //Evento  
    const [temaE, setTemaE] = useState(null)
    const [datai, setDatai] = useState(null)
    const [dataf, setDataf] = useState(null)
    const [local, setLocal] = useState(null)
    const [linkE, setLinkE] = useState(null)
    const [capaE, setCapaE] = useState(null)

    //Trabalho
    const [tipoT, setTipoT] = useState("Artigo Científico")
    const [titleT, setTitleT] = useState(null)
    const [descT, setDescT] = useState(null)
    const [capaT, setCapaT] = useState(null)
    const [fileT, setFileT] = useState(null)

    useEffect(()=>{
        const verifyAdm = ()=>{
            if(user?.adm === false){
                window.location.replace("/")
            }
        }
        verifyAdm()
    }, [user?.adm])

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };
    const handleFileChangeT = (e) => {
        const selectedFileT = e.target.files[0];
        setFileT(selectedFileT);
    };

    const handlePDFUpload = async (file) => {
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

      const handleClick = async (URL)=>{
        try {
           const imgRef = ref(firebase, `files/${uuidv4()}`)
           uploadBytes(imgRef, URL)
           const snapshot = await uploadBytes(imgRef, URL)
           const downloadURL = await getDownloadURL(snapshot.ref);
           return (downloadURL)
        } catch (error) {
            console.log(error)
        }
    }

    const Evento = async  (event)=>{
        event.preventDefault();
        try {
            var EventObject = {
                tema:temaE,    
                datai:datai,
                dataf:dataf,
                local:local,
                link:linkE,
            }
            if(capaE){
                const formData = new FormData();
                formData.append("image", capaE)
                EventObject.capa = await handleClick(capaE)
            }
            const res = await api.post("/events", EventObject)
            console.log(res)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadastrado com Sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            // window.location.reload()
        } catch (error) {
            alert(error.message)
        }
    }

    const Trabalho = async (event)=>{
        event.preventDefault();
        try {

            var TrabalhoObject = {
                tipo:tipoT,
                title:titleT,
                desc:descT,
            }

            if(fileT){
                TrabalhoObject.link = await handlePDFUpload(fileT)
            }

            if(capaT){
                const formData = new FormData();
                formData.append("image", capaT)
                TrabalhoObject.capa = await handleClick(capaT)
            }
            
            await api.post("/trab", TrabalhoObject)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadastrado com Sucesso!",
                showConfirmButton: false,
                timer: 1500
              });
              window.location.reload()
        } catch (error) {
            alert(error.message)
        }
    }
    const Material = async (event)=>{
        event.preventDefault();
        try {

            var MaterialObject = {
                tipo:tipoM,
                title:titleM,
                desc:descM,
                classe:classeM,
                disciplina:disciplinaM,
            }

            if(tipoM === "livro" && file){
                MaterialObject.link = await handlePDFUpload(file)
            }else{
                MaterialObject.link = linkM
            }

            if(capaM){
                const formData = new FormData();
                formData.append("image", capaM)
                MaterialObject.capa = await handleClick(capaM)
            }
            
            await api.post("/doc", MaterialObject)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadastrado com Sucesso!",
                showConfirmButton: false,
                timer: 1500
              });
              window.location.reload()
        } catch (error) {
            alert(error.message)
        }
    }
    const Disciplina = async (event)=>{
        event.preventDefault();
        try {
            await api.post("/disc",{
                nome,
                classe
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadastrado com Sucesso!",
                showConfirmButton: false,
                timer: 1500
              });
              window.location.reload()
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div>
        <Header />
        <div className="menuAdm">Adminstrador Educa Guiné</div>
        <div className="centerAllAdm">
            <div className="centerAdmAling">
                <div className="disciplinaAdm">
                    <form onSubmit={Disciplina} className='FormeAlingAdm'>
                        <h4>Cadastrar Disciplina</h4>
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setNome(e.target.value)}  placeholder="Nome da Disciplina" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setClasse(e.target.value)}  placeholder="Classe da Disciplina" required />
                        <button type="submit" className='CadastreAdmButton'>Cadastrar</button>
                    </form>
                </div>
                <div className="documentoAdm">
                    <form onSubmit={Material} className='FormeAlingAdm'>
                        <h4>Cadastrar Material</h4>
                        <select className='InputDicsAdm' onChange={(e)=> setTipoM(e.target.value)}><option value="livro">Arquivo PDF</option><option value="video">Link de Vídeo</option></select>
                        {tipoM === "livro" ?
                        (
                            <input 
                                type="file" 
                                accept="application/pdf" 
                                onChange={handleFileChange} 
                                className='InputDicsAdm' 
                                placeholder="Carrega um PDF" 
                                required />
                        )
                        :
                        (   
                            <input 
                                type="text" 
                                className='InputDicsAdm' 
                                onChange={(e)=> setLinkM(e.target.value)}
                                placeholder="Link do Vídeo no Youtube" 
                                required />
                        )
                        }
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setTitleM(e.target.value)}  placeholder="Título" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setDescM(e.target.value)}  placeholder="Descrição" required />
                        <input type="file" accept="image/*" className="InputDicsAdm" onChange={(e)=> setCapaM(e.target.files[0])} required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setClasseM(e.target.value)}  placeholder="Classe" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setDisciplinaM(e.target.value)}  placeholder="Disciplina" required />
                        <button type="submit" className='CadastreAdmButton'>Cadastrar</button>
                    </form>
                </div>
                <div className="eventoAdm">
                    <form onSubmit={Evento} className='FormeAlingAdm'>
                        <h4>Cadastrar Evento</h4>
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setTemaE(e.target.value)}  placeholder="Tema" required />
                        <input type="date" className='InputDicsAdm' onChange={(e)=> setDatai(e.target.value)}  placeholder="Dia da Abertura" required />
                        <input type="date" className='InputDicsAdm' onChange={(e)=> setDataf(e.target.value)}  placeholder="Dia de Feicho" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setLocal(e.target.value)}  placeholder="Local" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setLinkE(e.target.value)}  placeholder="Link de acesso" required />
                        <input type="file" accept="image/*" className="InputDicsAdm" onChange={(e)=> setCapaE(e.target.files[0])} required />
                        <button type="submit" className='CadastreAdmButton'>Cadastrar</button>
                    </form>
                </div>
                <div className="trabalhoAdm">
                    <form onSubmit={Trabalho} className='FormeAlingAdm'>
                        <h4>Cadastrar Trabalho</h4>
                        <select className='InputDicsAdm' onChange={(e)=> setTipoT(e.target.value)}><option value="Artigo Científico">Artigo Científico</option><option value="Resumo">Resumo</option></select>
                            <input 
                                type="file" 
                                accept="application/pdf" 
                                onChange={handleFileChangeT} 
                                className='InputDicsAdm' 
                                placeholder="Carrega um PDF" 
                                required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setTitleT(e.target.value)}  placeholder="Título" required />
                        <input type="text" className='InputDicsAdm' onChange={(e)=> setDescT(e.target.value)}  placeholder="Descrição" required />
                        <input type="file" accept="image/*" className="InputDicsAdm" onChange={(e)=> setCapaT(e.target.files[0])} required />
                        <button type="submit" className='CadastreAdmButton'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
