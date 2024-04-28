import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Header() {
    const { user, dispatch } = useContext(Context)

    const hendSair = ()=>{
        dispatch({type: "LOGOUT"})
    }
  return (
    <header>
        <div className="container">
            <div className="cabecalho-superior">
                <div className="esquerda"></div>
                <div className="centro">
                    <a href="index.html">
                        <img src="./logo.png" alt="Logo Repositório Educa Guiné" />
                    </a>
                    <h1>Repositório Educa Guiné</h1>
                </div>
                <div className="direita">
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/categorias">Categorias</Link></li>
                    <li><Link to="/recursos">Recursos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    {user?.adm && (<li><Link to="/educaadmguine">Cadastrar</Link></li>)}
                    {user && (<li><div className='logoutItem' onClick={hendSair}>Logout</div></li>)}
                </ul>
            </nav>
        </div>
    </header>
  )
}
