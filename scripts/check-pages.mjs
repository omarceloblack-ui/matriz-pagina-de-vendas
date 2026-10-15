import fs from 'node:fs/promises'
const config = JSON.parse(await fs.readFile('wrangler.jsonc', 'utf8'))
if (config.pages_build_output_dir !== './dist' || config.assets || config.account_id) throw new Error('Configuração deve usar Pages, saída ./dist e nenhuma conta herdada.')
if (!/^[a-z0-9][a-z0-9-]*$/.test(config.name)) throw new Error('Nome do Pages inválido.')
await fs.access('dist/index.html')
console.log('Configuração local do Pages e saída dist aprovadas. Nenhuma publicação realizada.')
