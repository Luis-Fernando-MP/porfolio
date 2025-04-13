import { Image, ImageProps } from '@unpic/react'
import type { FC } from 'react'

// Actualiza el tipo Props para incluir solo los valores permitidos para layout
type Props = Omit<ImageProps, 'layout'> & {
  layout?: 'fixed' | 'constrained'; // Limita los valores de layout
}

const BlurImage: FC<Props> = ({ width, height, layout = 'constrained', alt, ...props }) => {
  return <Image alt={alt ?? ''} width={width ?? 60} height={height ?? 60} layout={layout} {...props} />
}

export default BlurImage 