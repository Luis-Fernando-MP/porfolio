import { parseTitleToLink } from '@/lib/parseTitle'
import SpotlightCard from '@/shared/components/SpotlightCard'
import TransitionContent from '@/shared/components/TransitionContent'
import Tags from '@/shared/ui/Tags'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

dayjs.locale('es')

interface Props {
  title: string
  publishedAt: string
  resume: string
  tags: string[]
}

const LatestPost: FC<Props> = ({ title, publishedAt, resume, tags }) => {
  const parseDate = dayjs(publishedAt).format('MMM DD, YYYY')
  const postURL = `/posts/${parseTitleToLink(title)}`

  return (
    <TransitionContent className='latestPost'>
      <SpotlightCard className='latestPost-spotlight border'>
        <div className='latestPost-wrapper'>
          <Link href={postURL} className='latestPost-open'>
            <ArrowUpRightIcon />
          </Link>

          <div className='latestPost-description'>
            <h5 className='latestPost-date'>{parseDate}</h5>
            <Link href={postURL} className='latestPost-title titleLink'>
              <h2>{title}</h2>
            </Link>
            <p className='latestPost-resume'>{resume}</p>
          </div>
          <Tags tags={tags} areLinks keyParent='latest-post' />
        </div>
      </SpotlightCard>
    </TransitionContent>
  )
}

export default LatestPost
