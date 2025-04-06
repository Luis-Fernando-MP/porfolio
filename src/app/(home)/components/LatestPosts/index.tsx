import { parseTitleToLink } from '@/shared/parseTitle'
import IconLink from '@/shared/ui/IconLink'
import ShadowText from '@/shared/ui/ShadowText'
import TitleText from '@/shared/ui/TitleText'
import LatestPost from '@home/ui/LatestPost'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const TEMPORAL_LAST_POSTS = [
  {
    id: 'introduccion-a-js-post-id-unique',
    title: 'Introducción a JavaScript',
    publishedAt: '2025-12-01',
    resume: 'Descubre los fundamentos de JavaScript, el lenguaje de programación más popular.',
    tags: ['JavaScript', 'Programación']
  },
  {
    id: 'mejores-practicas-css-post-id-unique',
    title: 'Mejores Prácticas en CSS',
    publishedAt: '2025-04-02',
    resume: 'Aprende a escribir CSS limpio y eficiente para tus proyectos web.',
    tags: ['CSS', 'Diseño']
  },
  {
    id: 'redes-sociales-y-marketing-post-id-unique',
    title: 'Redes Sociales y Marketing Digital',
    publishedAt: '2025-09-03',
    resume: 'Cómo utilizar las redes sociales para potenciar tu estrategia de marketing.',
    tags: ['Redes Sociales', 'Marketing']
  },
  {
    id: 'introduccion-a-python-post-id-unique',
    title: 'Introducción a Python',
    publishedAt: '2025-01-04',
    resume: 'Un vistazo a Python, un lenguaje versátil y fácil de aprender.',
    tags: ['Python', 'Programación']
  },
  {
    id: 'tendencias-en-tecnologia-2025-post-id-unique',
    title: 'Tendencias en Tecnología para 2025',
    publishedAt: '2025-10-05',
    resume: 'Explora las tendencias tecnológicas que marcarán el futuro.',
    tags: ['Tecnología', 'Tendencias']
  },
  {
    id: 'seguridad-en-redes-post-id-unique',
    title: 'Seguridad en Redes: Lo que Debes Saber',
    publishedAt: '2025-01-06',
    resume: 'Conoce las mejores prácticas para mantener seguras tus redes.',
    tags: ['Seguridad', 'Redes']
  }
]

const LatestPosts: FC = () => {
  return (
    <article className='latestPosts'>
      <section className='previewProjects-section'>
        <ShadowText>ÚLTIMOS POSTS</ShadowText>
        <TitleText sub='Últimas' title='Publicaciones' />
      </section>

      <ul className='latestPosts-list'>
        {TEMPORAL_LAST_POSTS.map(post => {
          const key = `latest-post-${parseTitleToLink(post.title)}-unique-key`
          return <LatestPost key={key} {...post} />
        })}
      </ul>

      <IconLink href='/post' className='inverse'>
        <h3>Ver más Publicaciones</h3>
        <ArrowRightIcon />
      </IconLink>
    </article>
  )
}

export default LatestPosts
