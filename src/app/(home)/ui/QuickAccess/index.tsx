import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

const QuickAccess: FC = () => {
  return (
    <Link href='/about' className='quickAccess'>
      <h4 className='quickAccess-button'>Mira aquí</h4>
      <h4>Mis experiencias formativas</h4>
      <ArrowRightIcon />
    </Link>
  )
}

export default QuickAccess
