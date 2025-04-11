import IconButton from '@/shared/ui/IconButton'
import { ImageIcon } from 'lucide-react'
import type { FC } from 'react'

interface Props {
  className?: string
}
const Gallery: FC<Props> = ({ className = '' }) => {
  return (
    <section className={`gallery ${className}`}>
      <IconButton>
        <ImageIcon />
        <h4>Mi peque galería</h4>
      </IconButton>
    </section>
  )
}

export default Gallery
