import React, { useEffect, useState } from 'react'
import './Material.css'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom';
import api from '../../Services/api';

export default function Material() {
    const [data, setData] = useState([])
    const location = useLocation();

    console.log(data)
    const path = location.hash.split("#")[1]
    const discip = location.state

    const OpenURL = (URL)=>{
        if(URL){
            window.open(URL)
        }
    }

    useEffect(()=>{
        const getData = async()=>{
            try {
                const res = await api.post("classedis", {
                    disciplina:discip,
                    classe:path
                })
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [path, discip])

  return (
<div className='body'>
    <Header />

    <main>
        <section id="material-disciplina">
            <div className="container">
                <h2>Material da Disciplina</h2>
                <p>Aqui você encontra diversos materiais para auxiliar em seus estudos. Explore por nível de escolaridade, disciplina ou utilize a barra de pesquisa para encontrar conteúdos específicos.</p>
                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar materiais..." />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
                <div className="material-container">
                    {data.map((res)=>(
                        <div className="material" key={res._id} onClick={()=> OpenURL(res.link)}>
                            {res.tipo === "livro" && (<i className="fas fa-file-alt"></i>)}
                            {res.tipo === "video" && (<i className="fas fa-video"></i>)}
                            <h3>{res.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div className="container">
            <p>&copy; 2024 Repositório Educa Guiné</p>
        </div>
    </footer>
</div>
  )
}
