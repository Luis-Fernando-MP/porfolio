import clog from '@notion/utils/log'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

interface Props {
  url: string
  folderPath: string
  bannerImagePath: string
  thumbImagePath: string
  title: string
}

export default async function downloadImage({ folderPath, url, bannerImagePath, thumbImagePath, title }: Props) {
  const tempPath = path.join(folderPath, `temp.jpg`)
  clog.info(`Descargando portada: ${title}`, '')
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })

    if (response.status !== 200) throw new Error(`Error HTTP: ${response.status}`)

    await fs.promises.mkdir(folderPath, { recursive: true })

    // Guardar imagen temporal
    await new Promise((resolve, reject) => {
      response.data.pipe(fs.createWriteStream(tempPath)).on('error', reject).once('close', resolve)
    })
    clog.success(`Temporal creado`)

    // Guardar imagen grande
    await sharp(tempPath).resize({ width: 1500 }).webp({ quality: 80 }).toFile(bannerImagePath)
    clog.success('Banner listo')

    // Guardar imagen pequeña
    await sharp(tempPath).resize({ width: 400 }).webp({ quality: 70 }).toFile(thumbImagePath)
    clog.success('Thumb listo')

    await fs.promises.unlink(tempPath)
    clog.success('Temporal eliminado 🧹')

    return { bannerImagePath, thumbImagePath }
  } catch (error) {
    clog.error(`Error al procesar imagen: ${url}`)
    throw error
  }
}
