import IconLink from '@/shared/ui/IconLink'
import Title from '@/shared/ui/Title'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import LastedPosts from '../../components/LastedPosts'
import './style.scss'
import './userMobile.scss'

const HomeContent: FC = () => {
  return (
    <article className='content'>
      <section className='content-section'>
        <Title sub='Ultimas' title='Publicaciones?' />
        <p className='content-description'>Un solo grano de arena también hace desierto.</p>
        <IconLink href='/projects' className='active'>
          <h4>MIra mis posts</h4>
          <ArrowRightIcon />
        </IconLink>
        <LastedPosts />
      </section>
    </article>
  )
}

export default HomeContent
