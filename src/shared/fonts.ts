import { Monoton, Montserrat, Open_Sans } from 'next/font/google'

export const font1 = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--family1'
})

export const font2 = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--family2'
})

export const especial1 = Monoton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--especial1'
})

export const bodyFonts = `${font1.variable} ${font2.variable}  ${especial1.variable}`
