// src/imageProcessor.ts
import path from 'path'

import blurHashAndGradient from '../utils/blurHashAndGradient'
import downloadImage from '../utils/downloadImage'
import { deleteFileIfExists, fileExists, getFileTime } from '../utils/fs'
import clog from '../utils/log'
import { MdxImageContentProps } from './generateBlock'

interface ProcessingImgProps {
  blockId: string
  mdxImagesPath: string
  imageUrl: string
  lastEditedTimeMs: number
  cutTitle: string
  imageKey: string
}

export type SimpleAdditionalImages = {
  bannerImagePath: string
  thumbImagePath: string
}

// ruta absoluta a ruta relativa desde /public
function toPublicRelativePath(fullPath: string): string {
  const publicDir = path.join(process.cwd(), 'public')
  return '/' + path.relative(publicDir, fullPath).replace(/\\/g, '/')
}

// Procesa imagen principal cover con blurhash
export async function handleImageProcessing(props: ProcessingImgProps): Promise<MdxImageContentProps | undefined> {
  const { blockId, mdxImagesPath, imageUrl, lastEditedTimeMs, cutTitle, imageKey } = props
  const folder = path.join(mdxImagesPath, blockId)
  const bannerFull = path.join(folder, `${imageKey}-banner.webp`)
  const thumbFull = path.join(folder, `${imageKey}-thumb.webp`)

  const bannerExists = await fileExists(bannerFull)
  const thumbExists = await fileExists(thumbFull)
  const modified = bannerExists ? getFileTime(bannerFull) : 0

  if (bannerExists && thumbExists && modified === lastEditedTimeMs) {
    return
  }

  await deleteFileIfExists(bannerFull)
  await deleteFileIfExists(thumbFull)

  try {
    const { bannerImage, thumbImage } = await downloadImage({
      folderPath: folder,
      bannerImagePath: bannerFull,
      thumbImagePath: thumbFull,
      url: imageUrl,
      title: cutTitle
    })

    const { blurhash, placeholder } = await blurHashAndGradient(thumbFull)

    return {
      blurhash,
      placeholder,
      bannerWidth: bannerImage.width,
      bannerHeight: bannerImage.height,
      thumbWidth: thumbImage.width,
      thumbHeight: thumbImage.height,
      aspectRatio: thumbImage.width / thumbImage.height,
      type: imageKey
    }
  } catch (err) {
    clog.error(`❌ Descarga fallida: ${cutTitle} (${imageKey})`)
    throw new Error(`Image download failed: ${err}`)
  }
}

// Procesa una imagen dentro de las secciones #image-from, retorna rutas relativas
async function processSingleGalleryImage(props: ProcessingImgProps): Promise<SimpleAdditionalImages | null> {
  const { blockId, mdxImagesPath, imageUrl, lastEditedTimeMs, cutTitle, imageKey } = props
  const folder = path.join(mdxImagesPath, blockId)
  const bannerFull = path.join(folder, `${imageKey}-banner.webp`)
  const thumbFull = path.join(folder, `${imageKey}-thumb.webp`)

  const bannerExists = await fileExists(bannerFull)
  const thumbExists = await fileExists(thumbFull)
  const modified = bannerExists ? getFileTime(bannerFull) : 0

  if (bannerExists && thumbExists && modified === lastEditedTimeMs) {
    return {
      bannerImagePath: toPublicRelativePath(bannerFull),
      thumbImagePath: toPublicRelativePath(thumbFull)
    }
  }

  await deleteFileIfExists(bannerFull)
  await deleteFileIfExists(thumbFull)

  try {
    await downloadImage({
      folderPath: folder,
      bannerImagePath: bannerFull,
      thumbImagePath: thumbFull,
      url: imageUrl,
      title: cutTitle
    })

    return {
      bannerImagePath: toPublicRelativePath(bannerFull),
      thumbImagePath: toPublicRelativePath(thumbFull)
    }
  } catch (err) {
    clog.error(`❌ Galería: no se descargó ${cutTitle} (${imageKey})`)
    return null
  }
}

type MultipleImgsProps = {
  blockId: string
  mdxImagesPath: string
  lastEditedTimeMs: number
  cutTitle: string
  imageUrls: string[]
}
// Procesa un arreglo de imágenes en secuencia
export async function processMultipleImages({
  blockId,
  mdxImagesPath,
  lastEditedTimeMs,
  cutTitle,
  imageUrls
}: MultipleImgsProps) {
  const results: SimpleAdditionalImages[] = []

  for (let i = 0; i < imageUrls.length; i++) {
    const imageKey = `img${i + 1}`
    const single = await processSingleGalleryImage({
      blockId,
      mdxImagesPath,
      imageUrl: imageUrls[i],
      lastEditedTimeMs,
      cutTitle,
      imageKey
    })
    if (single) results.push(single)
  }

  return results
}
