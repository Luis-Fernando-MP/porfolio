import { Montserrat, Open_Sans, Raleway } from 'next/font/google'

export const font1 = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--family1'
})

export const font2 = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--family2'
})

export const font3 = Raleway({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--familyEspecial'
})

export const bodyFonts = `${font1.variable} ${font2.variable} ${font3.variable}`
