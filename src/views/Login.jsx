import { useState } from 'react'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [enviado, setEnviado] = useState(false)

  const faltanCampos = !correo.trim() || !contrasena.trim()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (faltanCampos || enviado) return

    setEnviado(true)
  }

  return (
    <section className="page-section login-page" aria-labelledby="login-title">
      <div className="login-card">
        <p className="eyebrow">Acceso</p>
        <h1 id="login-title">Iniciar sesión</h1>
        <p className="login-description">Completa los campos para simular el envío del formulario.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            placeholder="nombre@correo.com"
            autoComplete="email"
            disabled={enviado}
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            disabled={enviado}
          />

          <button type="submit" className="primary-button login-submit" disabled={faltanCampos || enviado}>
            {enviado ? 'Formulario enviado' : 'Ingresar'}
          </button>
        </form>

        <p className="microcopy" aria-live="polite">
          {enviado
            ? 'Interfaz enviada: los campos quedaron deshabilitados.'
            : 'Demo de interfaz: este formulario no valida credenciales ni se conecta a un backend.'}
        </p>
      </div>
    </section>
  )
}

export default Login
