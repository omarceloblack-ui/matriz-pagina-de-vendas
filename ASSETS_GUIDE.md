# ASSETS_GUIDE.md — Matriz Página de Vendas

Imagens em public/images, com nomes minúsculos em kebab-case. A troca de produto altera os assets e as referências em src/config/content.ts, preservando os componentes e o design.

| Uso | Tamanho recomendado | Proporção |
|---|---|---|
| Hero | 1200 × 800 | 3:2 |
| Resultados | 1200 × 1800 | 2:3 |
| Módulos | 1200 × 1200 | 1:1 |
| Bônus | 1200 × 1200 | 1:1 |
| Open Graph | 1200 × 630 | 1.91:1 |

São 6 resultados, 3 módulos e 3 bônus na matriz. Alterações estruturais exigem autorização explícita.

Somente WebP pode ser publicado, exceto os três SVGs protegidos: selo-garantia-7-dias.svg, metodos-pagamento-seguranca.svg e selos-seguranca-compra.svg. O selo de garantia padrão usa selo-garantia-7-dias.svg, sem conversão.

PNG, JPG, JPEG, AVIF, TIFF, GIF e outros SVGs são fontes temporárias: execute `pnpm prepare:images`. O original é excluído após a geração e validação do WebP. Guarde uma cópia das fontes fora de public/images se necessário. A qualidade e o limite de peso são definidos em deployment.config.json.

Preserve as proporções e o assunto principal. Hero usa contain; módulos, bônus e resultados usam cover. Não distorça nem fabrique provas. Use alt descritivo, priorize a Hero e aplique lazy-load fora da primeira dobra.

Referencie os arquivos como /images/hero.webp, /images/resultado-01.webp, /images/modulo-01.webp e /images/bonus-01.webp. A imagem de Open Graph deve ter URL pública absoluta em src/config/seo.ts. Não acrescente imagens a seções que não têm um slot previsto.

Antes de publicar, execute `pnpm validate:assets` e `pnpm cloudflare:check`. Confira imagens quebradas, cortes, legibilidade, alt e layout em desktop e mobile. Placeholders e slots vazios não bloqueiam o build nem a publicação.
