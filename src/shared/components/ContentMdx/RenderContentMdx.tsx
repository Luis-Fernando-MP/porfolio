'use client'

import { ArticleFrontmatter } from '@/shared/mdx/frontmatter.type'
import { CompileMDXResult } from 'next-mdx-remote/rsc'
import { type FC, useEffect, useRef } from 'react'

import './styles/rehype.scss'
import './styles/vs-dark.scss'
import './styles/vs-light.scss'

interface Props {
  data: CompileMDXResult<ArticleFrontmatter> | null
}

const RenderContentMdx: FC<Props> = ({ data }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const contentElement = contentRef.current
    if (!contentElement) return

    const codeBlocks = contentElement.querySelectorAll('pre code')

    codeBlocks.forEach(codeBlock => {
      const preElement = codeBlock.parentElement
      if (!preElement) return

      let copyButton = preElement.querySelector('button#rehype-copy-button')
      if (!copyButton) {
        copyButton = document.createElement('button') as HTMLElement
        copyButton.innerHTML = 'Copy'
        copyButton.id = 'rehype-copy-button'
        copyButton.className = 'rehype-copy-button'
        preElement.insertBefore(copyButton, codeBlock)
      }

      copyButton.addEventListener('click', async () => {
        if (!codeBlock.textContent) return
        await navigator.clipboard.writeText(codeBlock.textContent)
        copyButton.innerHTML = 'Copied!'
        setTimeout(() => (copyButton.innerHTML = 'Copy'), 2500)
      })
    })
  }, [data])

  if (!data) return null
  const { content, frontmatter } = data

  return (
    <article className='rehype' ref={contentRef}>
      <h1>{frontmatter.title}</h1>
      {content}
    </article>
  )
}

export default RenderContentMdx
