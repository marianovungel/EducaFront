import React, { useEffect, useState } from 'react'
import './Eventos.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'

export default function Eventos() {
    const [resp, setResp] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const {data} = await api.get("/events")
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
        <section id="eventos">
            <div className="container">
                <h2>Próximos Eventos</h2>
                {resp?.map((res)=>(
                    <div className="evento" key={res._id}>
                        <div className="evento-imagem">
                            <img src={res.capa} alt="Evento 1" />
                        </div>
                        <div className="info">
                            <h3>{res.tema}</h3>
                            <p><i className="fas fa-calendar-alt"></i>{res.datai} || {res.dataf}</p>
                            <p><i className="fas fa-map-marker-alt"></i>{res.local}</p>
                            <div onClick={()=> openLink(res.link)} className="btn">Inscreva-se <i className="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </main>

    <footer>
        <div className="container">
            <p>&copy; 2023 Repositório Educa Guiné - Todos os direitos reservados.</p>
        </div>
    </footer>
</div>
  )
}
