import { NotionRenderer } from '@notion-render/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { parseTitleToLink } from '../src/lib/parseTitle.ts'
import notion from './api.ts'
import type NotionMarkDBSerie from './types/series.type.ts'
import blurHashAndGradient from './utils/blurHashAndGradient.ts'
import downloadImage from './utils/downloadImage.ts'
import { getAllMarksDB } from './utils/getAllMarks.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const renderer = new NotionRenderer()

const processMarks = async () => {
  console.time('Total Process Time')
  const marksDb = await getAllMarksDB<NotionMarkDBSerie>()
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
    const mdxFilePath = path.join(mdxFolderPath, `${fileName}.mdx`)
    const imageFilePath = path.join(mdxImagesPath, `${fileName}_cover.jpg`)

    const lastEditedTime = properties['Última edición'].last_edited_time

    try {
      const mdxFileExists = await fs.promises.stat(mdxFilePath).catch(() => false)

      if (mdxFileExists) {
        const mdxContent = await fs.promises.readFile(mdxFilePath, 'utf-8')
        if (mdxContent.includes(`last_edited_time: '${lastEditedTime}'`)) {
          console.log(`  >>> SIn cambios para: ${title}`)
          continue
        }
      }

      console.log(`  <<< generando: ${title}`)
      const imageExists = await fs.promises.stat(imageFilePath).catch(() => false)
      const imageModifiedTime = imageExists ? (await fs.promises.stat(imageFilePath)).mtime.getTime() : 0

      const lastEditedTimeImage = new Date(properties['Última edición'].last_edited_time).getTime()

      if (!imageExists || imageModifiedTime !== lastEditedTimeImage) {
        if (imageExists) await fs.promises.unlink(imageFilePath)

        try {
          await downloadImage({ filepath: imageFilePath, url: mark.cover.external.url })
        } catch (error) {
          console.error(`Error al descargar la imagen: ${title}: `, error)
        }
      }

      const { blurhash, placeholder, width, height } = await blurHashAndGradient(imageFilePath)

      const mdxContent = `---
id: '${mark.id}'
title: '${title}'
quarter: '${properties.Cuatrimestre.select?.name ?? ''}'
schedule: '${properties.Horario.rich_text.map(item => item.text?.content).join(', ')}'
situation: '${properties.Situación.status?.name}'
credits: '${properties.Créditos.number ?? ''}'
deliverable: '${properties.Entregable.select?.name ?? ''}'
teachers: '${properties['Profesor(es)'].rich_text.map(item => item.text?.content).join(', ')}'
icon: '${mark.icon.external?.url}'

image: '/marks/series/${fileName}_cover.jpg'
image_width: ${width}
image_height: ${height}
image_hash: '${blurhash}'
image_blur: '${placeholder}'

tags:
${properties.Tags.multi_select.map(s => `  - ${s.name}`).join('\n')} 

notion_url: '${mark.url}'
created_time: '${mark.created_time}'
last_edited_time: '${lastEditedTime}'
---

# ${title}`

      await fs.promises.writeFile(mdxFilePath, mdxContent)
      console.log(`  +++ generado: ${title}`)
    } catch (error) {
      console.log(`  <<< error al generar: ${title}`)
      throw error
    }
  }

  console.timeEnd('Total Process Time')
}

const processPage = async () => {
  // const blocks = await getAllBlocks<InternalSerieBlockDB>({ blockID: '1ce98397-f7fa-8029-9173-d98a3d978922' })

  const block = await notion.pages.retrieve({
    page_id: '1ce98397-f7fa-8029-9173-d98a3d978922'
  })

  // const marks = await getAllMarks({ dbID: '1cf98397f7fa80609355d9f5b10c23bb' })

  // const mapOfMarkdowns = marks.reduce((acc, md) => {
  //   const category = md.properties.Categoría.select.name
  //   acc[category] ??= []
  //   acc[category].push(md)
  //   return acc
  // }, {})

  console.log(block)
  // const { results }: any = await notion.blocks.children.list({
  //   block_id:
  // })

  // const internalDBs = blocks.filter(block => block.type === 'child_database')

  // const html = await renderer.render(...blocks)

  // console.log('marks', marks, '\n\n\n')
  // console.log(internalDBs)
}

const generateData = async () => {
  try {
    // await processMarks()
    await processPage()
  } catch (error) {
    console.error('Error al procesar las marcas:', error)
  }
}

generateData()
