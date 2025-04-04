import MiShumDev from '@/shared/ui/MiShumDev'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLElement> {}

const DescriptionHeader: FC<Props> = ({ className = '', ...props }) => {
  return (
    <header className={`descriptionHeader ${className}`} {...props}>
      <section className='descriptionHeader-top'>
        <MiShumDev radius='rounded' />
        <div className='descriptionHeader-crafting'>
          <h4>Listo para desarrollar contigo</h4>
        </div>
      </section>

      <h4 className='descriptionHeader-paragraph'>
        Desarrollador y diseñador de <br /> aplicaciones web <u>Full Stack</u>
      </h4>
    </header>
  )
}

export default DescriptionHeader
