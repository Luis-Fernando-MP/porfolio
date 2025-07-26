import { HTMLElement, TextNode, parse } from 'node-html-parser'

export function escapeHTML(html: string): string {
  html = html
    .replace(/\s+(target="_blank")(?=.*\1)/g, '') // Borra el _blank duplicado (generado por Canva)
    .replaceAll('   ', '')
    .replaceAll('\n\n\n', '')
    .trim()

  // HTML de entrada en un árbol DOM manipulable
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
      // Etiquetas que no tienen etiqueta de cierre
      tags: ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'],
      closingSlash: true
    }
  })

  // Función para escapar caracteres especiales en el texto
  const escape = (text: string) =>
    text
      .replace(/<!--/g, '&lt;!--') // <!--
      .replace(/-->/g, '--&gt;') // -->
      .replace(/\/\*/g, '&#47;&#42;') // /*
      .replace(/\*\//g, '&#42;&#47;') // */
      .replace(/\/\/\s/g, '&#47;&#47; ') // //
      .replace(/^#/gm, '&#35;') // #
      .replace(/_/g, '&#95;') // _
      .replace(/</g, '&lt;') // <
      .replace(/>/g, '&gt;') // >
      .replace(/{/g, '&#123;') // {
      .replace(/}/g, '&#125;') // }
      .replace(/\(/g, '&#40;') // (
      .replace(/\)/g, '&#41;') // )
      .replace(/"/g, '&quot;') // "
      .replace(/'/g, '&#39;') // '
      .replace(/`/g, '&#96;') // `
      .replace(/\?/g, '&#63;') // ?
      .replace(/,/g, '&#44;') // ,
      .replace(/\+/g, '&#43;') // +
      .replace(/\^/g, '&#94;') // ^

  // Función para recorrer y procesar los nodos del árbol DOM
  function walk(node: HTMLElement) {
    node.childNodes.forEach(child => {
      // Si es un elemento HTML, procesar recursivamente
      if (child instanceof HTMLElement) {
        // Convertir <img> a <Image ... />
        if (child.tagName === 'IMG') {
          const src = child.getAttribute('src') ?? '/fallback.webp'
          const alt = child.getAttribute('alt') ?? 'haui bloc image'
          const width = child.getAttribute('width') ?? ''
          const height = child.getAttribute('height') ?? ''

          // Aquí puedes personalizar cómo se inserta el componente Image
          child.replaceWith(parse(`<Image layout='fullWidth' src="${src}" alt="${alt}" width="${width}" height="${height}" />`))
        }

        // Si es un <input>, ajustamos sus props para React
        if (child.tagName === 'INPUT') {
          child.setAttribute('readOnly', '')
        }

        // Manejo especial para nodos PRE
        if (node.tagName === 'PRE') {
          const inner = parse(node.innerHTML)
          const codeNode = inner.querySelector('code')
          if (!codeNode) return

          // Extrae el lenguaje desde className (si lo hay)
          const langMatch = codeNode.getAttribute('class')?.match(/language-(\w+)/)
          const lang = langMatch ? langMatch[1] : ''

          // Obtiene y limpia el contenido del <code>
          const codeText = codeNode.text.trim()

          // Reemplaza el nodo <pre> entero por el bloque markdown ```lang
          node.replaceWith(parse(`\`\`\`${lang}\n${codeText}\n\`\`\``))
          return
        }

        walk(child)
      }
      // Si es un nodo de texto, escapar su contenido
      if (child instanceof TextNode) child.rawText = escape(child.rawText)
    })
  }

  walk(root)

  return root.toString().replace(/>&#/g, '>\n&#').replaceAll('class', 'className')
}

const test = ` <pre><code className="language-bash">
git clone https://github.com/Luis-Fernando-MP/coral.git
cd coral
</code></pre>
 `

console.log(escapeHTML(test))
