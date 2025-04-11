import TitleWeight from '@/shared/ui/TitleWeight'
import { UserIcon } from 'lucide-react'
import type { FC } from 'react'

import Gallery from '../Gallery'
import './style.scss'

const Details: FC = () => {
  return (
    <article className='details'>
      <Gallery className='details-gallery border' />
      <section className='details-information'>
        <UserIcon />
        <TitleWeight className='testimonies-title' bold='¿Quien' lighter='soy?' reverse />
        <p>
          Mi nombre es Luis Fernando, algunos me llaman Mishum. Soy un desarrollador full stack y diseñador UI. Mi viaje dentro de
          este mundo empezo en 2021, cuando obtuve mi título de técnico en Diseño y Programación de Aplicaciones Web. Desde
          entonces, he seguido avanzando y actualmente estoy en el séptimo ciclo de la carrera de Ingeniería de Software en la
          Universidad Tecnológica del Perú. Me dedico a crear interfaces intuitivas y funcionales para los clientes, así como a
          programar sistemas útiles para la comunidad de desarrolladores. A lo largo de mi trayectoria, he tenido la oportunidad
          de trabajar en diversas empresas e instituciones que me han inculcado valores y visiones productivas.  Estas
          experiencias han fortalecido mi poco confort con lo idóneo, por ello en su gran parte persigo con un poco de locura y
          carisma la excelencia y la mejora de un proyecto, siempre buscando mejorar la usabilidad de las herramientas del
          mercado. Como desarrollador, tengo una debilidad tan grande como los pelos de un gato o el inmenso corazón de un
          hámster. Me siento en sintonía con el mundo en general, y esta es una constante entre mis particularidades, un bug que
          no espero resolver y un deploy que espero mantener (aun si es viernes). Si has llegado hasta aquí, deberíamos tomar un
          café algún día.
        </p>
      </section>
    </article>
  )
}

export default Details
