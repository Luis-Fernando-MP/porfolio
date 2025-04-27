import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { parseTitleToLink } from '../src/lib/parseTitle.ts'
import type NotionMarkSerie from './types/serie.type.ts'
import blurHashAndGradient from './utils/blurHashAndGradient.ts'
import downloadImage from './utils/downloadImage.ts'
import { getAllMarks } from './utils/getAllMarks.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const processMarks = async () => {
  console.time('Total Process Time')
  const marksDb = await getAllMarks<NotionMarkSerie>()
  const marks = marksDb.filter(mark => mark.properties.Situación.status.name === 'Cursando')

  const mdxFolderPath = path.join(__dirname, '..', 'content', 'marks')
  const mdxImagesPath = path.join(__dirname, '..', 'public', 'marks', 'series')

  await Promise.all([
    fs.promises.mkdir(mdxFolderPath, { recursive: true }),
    fs.promises.mkdir(mdxImagesPath, { recursive: true })
  ])

  for (const mark of marks) {
    const { properties } = mark

    const title = properties.Name.title[0].text.content
    const fileName = parseTitleToLink(title)
    console.time(`Process Mark ${title}`)

    const mdxFilePath = path.join(mdxFolderPath, `${fileName}.mdx`)
    const imageFilePath = path.join(mdxImagesPath, `${fileName}_cover.jpg`)

    const lastEditedTime = properties['Última edición'].last_edited_time
    const mdxFileExists = await fs.promises.stat(mdxFilePath).catch(() => false)

    if (mdxFileExists) {
      const mdxContent = await fs.promises.readFile(mdxFilePath, 'utf-8')
      if (mdxContent.includes(`ultima_edicion: ${lastEditedTime}`)) {
        console.log(`  >>> No hay cambios para el ID: ${mark.id.slice(0, 15)}`)
        continue
      }
    }

    const imageExists = await fs.promises.stat(imageFilePath).catch(() => false)
    const imageModifiedTime = imageExists ? (await fs.promises.stat(imageFilePath)).mtime.getTime() : 0

    const lastEditedTimeImage = new Date(properties['Última edición'].last_edited_time).getTime()

    if (!imageExists || imageModifiedTime !== lastEditedTimeImage) {
      if (imageExists) await fs.promises.unlink(imageFilePath)

      try {
        console.time(`---> Generando imagen:  ${title}`)
        await downloadImage({ filepath: imageFilePath, url: mark.cover.external.url })
        console.timeEnd(`---> Imagen generada: ${title}`)
      } catch (error) {
        console.error(`Error al descargar la imagen: ${title}: `, error)
      }
    }

    console.time(`BlurHash and Gradient ${title}`)
    const { blurhash, placeholder, width, height } = await blurHashAndGradient(imageFilePath)
    console.timeEnd(`BlurHash and Gradient ${title}`)

    const mdxContent = `---
  id: ${mark.id}
  quarter: '${properties.Cuatrimestre.select?.name ?? ''}'
  schedule: '${properties.Horario.rich_text.map(item => item.text?.content).join(', ')}'
  situation: '${properties.Situación.status?.name}'
  credits: ${properties.Créditos.number ?? ''}
  deliverable: '${properties.Entregable.select?.name ?? ''}'
  teachers: '${properties['Profesor(es)'].rich_text.map(item => item.text?.content).join(', ')}'

  icon: ${mark.icon.external?.url}
  
  image: '/marks/series/${fileName}_cover.jpg'
  image_width: ${width}
  image_height: ${height}
  image_hash: ${blurhash}
  image_blur: ${placeholder}
  
  notion_url: ${mark.url}
  created_time: ${mark.created_time}
  last_edited_time: ${lastEditedTime}
---

# ${title}`

    await fs.promises.writeFile(mdxFilePath, mdxContent)

    console.timeEnd(`Process Mark ${title}`)
  }

  console.timeEnd('Total Process Time')
}

const generateData = async () => {
  try {
    await processMarks()
  } catch (error) {
    console.error('Error al procesar las marcas:', error)
  }
}

generateData()
