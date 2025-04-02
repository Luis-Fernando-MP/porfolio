import type { FC } from 'react'

import ProjectsList from './ui/ProjectsList'

const Projects: FC = () => {
  return (
    <>
      <section className='mainApp-section'>
        <h1>Mis proyectos:</h1>
        <div className='paragraph'>
          <p className='paragraph-normal'>
            Cada línea de código que escribo refleja mi deseo de optimizar y poner a prueba mis habilidades y conocimientos. En
            cada proyecto y clon que he desarrollado, he aprendido nuevas metodologías que estoy seguro sabrás considerar.
          </p>
        </div>
      </section>

      <section className='mainApp-section'>
        <div className='projects-list'>
          <ProjectsList />
        </div>
      </section>
    </>
  )
}

export default Projects
