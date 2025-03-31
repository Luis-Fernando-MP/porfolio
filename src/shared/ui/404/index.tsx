import type { FC } from 'react'

import ShumDev from '../ShumDev'
import './style.scss'

const NotFound: FC = () => {
  return (
    <section className='notFound'>
      <ShumDev size='lg' radius='none' />
      <h1 className='notFound-title xl'>404</h1>
      <p className='notFound-description'>🤞 Al parecer estas navegando por rutas que no existen.</p>
    </section>
  )
}

export default NotFound
