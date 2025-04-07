import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://mishum.vercel.app'),
  title: 'Portafolio - Luis Fernando',
  description:
    'Bienvenido a mi portafolio. Soy Luis Fernando Melgar Pizarro, también conocido como MiSHUN, un desarrollador web full stack apasionado por crear soluciones innovadoras.',
  keywords: ['Portafolio', 'Desarrollador Web', 'Full Stack', 'Luis Fernando Melgar Pizarro', 'MiSHUN'],
  authors: [{ name: 'Luis Fernando Melgar Pizarro', url: 'https://mishum.vercel.app' }],
  creator: 'Luis Fernando Melgar Pizarro',
  publisher: 'MiSHUN',
  icons: {
    icon: '/logo.webp'
  },
  openGraph: {
    title: 'Portafolio - Luis Fernando',
    description:
      'Explora mi portafolio y conoce más sobre mi trabajo como desarrollador web full stack. Descubre mis proyectos, habilidades y experiencia.',
    url: 'https://mishum.vercel.app',
    siteName: 'Portafolio - Luis Fernando',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Logo de MiSHUN',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio - Luis Fernando',
    description:
      'Conoce más sobre mi trabajo como desarrollador web full stack. Descubre mis proyectos, habilidades y experiencia en mi portafolio personal.',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Logo de MiSHUN'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}
