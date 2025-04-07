import Hydration from '@/shared/components/Hydration'
import Offline from '@/shared/components/Offline'
import { bodyFonts } from '@/shared/fonts'
import '@sass/config/global.scss'
import NextTopLoader from 'nextjs-toploader'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'
import { metadata, viewport } from './metadata'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body className={`${bodyFonts} app antialiased`}>
        <NextTopLoader color='rgb(var(--tn-primary))' showSpinner={false} />
        <Offline />
        {/* <SplashCursorComponent /> */}
        <Hydration>{children}</Hydration>
        <Toaster position='top-center' toastOptions={{ className: 'toast' }} />
      </body>
    </html>
  )
}

export default RootLayout
export { metadata, viewport }
