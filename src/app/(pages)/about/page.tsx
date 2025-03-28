import MainApp from '@/app/components/MainApp'
import type { FC } from 'react'

import './style.scss'
import Testimonies from './ui/Testimonies'

const Page: FC = () => {
  return (
    <MainApp className='about'>
      <section className='about-section'>
        <h1>Acerca de mi:</h1>
        <div className='paragraph'>
          <p className='paragraph-normal'>¡Hola!</p>
          <h5 className='paragraph-emphasis'>&nbsp;Soy Luis Fernando</h5>
          <p className='paragraph-normal'>, también conocido como Shumi.</p>
          <h5 className='paragraph-emphasis'>&nbsp;Soy desarrollador full stack y diseñador UI.</h5>
          <p className='paragraph-normal'>
            Mi viaje comenzó en 2019, cuando obtuve mi título de técnico en Diseño y Programación de Aplicaciones Web. Desde
            entonces, he seguido avanzando y actualmente estoy en el séptimo ciclo de la carrera de Ingeniería de Software en la
            Universidad Tecnológica del Perú.
          </p>
        </div>

        <div className='paragraph'>
          <p className='paragraph-normal'>
            Me dedico a crear interfaces intuitivas y funcionales para los clientes, así como a programar sistemas útiles para la
            comunidad de desarrolladores. A lo largo de mi trayectoria, he tenido la oportunidad de trabajar en diversas empresas
            e instituciones que me han inculcado valores y visiones productivas.
          </p>
        </div>

        <div className='paragraph'>
          <p className='paragraph-normal'>Estas experiencias han fortalecido mi</p>
          <h5 className='paragraph-emphasis'>&nbsp;poco confort con lo idóneo</h5>
          <p className='paragraph-normal'>
            , por ello en su gran parte persigo con un poco de locura y carisma la excelencia y la innovación de un proyecto,
            siempre buscando mejorar la usabilidad de las herramientas del mercado.
          </p>
        </div>

        <div className='paragraph'>
          <p className='paragraph-normal'>Como desarrollador,</p>
          <h5 className='paragraph-emphasis'>
            &nbsp;tengo una debilidad tan grande como los pelos de un gato o el inmenso corazón de un hámster
          </h5>
          <p className='paragraph-normal'>
            . Me siento en sintonía con el mundo en general, y esta es una constante entre mis particularidades, un bug que no
            espero resolver y un deploy que espero mantener aun si es viernes. Si has llegado hasta aquí, deberíamos tomar un café
            algún día.
          </p>
        </div>
      </section>

      <section className='about-section'>
        <h2>Testimonios:</h2>
        <div className='about-testimonies'>
          <Testimonies />
        </div>
      </section>
    </MainApp>
  )
}

export default Page
