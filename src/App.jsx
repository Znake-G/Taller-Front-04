import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './views/Inicio.jsx'
import Cursos from './views/Cursos.jsx'
import Nosotros from './views/Nosotros.jsx'
import Login from './views/Login.jsx'
import NoEncontrado from './views/NoEncontrado.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
