export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'Válido só hoje dia',
  },
  hero: {
    image: '/images/hero-mockup.webp',
    imageAlt: 'Mockup do produto',
    headline: '[Diga o que o produto resolve] com o [Nome do Método ou Mecanismo] em apenas [Prazo do Resultado]',
    body: 'Explique como o método funciona, quais benefícios principais ele entrega e para quem ele é indicado, incluindo uma objeção comum que o produto consegue superar.',
    ctaLabel: 'ADICIONAR CTA',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Veja o que estão dizendo sobre o [Produto/Método]',
    items: Array.from({ length: 6 }, (_, index) => ({
      src: '',
      alt: `Placeholder: Depoimento ${index + 1} 400×600`,
      label: `Depoimento ${index + 1} 400×600`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: 'Tudo o que você receberá assim que confirmar sua compra' },
  modules: [
    { src: '', alt: 'Módulo 1 320×320', label: 'Módulo 1 320×320', ratio: '1:1' as const, eyebrow: 'Módulo 01', title: 'Titulo do modulo 01', description: 'coloque aqui a descrição do que vai ter nesse modulo' },
    { src: '', alt: 'Módulo 2 320×320', label: 'Módulo 2 320×320', ratio: '1:1' as const, eyebrow: 'Módulo 02', title: 'Titulo do modulo 02', description: 'coloque aqui a descrição do que vai ter nesse modulo' },
    { src: '', alt: 'Módulo 3 320×320', label: 'Módulo 3 320×320', ratio: '1:1' as const, eyebrow: 'Módulo 03', title: 'Titulo do modulo 03', description: 'coloque aqui a descrição do que vai ter nesse modulo' },
  ],
  bonusesSection: { title: 'E você ainda recebe 3 bônus exclusivos' },
  bonuses: [
    { src: '', alt: '🎁 Bônus 01 - Incluso na oferta completa 320×320', label: '🎁 Bônus 01 - Incluso na oferta completa 320×320', ratio: '1:1' as const, eyebrow: 'Bônus 01', title: 'Titulo do bônus 01', description: 'coloque aqui a descrição sobre esse bonus completa', value: 'R$ 39,00' },
    { src: '', alt: '🎁 Bônus 02 - Incluso na oferta completa 320×320', label: '🎁 Bônus 02 - Incluso na oferta completa 320×320', ratio: '1:1' as const, eyebrow: 'Bônus 02', title: 'Titulo do bônus 02', description: 'coloque aqui a descrição sobre esse bonus completa', value: 'R$ 29,00' },
    { src: '', alt: '🎁 Bônus 03 - Incluso na oferta completa 320×320', label: '🎁 Bônus 03 - Incluso na oferta completa 320×320', ratio: '1:1' as const, eyebrow: 'Bônus 03', title: 'Titulo do bônus 03', description: 'coloque aqui a descrição sobre esse bonus completa', value: 'R$ 29,00' },
  ],
  offersSection: {
    title: 'Escolha sua oferta',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    simple: {
      title: 'Oferta Simples',
      items: ['adicione nome do produto aqui', 'Acesso Vitalício'],
      previousPrice: 'R$ 97,00', installmentCount: 4, installmentValue: 'R$ 4,89', cashValue: 'R$ 19,90', ctaLabel: 'Oferta Simples',
    },
    complete: {
      badge: 'Mais Vendido', title: 'Oferta Completa',
      items: [
        { label: 'adicione nome do produto aqui' },
        { label: 'Acesso Vitalício' },
        { label: 'titulo do bonus 1', value: 'R$ 39,00' },
        { label: 'titulo do bonus 2', value: 'R$ 29,00' },
        { label: 'titulo do bonus 3', value: 'R$ 29,00' },
      ],
      previousPrice: 'R$ 194,00', installmentCount: 6, installmentValue: 'R$ 5,89', cashValue: 'R$ 29,90', ctaLabel: 'Oferta Completa',
    },
    popup: {
      eyebrow: 'Espere! Não saia ainda...',
      message: 'Você escolheu a oferta simples. Mas existe uma condição especial antes de finalizar: você pode desbloquear agora a Oferta Completa com todos os bônus inclusos.',
      title: 'Oferta especial', previousPrice: 'R$ 29,90', installmentCount: 5, installmentValue: 'R$ 4,90', cashValue: 'R$ 22,90',
      ctaLabel: 'Sim! Quero a oferta completa', secondaryLabel: 'Não, quero continuar com a oferta simples.',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: '7 Dias de garantia',
    body: 'Se dentro do prazo de garantia você concluir que o produto não atendeu às suas expectativas, basta solicitar o reembolso. Devolveremos 100% do seu dinheiro, sem burocracia.',
  },
  faqSection: { title: 'Perguntas frequentes' },
  faq: [
    { question: 'Sua pergunta 01', answer: 'coloque aqui a resposta para a sua primeira pergunta frequente.' },
    { question: 'Sua pergunta 02', answer: 'coloque aqui a resposta para a sua segunda pergunta frequente.' },
    { question: 'Sua pergunta 03', answer: 'coloque aqui a resposta para a sua terceira pergunta frequente.' },
    { question: 'Sua pergunta 04', answer: 'coloque aqui a resposta para a sua quarta pergunta frequente.' },
    { question: 'Sua pergunta 05', answer: 'coloque aqui a resposta para a sua quinta pergunta frequente.' },
  ],
  footer: { brand: 'Marcelo Black', copyright: '© 2026 Marcelo Black' },
}
