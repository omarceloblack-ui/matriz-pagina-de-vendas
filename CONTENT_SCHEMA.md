# CONTENT_SCHEMA.md — Contrato de conteúdo

## Princípio
**Nova copy/oferta atualiza dados; não reconstrói componentes.**

## Config
```text
src/config/
├── content.ts
├── theme.ts
├── links.ts
├── tracking.ts
└── seo.ts
```

## content.ts
Estrutura conceitual:
```ts
export const pageContent = {
  urgencyBar: { enabled: true, text: "" },
  hero: {
    image: "", imageAlt: "", headline: "", body: "",
    ctaLabel: "", securityImage: "", securityImageAlt: ""
  },
  results: { title: "", items: [] },
  modules: [],
  bonuses: [],
  offers: {
    simple: {
      title: "Oferta simples", items: [], previousPrice: "",
      installmentCount: 0, installmentValue: "", cashValue: "", ctaLabel: ""
    },
    complete: {
      badge: "Mais vendido", title: "Oferta completa",
      items: [{ label: "", value: "" }],
      previousPrice: "", installmentCount: 0,
      installmentValue: "", cashValue: "", ctaLabel: ""
    },
    popup: {
      eyebrow: "", message: "", title: "", previousPrice: "",
      installmentCount: 0, installmentValue: "", cashValue: "",
      ctaLabel: "", secondaryLabel: ""
    }
  },
  guarantee: { days: 7, title: "", body: "" },
  faq: [],
  footer: { copyright: "" }
};
```

## Fonte única da Oferta Completa
O modal consome `pageContent.offers.complete.items`. Não criar segunda lista manual. Itens de bônus podem incluir `value`, exibido em vermelho, 700 e riscado. O preço do modal é independente.

## theme.ts
Somente cores/identidade parametrizável:
```ts
export const theme = {
  brand: { primary: "", primaryDark: "", primaryLight: "" },
  cta: { color: "", dark: "", light: "" }
};
```
Não colocar espaçamentos, fontes, radius, breakpoints ou ordem aqui.

## links.ts
```ts
export const links = {
  checkoutSimple: "",
  checkoutComplete: "",
  checkoutUpgrade: "",
  privacy: "",
  terms: "",
  support: ""
};
```
Sem URLs hardcoded nos componentes.

## tracking.ts
```ts
export const tracking = {
  metaPixelId: "",
  googleAnalyticsId: "",
  googleTagManagerId: "",
  tiktokPixelId: ""
};
```
ID vazio = integração não carrega. Não inventar/reutilizar IDs. `Purchase` não deve ser disparado por mero clique se não representar compra confirmada.

## seo.ts
```ts
export const seo = {
  title: "",
  description: "",
  canonical: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  robots: "noindex,nofollow"
};
```

## Assets
Arquivos em `public/images/`, referenciados como `/images/arquivo.webp`.
Nomes: minúsculas, sem espaço/acento, `kebab-case`.
Somente WebP pode ser publicado, exceto os vetores protegidos `/images/selo-garantia-7-dias.svg`, `/images/metodos-pagamento-seguranca.svg` e `/images/selos-seguranca-compra.svg`. `pnpm prepare:images` converte os demais formatos aceitos, normaliza nomes e exclui o original somente depois de validar o WebP gerado.

## Atribuição de campanha
A matriz captura `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`, `fbclid`, `gclid` e `ttclid` da URL. Os valores são preservados no navegador e anexados aos checkouts simples, completo e de upgrade sem apagar parâmetros já existentes.

## Publicação sem bloqueios de conteúdo
`deployment.config.json` configura somente a preparação de imagens. `pnpm predeploy` executa o build e aceita textos de exemplo, imagens vazias, checkouts vazios e SEO incompleto. Não existe projectType nem requisito de nome exclusivo no validador de conteúdo.

## Protegido
Copy não altera implicitamente quantidades estruturais, ordem, proporções, preço, modal, carrossel ou sanfonas.

## Nova copy
1. Ler PROJECT_SPEC.
2. Mapear textos.
3. Atualizar pageContent.
4. Preservar ausentes.
5. Atualizar theme/links/tracking/seo só com dados fornecidos.
6. Não reconstruir componentes.
7. Revisar.
8. Executar checklist.

## Nunca inventar
Depoimentos, resultados, antes/depois, números, urgência, escassez, garantia, preço, desconto, bônus, certificações ou alegações.

## Publicação no Cloudflare Pages
A saída é dist. O build escreve os dados de SEO fornecidos no HTML estático e ignora campos opcionais vazios. O preenchimento dos dados fica a critério do usuário, sem bloquear a publicação.
