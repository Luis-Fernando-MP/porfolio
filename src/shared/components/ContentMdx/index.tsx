'use server'

import { generateMdxData } from '@/shared/mdx/generateMdxData'
import { type FC } from 'react'

import RenderContentMdx from './RenderContentMdx'

const mapOfDirs = {
  projects: 'src/constants/markdown'
}

interface Props {
  mdxPath: string
  typeDir: keyof typeof mapOfDirs
}

const ContentMdx: FC<Props> = async ({ mdxPath, typeDir }) => {
  if (!(typeDir in mapOfDirs)) return null
  const filePath = `${mapOfDirs[typeDir]}/${mdxPath}`
  const data = await generateMdxData({ mdxPath: filePath })

  return <RenderContentMdx data={data} />
}

export default ContentMdx
