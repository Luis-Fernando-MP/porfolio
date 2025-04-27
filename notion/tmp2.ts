import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import type NotionMarkSerie from './types/serie.type.ts'
import blurHashAndGradient from './utils/blurHashAndGradient.ts'
import downloadImage from './utils/downloadImage.ts'
import { getAllMarks } from './utils/getAllMarks.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const processMarks = async () => {
  const marksDb = await getAllMarks<NotionMarkSerie>()
  const marks = marksDb.filter(mark => mark.properties.Situación.status.name === 'Cursando')

  const mdxFolderPath = path.join(__dirname, '..', 'mdx')
  const mdxImagesPath = path.join(__dirname, '..', 'public', 'marks', 'series')

  await Promise.all([
    fs.promises.mkdir(mdxFolderPath, { recursive: true }),
    fs.promises.mkdir(mdxImagesPath, { recursive: true })
  ])

  for (const mark of marks) {
    const mdxFilePath = path.join(mdxFolderPath, `${mark.id}.mdx`)
    const imageFilePath = path.join(mdxImagesPath, `${mark.id}_cover.jpg`)

    const lastEditedTime = mark.properties['Última edición'].last_edited_time
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
    const lastEditedTimeImage = new Date(mark.properties['Última edición'].last_edited_time).getTime()

    // Si la imagen no existe o su tiempo de modificación ha cambiado, descargar o eliminar la imagen antigua
    if (!imageExists || imageModifiedTime !== lastEditedTimeImage) {
      if (imageExists) {
        await fs.promises.unlink(imageFilePath)
        console.log(`   >>> Imagen antigua eliminada: ${mark.id}`)
      }

      try {
        await downloadImage({ filepath: imageFilePath, url: mark.cover.external.url })
        console.log(`---> Imagen generad: ${mark.id}`)
      } catch (error) {
        console.error(`Error al descargar la imagen: ${mark.id}: `, error)
      }
    }

    const { blurhash, cssGradient } = await blurHashAndGradient(imageFilePath)

    const mdxContent = `---
id: ${mark.id}
created_time: ${mark.created_time}
last_edited_time: ${lastEditedTime}
cuatrimestre: ${mark.properties.Cuatrimestre.select || ''}
horario: ${mark.properties.Horario.rich_text.map(item => item.text.content).join(', ')}
situacion: ${mark.properties.Situación.status.name}
creditos: ${mark.properties.Créditos.number || ''}
entregable: ${mark.properties.Entregable.select || ''}
profesores: ${mark.properties['Profesor(es)'].rich_text.map(item => item.text.content).join(', ')}
fecha_creacion: ${mark.properties['Fecha de creación'].created_time}
ultima_edicion: ${lastEditedTime}
url: ${mark.url}
cover: ${mark.cover.external.url}
icon: ${mark.icon.external.url}
blurhash: ${blurhash}
css_gradient: ${cssGradient}
---

# ${mark.properties.Name.title[0].text.content}
`

    await fs.promises.writeFile(mdxFilePath, mdxContent)
    console.log(`---> MDX generado: ${mark.id}`)
  }
}

const generateData = async () => {
  try {
    await processMarks()
  } catch (error) {
    console.error('Error al procesar las marcas:', error)
  }
}

generateData()
