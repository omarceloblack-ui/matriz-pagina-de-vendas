import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../', import.meta.url))
async function fixture() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'matriz-pages-test-'))
  await fs.mkdir(path.join(dir, 'src/config'), { recursive: true })
  await fs.mkdir(path.join(dir, 'public/images'), { recursive: true })
  const write = (file, value) => fs.writeFile(path.join(dir, file), JSON.stringify(value))
  const data = (file, name, value) => fs.writeFile(path.join(dir, `src/config/${file}.ts`), `export const ${name} = ${JSON.stringify(value)}`)
  const config = {projectType:'product', requireCheckoutLinks:true, requireSeo:true, requireNoPlaceholders:true}
  const content = {hero:{image:'/images/hero.webp',headline:'Conteúdo de teste'},results:{items:[{src:'/images/hero.webp'}]},modules:[{src:'/images/hero.webp'}],bonuses:[{src:'/images/hero.webp'}]}
  await write('deployment.config.json',config)
  await write('wrangler.jsonc',{name:'produto-teste',pages_build_output_dir:'./dist'})
  await data('content','pageContent',content)
  await data('links','links',{checkoutSimple:'https://example.com/a',checkoutComplete:'https://example.com/b',checkoutUpgrade:'https://example.com/c'})
  await data('tracking','tracking',{})
  await data('seo','seo',{title:'Teste < &',description:'Descrição "teste"',canonical:'https://example.com/',ogTitle:'Teste',ogDescription:'Teste',ogImage:'https://example.com/og.webp',robots:'index,follow'})
  await fs.copyFile(path.join(root,'public/images/hero-mockup.webp'),path.join(dir,'public/images/hero.webp'))
  const run = file => spawnSync(process.execPath,[path.join(root,'scripts',file)],{cwd:dir,encoding:'utf8'})
  return {dir,write,data,run,config,content,close:()=>fs.rm(dir,{recursive:true,force:true})}
}
test('produto completo passa mesmo contendo listas no conteúdo',async()=>{
 const f=await fixture();try {assert.equal(f.run('validate-project.mjs').status,0)} finally {await f.close()}
})
test('matriz bloqueada para publicação',async()=>{
 const f=await fixture();try {await f.write('deployment.config.json',{...f.config,projectType:'template'});const r=f.run('validate-project.mjs');assert.equal(r.status,1);assert.match(r.stderr,/matriz não pode/)} finally {await f.close()}
})
test('placeholder dentro de um item é detectado',async()=>{
 const f=await fixture();try {f.content.modules[0].title='Título do módulo 01';await f.data('content','pageContent',f.content);const r=f.run('validate-project.mjs');assert.equal(r.status,1);assert.match(r.stderr,/placeholders/)} finally {await f.close()}
})
test('checkout vazio bloqueia produto',async()=>{
 const f=await fixture();try {await f.data('links','links',{});const r=f.run('validate-project.mjs');assert.equal(r.status,1);assert.match(r.stderr,/checkoutSimple/)} finally {await f.close()}
})
test('configuração Workers e integração sem carregador são recusadas',async()=>{
 const f=await fixture();try {await f.write('wrangler.jsonc',{name:'produto-teste',assets:{directory:'dist'}});await f.data('tracking','tracking',{googleAnalyticsId:'G-TEST'});const r=f.run('validate-project.mjs');assert.equal(r.status,1);assert.match(r.stderr,/configuração Pages/);assert.match(r.stderr,/não implementada/)} finally {await f.close()}
})
test('SEO é escrito no HTML estático com escape',async()=>{
 const f=await fixture();try {await fs.mkdir(path.join(f.dir,'dist'));await fs.writeFile(path.join(f.dir,'dist/index.html'),'<html><head><title>Original</title></head></html>');assert.equal(f.run('build-seo.mjs').status,0);const html=await fs.readFile(path.join(f.dir,'dist/index.html'),'utf8');assert.match(html,/<title>Teste &lt; &amp;<\/title>/);assert.match(html,/og:image/);assert.match(html,/&quot;teste&quot;/);assert.match(html,/rel="canonical"/)} finally {await f.close()}
})
