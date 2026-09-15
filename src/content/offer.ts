import { IMAGES } from "@/lib/constants";

export const painPills = [
  "Não sei o que preparar",
  "Chego cansada",
  "Não planejei nada",
  "Acabo comendo qualquer coisa",
  "Peço delivery",
  "Começo e não consigo manter",
];

export const decisionLoop = [
  "O que vou comer?",
  "Tenho os ingredientes?",
  "O que vou preparar?",
  "Quanto tempo vai levar?",
  "E amanhã?",
];

export const methodSteps = [
  {
    number: "01",
    title: "Planeje",
    text: "Escolha suas refeições e organize o que vai precisar.",
    image: IMAGES.planning,
  },
  {
    number: "02",
    title: "Prepare",
    text: "Separe um momento estratégico para adiantar seus preparos.",
    image: IMAGES.prepare,
  },
  {
    number: "03",
    title: "Aproveite",
    text: "Passe os próximos dias com muito mais praticidade e menos improvisação.",
    image: IMAGES.marmitas,
  },
];

export const beforeItems = [
  "Não sei o que comer",
  "Nada planejado",
  "Mesmas refeições",
  "Delivery por falta de ideia",
  "Correria na cozinha",
  "Começo e desisto",
];

export const afterItems = [
  "Refeições planejadas",
  "Mais opções disponíveis",
  "Menos improvisação",
  "Mais praticidade",
  "Mais variedade",
  "Uma rotina mais fácil de seguir",
];

export const appCallouts = [
  "Receitas",
  "Cardápios",
  "Café da manhã",
  "Almoço",
  "Lanches",
  "Jantar",
  "Organização",
];

export const features = [
  {
    emoji: "🍳",
    title: "Receitas práticas e gostosas",
    text: "Varie suas refeições sem complicar sua rotina.",
    image: IMAGES.bowl,
  },
  {
    emoji: "📅",
    title: "Cardápios organizados",
    text: "Tenha ideias prontas para diminuir a indecisão.",
    image: IMAGES.planning,
  },
  {
    emoji: "🥗",
    title: "Refeições para todo o dia",
    text: "Café da manhã, almoço, lanche, jantar e muito mais.",
    image: IMAGES.chickenPlate,
  },
  {
    emoji: "🎥",
    title: "Passo a passo",
    text: "Veja como preparar suas refeições de maneira simples.",
    image: IMAGES.cookingStep,
  },
  {
    emoji: "🛒",
    title: "Organização das compras",
    text: "Saiba melhor o que precisa ter em casa.",
    image: IMAGES.shoppingCart,
  },
];

export const desireWords = ["Prática", "Gostosa", "Variada", "Possível de manter"];

export const bodyFlow = [
  "Organização",
  "Melhores decisões",
  "Mais consistência",
  "Rotina alinhada aos seus objetivos",
];

export const whoIsFor = [
  "Não sei o que preparar",
  "Tenho pouco tempo",
  "Quero comer melhor",
  "Quero cuidar do meu corpo",
  "Peço muito delivery",
  "Como sempre as mesmas coisas",
  "Começo e não consigo manter",
  "Quero praticidade",
];

export const stackItems = [
  {
    title: "Aplicativo Semana Resolvida",
    text: "Seu espaço para acessar as receitas e colocar o método em prática.",
    value: 97,
    image: IMAGES.appCover,
    kind: "cover",
  },
  {
    title: "Método Semana Resolvida",
    text: "O passo a passo para planejar, preparar e organizar suas refeições.",
    value: 67,
    image: IMAGES.methodCover,
    kind: "cover",
  },
  {
    title: "Cardápios Prontos",
    text: "Sugestões para diminuir aquela eterna pergunta: o que eu vou comer?",
    value: 37,
    image: IMAGES.appCardapiosPhones,
    kind: "cover",
  },
  {
    title: "Guia de Organização Semanal",
    text: "Material complementar para estruturar melhor alimentação e compras.",
    value: 27,
    image: IMAGES.guideCover,
    kind: "cover",
  },
];

