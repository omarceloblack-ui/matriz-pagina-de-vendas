import fs from 'node:fs/promises'
import { readConfig } from './read-config.mjs'

const seo = await readConfig('seo', 'seo')
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
let html = await fs.readFile('dist/index.html', 'utf8')
html = html.replace(/<title>.*?<\/title>/s, `<title>${escape(seo.title)}</title>`)
const tags = []
for (const [key, value] of Object.entries({ description: seo.description, robots: seo.robots })) {
  if (value) tags.push(`<meta name="${key}" content="${escape(value)}" />`)
}
for (const [key, value] of Object.entries({ title: seo.ogTitle, description: seo.ogDescription, image: seo.ogImage, url: seo.canonical })) {
  if (value) tags.push(`<meta property="og:${key}" content="${escape(value)}" />`)
}
if (seo.canonical) tags.push(`<link rel="canonical" href="${escape(seo.canonical)}" />`)
html = html.replace('</head>', `${tags.join('\n    ')}\n  </head>`)
await fs.writeFile('dist/index.html', html)
