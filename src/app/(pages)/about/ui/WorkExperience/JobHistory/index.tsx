import { historyJobs } from '@/constants/historyJobs'
import SliceContainer from '@/shared/components/SliceContainer'
import type { FC } from 'react'

import Job from './Job'
import './index.scss'

const JobHistory: FC = () => {
  return (
    <SliceContainer maxHeight={1000}>
      <article className='jobHistory'>
        {historyJobs.map(job => {
          return <Job key={job.name} {...job} />
        })}
      </article>
    </SliceContainer>
  )
}

export default JobHistory
