import type { MdxImageContentProps } from '@notion/utils/generateBlock'
import { SimpleAdditionalImages } from '@notion/utils/handleImageProcessing'

export const imageContentStr = (imageProps: MdxImageContentProps, folder: string, id?: string) => {
  const { aspectRatio, bannerHeight, bannerWidth, blurhash, placeholder, thumbHeight, thumbWidth } = imageProps

  const encode = (str: string) => Buffer.from(str).toString('base64')

  return `banner: ${id ? `'/content/${folder}/${id}/banner.webp'` : "'/fallback.webp'"}
banner_width: ${bannerWidth}
banner_height: ${bannerHeight}
aspectRatio: ${aspectRatio}
image_hash: '${encode(blurhash)}'
image_blur: '${encode(placeholder)}'
thumb: ${id ? `'/content/${folder}/${id}/thumb.webp'` : "'/fallback.webp'"}
thumb_width: ${thumbWidth}
thumb_height: ${thumbHeight}`
}

export const additionalImagesStr = (images: SimpleAdditionalImages[]) => {
  return `allImagesBySections:\n${images
    .map(({ bannerImagePath, thumbImagePath }) => `  - banner: '${bannerImagePath}'\n    thumb: '${thumbImagePath}'`)
    .join('\n')}`
}
