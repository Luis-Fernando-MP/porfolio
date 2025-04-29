import fs from 'fs'
import path from 'path'

import type { NotionMarksDB } from '../types/marks.type.ts'
import type { NotionSeriesDB } from '../types/series.type.ts'
import { generateBlock } from './generateBlock.ts'

type NotionGroupSerie = NotionSeriesDB & {
  marks: NotionMarksDB[]
}

export async function generateSerie(serie: NotionGroupSerie) {
  console.time('Total Process Time')

  const mdxFolderPath = path.join(process.cwd(), 'content/series')
  const mdxImagesPath = path.join(process.cwd(), 'public/marks/series')

  await Promise.all([
    fs.promises.mkdir(mdxFolderPath, { recursive: true }),
    fs.promises.mkdir(mdxImagesPath, { recursive: true })
  ])

  const { properties, id, cover, created_time } = serie

  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time

  await generateBlock({
    blockId: id,
    coverImage: cover?.external.url,
    lastEditedTime,
    mdxFolderPath,
    mdxImagesPath,
    title,
    mdxContent: ({ blurhash, placeholder, width, height }) => {
      return `---
          id: '${id}'
          title: '${title}'
          image: '/marks/notes/${id}_cover.jpg'
          image_width: ${width}
          image_height: ${height}
          image_hash: '${blurhash}'
          image_blur: '${placeholder}'
          created_time: '${created_time}'
          last_edited_time: '${lastEditedTime}'
          ---`.replaceAll('  ', '')
    }
  })

  console.timeEnd('Total Process Time')
}
