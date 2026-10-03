import { Link } from 'react-router'
import Counter from '../components/Counter.jsx'

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1>
            Aprende <span>React</span> desde cero
          </h1>
          <p>
            Domina la librería más popular del frontend con proyectos prácticos y reales.
          </p>
          <Link to="/cursos" className="primary-button">
            Ver Cursos
          </Link>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-title">
        <p className="eyebrow">ReactAcademy</p>
        <h2 id="home-intro-title">Una landing, ahora organizada por rutas</h2>
        <p>
          Navega entre las vistas usando React Router sin recargar la página y conserva una experiencia de SPA.
        </p>
      </section>

      <Counter />
    </>
  )
}

export default Inicio
