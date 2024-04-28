import React from 'react'
import './Categoria.css'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'

export default function Categoria() {
  return (
<div className='body'>
  <Header />

  <main>
    <section id="categorias">
      <div className="container">
        <h2>Principais Categorias</h2>
        <div className="categoria-cards">
          <Link to="/eventos" className="categoria-card">
            <>
              <div className="card-icon">
                <img src="./img/calendario.png" alt="Eventos Educacionais" />
              </div>
              <div className="card-content">
                <h3>Eventos Educacionais</h3>
                <p>Confira os próximos eventos educacionais e participe!</p>
              </div>
            </>
          </Link>
          <Link to="/recursos" className="categoria-card">
            <>
              <div className="card-icon">
                <img src="./img/pilha-livros.png" alt="Recursos Educacionais" />
              </div>
              <div className="card-content">
                <h3>Recursos Educacionais</h3>
                <p>Acesse uma variedade de recursos educacionais para auxiliar em seus estudos.</p>
              </div>
            </>
          </Link>
          <Link to="/trabalhos" className="categoria-card">
            <>
              <div className="card-icon">
                <img src="./img/chapeu-formatura.png" alt="Trabalhos Acadêmicos" />
              </div>
              <div className="card-content">
                <h3>Trabalhos Acadêmicos</h3>
                <p>Encontre exemplos e orientações para desenvolver seus trabalhos acadêmicos.</p>
              </div>
            </>
          </Link>
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
