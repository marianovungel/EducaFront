import React from 'react'
import Header from '../../Components/Header/Header'
import './Sobre.css'

export default function Sobre() {
  return (
<div className='body'>
    <Header />
    <main>
        <section id="sobre">
            <div className="container">
                <h2>Sobre o Repositório</h2>
                <div className="content">
                    <p>O Repositório Educa Guiné é uma iniciativa que visa democratizar o acesso à educação de qualidade na Guiné-Bissau. Através da plataforma online, oferecemos uma ampla gama de recursos educativos, tais como:</p>
                    <ul>
                        <li><i className="fas fa-book"></i> Apostilas e livros didáticos em diversos formatos;</li>
                        <li><i className="fas fa-video"></i> Videoaulas e tutoriais;</li>
                        <li><i className="fas fa-chalkboard-teacher"></i> Planos de aula e atividades para professores;</li>
                        <li><i className="fas fa-tools"></i> Ferramentas de apoio à aprendizagem.</li>
                    </ul>
                    <p>Acreditamos que a educação é a chave para o desenvolvimento da Guiné-Bissau e estamos comprometidos em fornecer recursos que possibilitem a todos os guineenses o acesso à educação de qualidade.</p>
                    <a href="mais-sobre.html" className="btn">Leia Mais <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
        <section id="autor-colaboradores">
            <div className="container">
                <h2>Autor e Colaboradores</h2>
                <div className="content">
                    <div className="autor">
                        <img src="img/autor.png" alt="Foto do Autor" />
                        <h3>Sumaé Embaló</h3>
                        <p>Fundador e Autor Principal</p>
                        <p>Embaló é natural de Gabú, Guiné-Bissau, e estudante de Engenharia de Computação na Unilab. Ele é membro do Unilab Student Chapter (OPTICA internacional) e Bolsista Voluntário do projeto de pesquisa e iniciação científica "Acesso Fácil e Rápido à Informação: Desenvolvimento da Plataforma Digital UnilabTem".</p>
                    </div>
                    <div className="colaboradores">
                        <h3>Colaboradores</h3>
                        <ul>
                            <li>
                                <img src="./img/colaborador1.png" alt="Foto do Colaborador 1" />
                                <p>Dr. Sabi Yari Moïse Bandiri</p>
                            </li>
                            <li>
                                <img src="./img/mariano.jpg" alt="Foto do Colaborador 2" />
                                <p>Mariano Vunge</p>
                            </li>
                            <li>
                                <img src="./img/colaborador3.png" alt="Foto do Colaborador 3" />
                                <p>Sumaé Embaló</p>
                            </li>
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
