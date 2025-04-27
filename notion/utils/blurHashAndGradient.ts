import { blurhashToCssGradientString } from '@unpic/placeholder'
import { encode } from 'blurhash'
import sharp from 'sharp'

/**
 * Genera un blurhash a partir de una ruta local de imagen usando solo Sharp
 * @param {string} imagePath - Ruta local de la imagen
 */
export default async function blurHashAndGradient(imagePath: string) {
  try {
    const { data, info } = await sharp(imagePath)
      .resize(50, 50, { fit: 'inside' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })

    const width = info.width
    const height = info.height

    const pixels = new Uint8ClampedArray(data)

    const blurhash = encode(pixels, width, height, 4, 4)
    const placeholder = blurhashToCssGradientString(blurhash)

    return { blurhash, placeholder, width, height }
  } catch (error) {
    console.error(`Error generando blurhash para ${imagePath}:`, error)
    throw error
  }
}
