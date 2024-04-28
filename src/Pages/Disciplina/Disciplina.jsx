import React, { useEffect, useState } from 'react'
import './Disciplina.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'
import { Link, useLocation } from 'react-router-dom'

export default function Disciplina() {
    const [data, setData] = useState([])
    const location = useLocation();

    const path = location.hash.split("#")[1]

    useEffect(()=>{
        const getData = async()=>{
            try {
                const res = await api.get(`/classe/${path}`)
                setData(res.data)
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [path])
  return (
<div className='body'>
    <Header />
    <main>
        <section id="disciplinas">
            <div className="container">
                <h2>Disciplinas</h2>
                <p>Aqui você encontra diversos materiais para auxiliar em seus estudos. Explore por nível de escolaridade, disciplina ou utilize a barra de pesquisa para encontrar conteúdos específicos.</p>
                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar disciplinas..." />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
                <div className="disciplinas-container">
                    {data.map((res)=>(
                        <Link to={`/material#${path}#${res.nome}`} state={res.nome} className="disciplina linkStyle" key={res._id}>
                            <div>
                                {res.nome === "Português" && (<i className="fas fa-book"></i>)}
                                {res.nome === "Matemática" && (<i className="fas fa-calculator"></i>)}
                                {res.nome === "Desenho" && (<i className="fas fa-palette"></i>)}
                                {res.nome === "Ciências Sociais" && (<i className="fas fa-globe-americas"></i>)}
                                {res.nome === "Ciências Naturais" && (<i className="fas fa-flask"></i>)}
                                {(
                                    res.nome ==! "Ciências Naturais" && 
                                    res.nome ==! "Ciências Sociais" && 
                                    res.nome ==! "Desenho" && 
                                    res.nome ==! "Matemática" && 
                                    res.nome ==! "Português") && 
                                    (<i className="fas fa-ellipsis-h"></i>
                                )}
                                <h3>{res.nome}</h3>
                            </div>
                        </Link>
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
