import { Image } from '@unpic/react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  userName: string
  photo: string
  extra: string
}

const BasicUserDetail: FC<Props> = ({ userName, photo, extra }) => {
  return (
    <aside className='basicUserDetail' aria-label={`Detalles de usuario: ${userName}`}>
      <Image src={photo} width={40} height={40} alt={`Foto de ${userName}`} className='basicUserDetail-image' loading='lazy' />

      <div className='basicUserDetail-info'>
        <h3 className='basicUserDetail-userName'>{userName}</h3>
        <p className='basicUserDetail-extra'>{extra}</p>
      </div>
    </aside>
  )
}

export default BasicUserDetail