export const bonuses = [
  {
    number: "1",
    title: "Café da Manhã sem Mesmice",
    text: "Mais variedade para começar o dia.",
    value: 27,
    image: IMAGES.breakfast,
  },
  {
    number: "2",
    title: "Receitas Express",
    text: "Para os dias em que o relógio está contra você.",
    value: 27,
    image: IMAGES.express,
  },
  {
    number: "3",
    title: "Momento Doce",
    text: "Opções gostosas para quando bate vontade de um doce.",
    value: 27,
    image: IMAGES.dessert,
  },
];

export const finalStack = [
  { name: "Aplicativo", value: 97 },
  { name: "Método", value: 67 },
  { name: "Cardápios", value: 37 },
  { name: "Guia", value: 27 },
  { name: "Bônus 1", value: 27 },
  { name: "Bônus 2", value: 27 },
  { name: "Bônus 3", value: 27 },
];

export const testimonials = [
  {
    name: "Amanda Oliveira",
    image: IMAGES.whatsapp[0],
    alt: "Print de WhatsApp de Amanda Oliveira sobre o Semana Resolvida",
  },
  {
    name: "Juliana Ferreira",
    image: IMAGES.whatsapp[1],
    alt: "Print de WhatsApp de Juliana Ferreira sobre o Semana Resolvida",
  },
  {
    name: "Camila Souza",
    image: IMAGES.whatsapp[2],
    alt: "Print de WhatsApp de Camila Souza sobre o Semana Resolvida",
  },
];

export const faqs = [
  {
    q: "É uma dieta?",
    a: "Não. O Semana Resolvida é uma ferramenta de receitas e organização alimentar. Não substitui acompanhamento nutricional individualizado.",
  },
  {
    q: "Vou conseguir emagrecer?",
    a: "Resultados corporais variam entre pessoas e dependem de diversos fatores. O objetivo do produto é ajudar você a criar uma alimentação mais organizada e prática, que possa apoiar seus objetivos pessoais.",
  },
  {
    q: "Preciso saber cozinhar?",
    a: "Não precisa ser especialista. As receitas possuem orientações para facilitar o preparo.",
  },
  {
    q: "Preciso cozinhar tudo em um único dia?",
    a: "Não. O Método Semana Resolvida ensina uma lógica de planejamento e preparação antecipada. Você adapta a estratégia à sua rotina.",
  },
  {
    q: "Tem receitas para café da manhã?",
    a: "Sim. Você encontrará opções para diferentes momentos do dia.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O produto foi pensado para ser facilmente consultado pelo celular.",
  },
  {
    q: "É assinatura?",
    a: "Não. Você paga uma única vez pelo período de acesso informado na oferta.",
  },
  {
    q: "Quando recebo meu acesso?",
    a: "Após a confirmação do pagamento, você recebe as instruções para acessar o produto.",
  },
  {
    q: "Quanto tempo tenho de garantia?",
    a: "Você tem 7 dias, conforme as condições apresentadas no momento da compra.",
  },
];

export const closingChecks = [
  "Aplicativo completo",
  "Método passo a passo",
  "Receitas práticas",
  "Cardápios",
  "Bônus",
  "Acesso imediato",
  "7 dias de garantia",
];

export const pricePerks = [
  { icon: "🔒", text: "Compra segura" },
  { icon: "⚡", text: "Acesso imediato" },
  { icon: "📱", text: "Acesse pelo celular" },
  { icon: "🛡️", text: "7 dias de garantia" },
];

export const desirePhotos = [
  { src: IMAGES.foodReal[0], alt: "Prato com arroz, feijão, carne e batata" },
  { src: IMAGES.foodReal[1], alt: "Tapioca com queijo e ovo" },
  { src: IMAGES.foodReal[2], alt: "Lanche natural" },
  { src: IMAGES.foodReal[3], alt: "Sanduíche" },
  { src: IMAGES.foodReal[4], alt: "Bauru de forno" },
  { src: IMAGES.foodReal[5], alt: "Sanduíche de pão de forma" },
];
