import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const script = fileURLToPath(new URL('./build-seo.mjs', import.meta.url))
test('SEO estático aceita campos vazios e escapa valores fornecidos', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'matriz-seo-'))
  try {
    await fs.mkdir(path.join(dir, 'src/config'), { recursive: true })
    await fs.mkdir(path.join(dir, 'dist'))
    await fs.writeFile(path.join(dir, 'src/config/seo.ts'), `export const seo = { title: 'Teste < &', description: '', canonical: '', ogTitle: '', ogDescription: '', ogImage: '', robots: 'noindex,nofollow' }`)
    await fs.writeFile(path.join(dir, 'dist/index.html'), '<html><head><title>Original</title></head></html>')
    const run = spawnSync(process.execPath, [script], { cwd: dir, encoding: 'utf8' })
    assert.equal(run.status, 0, run.stderr)
    const html = await fs.readFile(path.join(dir, 'dist/index.html'), 'utf8')
    assert.match(html, /<title>Teste &lt; &amp;<\/title>/)
    assert.match(html, /noindex,nofollow/)
    assert.doesNotMatch(html, /rel="canonical"/)
  } finally {
    // Only the unique temporary fixture created above is removed.
    await fs.rm(dir, { recursive: true, force: true })
  }
})
