import { acl } from '@/shared/acl'
import { FC, useId } from 'react'

interface Props {
  alt: string
  enableParallax: boolean
  className: string
  src: string
}

const RenderLayer: FC<Props> = ({ alt, enableParallax, className, src }) => {
  const id = useId()

  if (!src) return null
  return (
    <div
      key={`${src}-${id}`}
      className={`imageLayer-layer ${className} ${acl(enableParallax, 'imageLayer-parallax')}`}
      style={{ backgroundImage: `url(${src})` }}
      role='img'
      aria-label={alt}
    />
  )
}

export default RenderLayer
