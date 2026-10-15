# PROJECT_SPEC.md — Matriz Página de Vendas

> Informações da matriz reutilizável. Campos não disponíveis permanecem vazios.

## Identificação
- Nome do projeto: Matriz Página de Vendas
- Nome do produto: não informado; placeholder “Adicione o nome do produto aqui”
- Slug: matriz-pagina-de-vendas
- Nicho: produtos digitais e páginas de vendas
- Objetivo: matriz de página de vendas reutilizável de alta conversão
- Domínio/subdomínio: não configurado; definir em cada produto

## Stack
- Framework: React + Vite + TypeScript + Tailwind
- Build: `pnpm build`
- Output: `dist/`
- GitHub: `https://github.com/omarceloblack-ui/matriz-pagina-de-vendas`
- Cloudflare: nome-base `matriz-pagina-de-vendas` (trocar por um nome exclusivo em cada cópia antes de publicar)
- Domínio de referência: `basepdv.marceloblack.com` (não configurar automaticamente)

## Identidade variável
- brand-primary: `#2d2d2d`
- brand-primary-dark: `#1f1f1f`
- brand-primary-light: `#4a4a4a`
- cta-color: `#2d2d2d`
- cta-dark: `#1f1f1f`
- cta-light: `#4a4a4a`
- Logo: não informado
- Favicon: não informado

## Barra de urgência
- Ativa: sim
- Texto configurável: “Válido só hoje”
- Data: calculada dinamicamente no navegador, usando a data local do visitante e o formato `pt-BR`
- Revisar veracidade na cópia: a data dinâmica não comprova prazo real da oferta; desativar a barra se não houver uma condição autorizada.

## Hero
- Imagem de demonstração: /images/hero-mockup.webp
- Alt: Mockup do produto
- H1: [Diga o que o produto resolve] com o [nome do método ou mecanismo] em apenas [prazo do resultado]
- Parágrafo: Explique como o método funciona, quais benefícios principais ele entrega e para quem ele é indicado, incluindo uma objeção comum que o produto consegue superar.
- CTA de demonstração: ADICIONAR CTA
- Link/ação: rolagem para a seção de ofertas
- Selo/prova social: `/images/selos-seguranca-compra.svg`, na mesma largura do CTA

## Resultados
- Título: Veja o que estão dizendo sobre o [produto/método]
- Resultado 01 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 01
- Resultado 02 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 02
- Resultado 03 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 03
- Resultado 04 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 04
- Resultado 05 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 05
- Resultado 06 — asset/tipo/alt: placeholder / depoimento / Placeholder: Depoimento 06

## Módulos
### Módulo 01
- Imagem: placeholder
- Identificação: Módulo 01
- Título: Título do módulo 01
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.
### Módulo 02
- Imagem: placeholder
- Identificação: Módulo 02
- Título: Título do módulo 02
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.
### Módulo 03
- Imagem: placeholder
- Identificação: Módulo 03
- Título: Título do módulo 03
- Descrição: Descreva o objetivo deste módulo, o que será ensinado e qual benefício prático o comprador receberá.

## Bônus
### Bônus 01
- Imagem: placeholder
- Título: Título do bônus 01
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 39,00
### Bônus 02
- Imagem: placeholder
- Título: Título do bônus 02
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 29,00
### Bônus 03
- Imagem: placeholder
- Título: Título do bônus 03
- Descrição: Coloque aqui a descrição sobre esse bônus complementar.
- Valor autorizado: R$ 29,00

## Oferta simples
- Itens: Adicione o nome do produto aqui; Acesso vitalício
- Preço anterior: R$ 97,00
- Parcelas: 4
- Valor da parcela: R$ 4,89
- Valor à vista: R$ 19,90
- CTA: Oferta simples
- Checkout: vazio; preencher na cópia do produto

## Oferta completa
- Itens: os definidos em src/config/content.ts; lista compartilhada com o modal
- Preço anterior de demonstração: R$ 194,00
- Parcelas de demonstração: 6
- Valor da parcela de demonstração: R$ 5,89
- Valor à vista de demonstração: R$ 29,90
- Checkout: vazio; preencher na cópia do produto

## Modal de upgrade
- Conteúdo de demonstração definido em src/config/content.ts
- Preço anterior de demonstração: R$ 29,90
- Parcelas de demonstração: 5
- Valor da parcela de demonstração: R$ 4,90
- Valor à vista de demonstração: R$ 22,90
- Checkout upgrade: vazio; preencher na cópia do produto
- Itens vêm da mesma fonte da Oferta Completa.

