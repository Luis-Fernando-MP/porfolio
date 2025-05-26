import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://haui.vercel.app'),
  title: 'haui:Porfolio',
  description:
    'Hola soy Luis pero dime haui, soy un desarrollador de aplicaciones apasionado por crear soluciones innovadoras, estaré encantado de trabajar contigo',
  keywords: [
    'Portafolio',
    'Desarrollador Web',
    'Full Stack',
    'Luis Fernando Melgar Pizarro',
    'HAUI DEV',
    'dev',
    'programador',
    'lima',
    'Perú'
  ],
  authors: [{ name: 'Luis Fernando Melgar Pizarro', url: 'https://haui.vercel.app' }],
  creator: 'Luis Fernando Melgar Pizarro',
  publisher: 'haui.dev',
  icons: {
    icon: '/haui-ico.svg'
  },
  openGraph: {
    title: 'haui:Porfolio',
    description:
      'Hola, soy Luis, pero dime haui, te invito a explorar mi porfolio y conocer más sobre mi, inténtalo y tomemos un cafe',
    url: 'https://haui.vercel.app',
    siteName: 'haui:Porfolio',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Logo de haui-dev',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'haui:Porfolio',
    description:
      'Hola, soy Luis, pero dime haui, te invito a explorar mi porfolio y conocer más sobre mi, inténtalo y tomemos un cafe',
    images: [
      {
        url: '/opengraph.png',
        alt: 'haui-dev'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}
