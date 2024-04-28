import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Context } from './Context/Context';
import { useContext } from 'react';
import Sobre from './Pages/Sobre/Sobre';
import Contato from './Pages/Contato/Contato';
import Recursos from './Pages/Recursos/Recursos';
import Categoria from './Pages/Categoria/Categoria';
import Login from './Pages/Login/Login';
import Registrar from './Pages/Registrar/Registrar';
import Disciplina from './Pages/Disciplina/Disciplina';
import Material from './Pages/Material/Material';
import Livro from './Pages/Livro/Livro';
import Eventos from './Pages/Eventos/Eventos';
import Tcc from './Pages/Tcc/Tcc';
import Adm from './Pages/Adm/Adm';


function App() {
  const { user } = useContext(Context)

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={user ? <Home /> : <Login />} exact />
            <Route path="/login" element={ <Login />} exact />
            <Route path="/sobre" element={user ? <Sobre /> : <Login />} exact />
            <Route path="/contato" element={user ? <Contato /> : <Login />} exact />
            <Route path="/recursos" element={user ? <Recursos /> : <Login />} exact />
            <Route path="/categorias" element={ user ? <Categoria /> : <Login />} exact />
            <Route path="/registrar" element={ <Registrar /> } exact />
            <Route path="/disciplina" element={user ? <Disciplina /> : <Login />} exact />
            <Route path="/material" element={user ? <Material /> : <Login />} exact />
            <Route path="/livropdf" element={user ? <Livro /> : <Login />} exact />
            <Route path="/eventos" element={user ? <Eventos /> : <Login />} exact />
            <Route path="/trabalhos" element={user ? <Tcc /> : <Login />} exact />
            <Route path="/educaadmguine" element={user ? <Adm /> : <Login />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
