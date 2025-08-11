import { historyJobs } from '@/constants/historyJobs'
import SliceContainer from '@/shared/components/SliceContainer'
import type { FC } from 'react'

import Job from './Job'
import './index.scss'

const JobHistory: FC = () => {
  return (
    <SliceContainer reverse maxHeight={1000}>
      <section className='jobHistory'>
        {historyJobs.slice(0, 2).map(job => {
          return <Job key={job.name} {...job} />
        })}
      </section>
    </SliceContainer>
  )
}

export default JobHistory
