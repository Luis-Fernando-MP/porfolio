import { bodyFonts } from '@/shared/fonts'
import '@sass/config/global.scss'
import type { Metadata } from 'next'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import Firefly from './components/Firefly'
import './globals.css'
import Providers from './providers'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

export const metadata: Metadata = {
  title: 'key-flare',
  description: 'Some...',
  icons: {
    icon: [{ url: '/logo.svg' }]
  }
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body className={`${bodyFonts}`}>
        <Providers>
          {children}
          <Firefly />
        </Providers>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'toast',
            position: 'top-center',
            style: {
              background: 'rgb(var(--bg-primary))',
              color: 'rgb(var(--fnt-primary))'
            }
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
