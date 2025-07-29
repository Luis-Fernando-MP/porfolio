import { HTMLElement, TextNode, parse } from 'node-html-parser'

export function escapeHTML(html: string) {
  html = html.replaceAll('   ', '').replaceAll('\n\n\n', '').trim()
  html = removeAllDeleteSections(html)

  const { allImages, newStr: cleanedHtml } = getImagesFromCustomSection(html)
  html = cleanedHtml

  const root = parse(html, {
    blockTextElements: {
      script: true,
      noscript: true,
      style: true,
      b: true,
      i: true,
      u: true,
      strong: true,
      em: true,
      small: true,
      mark: true,
      span: true
    },
    voidTag: {
      tags: ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'],
      closingSlash: true
    }
  })

  walkAndTransform(root, escapeSpecialChars)

  const result = root
    .toString()
    .replace(/\s+(target="_blank")(?=.*\1)/g, '')
    .replace(/>&#/g, '>\n&#')
    .replaceAll('class', 'className')

  return { result, allImages }
}

function getImagesFromCustomSection(html: string) {
  const imageBlockRegex =
    /<p[^>]*>\s*(<span[^>]*>)?#image-from(<\/span>)?\s*<\/p>[\s\S]*?<p[^>]*>\s*(<span[^>]*>)?#image-to(<\/span>)?\s*<\/p>/g

  let matches: RegExpExecArray | null = null
  let allImages: string[] = []

  while (true) {
    matches = imageBlockRegex.exec(html)
    if (!matches) break
    const matchedBlock = matches[0]
    const parsedBlock = parse(matchedBlock)
    const imgElements = parsedBlock.querySelectorAll('img')
    const imagesFromBlock = imgElements.filter(img => Boolean(img.getAttribute('src'))).map(img => img.getAttribute('src') ?? '')
    allImages.push(...imagesFromBlock)
    html = html.replace(matchedBlock, '')
    imageBlockRegex.lastIndex = 0
  }
  return { allImages, newStr: html }
}

function removeAllDeleteSections(html: string): string {
  const deleteRegex = /<p[^>]*>\s*(<span[^>]*>)?#delete-from(<\/span>)?[\s\S]*?(<span[^>]*>)?#delete-to(<\/span>)?\s*<\/p>/g
  return html.replace(deleteRegex, '')
}

function escapeSpecialChars(text: string): string {
  return text
    .replace(/<!--/g, '&lt;!--')
    .replace(/-->/g, '--&gt;')
    .replace(/\/\*/g, '&#47;&#42;')
    .replace(/\*\//g, '&#42;&#47;')
    .replace(/\/\/\s/g, '&#47;&#47; ')
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
    .replace(/,/g, '&#44;')
    .replace(/\+/g, '&#43;')
    .replace(/\^/g, '&#94;')
}

function walkAndTransform(node: HTMLElement, escapeFn: (s: string) => string) {
  node.childNodes.forEach(child => {
    if (child instanceof HTMLElement) {
      if (child.tagName === 'IMG') {
        const src = child.getAttribute('src') ?? '/fallback.webp'
        const alt = child.getAttribute('alt') ?? 'haui bloc image'
        const width = child.getAttribute('width') ?? ''
        const height = child.getAttribute('height') ?? ''
        child.replaceWith(parse(`<Image layout='fullWidth' src="${src}" alt="${alt}" width="${width}" height="${height}" />`))
      }

      if (child.tagName === 'INPUT') {
        child.setAttribute('readOnly', '')
      }

      if (node.tagName === 'PRE') {
        const innerParsed = parse(node.innerHTML)
        const codeElement = innerParsed.querySelector('code')
        if (!codeElement) return

        const langClass = codeElement.getAttribute('class')?.match(/language-(\w+)/)
        const language = langClass ? langClass[1] : ''
        const codeContent = codeElement.text.trim()

        node.replaceWith(parse(`\`\`\`${language}\n${codeContent}\n\`\`\``))
        return
      }

      walkAndTransform(child, escapeFn)
    }

    if (child instanceof TextNode) {
      child.rawText = escapeFn(child.rawText)
    }
  })
}
