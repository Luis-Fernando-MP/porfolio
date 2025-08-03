import { metadataByPage } from '@/constants/metadata'
import { Metadata } from 'next'
import type { FC } from 'react'

export const metadata: Metadata = metadataByPage.projects

const Projects: FC = () => {
  return <div>projects</div>
}

export default Projects
