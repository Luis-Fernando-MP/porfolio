import { Image } from '@unpic/react'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'

import './styles/candy.scss'
import './styles/cherry-lossom.scss'
import './styles/synth-wave-84.scss'

const components: MDXComponents = {
  Image,
  p: () => null // Para el frontmatter xd?
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <section>
      <Component components={components} />
    </section>
  )
}
