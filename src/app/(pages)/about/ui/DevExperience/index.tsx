import { Image } from '@unpic/react'
import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  companyLogo: string
  date: string
  company: string
  position: string
  modality: string
  htmlExperience: JSX.Element
}

/**
 * Componente que muestra una experiencia laboral de desarrollo
 *
 * @param {string} companyLogo - URL del logo de la empresa
 * @param {string} date - Fecha de la experiencia
 * @param {string} company - Nombre de la empresa
 * @param {string} position - Cargo ocupado
 * @param {string} modality - Modalidad de trabajo (Remoto/Presencial)
 * @param {JSX.Element} htmlExperience - Descripción de la experiencia en formato HTML
 */
const DevExperience: FC<Props> = ({ companyLogo, date, company, position, modality, htmlExperience }) => {
  return (
    <li className='devExperience'>
      <time className='devExperience-date' dateTime={date}>
        {date}
      </time>

      <section className='devExperience-information' aria-label={`Experiencia en ${company}`}>
        <h2 className='devExperience-position'>{position}</h2>

        <div className='devExperience-company'>
          <Image src={companyLogo} width={20} height={20} alt={`Logo de ${company}`} className='devExperience-image' />
          <h5>{company}</h5>
        </div>

        <h4 className='devExperience-modality'>{modality}</h4>
        <div className='devExperience-description'>{htmlExperience}</div>
      </section>
    </li>
  )
}

export default DevExperience
