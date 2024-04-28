import React, { useEffect, useState } from 'react'
import './Tcc.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'

export default function Tcc() {
    const [resp, setResp] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const {data} = await api.get("/trab")
                var response = await data.reverse()
                console.log(response)
                setResp(response)
            } catch (error) {
                alert(error.message)
            }
        }

        getData()
    }, [])

    const openLink = (URL)=>{
        if(URL){
            window.open(URL)
        }
    }

  return (
<div className='body'>
    <Header />
    <main>
        <section className="hero">
            <div className="container">
                <h2>Trabalhos Acadêmicos</h2>
                <p>Aqui você encontra diversos materiais para auxiliar em seus estudos. Explore por área de conhecimento ou utilize a barra de pesquisa para encontrar conteúdos específicos.</p>
                <form className="search-form">
                    <input type="text" placeholder="Pesquisar trabalhos acadêmicos" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </section>

        <section className="categories">
            <div className="container">
                {resp.map((res)=>(
                    <div className="category" key={res._id}>
                        {res.tipo === "Ciências Exatas" && <i className="fas fa-calculator"></i>}
                        {res.tipo === "Ciências Humanas" && <i className="fas fa-user-friends"></i>}
                        {res.tipo === "Engenharia" && <i className="fas fa-hard-hat"></i>}
                        {res.tipo === "Letras" && <i className="fas fa-book-open"></i>}
                        {res.tipo === "Ciências da Saúde" && <i className="fas fa-heartbeat"></i>}

                        {(
                            res.tipo ==! "Ciências Exatas" && 
                            res.tipo ==! "Ciências Humanas" && 
                            res.tipo ==! "Engenharia" && 
                            res.tipo ==! "Letras" && 
                            res.tipo ==! "Ciências da Saúde") && 
                            (<i className="fas fa-ellipsis-h"></i>)}
                        <h3>{res.tipo}</h3>
                        <div onClick={()=>openLink(res.link)} className="btn">Explorar</div>
                    </div>
                ))}
                
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
