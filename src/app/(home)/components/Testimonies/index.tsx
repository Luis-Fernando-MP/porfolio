import TitleWeight from '@/shared/ui/TitleWeight'
import Testimony from '@home/ui/Testimony'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const TMP_IMAGE = 'https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png'

const TEMPORAL_TESTIMONIES = [
  {
    role: 'Ingeniero de software',
    feedback:
      'Trabajar con él es una experiencia increíble. Siempre entrega a tiempo y con calidad, lo que no solo demuestra su compromiso, sino también su profesionalismo. Su habilidad para resolver problemas complejos es admirable y siempre está dispuesto a ayudar a sus compañeros.',
    author: 'Juan Pérez',
    photo: TMP_IMAGE,
    company: 'Tech Solutions'
  },
  {
    role: 'Desarrollador Frontend',
    feedback:
      'Su atención al detalle y creatividad son impresionantes. Un verdadero profesional que no solo cumple con las expectativas, sino que las supera. Siempre aporta ideas innovadoras y es un placer colaborar con alguien tan apasionado por su trabajo.',
    author: 'María López',
    photo: TMP_IMAGE,
    company: 'Innovatech'
  },
  {
    role: 'Líder de Proyecto',
    feedback:
      'Su capacidad para resolver problemas y liderar equipos es admirable. Siempre logra los mejores resultados, motivando a su equipo y asegurando que todos estén alineados con los objetivos del proyecto. Su liderazgo es inspirador y su enfoque en la calidad es inigualable.',
    author: 'Carlos García',
    photo: TMP_IMAGE,
    company: 'Future Tech'
  }
]

const Testimonies: FC = () => {
  return (
    <article className='testimonies'>
      <section className='testimonies-section'>
        <TitleWeight className='testimonies-title' bold='Bonitas palabras' lighter='Algunas' />
      </section>
      <ul className='testimonies-list'>
        {TEMPORAL_TESTIMONIES.map(testimony => {
          return <Testimony key={testimony.author} {...testimony} />
        })}
      </ul>
    </article>
  )
}

export default Testimonies
