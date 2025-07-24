'use client'

import { blurhashToCssGradientString } from '@unpic/placeholder'
import { ImageProps, Image as UnpicImage } from '@unpic/react'
import { TriangleAlertIcon } from 'lucide-react'
import { type FC, useLayoutEffect, useMemo, useState } from 'react'

import './style.scss'

type Props = ImageProps & {
  blurhash: string
  src: string
  minWidthSize?: number
  minHeightSize?: number
}

const BlurImage: FC<Props> = ({
  width,
  height,
  layout = 'constrained',
  blurhash,
  src,
  minWidthSize,
  minHeightSize,
  ...props
}) => {
  const [error, setError] = useState(false)

  const placeholder = useMemo(() => blurhashToCssGradientString(blurhash), [blurhash])

  useLayoutEffect(() => {
    const image = new Image()
    image.src = src
    image.onerror = () => setError(true)
  }, [])

  return (
    <div
      style={{
        background: placeholder,
        height: error ? (minHeightSize ?? '100%') : '100%',
        width: error ? (minWidthSize ?? '100%') : '100%'
      }}
      className='blurImage'
    >
      {error && (
        <div className='blurImage-error'>
          <TriangleAlertIcon />
        </div>
      )}
      {!error && (
        <UnpicImage src={src} width={width as any} height={height as any} layout={layout} {...props} background={placeholder} />
      )}
    </div>
  )
}

export default BlurImage
