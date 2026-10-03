function CourseCard({ icono, titulo, descripcion, nivel }) {
  return (
    <article className="course-card">
      <div className="course-card__icon" aria-hidden="true">
        {icono}
      </div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <span className="badge">{nivel}</span>
    </article>
  )
}

export default CourseCard
