import BottomArrow from '@/shared/assets/BottomArrow'
import IconLink from '@/shared/ui/IconLink'
import ShadowText from '@/shared/ui/ShadowText'
import TitleText from '@/shared/ui/TitleText'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import PreviewProject from '../../ui/PreviewProject'
import './style.scss'

const TEMPORAL_LAST_PROJECTS = [
  {
    id: 'life-stream-id-unique',
    title: 'Life Stream',
    resume: 'Un proyecto educativo que facilita el proceso de agregar pacientes donantes y receptores de sangre en Lima, Perú.',
    images: ['/assets/smart-love/1.png', '/assets/smart-love/2.png', '/assets/smart-love/3.png'],
    tags: ['Next.js', 'Sass', 'MySQL', 'Prisma.js']
  },
  {
    id: 'copy-life-stream-id-unique',
    title: 'Life Stream',
    resume: 'Un proyecto educativo que facilita el proceso de agregar pacientes donantes y receptores de sangre en Lima, Perú.',
    images: ['/assets/smart-love/2.png', '/assets/smart-love/3.png', '/assets/smart-love/1.png'],
    tags: ['Next.js', 'Sass', 'MySQL', 'Prisma.js']
  }
]

const PreviewProjects: FC = () => {
  return (
    <article className='previewProjects'>
      <section className='previewProjects-section'>
        <ShadowText>MIS PROYECTOS</ShadowText>
        <TitleText sub='Mis' title='Proyectos' />
        <div className='previewProjects-description'>
          <p>
            En cada proyecto y clon que he desarrollado, he adquirido nuevas metodologías que estoy seguro considerarás valiosas.
          </p>
          <div className='previewProjects-arrow'>
            <BottomArrow />
          </div>
        </div>
      </section>

      <ul className='previewProjects-section previewProjects-list'>
        {TEMPORAL_LAST_PROJECTS.map(project => (
          <PreviewProject key={project.id} {...project} />
        ))}
      </ul>

      <IconLink href='/projects' className='previewProjects-more'>
        <h3>Ver más proyectos</h3>
        <ArrowRightIcon />
      </IconLink>
    </article>
  )
}

export default PreviewProjects
