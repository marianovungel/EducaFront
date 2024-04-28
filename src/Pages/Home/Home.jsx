import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'

export default function Home() {
    const [evento, setEvento] = useState({})
    const [recurso, setRecurso] = useState({})
    const [trabalho, setTrabalho] = useState({})
    const [ultimos, setUltimos] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const {data} = await api.get("/events")
                const dataDoc = await api.get("/doc")
                const dataTrab = await api.get("/trab")
                var response = await data.reverse()
                var resDoc = await dataDoc.data.reverse()
                var resTrab = await dataTrab.data.reverse()
                setRecurso(resDoc[0])
                setEvento(response[0])
                setTrabalho(resTrab[0])
                setUltimos(resDoc)
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
                  <h2>Bem-vindo ao Repositório Educa Guiné</h2>
                  <p>Acesse recursos educacionais gratuitos e de qualidade para estudantes e professores da Guiné.</p>
                  <a href="recursos.html" className="btn">Explorar Recursos</a>
              </div>
          </section>
          <section className="featured-categories">
              <div className="container">
                  <h2>Categorias em Destaque</h2>
                  <div className="category-grid">
                      <div className="category-card" key={evento?._id}>
                          <div className="category-icon">
                            <i className="fas fa-calendar-alt"></i>
                          </div>
                          <h3>{evento?.tema}</h3>
                          <p>{evento?.datai} || {evento?.dataf}</p>
                          <div onClick={()=> openLink(evento?.link)} className="btn">Ver o Evento</div>
                      </div>
                      <div className="category-card" key={recurso?._id}>
                          <div className="category-icon">
                            {recurso?.tipo === "livro" && (<i className="fas fa-file-alt"></i>)}
                            {recurso?.tipo === "video" && (<i className="fas fa-video"></i>)}
                          </div>
                          <h3>{recurso?.title}</h3>
                          <p>{recurso?.desc}</p>
                          <div onClick={()=> openLink(recurso?.link)} className="btn">Ver o Recursos</div>
                      </div>
                      <div className="category-card" key={trabalho?._id}>
                          <div className="category-icon">
                            <i className="fa-solid fa-file-pdf"></i>
                          </div>
                          <h3>{trabalho?.title}</h3>
                          <p>{trabalho?.desc}</p>
                          <div onClick={()=> openLink(trabalho?.link)} className="btn">Ver o Trabalho</div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="latest-resources">
              <div className="container">
                  <h2>Últimos Recursos Adicionados</h2>
                  <div className="resource-grid">
                      <div className="resource-card" key={ultimos[0]?._id}>
                          <div className="resource-thumbnail">
                              <img src={ultimos[0]?.capa} alt="Recurso 1" />
                          </div>
                          <div className="resource-info">
                              <h3>{ultimos[0]?.title}</h3>
                              <p>{ultimos[0]?.desc}</p>
                              <div onClick={()=> openLink(ultimos[0]?.link)} className="btn">Acessar</div>
                          </div>
                      </div>
                      <div className="resource-card" key={ultimos[1]?._id}>
                          <div className="resource-thumbnail">
                              <img src={ultimos[1]?.capa} alt="Recurso 1" />
                          </div>
                          <div className="resource-info">
                              <h3>{ultimos[1]?.title}</h3>
                              <p>{ultimos[1]?.desc}</p>
                              <div onClick={()=> openLink(ultimos[1]?.link)} className="btn">Acessar</div>
                          </div>
                      </div>
                      <div className="resource-card" key={ultimos[2]?._id}>
                          <div className="resource-thumbnail">
                              <img src={ultimos[2]?.capa} alt="Recurso 1" />
                          </div>
                          <div className="resource-info">
                              <h3>{ultimos[2]?.title}</h3>
                              <p>{ultimos[2]?.desc}</p>
                              <div onClick={()=> openLink(ultimos[2]?.link)} className="btn">Acessar</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="cta">
              <div className="container">
                  <h2>Contribua para o Repositório</h2>
                  <p>Se você possui recursos educacionais que gostaria de compartilhar, envie-os para nosso repositório.</p>
                  <a href="contato.html" className="btn">Enviar Recurso</a>
              </div>
          </section>
      </main>

      <footer>
          <div className="container">
              <div className="footer-links">
                  <a href="sobre.html">Sobre</a>
                  <a href="contato.html">Contato</a>
                  <a href="privacidade.html">Política de Privacidade</a>
                  <a href="termos.html">Termos de Uso</a>
                  <a href="faq.html">Perguntas Frequentes</a>
                  <a href="noticias.html">Notícias e Atualizações</a>
                  <a href="estatisticas.html">Estatísticas</a>
                  <a href="parceiros.html">Parceiros</a>
                  <a href="doacoes.html">Doações</a>
              </div>
              <p>&copy; 2024 Repositório Educa Guiné</p>
          </div>
      </footer>
  </div>
  )
}
