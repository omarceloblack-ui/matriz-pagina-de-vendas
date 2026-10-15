# Matriz Página de Vendas — Cloudflare Pages

Base reutilizável com React, TypeScript e Vite. Pode ser publicada como está, com placeholders, checkouts vazios e SEO incompleto. Não há bloqueio por identificação de matriz, nome padrão ou campos não preenchidos.

## Baixar, abrir e publicar

1. No GitHub, use Code → Download ZIP. Extraia todos os arquivos e abra a pasta que contém package.json.
2. Use Node.js 22.16.0 e pnpm 10.26.0. Execute `pnpm install --frozen-lockfile`.
3. Execute `pnpm dev` para abrir localmente. Personalize src/config e public/images quando desejar.
4. Execute `pnpm predeploy`. O comando gera dist sem exigir personalização do conteúdo.
5. Crie um novo repositório e envie o projeto completo, incluindo scripts, src, public e configurações. Não envie node_modules, dist, .env ou o histórico .git do projeto original no upload manual.
6. No Cloudflare, crie um projeto **Pages**, conecte ao GitHub e selecione o repositório.

| Campo no Pages | Valor |
|---|---|
| Branch | main, ou sua branch de produção |
| Framework | React (Vite), ou Nenhum |
| Comando da build | pnpm predeploy |
| Saída | dist |
| Raiz | Vazia se package.json estiver na raiz |
| NODE_VERSION | 22.16.0 |
| PNPM_VERSION | 10.26.0 |

O nome em wrangler.jsonc pode ser ajustado para o nome do projeto Pages. Não existe bloqueio próprio que exija trocar o nome da matriz. A Cloudflare pode exigir consistência entre o nome configurado e o projeto no painel.

Após conectar, novos envios à branch vinculada geram publicações automaticamente. Confira o endereço pages.dev e configure domínio próprio no painel quando desejar.

## Comandos

- `pnpm dev`: desenvolvimento local.
- `pnpm build`: gera dist, incluindo os dados de SEO fornecidos no HTML estático.
- `pnpm predeploy`: executa o build, sem validar conteúdo, checkouts, pixels ou SEO.
- `pnpm preview`: serve dist localmente após o build.
- `pnpm cloudflare:check`: build e conferência técnica da configuração Pages e de dist/index.html, sem publicar.
- `pnpm cloudflare:dev`: build e servidor local Pages.
- `pnpm cloudflare:deploy`: publicação manual opcional pelo Wrangler Pages, com autenticação e autorização.
- `pnpm test`: teste da geração do SEO estático.

## Personalização opcional

Copy em src/config/content.ts; cores em theme.ts; checkouts e links em links.ts; SEO em seo.ts; pixels em tracking.ts. Os campos podem ficar vazios sem bloquear a publicação. Links vazios não levam ao checkout. A matriz usa noindex,nofollow; ajuste robots quando desejar indexação.

O Meta Pixel possui carregador. Os campos de GA, GTM e TikTok ainda não ativam integrações; isso não bloqueia o build. Não reutilize silenciosamente dados de outro produto.

A preparação e validação técnica das imagens continuam funcionando: WebP e os três SVGs previstos. Imagens inválidas ou erros reais de compilação ainda podem falhar. O checklist é uma orientação de revisão, sem bloqueios automáticos por conteúdo incompleto.
