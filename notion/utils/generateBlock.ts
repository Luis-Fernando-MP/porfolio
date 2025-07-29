import { NotionRenderer } from '@notion-render/client'
import chalk from 'chalk'
import path from 'path'
import readingTime from 'reading-time'
import { stripHtml } from 'string-strip-html'

import notion from '../api'
import { escapeHTML } from './escapeHTML'
import { fileExists, lastEditedFile, writeFile } from './fs'
import { getAllBlocks } from './getAllBlocks'
import { handleImageProcessing } from './handleImageProcessing'
import clog from './log'

const renderer = new NotionRenderer({ client: notion })

export interface MdxImageContentProps {
  blurhash: string
  placeholder: string
  bannerWidth: number
  bannerHeight: number
  thumbWidth: number
  thumbHeight: number
  aspectRatio: number
}

export interface MdxContentProps {
  words?: number
  readingTime?: number
  imageProps: MdxImageContentProps
  allImagesBySections?: string[]
}

interface Props {
  blockId: string
  mdxFolderPath: string
  mdxImagesPath: string
  lastEditedTime: string
  coverImage: string | undefined
  title: string
  mdxContent: (_: MdxContentProps) => string
  generateContent?: boolean
}
export interface Block {
  id: string
  type: string
  has_children?: boolean
  [key: string]: any
}

export async function generateBlock(props: Props) {
  const { mdxContent, mdxFolderPath, mdxImagesPath, blockId, lastEditedTime, title, coverImage, generateContent = true } = props

  const mdxFilePath = path.join(mdxFolderPath, `${blockId}.mdx`)
  const lastEditedTimeMs = new Date(lastEditedTime).getTime()
  const cutTitle = title.slice(0, 30)

  try {
    // Verifica si ya está actualizado
    const mdxExist = await fileExists(mdxFilePath)
    if (mdxExist) {
      const isEdited = await lastEditedFile(mdxFilePath, `last_edited_time: '${lastEditedTime}'`)
      if (isEdited) return clog.warn(`Sin cambios: ${cutTitle}`)
    }

    console.log(chalk.blueBright('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
    clog.info(`Generando bloque: ${cutTitle}`, '')

    let imageProps = {
      blurhash: '',
      placeholder: '',
      bannerWidth: 0,
      bannerHeight: 0,
      thumbWidth: 0,
      thumbHeight: 0,
      aspectRatio: 0
    }

    if (coverImage) {
      const processImage = await handleImageProcessing({
        blockId,
        mdxImagesPath,
        coverImage,
        lastEditedTimeMs,
        cutTitle
      })
      if (processImage) imageProps = processImage
    }

    let content = `${mdxContent({ imageProps })}`

    if (generateContent) {
      const blocks = await getAllBlocks({ blockID: blockId })
      const html = await renderer.render(...blocks)

      const plainText = stripHtml(html).result
      const stats = readingTime(plainText)
      const { result, allImages } = escapeHTML(html)

      content = `${mdxContent({ readingTime: Math.ceil(stats.minutes), words: stats.words, imageProps, allImagesBySections: allImages })}\n`
      content += result
    }

    await writeFile(mdxFilePath, content)
    clog.success(`MDX generado: ${cutTitle}`)
    console.log(chalk.blueBright('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'))
  } catch (error) {
    clog.error(`Fallo al generar: ${cutTitle}`)
    console.log(error)
  }
}