## Garantia
- Prazo autorizado: 7 dias
- Título único: 7 DIAS DE GARANTIA
- Texto: Se dentro do prazo de garantia você concluir que o produto não atende às suas expectativas, basta solicitar o reembolso. Devolveremos 100% do seu dinheiro, sem burocracia.

## FAQ
1. Pergunta: Sua pergunta 01
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
2. Pergunta: Sua pergunta 02
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
3. Pergunta: Sua pergunta 03
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
4. Pergunta: Sua pergunta 04
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
5. Pergunta: Sua pergunta 05
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.

## Rodapé
- Marca/nome: Marcelo Black
- Ano: 2026
- Copyright: © 2026 Marcelo Black
- Privacidade: não informado
- Termos: não informado
- Suporte: não informado

## Assets
Todos em `public/images/`. A Hero usa hero-mockup.webp; os demais slots de produto usam placeholders. Os três SVGs protegidos estão incluídos.

| Uso | Arquivo | Proporção | Alt |
|---|---|---|---|
| Hero | | 3:2 | Imagem da Hero |
| Módulo 01 | | 1:1 | Imagem do módulo 01 |
| Módulo 02 | | 1:1 | Imagem do módulo 02 |
| Módulo 03 | | 1:1 | Imagem do módulo 03 |
| Bônus 01 | | 1:1 | Imagem do bônus 01 |
| Bônus 02 | | 1:1 | Imagem do bônus 02 |
| Bônus 03 | | 1:1 | Imagem do bônus 03 |
| Resultado 01 | | 2:3 | Placeholder: Depoimento 01 |

## Tracking
- Meta Pixel ID: não informado
- PageView: não informado
- ViewContent: não informado
- InitiateCheckout: não informado
- Google Analytics: não informado
- GTM: não informado
- TikTok Pixel: não informado
- Preservar UTMs nos checkouts: implementado; validar com os checkouts do novo produto

> A matriz captura e encaminha automaticamente UTMs, `fbclid`, `gclid` e `ttclid` para os três checkouts quando as URLs forem configuradas.

> Nenhum ID foi inventado ou herdado.

## SEO
- Title: Matriz Página de Vendas
- Description: não informada
- Canonical: não informado
- OG title: não informado
- OG description: não informada
- OG image: não informada
- Robots: `noindex,nofollow` na matriz; definir na cópia.
- Favicon: não informado

## Regras específicas
- A referência fornece copy de template, não dados finais de um produto.
- Manter placeholders textuais até o produto real ser definido.
- A data da urgência deve ser calculada dinamicamente e atualizada na virada do dia.
- Não tratar os placeholders de depoimentos como provas reais.
- O Hero padrão usa proporção horizontal 3:2, `object-fit: contain` e, somente no desktop, 50% da largura anterior com máximo de 520px.
- Somente no desktop, os dois cards de oferta ficam alinhados pelo topo.
- O carrossel padrão exibe 5 itens em notebook/desktop, cards com 75% da largura no mobile, velocidade de 75px/s, fade lateral e não pausa no hover/foco.
- Somente WebP pode ser publicado; outros formatos devem passar por `pnpm prepare:images`.
- O predeploy executa o build sem validar o preenchimento de conteúdo, checkouts ou SEO.

## Status
- [x] Spec preenchido com dados determináveis
- [x] Copy conferida com a referência
- [ ] Assets
- [ ] Links
- [ ] Tracking
- [ ] SEO completo
- [ ] Preview aprovado pelo usuário
- [ ] Checklist aprovado
- [x] Build aprovado
- [ ] Autorização do novo produto para envio ao GitHub
- [x] Configuração local de Cloudflare Pages preparada
- [ ] Deploy autorizado para o projeto derivado

## Estado da matriz para replicação no Pages
- A matriz é um modelo publicável, sem classificação projectType.
- Checkouts removidos; preencher os três links na cópia de cada produto.
- A implementação em src/config/content.ts contém valores de demonstração; não constituem preços autorizados de outro produto. O documento deve ser preenchido novamente na cópia.
- SEO inicial usa noindex,nofollow. Decidir robots, domínio, canonical e OG em cada produto.
- Build local: pnpm build. Build para publicação: pnpm predeploy.
- Destino: Cloudflare Pages via GitHub, saída dist e versões do README.
- GA, GTM e TikTok são campos reservados sem carregador; preenchê-los não ativa a integração e não bloqueia a publicação.
- Nenhuma autorização histórica nesta ficha deve ser herdada por um produto novo.
