import { NotionRenderer } from '@notion-render/client'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

import notion from './api'
import clog from './helpers/log'
import blurHashAndGradient from './utils/blurHashAndGradient'
import downloadImage from './utils/downloadImage'

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
  const mdxFilePath = path.join(mdxFolderPath, `${blockId}.mdx`)

  const bannerImagePath = path.join(mdxImagesPath, `${blockId}/banner.webp`)
  const thumbImagePath = path.join(mdxImagesPath, `${blockId}/thumb.webp`)
  const lastEditedTimeMs = new Date(lastEditedTime).getTime()

  const cutTitle = title.slice(0, 30)

  let blurhash = '',
    placeholder = ''
  let width = 0,
    height = 0

  try {
    // Verifica si ya está actualizado
    const mdxFileExists = await fs.promises.stat(mdxFilePath).catch(() => false)
    if (mdxFileExists) {
      const existingContent = await fs.promises.readFile(mdxFilePath, 'utf-8')
      if (existingContent.includes(`last_edited_time: '${lastEditedTime}'`)) {
        clog.warn(`Sin cambios: ${cutTitle}`)
        return
      }
    }

    console.log(chalk.blueBright('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
    clog.info(`Generando bloque: ${cutTitle}`, '')

    if (coverImage) {
      const bannerExist = await fs.promises.stat(bannerImagePath).catch(() => false)
      const thumbExist = await fs.promises.stat(bannerImagePath).catch(() => false)

      const imageModifiedTime = bannerExist ? (await fs.promises.stat(bannerImagePath)).mtime.getTime() : 0

      if (!bannerExist || !thumbExist || imageModifiedTime !== lastEditedTimeMs) {
        if (bannerExist) await fs.promises.unlink(bannerImagePath)
        if (thumbExist) await fs.promises.unlink(thumbImagePath)

        try {
          await downloadImage({
            folderPath: path.join(mdxImagesPath, `/${blockId}`),
            bannerImagePath,
            thumbImagePath,
            url: coverImage,
            title: cutTitle
          })
        } catch (_) {
          clog.error(`Descarga fallida: ${cutTitle}`)
          return
        }
      }

      const blurData = await blurHashAndGradient(thumbImagePath)
      blurhash = blurData.blurhash
      placeholder = blurData.placeholder
      width = blurData.width
      height = blurData.height
    }

    const html = await renderer.renderBlock(blockId)
    const content = `${mdxContent({ blurhash, placeholder, width, height })}\n<h1>${title}</h1>\n${html?.replaceAll('   ', '')}`

    await fs.promises.writeFile(mdxFilePath, content)
    clog.success(`MDX generado: ${cutTitle}`)
    console.log(chalk.blueBright('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  } catch (error) {
    clog.error(`Fallo al generar: ${cutTitle}`)
    throw error
  }
}
