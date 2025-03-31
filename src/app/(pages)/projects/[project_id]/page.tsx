'use server'

import ContentMdx from '@/shared/components/ContentMdx'
import type { FC } from 'react'

const Page: FC = async () => {
  return (
    <div>
      hola abajo:
      <ContentMdx mdxPath='smart-love.mdx' typeDir='projects' />
    </div>
  )
}

export default Page
