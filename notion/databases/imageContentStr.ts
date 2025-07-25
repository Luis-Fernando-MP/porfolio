import type { MdxImageContentProps } from '@notion/utils/generateBlock'

export const imageContentStr = (imageProps: MdxImageContentProps, folder: string, id?: string) => {
  const { aspectRatio, bannerHeight, bannerWidth, blurhash, placeholder, thumbHeight, thumbWidth } = imageProps

  return `banner: ${id ? `'/content/${folder}/${id}/banner.webp'` : "'/fallback.webp'"}
image_width: ${bannerWidth}
image_height: ${bannerHeight}
aspectRatio: ${aspectRatio}
image_hash: '${blurhash}'
image_blur: '${placeholder}'

thumb: ${id ? `'/content/${folder}/${id}/thumb.webp'` : "'/fallback.webp'"}
thumb_width: ${thumbWidth}
thumb_height: ${thumbHeight}`
}
