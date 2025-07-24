import { Instrument_Serif, Roboto } from 'next/font/google'

export const font1 = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--family1'
})

export const especial1 = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--family2'
})

export const bodyFonts = `${font1.variable} ${especial1.variable}`
