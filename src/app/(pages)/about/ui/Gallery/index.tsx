import { galleryImages } from '@/constants/gallery-images'
import BlurImage from '@/shared/components/BlurImage'
import { Image } from '@unpic/react'
import { ImageIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const Gallery: FC<Props> = ({ className = '' }) => {
  return (
    <section className={`gallery border ${className}`}>
      <div className='gallery-title'>
        <ImageIcon />
        <h4>Mi pequeña galería</h4>
      </div>

      <ul className='gallery-images'>
        {[
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages,
          ...galleryImages
        ].map((item, i) => {
          const { image, blurhash } = item
          const key = `gallery-image-${i}`
          return (
            <li className='gallery-image border' key={key}>
              <BlurImage
                blurhash={blurhash}
                src={image}
                alt='Gallery image'
                layout='fullWidth'
                minWidthSize={50}
                minHeightSize={50}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Gallery
