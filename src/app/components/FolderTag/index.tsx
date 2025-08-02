import { FolderIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

interface Props {
  color: string
  name: string
}

const FolderTag: FC<Props> = ({ color, name }) => {
  return (
    <div className='folderTag'>
      <FolderIcon size={10} className={`folderTag-icon ${color}`} />
      <label className='folderTag-name ellipsis'>{name}</label>
    </div>
  )
}

export default FolderTag
