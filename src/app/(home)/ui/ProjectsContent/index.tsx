import ProjectsBrands from '@/app/components/ProjectsBrands'
import IconButton from '@/shared/ui/IconButton'
import IconLink from '@/shared/ui/IconLink'
import Title from '@/shared/ui/Title'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import LastedPosts from '../../components/LastedPosts'
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
      {/* <LastedPosts /> */}
    </article>
  )
}

export default ProjectsContent
