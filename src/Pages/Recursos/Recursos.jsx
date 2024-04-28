import React from 'react'
import './Recursos.css'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'

export default function Recursos() {
  return (
<div className='body'>
  <Header />

  <main>
    <section className="hero">
      <div className="container">
        <h2>Recursos Educacionais</h2>
        <p>Aqui você encontra diversos materiais para auxiliar em seus estudos. Explore por nível de escolaridade, disciplina ou utilize a barra de pesquisa para encontrar conteúdos específicos.</p>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar recursos" />
          <button>Buscar</button>
        </div>
      </div>
    </section>

    <section className="categories">
      <div className="container">
        <div className="categorygrid2">
          <div className="category2">
            <h3>Ensino Básico</h3>
            <ul>
              <li><Link to="/disciplina#1">1º ano</Link></li>
              <li><Link to="/disciplina#2">2º ano</Link></li>
              <li><Link to="/disciplina#3">3º ano</Link></li>
              <li><Link to="/disciplina#4">4º ano</Link></li>
              <li><Link to="/disciplina#5">5º ano</Link></li>
              <li><Link to="/disciplina#6">6º ano</Link></li>
              <li><Link to="/disciplina#7">7º ano</Link></li>
              <li><Link to="/disciplina#8">8º ano</Link></li>
              <li><Link to="/disciplina#9">9º ano</Link></li>
            </ul>
          </div>
          <div className="category2">
            <h3>Ensino Secundário</h3>
            <ul>
              <li><Link to="/disciplina#10">10º ano</Link></li>
              <li><Link to="/disciplina#11">11º ano</Link></li>
              <li><Link to="/disciplina#12">12º ano</Link></li>
            </ul>
          </div>
          <div className="category2">
            <h3>Educação Infantil</h3>
            <ul>
              <li><Link to="/disciplina#infantil">Materiais</Link></li>
            </ul>
          </div>
          <div className="category2">
            <h3>Outros</h3>
            <ul>
              <li><Link to="/disciplina#outros">Materiais</Link></li>
            </ul>
          </div>
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
