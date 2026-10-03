import CourseCard from '../components/CourseCard.jsx'

const cursos = [
  {
    icono: '⚛️',
    titulo: 'React Básico',
    descripcion: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    icono: '🔁',
    titulo: 'React Hooks',
    descripcion: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    icono: '🗂️',
    titulo: 'Estado Global',
    descripcion: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    icono: '🚀',
    titulo: 'React Avanzado',
    descripcion: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
]

function Cursos() {
  return (
    <section className="page-section page-section--light" aria-labelledby="cursos-title">
      <div className="section-heading">
        <p className="eyebrow">Formación</p>
        <h1 id="cursos-title">Nuestros Cursos</h1>
        <p>Elige el camino que mejor se adapte a ti.</p>
      </div>

      <div className="courses-grid">
        {cursos.map((curso) => (
          <CourseCard key={curso.titulo} {...curso} />
        ))}
      </div>
    </section>
  )
}

export default Cursos
