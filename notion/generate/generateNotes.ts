import fs from 'fs'
import path from 'path'

import type { NotionSeriesDB } from '../types/series.type.ts'
import { generateBlock } from './generateBlock.ts'

export async function generateNotes(notes: NotionSeriesDB[]) {
  const notesList = [...notes]
  console.time('Total Process Time')

  const mdxFolderPath = path.join(process.cwd(), 'content/notes')
  const mdxImagesPath = path.join(process.cwd(), 'public/marks/notes')

  await Promise.all([
    fs.promises.mkdir(mdxFolderPath, { recursive: true }),
    fs.promises.mkdir(mdxImagesPath, { recursive: true })
  ])

  for (const note of notesList) {
    const { properties, id } = note

    const title = note.properties.Name.title[0].plain_text
    const lastEditedTime = properties['Última edición'].last_edited_time

    await generateBlock({
      blockId: id,
      coverImage: note.cover?.external.url,
      lastEditedTime,
      mdxFolderPath,
      mdxImagesPath,
      title,
      mdxContent: ({ blurhash, placeholder, width, height }) => {
        return `---
          id: '${note.id}'
          title: '${title}'
          image: '/marks/notes/${id}_cover.jpg'
          image_width: ${width}
          image_height: ${height}
          image_hash: '${blurhash}'
          image_blur: '${placeholder}'
          created_time: '${note.created_time}'
          last_edited_time: '${lastEditedTime}'
          ---`.replaceAll('  ', '')
      }
    })
  }

  console.timeEnd('Total Process Time')
}
