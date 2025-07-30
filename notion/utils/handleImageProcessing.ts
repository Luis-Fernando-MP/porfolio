import path from 'path'

import blurHashAndGradient from '../utils/blurHashAndGradient'
import downloadImage from '../utils/downloadImage'
import { deleteFileIfExists, fileExists, getFileTime } from '../utils/fs'
import clog from '../utils/log'

interface Props {
  blockId: string
  mdxImagesPath: string
  coverImage: string
  lastEditedTimeMs: number
  cutTitle: string
}

export async function handleImageProcessing(props: Props) {
  const { blockId, mdxImagesPath, coverImage, lastEditedTimeMs, cutTitle } = props

  const bannerImagePath = path.join(mdxImagesPath, `${blockId}/banner.webp`)
  const thumbImagePath = path.join(mdxImagesPath, `${blockId}/thumb.webp`)

  const bannerExist = await fileExists(bannerImagePath)
  const thumbExist = await fileExists(thumbImagePath)

  const imageModifiedTime = bannerExist ? getFileTime(bannerImagePath) : 0

  if (bannerExist && thumbExist && imageModifiedTime === lastEditedTimeMs) return

  await deleteFileIfExists(bannerImagePath)
  await deleteFileIfExists(thumbImagePath)

  try {
    const { bannerImage, thumbImage } = await downloadImage({
      folderPath: path.join(mdxImagesPath, `/${blockId}`),
      bannerImagePath,
      thumbImagePath,
      url: coverImage,
      title: cutTitle
    })

    const { blurhash, placeholder } = await blurHashAndGradient(thumbImagePath)

    return {
      blurhash,
      placeholder,
      bannerWidth: bannerImage.width,
      bannerHeight: bannerImage.height,
      thumbWidth: thumbImage.width,
      thumbHeight: thumbImage.height,
      aspectRatio: thumbImage.width / thumbImage.height
    }
  } catch (error) {
    clog.error(`Descarga fallida: ${cutTitle}`)
    throw new Error(`Image download failed: ${error}`)
  }
}
