import { Image } from '@unpic/react'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'

import './styles/base.scss'

const components: MDXComponents = {
  Image,
  p: () => null // Remueve el frontmatter xd?
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <section className='prism'>
      <Component components={components} />
    </section>
  )
}
