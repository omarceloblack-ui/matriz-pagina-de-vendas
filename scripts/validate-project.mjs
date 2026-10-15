import fs from 'node:fs/promises'
import path from 'node:path'
import { readConfig } from './read-config.mjs'

const config = JSON.parse(await fs.readFile('deployment.config.json', 'utf8'))
const pages = JSON.parse(await fs.readFile('wrangler.jsonc', 'utf8'))
const [content, links, tracking, seo] = await Promise.all([
  readConfig('content', 'pageContent'), readConfig('links', 'links'),
  readConfig('tracking', 'tracking'), readConfig('seo', 'seo'),
])
const errors = []
const allowedSvg = new Set(['selo-garantia-7-dias.svg', 'metodos-pagamento-seguranca.svg', 'selos-seguranca-compra.svg'])
const requireUrl = (value, label) => {
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error()
  } catch { errors.push(`${label}: URL HTTP(S) obrigatória inválida ou ausente`) }
}
if (config.projectType !== 'product') errors.push('A matriz não pode ser publicada. Na cópia, configure projectType como product e preencha os dados do produto.')
if (!pages.name || pages.name === 'matriz-pagina-de-vendas' || !/^[a-z0-9][a-z0-9-]*$/.test(pages.name)) errors.push('Defina um nome exclusivo e válido para o novo projeto Pages em wrangler.jsonc.')
if (pages.pages_build_output_dir !== './dist' || pages.assets || pages.account_id) errors.push('Use configuração Pages com pages_build_output_dir: ./dist, sem assets/account_id de Workers.')
if (config.requireCheckoutLinks) {
  for (const key of ['checkoutSimple', 'checkoutComplete', 'checkoutUpgrade']) requireUrl(links[key], key)
}
if (config.requireLegalLinks) {
  for (const key of ['privacy', 'terms']) requireUrl(links[key], key)
}
const requireId = (enabled, key, pattern) => {
  if (enabled && !pattern.test(tracking[key] || '')) errors.push(`${key}: ID obrigatório inválido ou ausente`)
}
requireId(config.requireMetaPixel, 'metaPixelId', /^\d{5,20}$/)
if (tracking.metaPixelId && !/^\d{5,20}$/.test(tracking.metaPixelId)) errors.push('Meta Pixel possui formato inválido')
for (const [key, requirement] of [['googleAnalyticsId', 'requireGoogleAnalytics'], ['googleTagManagerId', 'requireGoogleTagManager'], ['tiktokPixelId', 'requireTikTokPixel']]) {
  if (tracking[key] || config[requirement]) errors.push(`${key}: integração ainda não implementada; implemente e valide o carregador antes de configurar um ID.`)
}
if (config.requireSeo) {
  for (const key of ['title', 'description', 'canonical', 'ogTitle', 'ogDescription', 'ogImage', 'robots']) {
    if (!seo[key]?.trim()) errors.push(`SEO ${key} não configurado`)
  }
  requireUrl(seo.canonical, 'Canonical')
  requireUrl(seo.ogImage, 'Imagem Open Graph')
}
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const placeholders = [/\[[^\]]+\]/, /adicion[ae]r? (o )?(nome|cta)/, /titulo do (modulo|bonus)/, /sua pergunta/, /escreva aqui/, /descreva o objetivo/, /coloque aqui/, /explique como o metodo/]
const strings = value => typeof value === 'string' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : []
if (config.requireNoPlaceholders) {
  if (strings(content).some(value => placeholders.some(pattern => pattern.test(normalize(value))))) errors.push('A copy ainda contém placeholders da matriz')
  if (!content.hero.image || content.results.items.some(item => !item.src) || [...content.modules, ...content.bonuses].some(item => !item.src)) errors.push('Preencha as imagens do produto; ainda existem slots vazios.')
}
for (const reference of new Set(strings(content).filter(value => value.startsWith('/images/')).map(value => value.slice(8)))) {
  if (!reference.endsWith('.webp') && !allowedSvg.has(reference)) errors.push(`Referência não WebP/SVG autorizado: /images/${reference}`)
  const root = path.resolve('public/images')
  const file = path.resolve(root, reference)
  if (!file.startsWith(root + path.sep)) { errors.push(`Referência fora de public/images: ${reference}`); continue }
  try { await fs.access(file) } catch { errors.push(`Imagem referenciada não encontrada: /images/${reference}`) }
}
if (errors.length) {
  console.error('Pré-deploy bloqueado:\n' + errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}
console.log('Projeto aprovado nas validações configuradas de conteúdo, links, tracking, SEO e assets. A revisão humana do checklist continua necessária.')
