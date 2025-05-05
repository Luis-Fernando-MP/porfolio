import path from 'path'

import blurHashAndGradient from '../utils/blurHashAndGradient'
import downloadImage from '../utils/downloadImage'
import { deleteFileIfExists, fileExists, geFileTime } from '../utils/fs'
import clog from '../utils/log'

interface Props {
  blockId: string
  mdxImagesPath: string
  coverImage: string
  lastEditedTimeMs: number
  cutTitle: string
}

const defaultBlurhash = { blurhash: '', placeholder: '', width: 0, height: 0 }

export async function handleImageProcessing(props: Props) {
  const { blockId, mdxImagesPath, coverImage, lastEditedTimeMs, cutTitle } = props

  const bannerImagePath = path.join(mdxImagesPath, `${blockId}/banner.webp`)
  const thumbImagePath = path.join(mdxImagesPath, `${blockId}/thumb.webp`)

  const bannerExist = await fileExists(bannerImagePath)
  const thumbExist = await fileExists(thumbImagePath)

  const imageModifiedTime = bannerExist ? geFileTime(bannerImagePath) : 0

  if (bannerExist && thumbExist && imageModifiedTime === lastEditedTimeMs) return defaultBlurhash

  await deleteFileIfExists(bannerImagePath)
  await deleteFileIfExists(thumbImagePath)

  try {
    await downloadImage({
      folderPath: path.join(mdxImagesPath, `/${blockId}`),
      bannerImagePath,
      thumbImagePath,
      url: coverImage,
      title: cutTitle
    })

    return blurHashAndGradient(thumbImagePath)
  } catch (error) {
    clog.error(`Descarga fallida: ${cutTitle}`)
    throw new Error(`Image download failed: ${error}`)
  }
}
