import { Image, type ImageProps } from '@unpic/react/nextjs'
import { type FC, useId } from 'react'

interface GalleryImageData {
  groupId?: string
  noUniqueGroup?: boolean
  caption?: string
  action?: string
  actionText?: string
  index?: number
}

interface Props extends ImageProps, GalleryImageData {}

const ImageGallery: FC<Props> = ({ src, caption, action, actionText, index, groupId, noUniqueGroup, ...imgProps }) => {
  const fallbackGroupId = useId()
  const finalGroupId = noUniqueGroup ? 'haui' : (groupId ?? fallbackGroupId)

  return (
    <Image
      src={src}
      data-gallery-src={src}
      data-gallery-index={index}
      data-gallery-group={finalGroupId}
      data-gallery-caption={caption}
      data-gallery-action={action}
      data-gallery-action-text={actionText}
      itemProp='image'
      background='/fallback.webp'
      {...imgProps}
    />
  )
}

export default ImageGallery
