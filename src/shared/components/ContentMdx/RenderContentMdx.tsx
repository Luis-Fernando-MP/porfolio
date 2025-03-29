'use client'

import { CompileMDXResult } from 'next-mdx-remote/rsc'
import { type FC } from 'react'

interface Props {
  data: CompileMDXResult | null
}

const RenderContentMdx: FC<Props> = ({ data }) => {
  return <>{data?.content}</>
}

export default RenderContentMdx
