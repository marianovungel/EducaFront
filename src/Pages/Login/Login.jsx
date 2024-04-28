import React, { useContext, useState } from 'react'
import  './Login.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { dispatch } = useContext(Context)

    const Login = async (e)=>{
        e.preventDefault()
        dispatch({ type: "LOGIN_START"})

        try {
            if( email && password){
                const res = await api.post("/login", {
                    email, password
                })
                console.log(res.data)
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
                window.location.replace("/");
            }
        } catch (error) {
            alert("Erro no Login!")
            dispatch({ type: "LOGIN_FAILURE"})
        }
    }

  return (
<div className='body'>
    <Header />
    <main>
        <section id="login">
            <div className="container">
                <div className="login-container">
                    <div className="imagem-login">
                        <img src="./img/study.jpg" alt="Imagem de Fundo do Login" />
                    </div>
                    <div className="formulario-login">
                        <h2>Entrar</h2>
                        <form onSubmit={Login}>
                            <div className="form-group">
                                <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                                <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="senha"><i className="fas fa-lock"></i> Senha</label>
                                <input type="password" id="senha" name="senha" onChange={(e)=> setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group lembrar-me">
                                <label htmlFor="lembrar_me">
                                    <input type="checkbox" id="lembrar_me" name="lembrar_me" /> Lembrar-me
                                </label>
                            </div>
                            <button type="submit"><i className="fas fa-sign-in-alt"></i> Entrar</button>
                        </form>
                        <div className="links-uteis">
                            <a href="#">Esqueceu a senha?</a>
                            <p>Ainda não é cadastrado? <Link to="/registrar">Cadastre-se</Link></p>
                        </div>
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
