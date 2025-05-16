import { NotionRenderer } from '@notion-render/client'
import { Client } from '@notionhq/client'
import chalk from 'chalk'
import path from 'path'

import notion from '../api'
import { escapeHTML } from './escapeHTML'
import { fileExists, lastEditedFile, writeFile } from './fs'
import { getAllBlocks } from './getAllBlocks'
import { handleImageProcessing } from './handleImageProcessing'
import clog from './log'

const renderer = new NotionRenderer({ client: notion })

export interface MdxContentProps {
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

    let blurhash = '',
      placeholder = '',
      width = 0,
      height = 0

    if (coverImage) {
      const blurData = await handleImageProcessing({
        blockId,
        mdxImagesPath,
        coverImage,
        lastEditedTimeMs,
        cutTitle
      })
      blurhash = blurData.blurhash
      placeholder = blurData.placeholder
      width = blurData.width
      height = blurData.height
    }

    let content = `${mdxContent({ blurhash, placeholder, width, height })}`
    if (generateContent) {
      const blocks = await getAllBlocks({ blockID: blockId })
      const html = await renderer.render(...blocks)
      content += escapeHTML(html.replaceAll('   ', '').replaceAll('\n\n\n', ''))
    }

    await writeFile(mdxFilePath, content)
    clog.success(`MDX generado: ${cutTitle}`)
    console.log(chalk.blueBright('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'))
  } catch (error) {
    clog.error(`Fallo al generar: ${cutTitle}`)
    console.log(error)
  }
}
