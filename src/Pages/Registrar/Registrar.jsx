import React, { useState } from 'react'
import  './Registrar.css'
import Header from '../../Components/Header/Header'
import api from '../../Services/api'
import Swal from 'sweetalert2'

export default function Registrar() {
    const [email, setEmail] = useState(null)
    const [tel, setTel] = useState(null)
    const [nome, setNome] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)

    const Cadastrar = async (e)=>{
        e.preventDefault()

        try {
            if(password === confirm){
                await api.post("/user",{
                    email, tel, nome, password
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cadastrado com Sucesso!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                window.location.replace("/login")
            }else{
                alert("Confirme corretamente a sua SENHA!")
            }
        } catch (error) {
        }
    }
  return (
<div className='body'>
    <Header />

    <main>
        <section className="registration-form">
            <div className="container">
                <div className="registration-container">
                    <div className="form-container">
                        <h2>Faça seu Cadastro</h2>
                        <form onSubmit={Cadastrar}>
                            <div className="form-group">
                                <label htmlFor="name"><i className="fas fa-user"></i> Nome Completo</label>
                                <input type="text" id="name" placeholder="Digite seu nome completo" onChange={(e)=> setNome(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="fas fa-envelope"></i> E-mail</label>
                                <input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"><i className="fas fa-phone"></i> Telefone (Opcional)</label>
                                <input type="tel" id="phone" placeholder="Digite seu telefone" onChange={(e)=> setTel(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="fas fa-lock"></i> Senha</label>
                                <input type="password" id="password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password"><i className="fas fa-lock"></i> Confirmar Senha</label>
                                <input type="password" id="confirm-password" placeholder="Confirme sua senha" onChange={(e)=> setConfirm(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">Aceito os Termos e Condições e a Política de Privacidade</label>
                            </div>
                            <button type="submit" className="btn">Cadastrar</button>
                        </form>
                    </div>
                    <div className="illustration">
                        <img src="./img/study.jpg" alt="fundo do cadastro" />
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
