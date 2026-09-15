export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'Acesso imediato e vitalício para aprender no seu ritmo.',
  },
  hero: {
    image: '',
    imageAlt: 'Imagem da Hero',
    headline: 'O segredo que os mágicos escondem finalmente foi revelado.',
    body: 'Aprenda truques simples, rápidos e surpreendentes que parecem impossíveis para quem está assistindo.',
    ctaLabel: 'Quero aprender agora',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Imagine ter um baralho na mão e deixar todo mundo tentando descobrir o segredo. Veja as reações de quem já aprendeu.',
    items: Array.from({ length: 6 }, (_, index) => ({
      src: '',
      alt: `Placeholder: Depoimento ${String(index + 1).padStart(2, '0')}`,
      label: `Depoimento ${String(index + 1).padStart(2, '0')}`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: '3 módulos para você aprender 7 mágicas com cartas' },
  modules: [
    { src: '', alt: 'Imagem do módulo 01', label: 'Imagem do módulo 01', ratio: '1:1' as const, eyebrow: 'Módulo 01', title: 'Fundamentos do Baralho', description: 'Movimentos básicos, controle das cartas, posicionamento das mãos e prática.' },
    { src: '', alt: 'Imagem do módulo 02', label: 'Imagem do módulo 02', ratio: '1:1' as const, eyebrow: 'Módulo 02', title: '4 mágicas que parecem impossíveis', description: 'Carta Impossível, Carta Predita, Carta Viajante e Carta no Celular.' },
    { src: '', alt: 'Imagem do módulo 03', label: 'Imagem do módulo 03', ratio: '1:1' as const, eyebrow: 'Módulo 03', title: '3 mágicas de impacto', description: 'Carta Escolhida, Baralho Sob Controle e O Final Impossível.' },
  ],
  bonusesSection: { title: 'E para deixar sua experiência ainda mais completa, você ainda recebe 3 bônus' },
  bonuses: [
    { src: '', alt: 'Imagem do bônus 01', label: 'Imagem do bônus 01', ratio: '1:1' as const, eyebrow: 'Bônus 01', title: '5 Movimentos Secretos', description: 'Cinco movimentos para praticar com o baralho.', value: 'R$ 27,00' },
    { src: '', alt: 'Imagem do bônus 02', label: 'Imagem do bônus 02', ratio: '1:1' as const, eyebrow: 'Bônus 02', title: 'Como Impressionar', description: 'Orientações sobre apresentação, suspense e atenção.', value: 'R$ 37,00' },
    { src: '', alt: 'Imagem do bônus 03', label: 'Imagem do bônus 03', ratio: '1:1' as const, eyebrow: 'Bônus 03', title: '10 Desafios com Cartas', description: 'Dez desafios para praticar os movimentos.', value: 'R$ 47,00' },
  ],
  offersSection: {
    title: 'Agora você tem duas formas de começar',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    simple: {
      title: 'Combo 7 Mágicas',
      items: ['3 módulos', '7 mágicas com cartas', 'Aulas passo a passo', 'Acesso imediato', 'Acesso vitalício'],
      previousPrice: 'R$ 97,00', installmentCount: 2, installmentValue: 'R$ 5,38', cashValue: 'R$ 9,90', ctaLabel: 'Mágicas simples',
    },
    complete: {
      badge: 'Mais vendido', title: 'Combo 7 Mágicas + 3 Bônus',
      items: [
        { label: '3 módulos' },
        { label: '7 mágicas com cartas' },
        { label: 'Aulas passo a passo' },
        { label: 'Acesso imediato' },
        { label: 'Acesso vitalício' },
        { label: '5 Movimentos Secretos', value: 'R$ 27,00' },
        { label: 'Como Impressionar', value: 'R$ 37,00' },
        { label: '10 Desafios com Cartas', value: 'R$ 47,00' },
      ],
      previousPrice: 'R$ 194,00', installmentCount: 4, installmentValue: 'R$ 5,57', cashValue: 'R$ 19,90', ctaLabel: 'Mágicas completas',
    },
    popup: {
      eyebrow: 'Espere! Não saia ainda...',
      message: 'Você escolheu a oferta simples. Mas existe uma condição especial antes de finalizar: em vez de ficar apenas com as 7 mágicas, você pode desbloquear agora o Combo 7 Mágicas, os 3 módulos, acesso vitalício e os 3 bônus.',
      title: 'Oferta especial', previousPrice: 'R$ 19,90', installmentCount: 3, installmentValue: 'R$ 5,46', cashValue: 'R$ 14,90',
      ctaLabel: 'Sim! Quero a oferta completa por R$ 14,90', secondaryLabel: 'Não, quero continuar com a oferta simples.',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: 'Aprenda sem colocar seu dinheiro em risco',
    body: 'Você tem 7 dias de garantia. Entre, conheça o conteúdo, assista às aulas e comece a praticar. Se dentro de 7 dias você perceber que o Combo 7 Mágicas não é para você, basta solicitar o reembolso dentro do prazo. Você não precisa ficar com uma compra que não quer. 7 dias de garantia para você decidir.',
  },
  faqSection: { title: 'Ainda está com alguma dúvida?' },
  faq: [
    { question: 'Preciso ter experiência com mágica?', answer: 'Não. O conteúdo foi pensado para quem quer aprender mágicas com cartas e começar pelos fundamentos, seguindo o passo a passo.' },
    { question: 'Preciso de um baralho especial?', answer: 'O foco do produto é o aprendizado de mágicas com cartas. A ideia é começar com um baralho e praticar os movimentos apresentados nas aulas.' },
    { question: 'Como recebo o acesso?', answer: 'O produto é digital. Após a confirmação da compra, você recebe acesso ao conteúdo para começar suas aulas.' },
    { question: 'Por quanto tempo posso acessar?', answer: 'O acesso é vitalício. Você pode voltar às aulas e praticar novamente sempre que quiser.' },
    { question: 'E se eu comprar e não gostar?', answer: 'Você tem 7 dias de garantia. Dentro desse período, caso decida que o produto não é para você, poderá solicitar o reembolso.' },
  ],
  footer: { brand: 'Marcelo Black', copyright: '© 2026 Marcelo Black' },
}
