import { NotionRenderer } from '@notion-render/client'
import fs from 'fs'
import path from 'path'

import notion from '../api.ts'
import blurHashAndGradient from '../utils/blurHashAndGradient.ts'
import downloadImage from '../utils/downloadImage.ts'

const renderer = new NotionRenderer({ client: notion })

interface mdxContentProps {
  blurhash: string
  placeholder: string
  width: number
  height: number
}

interface Props {
  blockId: string
  mdxFolderPath: string
  mdxImagesPath: string
  lastEditedTime: string
  coverImage: string | undefined
  title: string
  mdxContent: (_: mdxContentProps) => string
}

export async function generateBlock({
  mdxContent,
  mdxFolderPath,
  mdxImagesPath,
  blockId,
  lastEditedTime,
  title,
  coverImage
}: Props) {
  const html = await renderer.renderBlock(blockId)

  const mdxFilePath = path.join(mdxFolderPath, `${blockId}.mdx`)
  const imageFilePath = path.join(mdxImagesPath, `${blockId}_cover.jpg`)

  let blurhash = ''
  let placeholder = ''
  let width = 0
  let height = 0

  try {
    const mdxFileExists = await fs.promises.stat(mdxFilePath).catch(() => false)

    if (mdxFileExists) {
      const mdxContent = await fs.promises.readFile(mdxFilePath, 'utf-8')
      if (mdxContent.includes(`last_edited_time: '${lastEditedTime}'`)) {
        console.log(`  >>> Sin cambios para: ${title}`)
        return
      }
    }

    console.log(`  <<< Generando: ${title}`)

    if (coverImage) {
      const imageExists = await fs.promises.stat(imageFilePath).catch(() => false)
      const imageModifiedTime = imageExists ? (await fs.promises.stat(imageFilePath)).mtime.getTime() : 0
      const lastEditedTimeImage = new Date(lastEditedTime).getTime()

      if (!imageExists || imageModifiedTime !== lastEditedTimeImage) {
        if (imageExists) {
          await fs.promises.unlink(imageFilePath)
        }

        try {
          await downloadImage({ filepath: imageFilePath, url: coverImage })
        } catch (error) {
          console.error(`Error al descargar la imagen de: ${title}`, error)
          return
        }
      }

      const blurData = await blurHashAndGradient(imageFilePath)
      blurhash = blurData.blurhash
      placeholder = blurData.placeholder
      width = blurData.width
      height = blurData.height
    }

    const data = `${mdxContent({ blurhash, placeholder, width, height })}\n<h1>${title}</h1>\n${html?.replaceAll('   ', '')}`

    await fs.promises.writeFile(mdxFilePath, data)
    console.log(`  +++ Generado: ${title}`)
  } catch (error) {
    console.error(`  <<< Error al generar: ${title}`, error)
    throw error
  }
}
