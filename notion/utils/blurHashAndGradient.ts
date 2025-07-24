import clog from '@notion/utils/log'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { encode } from 'blurhash'
import sharp from 'sharp'

/**
 * Genera un blurhash a partir de una ruta local de imagen usando Sharp
 * @param {string} imagePath - Ruta local de la imagen
 */
export default async function blurHashAndGradient(imagePath: string) {
  try {
    clog.info('Procesando blurhash', '')
    const start = performance.now()
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

    const duration = Math.round(performance.now() - start)
    clog.timer(`Blurhash generado: `, duration)
    return { blurhash, placeholder, width, height }
  } catch (error) {
    clog.error(`Error blurhash: ${imagePath}`)
    throw error
  }
}
