import { NavLink } from 'react-router'

function Navbar() {
  const getClassName = ({ isActive }) =>
    `nav-link${isActive ? ' nav-link--active' : ''}`

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="brand" aria-label="Ir al inicio de ReactAcademy">
          ReactAcademy
        </NavLink>

        <nav className="navbar__links" aria-label="Navegación principal">
          <NavLink to="/" end className={getClassName}>
            Inicio
          </NavLink>
          <NavLink to="/cursos" className={getClassName}>
            Cursos
          </NavLink>
          <NavLink to="/nosotros" className={getClassName}>
            Nosotros
          </NavLink>
          <NavLink to="/login" className="nav-login">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
