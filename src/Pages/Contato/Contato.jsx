import React from 'react'
import './Contato.css'
import Header from '../../Components/Header/Header'

export default function Contato() {
  return (
<div className='body'>
  <Header />

  <main className='main_contact'>
    <div className="container_contact">
      <div className="contato-container">
        <section id="contato">
          <h2>Contato</h2>
          <p>Preencha o formulário abaixo para entrar em contato conosco.</p>
          <form>
            <div className="form-group">
              <label htmlFor="nome"><i className="fas fa-user"></i> Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email"><i className="fas fa-envelope"></i> Email:</label >
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem"><i className="fas fa-comment-alt"></i> Mensagem:</label>
              <textarea id="mensagem" name="mensagem" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar</button>
          </form>
        </section>
        
        <section id="acompanhe">
          <h2>Acompanhe-nos nas Redes Sociais</h2>
          <ul className="redes-sociais">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>

  <footer>
    <div className="container">
      <p>&copy; 2024 Repositório Educa Guiné</p>
    </div>
  </footer>
</div>
  )
}
