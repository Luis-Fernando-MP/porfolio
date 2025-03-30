'use client'

import { CompileMDXResult } from 'next-mdx-remote/rsc'
import { type FC, useEffect, useRef } from 'react'

import './styles/vs-dark.scss'
import './styles/vs-light.scss'

interface Props {
  data: CompileMDXResult | null
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
        preElement.insertBefore(copyButton, codeBlock)
      }

      // Agregar el evento de copiado al botón
      copyButton.addEventListener('click', async () => {
        if (!codeBlock.textContent) return
        await navigator.clipboard.writeText(codeBlock.textContent)
        copyButton.innerHTML = 'Copied!'
        setTimeout(() => (copyButton.innerHTML = 'Copy'), 2500)
      })
    })
  }, [data])

  if (!data) return null
  const { content } = data

  return <div ref={contentRef}>{content}</div>
}

export default RenderContentMdx
