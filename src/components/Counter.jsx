import { useState } from 'react'

function Counter() {
  const [estudiantes, setEstudiantes] = useState(0)

  const disminuir = () => {
    setEstudiantes((actual) => Math.max(0, actual - 1))
  }

  const aumentar = () => {
    setEstudiantes((actual) => actual + 1)
  }

  return (
    <section className="counter-section" aria-labelledby="contador-titulo">
      <h2 id="contador-titulo">¿Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>

      <div className="counter-card" aria-label="Contador de estudiantes">
        <button
          type="button"
          className="counter-button"
          onClick={disminuir}
          aria-label="Disminuir estudiantes"
          disabled={estudiantes === 0}
        >
          −
        </button>

        <output className="counter-value" aria-live="polite">
          {estudiantes}
        </output>

        <button
          type="button"
          className="counter-button"
          onClick={aumentar}
          aria-label="Aumentar estudiantes"
        >
          +
        </button>
      </div>

      <small>estudiantes inscritos</small>
    </section>
  )
}

export default Counter
