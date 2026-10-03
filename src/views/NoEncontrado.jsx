import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="not-found__code">404</p>
      <h1 id="not-found-title">Página no encontrada</h1>
      <p>La dirección que escribiste no existe dentro de ReactAcademy.</p>
      <Link to="/" className="primary-button">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NoEncontrado
