# Matriz Página de Vendas — Cloudflare Pages

Base reutilizável com React, TypeScript e Vite. Publicação pelo Cloudflare Pages conectado ao GitHub. Não usa Workers Static Assets.

## Preparar o computador

Instale Node.js 22.16.0 e pnpm 10.26.0. O projeto registra essas versões em .node-version e package.json. Não envie node_modules, dist, .env ou .git para outro repositório por upload manual.

## Criar um produto

1. No GitHub, use Code → Download ZIP e extraia todos os arquivos em uma nova pasta. Abra a pasta que contém package.json, não a pasta externa do ZIP.
2. Execute `pnpm install --frozen-lockfile` e `pnpm dev`. Abra o endereço informado para ver a página local.
3. Preencha PROJECT_SPEC.md e atualize src/config/content.ts, theme.ts, links.ts, tracking.ts e seo.ts. Não reutilize checkouts, domínio ou pixels de outro produto.
4. Coloque imagens em public/images. Execute `pnpm prepare:images`. Os originais são excluídos após a conversão validada; preserve suas fontes fora dessa pasta se precisar delas.
5. Em wrangler.jsonc, troque name pelo nome exclusivo do novo projeto Pages, igual ao nome escolhido no painel.
6. Em deployment.config.json, altere projectType de template para product. Preencha os requisitos ativos; não desative requisitos apenas para esconder erros.
7. Configure SEO, canonical, imagem OG com URL pública e robots do produto. A matriz vem com noindex,nofollow.
8. Revise a página e DEPLOY_CHECKLIST.md. Execute `pnpm cloudflare:check`. Este comando valida o conteúdo, gera dist e confere a configuração local do Pages; não testa a infraestrutura remota e não publica.
9. Crie um novo repositório e envie TODOS os arquivos do projeto, incluindo scripts, public, src e arquivos de configuração. Prefira Git para preservar a estrutura. Não envie node_modules nem dist.

## Conectar ao Cloudflare Pages

Em Workers e Pages, escolha criar um projeto **Pages**, conectar ao GitHub e selecione o novo repositório.

| Campo | Valor |
|---|---|
| Nome | Igual ao name de wrangler.jsonc |
| Branch | main, ou a branch de produção escolhida |
| Framework | React (Vite), ou Nenhum |
| Comando de build | pnpm predeploy |
| Saída | dist |
| Raiz | Vazia quando package.json está na raiz |
| Variável NODE_VERSION | 22.16.0 |
| Variável PNPM_VERSION | 10.26.0 |

Configure as versões para produção e previews. Não coloque senhas ou tokens em variáveis VITE_: ficam públicos no navegador.

Depois de publicar, confira a URL pages.dev, imagens, modal, FAQ, versão mobile e os três checkouts. Configure um domínio próprio no painel e atualize canonical e OG. Novos envios à branch vinculada geram novas publicações automaticamente.

## Comandos

- `pnpm dev`: preview de desenvolvimento, permitido com placeholders.
- `pnpm build`: gera dist para revisão local, inclusive na matriz.
- `pnpm preview`: serve dist após o build.
- `pnpm predeploy`: bloqueia a matriz e produtos incompletos, depois gera o site final.
- `pnpm cloudflare:check`: predeploy e conferência local da configuração Pages.
- `pnpm cloudflare:dev`: executa o build no ambiente local do Pages, sem publicar.
- `pnpm cloudflare:deploy`: publicação manual opcional por Wrangler Pages; exige autorização e autenticação. O fluxo recomendado é GitHub → Pages.

## Limites das integrações

O Meta Pixel é carregado apenas quando configurado. GA, GTM e TikTok têm campos reservados, mas não têm carregadores implementados: a validação bloqueia IDs preenchidos para evitar uma integração silenciosamente inoperante. Implemente e valide a integração antes de usá-la. UTMs, fbclid, gclid e ttclid são encaminhados aos checkouts.

## Proteção da matriz

A matriz usa projectType: template e não pode passar no predeploy. Ela pode ser aberta e compilada localmente. Cada produto precisa de configuração própria, conteúdo final, imagens, preços autorizados e checkouts. Preserve a estrutura e o design definidos em AGENTS.md e DESIGN_SYSTEM.md.
