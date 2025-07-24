import { Charm, Open_Sans, Poppins } from 'next/font/google'

export const font1 = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--family1'
})

export const font2 = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--family2'
})

export const especial1 = Charm({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--especial1'
})

export const bodyFonts = `${font1.variable} ${font2.variable}  ${especial1.variable}`
