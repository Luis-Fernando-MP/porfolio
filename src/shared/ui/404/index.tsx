import type { FC } from 'react'

import HauiDevLogo from '../HauiDevLogo'
import './style.scss'

const NotFound: FC = () => {
  return (
    <section className='notFound'>
      <HauiDevLogo size='lg' />
      <h1 className='notFound-title xl'>404</h1>
      <p className='notFound-description'>🤞 Al parecer estas navegando por rutas que no existen.</p>
    </section>
  )
}

export default NotFound
