import type { JSX, ReactNode } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import './style.scss'
import './userMobile.scss'

interface Props {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const Layout = async ({ children }: Props): Promise<JSX.Element> => {
  return (
    <main className='page' aria-label='Acerca de Luis Fernando'>
      <MainBar />
      <div className='page-wrapper'>{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
