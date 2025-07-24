import { HTMLElement, TextNode, parse } from 'node-html-parser'

export function escapeHTML(html: string): string {
  const root = parse(html, {
    blockTextElements: {
      script: true,
      noscript: true,
      style: true,
      pre: true
    },
    voidTag: {
      tags: ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'],
      closingSlash: true
    }
  })

  const escape = (text: string) =>
    text
      .replace(/<!--/g, '&lt;!--')
      .replace(/-->/g, '--&gt;')
      .replace(/\/\*/g, '&#47;&#42;')
      .replace(/\*\//g, '&#42;&#47;')
      .replace(/\/\/\s/g, '&#47;&#47;')
      .replace(/^#/gm, '&#35;')

      .replace(/_/g, '&#95;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;')
      .replace(/\(/g, '&#40;')
      .replace(/\)/g, '&#41;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/`/g, '&#96;')
      .replace(/\?/g, '&#63;')
      // .replace(/:/g, '&#58;')
      .replace(/,/g, '&#44;')
      .replace(/\+/g, '&#43;')
      .replace(/\^/g, '&#94;')

  function walk(node: HTMLElement) {
    if (node.tagName === 'A') return

    if (node.tagName === 'PRE') {
      const inner = parse(node.innerHTML)
      const codeNode = inner.querySelector('code')
      if (!codeNode) return
      codeNode.childNodes.forEach(child => {
        if (!(child instanceof TextNode)) return
        child.rawText = '\n' + escape(child.rawText) + '\n'
      })
      node.set_content(inner.toString())
      return
    }
    node.childNodes.forEach(child => {
      if (child instanceof TextNode) {
        child.rawText = escape(child.rawText)
      }
      if (child instanceof HTMLElement) {
        walk(child)
      }
    })
  }

  walk(root)

  return root.toString()
}
