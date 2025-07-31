import ProjectsBrands from '@/app/components/ProjectsBrands'
import IconButton from '@/shared/ui/IconButton'
import Title from '@/shared/ui/Title'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import LatestProjects from '../../components/LatestProjects'
import './style.scss'
import './userMobile.scss'

const ProjectsContent: FC = () => {
  return (
    <article className='projects'>
      <section className='projects-section'>
        <Title sub='✨ Mis' title='Proyectos' />
        <p className='projects-description'>
          En cada uno de estos proyectos he aplicado todo lo que he aprendido. En cada versión que he construido, he buscado
          siempre mejorar y refinar mi enfoque.{' '}
          <b>
            Cada proyecto representa una parte de mí: un fragmento de mis saberes y una experiencia que comparto con quienes lo
            visitan.
          </b>
        </p>
      </section>

      <IconButton href='/projects' className='active'>
        <ArrowRightIcon />
        <h4>Ver más</h4>
      </IconButton>

      <ProjectsBrands />
      <LatestProjects />
    </article>
  )
}

export default ProjectsContent
