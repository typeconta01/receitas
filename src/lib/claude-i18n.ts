import {
  FULL_VALUE,
  GUARANTEE_DAYS,
  PRODUCT_NAME,
  PRODUCT_NAME_TM,
  PRODUCT_PRICE,
  PRODUCT_PRICE_FROM,
} from "@/lib/claude-config";

export type ClaudeLang = "pt" | "en" | "es";

export const claudeCopy = {
  pt: {
    htmlLang: "pt-BR",
    metaTitle: "Guia Prático do Claude AI | Do Zero à Prática",
    metaDescription:
      "Aprenda passo a passo como começar a usar Claude AI e aplicar a ferramenta na rotina, trabalho e negócios.",
    productName: PRODUCT_NAME,
    productNameTm: PRODUCT_NAME_TM,
    mapNodes: [
      "Pesquisar",
      "Escrever",
      "Planejar",
      "Analisar",
      "Negócios",
      "Rotina",
      "Documentos",
      "Ideias",
    ],
    hero: {
      brand: "Guia Prático do Claude AI",
      titleBefore: "Em um dia, descubra como transformar o Claude AI no seu ",
      titleHighlight: "braço direito digital",
      sub: "Aprenda passo a passo como usar o Claude para ajudar você a pesquisar, escrever, planejar, analisar e acelerar tarefas da sua rotina, trabalho e negócio — mesmo que hoje você mal saiba por onde começar.",
      perks: [
        "Sem programação",
        "Sem conhecimento técnico",
        "Passo a passo para iniciantes",
      ],
      launch: "Oferta de lançamento",
      from: "De",
      today: "Hoje por apenas",
      once: "Pagamento único • Acesso imediato",
      cta: `QUERO O GUIA POR ${PRODUCT_PRICE} →`,
      secure:
        "Acesso digital • Comece imediatamente após a confirmação da compra",
    },
    problem: {
      title:
        "Você já percebeu que a IA pode fazer muito mais… mas ainda não sabe como aproveitar isso?",
      p1: "Talvez você já tenha aberto uma inteligência artificial, feito algumas perguntas e pensado:",
      quote: "“É só isso?”",
      no: "Não.",
      p2: "O problema é que a maioria das pessoas começa usando ferramentas como Claude exatamente como usaria o Google:",
      steps: "faz uma pergunta,\nrecebe uma resposta,\nfecha a página.",
      p3: "E acaba deixando de explorar boa parte das possibilidades práticas da ferramenta.",
      basicLabel: "Uso básico",
      practicalLabel: "Uso prático",
      basic: ["Perguntar", "Receber resposta", "Copiar", "Refazer"],
      practical: [
        "Contextualizar",
        "Dar uma tarefa",
        "Refinar",
        "Transformar em entrega",
      ],
    },
    belief: {
      eyebrow: "O problema não é a tecnologia.",
      title: "Você não precisa virar especialista em Inteligência Artificial.",
      lines: [
        "Não precisa aprender programação.",
        "Não precisa decorar centenas de prompts.",
        "E não precisa passar semanas assistindo tutoriais tentando descobrir sozinho o que funciona.",
        "Você precisa entender como conversar com a ferramenta, quais tarefas entregar para ela e como conduzir o Claude até o resultado que procura.",
      ],
      callout:
        "Você não precisa aprender tudo sobre IA.\nPrecisa aprender a colocá-la para trabalhar ao seu lado.",
    },
    mechanism: {
      badge: "Apresentando",
      title: PRODUCT_NAME_TM,
      sub: "Um caminho simples e organizado para sair do zero e começar a usar Claude no mundo real.",
      p1: "O Guia Prático do Claude AI foi pensado para quem não quer se tornar especialista em tecnologia.",
      p2: "Ele foi criado para quem simplesmente quer abrir o Claude e saber:",
      list: "O que fazer.\nO que escrever.\nComo pedir.\nComo melhorar uma resposta.\nE onde aplicar a ferramenta no dia a dia.",
      line: "Em vez de aprender IA pela teoria, você aprende usando.",
    },
    steps: {
      title: "Do zero à prática em 5 etapas.",
      items: [
        {
          num: "01 — CONHEÇA",
          title: "Conheça",
          text: "Entenda o Claude, para que ele serve e onde ele pode ajudar você.",
        },
        {
          num: "02 — PREPARE",
          title: "Prepare",
          text: "Aprenda como começar e organizar o contexto antes de pedir uma tarefa.",
        },
        {
          num: "03 — COMANDE",
          title: "Comande",
          text: "Descubra como dar instruções mais claras para receber respostas mais úteis.",
        },
        {
          num: "04 — APLIQUE",
          title: "Aplique",
          text: "Veja como levar o Claude para situações reais da rotina, trabalho e negócio.",
        },
        {
          num: "05 — ACELERE",
          title: "Acelere",
          text: "Use estruturas e modelos práticos para evitar começar do zero toda vez.",
        },
      ],
    },
    uses: {
      title:
        "Imagine abrir o Claude e saber exatamente como pedir ajuda para…",
      after: "E isso é apenas o começo.",
      cta: "QUERO DESCOBRIR COMO FAZER →",
      items: [
        {
          title: "Pesquisar",
          text: "Organizar informações e explorar assuntos com mais estrutura.",
        },
        {
          title: "Escrever",
          text: "Criar rascunhos, mensagens, textos, ideias e conteúdos.",
        },
        {
          title: "Planejar",
          text: "Estruturar projetos, tarefas, cronogramas e próximos passos.",
        },
        {
          title: "Analisar",
          text: "Organizar informações, comparar alternativas e identificar pontos importantes.",
        },
        {
          title: "Negócios",
          text: "Ajudar com ideias, comunicação, planejamento e tarefas operacionais.",
        },
        {
          title: "Rotina",
          text: "Organizar listas, decisões, planos e tarefas pessoais.",
        },
        {
          title: "Documentos",
          text: "Resumir, revisar e trabalhar sobre materiais fornecidos por você.",
        },
        {
          title: "Ideias",
          text: "Sair da tela em branco e desenvolver ideias com mais rapidez.",
        },
      ],
    },
    beforeAfter: {
      title: "Pare de gastar horas tentando descobrir sozinho como usar IA.",
      beforeTitle: "Antes",
      afterTitle: "Depois do guia",
      before: [
        "Procurar tutorial atrás de tutorial",
        "Copiar prompts aleatórios da internet",
        "Receber respostas genéricas",
        "Não saber o que pedir",
        "Começar cada tarefa do zero",
        "Usar IA apenas para perguntas básicas",
      ],
      after: [
        "Ter um caminho organizado",
        "Entender como estruturar pedidos",
        "Saber onde aplicar Claude",
        "Ter exemplos práticos",
        "Adaptar modelos às suas necessidades",
        "Usar Claude com muito mais intenção",
      ],
    },
    modules: {
      title: "Tudo organizado para você abrir e aplicar.",
      items: [
        {
          num: "Módulo 01",
          title: "Começando com Claude AI",
          items: [
            "O que é Claude",
            "Como começar",
            "Principais possibilidades",
            "Como conversar com a ferramenta",
          ],
        },
        {
          num: "Módulo 02",
          title: "Como conseguir respostas melhores",
          items: ["Contexto", "Objetivo", "Instruções", "Formato", "Refinamento"],
        },
        {
          num: "Módulo 03",
          title: "Claude para produtividade",
          items: [
            "Organização",
            "Planejamento",
            "Resumos",
            "Listas",
            "Estruturação de tarefas",
          ],
        },
        {
          num: "Módulo 04",
          title: "Claude para trabalho e negócios",
          items: [
            "Pesquisa",
            "Comunicação",
            "Conteúdo",
            "Planejamento",
            "Brainstorming",
            "Análises",
          ],
        },
        {
          num: "Módulo 05",
          title: "Claude na prática",
          items: [
            "Exemplos",
            "Modelos",
            "Casos de uso",
            "Como adaptar instruções",
          ],
        },
        {
          num: "Módulo 06",
          title: "Do básico ao uso inteligente",
          items: [
            "Como criar uma sequência de trabalho",
            "Como refinar resultados",
            "Como reutilizar estruturas",
            "Boas práticas",
          ],
        },
      ],
    },
    bonuses: {
      badge: "Você também recebe",
      title: "Ferramentas prontas para acelerar seus primeiros passos.",
      items: [
        {
          tag: "Bônus #1",
          title: "Biblioteca de Prompts Práticos",
          text: "Modelos que você pode adaptar para diferentes situações sem precisar começar da tela em branco.",
        },
        {
          tag: "Bônus #2",
          title: "50 Ideias de Tarefas para Claude",
          text: "Uma lista prática para descobrir diferentes formas de aplicar a ferramenta na rotina.",
        },
        {
          tag: "Bônus #3",
          title: "Checklist do Prompt Inteligente",
          text: "Uma estrutura rápida para conferir se você forneceu contexto e instruções suficientes antes de enviar seu pedido.",
        },
      ],
    },
    audience: {
      title: `O ${PRODUCT_NAME} foi feito para você que…`,
      items: [
        "Está começando agora com inteligência artificial",
        "Já testou Claude ou outras IAs, mas sente que usa apenas o básico",
        "Quer aproveitar IA no trabalho",
        "Tem um negócio e quer explorar formas de ganhar produtividade",
        "Quer economizar tempo em tarefas intelectuais repetitivas",
        "Não entende programação e não quer aprender código",
        "Quer exemplos práticos em vez de teoria complicada",
      ],
      note: "Se você consegue conversar pelo WhatsApp, consegue começar a usar o que está neste guia.",
    },
    complexity: {
      title: "“Mas eu não entendo absolutamente nada de IA…”",
      lines: [
        "Melhor ainda.",
        "O Guia Prático foi estruturado justamente para começar pelo básico.",
        "Nada de assumir que você já conhece termos técnicos.",
        "Você começa entendendo como Claude funciona e avança gradualmente até aplicações mais práticas.",
      ],
      stack: ["COMECE DO ZERO.", "APRENDA FAZENDO.", "AVANCE NO SEU RITMO."],
    },
    offer: {
      badge: "Acesso ao guia prático",
      title: "Comece hoje a usar Claude com muito mais clareza.",
      cardTitle: PRODUCT_NAME_TM,
      intro: "Veja tudo o que você recebe hoje:",
      valued: [
        {
          name: "Guia Prático Completo do Claude AI",
          value: PRODUCT_PRICE_FROM,
          badge: "Produto principal",
        },
        {
          name: "Biblioteca de Prompts Práticos",
          value: "US$ 9,90",
          badge: "Bônus #1",
        },
        {
          name: "50 Ideias de Tarefas para Claude",
          value: "US$ 7,90",
          badge: "Bônus #2",
        },
        {
          name: "Checklist do Prompt Inteligente",
          value: "US$ 4,90",
          badge: "Bônus #3",
        },
      ],
      included: [
        "Exemplos Práticos de Uso",
        "Passo a Passo para Iniciantes",
        "Acesso digital imediato",
      ],
      includedLabel: "Incluso",
      sep: "Se você adquirisse tudo separadamente",
      contrast: `Mas hoje você não paga ${FULL_VALUE}`,
      from: "Você leva o pacote completo por apenas:",
      once: "Pagamento único • Sem mensalidade",
      cta: `QUERO ACESSAR TUDO POR ${PRODUCT_PRICE} →`,
      secure: "Pagamento processado em ambiente seguro.",
    },
    guarantee: {
      title: `Você tem ${GUARANTEE_DAYS} dias para conhecer o material.`,
      text: `Após adquirir o ${PRODUCT_NAME}, você terá ${GUARANTEE_DAYS} dias de garantia, conforme as condições apresentadas no checkout.`,
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        {
          q: "Preciso já saber usar Claude?",
          a: "Não. O material começa pelo básico e foi estruturado para iniciantes.",
        },
        {
          q: "Preciso entender programação?",
          a: "Não. O conteúdo não exige conhecimento de programação.",
        },
        {
          q: "É curso ou guia?",
          a: "É um material digital prático e organizado para consulta e aplicação.",
        },
        {
          q: "Recebo os bônus?",
          a: "Sim. Os bônus apresentados nesta página acompanham a oferta enquanto estiverem incluídos nela.",
        },
        {
          q: "Como recebo o acesso?",
          a: "Após a confirmação do pagamento, você receberá as instruções de acesso conforme informado no checkout.",
        },
        {
          q: "Posso acessar pelo celular?",
          a: "O conteúdo foi estruturado para funcionar em dispositivos compatíveis com o formato final do produto.",
        },
        {
          q: "Claude está incluído na compra?",
          a: "Não. O produto vendido é um guia educacional independente. O acesso ao Claude e eventuais planos da plataforma são separados.",
        },
        {
          q: "Este produto é oficial da Anthropic?",
          a: "Não. Este é um material educacional independente e não possui vínculo, patrocínio ou endosso da Anthropic.",
        },
      ],
    },
    final: {
      title:
        "Daqui a uma noite, você pode continuar apenas fazendo perguntas para a IA…",
      alt: "…ou pode começar a entender como colocá-la para trabalhar ao seu lado.",
      lines: [
        "O Claude é apenas uma ferramenta.",
        "A diferença está em saber o que pedir, como pedir e onde aplicá-lo.",
        "O Guia Prático do Claude AI mostra o caminho.",
      ],
      cta: "QUERO COMEÇAR AGORA →",
      note: `${PRODUCT_NAME_TM} • Acesso digital`,
    },
    footer: {
      navLabel: "Informações legais",
      terms: "Termos de Uso",
      privacy: "Política de Privacidade",
      contact: "Contato",
      disclaimer:
        "Este produto é um material educacional independente e não é afiliado, patrocinado ou endossado pela Anthropic. Claude é uma marca de seu respectivo proprietário.",
      rights: "Todos os direitos reservados.",
    },
    sticky: "ACESSAR O GUIA →",
  },
  en: {
    htmlLang: "en",
    metaTitle: "Claude AI Practical Guide | From Zero to Practice",
    metaDescription:
      "Learn step by step how to start using Claude AI and apply it to your routine, work, and business.",
    productName: "Claude AI Practical Guide",
    productNameTm: "Claude AI Practical Guide™",
    mapNodes: [
      "Research",
      "Write",
      "Plan",
      "Analyze",
      "Business",
      "Routine",
      "Documents",
      "Ideas",
    ],
    hero: {
      brand: "Claude AI Practical Guide",
      titleBefore: "In one day, discover how to turn Claude AI into your ",
      titleHighlight: "digital right hand",
      sub: "Learn step by step how to use Claude to help you research, write, plan, analyze, and speed up tasks in your routine, work, and business — even if you barely know where to start today.",
      perks: [
        "No coding",
        "No technical background",
        "Beginner-friendly walkthrough",
      ],
      launch: "Launch offer",
      from: "Was",
      today: "Today for just",
      once: "One-time payment • Instant access",
      cta: `I WANT THE GUIDE FOR ${PRODUCT_PRICE} →`,
      secure: "Digital access • Start right after your purchase is confirmed",
    },
    problem: {
      title:
        "You already know AI can do much more… but you still don’t know how to use it?",
      p1: "Maybe you’ve opened an AI tool, asked a few questions, and thought:",
      quote: "“Is that all?”",
      no: "No.",
      p2: "The problem is that most people start using tools like Claude the same way they would use Google:",
      steps: "ask a question,\nget an answer,\nclose the tab.",
      p3: "And they never explore most of what the tool can actually do in practice.",
      basicLabel: "Basic use",
      practicalLabel: "Practical use",
      basic: ["Ask", "Get an answer", "Copy", "Start over"],
      practical: [
        "Add context",
        "Give a task",
        "Refine",
        "Turn it into a deliverable",
      ],
    },
    belief: {
      eyebrow: "The problem isn’t the technology.",
      title: "You don’t need to become an Artificial Intelligence expert.",
      lines: [
        "You don’t need to learn to code.",
        "You don’t need to memorize hundreds of prompts.",
        "And you don’t need to spend weeks watching tutorials trying to figure it out alone.",
        "You need to understand how to talk to the tool, which tasks to give it, and how to guide Claude to the result you want.",
      ],
      callout:
        "You don’t need to learn everything about AI.\nYou need to learn how to put it to work beside you.",
    },
    mechanism: {
      badge: "Introducing",
      title: "Claude AI Practical Guide™",
      sub: "A simple, organized path to go from zero to using Claude in the real world.",
      p1: "The Claude AI Practical Guide was made for people who don’t want to become tech specialists.",
      p2: "It was created for anyone who simply wants to open Claude and know:",
      list: "What to do.\nWhat to write.\nHow to ask.\nHow to improve an answer.\nAnd where to apply the tool every day.",
      line: "Instead of learning AI through theory, you learn by using it.",
    },
    steps: {
      title: "From zero to practice in 5 steps.",
      items: [
        {
          num: "01 — LEARN",
          title: "Learn",
          text: "Understand Claude, what it’s for, and where it can help you.",
        },
        {
          num: "02 — PREPARE",
          title: "Prepare",
          text: "Learn how to start and organize context before you assign a task.",
        },
        {
          num: "03 — DIRECT",
          title: "Direct",
          text: "Discover how to give clearer instructions so you get more useful answers.",
        },
        {
          num: "04 — APPLY",
          title: "Apply",
          text: "See how to bring Claude into real situations at home, at work, and in business.",
        },
        {
          num: "05 — ACCELERATE",
          title: "Accelerate",
          text: "Use practical structures and templates so you don’t start from scratch every time.",
        },
      ],
    },
    uses: {
      title: "Imagine opening Claude and knowing exactly how to ask for help with…",
      after: "And that’s only the beginning.",
      cta: "I WANT TO LEARN HOW →",
      items: [
        {
          title: "Research",
          text: "Organize information and explore topics with more structure.",
        },
        {
          title: "Write",
          text: "Create drafts, messages, texts, ideas, and content.",
        },
        {
          title: "Plan",
          text: "Structure projects, tasks, timelines, and next steps.",
        },
        {
          title: "Analyze",
          text: "Organize information, compare options, and spot what matters.",
        },
        {
          title: "Business",
          text: "Get help with ideas, communication, planning, and operational tasks.",
        },
        {
          title: "Routine",
          text: "Organize lists, decisions, plans, and personal tasks.",
        },
        {
          title: "Documents",
          text: "Summarize, review, and work with materials you provide.",
        },
        {
          title: "Ideas",
          text: "Get past the blank page and develop ideas faster.",
        },
      ],
    },
    beforeAfter: {
      title: "Stop spending hours trying to figure out AI on your own.",
      beforeTitle: "Before",
      afterTitle: "After the guide",
      before: [
        "Jumping from tutorial to tutorial",
        "Copying random prompts from the internet",
        "Getting generic answers",
        "Not knowing what to ask",
        "Starting every task from scratch",
        "Using AI only for basic questions",
      ],
      after: [
        "Have an organized path",
        "Understand how to structure requests",
        "Know where to apply Claude",
        "Get practical examples",
        "Adapt templates to your needs",
        "Use Claude with much more intention",
      ],
    },
    modules: {
      title: "Everything organized so you can open it and apply it.",
      items: [
        {
          num: "Module 01",
          title: "Getting started with Claude AI",
          items: [
            "What Claude is",
            "How to get started",
            "Main possibilities",
            "How to talk to the tool",
          ],
        },
        {
          num: "Module 02",
          title: "How to get better answers",
          items: ["Context", "Goal", "Instructions", "Format", "Refinement"],
        },
        {
          num: "Module 03",
          title: "Claude for productivity",
          items: [
            "Organization",
            "Planning",
            "Summaries",
            "Lists",
            "Task structuring",
          ],
        },
        {
          num: "Module 04",
          title: "Claude for work and business",
          items: [
            "Research",
            "Communication",
            "Content",
            "Planning",
            "Brainstorming",
            "Analysis",
          ],
        },
        {
          num: "Module 05",
          title: "Claude in practice",
          items: [
            "Examples",
            "Templates",
            "Use cases",
            "How to adapt instructions",
          ],
        },
        {
          num: "Module 06",
          title: "From basic to smarter use",
          items: [
            "How to create a work sequence",
            "How to refine results",
            "How to reuse structures",
            "Best practices",
          ],
        },
      ],
    },
    bonuses: {
      badge: "You also get",
      title: "Ready-to-use tools to speed up your first steps.",
      items: [
        {
          tag: "Bonus #1",
          title: "Practical Prompt Library",
          text: "Templates you can adapt to different situations without starting from a blank page.",
        },
        {
          tag: "Bonus #2",
          title: "50 Task Ideas for Claude",
          text: "A practical list to discover different ways to apply the tool in your routine.",
        },
        {
          tag: "Bonus #3",
          title: "Smart Prompt Checklist",
          text: "A quick structure to check whether you gave enough context and instructions before you send the request.",
        },
      ],
    },
    audience: {
      title: "The Claude AI Practical Guide was made for you if you…",
      items: [
        "Are just getting started with artificial intelligence",
        "Have already tried Claude or other AIs, but feel you only use the basics",
        "Want to use AI at work",
        "Have a business and want more productivity",
        "Want to save time on repetitive thinking tasks",
        "Don’t know how to code and don’t want to learn code",
        "Want practical examples instead of complicated theory",
      ],
      note: "If you can send a text message, you can start using what’s in this guide.",
    },
    complexity: {
      title: "“But I don’t understand anything about AI…”",
      lines: [
        "Even better.",
        "The Practical Guide was structured to start from the basics.",
        "It never assumes you already know technical terms.",
        "You start by understanding how Claude works and move, step by step, into more practical applications.",
      ],
      stack: ["START FROM ZERO.", "LEARN BY DOING.", "MOVE AT YOUR PACE."],
    },
    offer: {
      badge: "Access to the practical guide",
      title: "Start using Claude with much more clarity today.",
      cardTitle: "Claude AI Practical Guide™",
      intro: "See everything you get today:",
      valued: [
        {
          name: "Complete Claude AI Practical Guide",
          value: PRODUCT_PRICE_FROM,
          badge: "Main product",
        },
        {
          name: "Practical Prompt Library",
          value: "US$ 9,90",
          badge: "Bonus #1",
        },
        {
          name: "50 Task Ideas for Claude",
          value: "US$ 7,90",
          badge: "Bonus #2",
        },
        {
          name: "Smart Prompt Checklist",
          value: "US$ 4,90",
          badge: "Bonus #3",
        },
      ],
      included: [
        "Practical use examples",
        "Beginner-friendly walkthrough",
        "Instant digital access",
      ],
      includedLabel: "Included",
      sep: "If you bought everything separately",
      contrast: `But today you don’t pay ${FULL_VALUE}`,
      from: "You get the complete package for just:",
      once: "One-time payment • No subscription",
      cta: `I WANT FULL ACCESS FOR ${PRODUCT_PRICE} →`,
      secure: "Payment processed in a secure environment.",
    },
    guarantee: {
      title: `You have ${GUARANTEE_DAYS} days to explore the material.`,
      text: `After you purchase the Claude AI Practical Guide, you have ${GUARANTEE_DAYS} days of guarantee, according to the terms shown at checkout.`,
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I already need to know how to use Claude?",
          a: "No. The material starts from the basics and was structured for beginners.",
        },
        {
          q: "Do I need to understand programming?",
          a: "No. The content does not require any coding knowledge.",
        },
        {
          q: "Is this a course or a guide?",
          a: "It’s a practical digital guide, organized for reference and application.",
        },
        {
          q: "Do I get the bonuses?",
          a: "Yes. The bonuses shown on this page come with the offer while they are included.",
        },
        {
          q: "How do I receive access?",
          a: "After payment is confirmed, you will receive access instructions as shown at checkout.",
        },
        {
          q: "Can I use it on my phone?",
          a: "The content is structured to work on devices compatible with the final product format.",
        },
        {
          q: "Is Claude included in the purchase?",
          a: "No. This product is an independent educational guide. Access to Claude and any platform plans are separate.",
        },
        {
          q: "Is this an official Anthropic product?",
          a: "No. This is an independent educational product and is not affiliated with, sponsored by, or endorsed by Anthropic.",
        },
      ],
    },
    final: {
      title: "By tonight, you can keep asking the AI basic questions…",
      alt: "…or you can start learning how to put it to work beside you.",
      lines: [
        "Claude is just a tool.",
        "The difference is knowing what to ask, how to ask, and where to apply it.",
        "The Claude AI Practical Guide shows you the path.",
      ],
      cta: "I WANT TO START NOW →",
      note: "Claude AI Practical Guide™ • Digital access",
    },
    footer: {
      navLabel: "Legal",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      contact: "Contact",
      disclaimer:
        "This product is an independent educational resource and is not affiliated with, sponsored by, or endorsed by Anthropic. Claude is a trademark of its respective owner.",
      rights: "All rights reserved.",
    },
    sticky: "GET THE GUIDE →",
  },
  es: {
    htmlLang: "es",
    metaTitle: "Guía Práctica de Claude AI | De cero a la práctica",
    metaDescription:
      "Aprende paso a paso cómo empezar a usar Claude AI y aplicarlo en tu rutina, trabajo y negocio.",
    productName: "Guía Práctica de Claude AI",
    productNameTm: "Guía Práctica de Claude AI™",
    mapNodes: [
      "Investigar",
      "Escribir",
      "Planear",
      "Analizar",
      "Negocios",
      "Rutina",
      "Documentos",
      "Ideas",
    ],
    hero: {
      brand: "Guía Práctica de Claude AI",
      titleBefore: "En un día, descubre cómo convertir Claude AI en tu ",
      titleHighlight: "brazo derecho digital",
      sub: "Aprende paso a paso a usar Claude para investigar, escribir, planear, analizar y acelerar tareas de tu rutina, trabajo y negocio — aunque hoy apenas sepas por dónde empezar.",
      perks: [
        "Sin programación",
        "Sin conocimiento técnico",
        "Paso a paso para principiantes",
      ],
      launch: "Oferta de lanzamiento",
      from: "De",
      today: "Hoy por solo",
      once: "Pago único • Acceso inmediato",
      cta: `QUIERO LA GUÍA POR ${PRODUCT_PRICE} →`,
      secure:
        "Acceso digital • Empieza justo después de confirmar la compra",
    },
    problem: {
      title:
        "¿Ya sabes que la IA puede hacer mucho más… pero todavía no sabes cómo aprovecharlo?",
      p1: "Tal vez ya abriste una inteligencia artificial, hiciste algunas preguntas y pensaste:",
      quote: "“¿Eso es todo?”",
      no: "No.",
      p2: "El problema es que la mayoría de las personas empieza a usar herramientas como Claude igual que usaría Google:",
      steps: "hace una pregunta,\nrecibe una respuesta,\ncierra la página.",
      p3: "Y termina sin explorar gran parte de lo que la herramienta puede hacer en la práctica.",
      basicLabel: "Uso básico",
      practicalLabel: "Uso práctico",
      basic: ["Preguntar", "Recibir respuesta", "Copiar", "Empezar de nuevo"],
      practical: [
        "Dar contexto",
        "Asignar una tarea",
        "Refinar",
        "Convertirlo en un entregable",
      ],
    },
    belief: {
      eyebrow: "El problema no es la tecnología.",
      title: "No necesitas convertirte en experto en Inteligencia Artificial.",
      lines: [
        "No necesitas aprender a programar.",
        "No necesitas memorizar cientos de prompts.",
        "Y no necesitas pasar semanas viendo tutoriales para descubrirlo solo.",
        "Necesitas entender cómo hablar con la herramienta, qué tareas entregarle y cómo llevar a Claude hasta el resultado que buscas.",
      ],
      callout:
        "No necesitas aprenderlo todo sobre IA.\nNecesitas aprender a ponerla a trabajar a tu lado.",
    },
    mechanism: {
      badge: "Presentamos",
      title: "Guía Práctica de Claude AI™",
      sub: "Un camino simple y organizado para salir de cero y empezar a usar Claude en el mundo real.",
      p1: "La Guía Práctica de Claude AI fue pensada para quien no quiere convertirse en especialista en tecnología.",
      p2: "Fue creada para quien simplemente quiere abrir Claude y saber:",
      list: "Qué hacer.\nQué escribir.\nCómo pedirlo.\nCómo mejorar una respuesta.\nY dónde aplicar la herramienta en el día a día.",
      line: "En vez de aprender IA por teoría, aprendes usándola.",
    },
    steps: {
      title: "De cero a la práctica en 5 pasos.",
      items: [
        {
          num: "01 — CONOCE",
          title: "Conoce",
          text: "Entiende qué es Claude, para qué sirve y en qué puede ayudarte.",
        },
        {
          num: "02 — PREPARA",
          title: "Prepara",
          text: "Aprende a empezar y a organizar el contexto antes de pedir una tarea.",
        },
        {
          num: "03 — DIRIGE",
          title: "Dirige",
          text: "Descubre cómo dar instrucciones más claras para recibir respuestas más útiles.",
        },
        {
          num: "04 — APLICA",
          title: "Aplica",
          text: "Mira cómo llevar Claude a situaciones reales de tu rutina, trabajo y negocio.",
        },
        {
          num: "05 — ACELERA",
          title: "Acelera",
          text: "Usa estructuras y modelos prácticos para no empezar de cero cada vez.",
        },
      ],
    },
    uses: {
      title:
        "Imagina abrir Claude y saber exactamente cómo pedir ayuda para…",
      after: "Y esto es solo el comienzo.",
      cta: "QUIERO APRENDER A HACERLO →",
      items: [
        {
          title: "Investigar",
          text: "Organizar información y explorar temas con más estructura.",
        },
        {
          title: "Escribir",
          text: "Crear borradores, mensajes, textos, ideas y contenidos.",
        },
        {
          title: "Planear",
          text: "Estructurar proyectos, tareas, cronogramas y siguientes pasos.",
        },
        {
          title: "Analizar",
          text: "Organizar información, comparar alternativas e identificar lo importante.",
        },
        {
          title: "Negocios",
          text: "Ayudar con ideas, comunicación, planificación y tareas operativas.",
        },
        {
          title: "Rutina",
          text: "Organizar listas, decisiones, planes y tareas personales.",
        },
        {
          title: "Documentos",
          text: "Resumir, revisar y trabajar sobre materiales que tú entregas.",
        },
        {
          title: "Ideas",
          text: "Salir de la página en blanco y desarrollar ideas más rápido.",
        },
      ],
    },
    beforeAfter: {
      title: "Deja de gastar horas intentando descubrir solo cómo usar IA.",
      beforeTitle: "Antes",
      afterTitle: "Después de la guía",
      before: [
        "Buscar tutorial tras tutorial",
        "Copiar prompts aleatorios de internet",
        "Recibir respuestas genéricas",
        "No saber qué pedir",
        "Empezar cada tarea desde cero",
        "Usar IA solo para preguntas básicas",
      ],
      after: [
        "Tener un camino organizado",
        "Entender cómo estructurar pedidos",
        "Saber dónde aplicar Claude",
        "Tener ejemplos prácticos",
        "Adaptar modelos a tus necesidades",
        "Usar Claude con mucha más intención",
      ],
    },
    modules: {
      title: "Todo organizado para que lo abras y lo apliques.",
      items: [
        {
          num: "Módulo 01",
          title: "Empezando con Claude AI",
          items: [
            "Qué es Claude",
            "Cómo empezar",
            "Principales posibilidades",
            "Cómo hablar con la herramienta",
          ],
        },
        {
          num: "Módulo 02",
          title: "Cómo conseguir mejores respuestas",
          items: ["Contexto", "Objetivo", "Instrucciones", "Formato", "Refinamiento"],
        },
        {
          num: "Módulo 03",
          title: "Claude para productividad",
          items: [
            "Organización",
            "Planificación",
            "Resúmenes",
            "Listas",
            "Estructuración de tareas",
          ],
        },
        {
          num: "Módulo 04",
          title: "Claude para trabajo y negocios",
          items: [
            "Investigación",
            "Comunicación",
            "Contenido",
            "Planificación",
            "Brainstorming",
            "Análisis",
          ],
        },
        {
          num: "Módulo 05",
          title: "Claude en la práctica",
          items: [
            "Ejemplos",
            "Modelos",
            "Casos de uso",
            "Cómo adaptar instrucciones",
          ],
        },
        {
          num: "Módulo 06",
          title: "De lo básico al uso inteligente",
          items: [
            "Cómo crear una secuencia de trabajo",
            "Cómo refinar resultados",
            "Cómo reutilizar estructuras",
            "Buenas prácticas",
          ],
        },
      ],
    },
    bonuses: {
      badge: "También recibes",
      title: "Herramientas listas para acelerar tus primeros pasos.",
      items: [
        {
          tag: "Bonus #1",
          title: "Biblioteca de Prompts Prácticos",
          text: "Modelos que puedes adaptar a distintas situaciones sin empezar desde una página en blanco.",
        },
        {
          tag: "Bonus #2",
          title: "50 ideas de tareas para Claude",
          text: "Una lista práctica para descubrir distintas formas de aplicar la herramienta en tu rutina.",
        },
        {
          tag: "Bonus #3",
          title: "Checklist del Prompt Inteligente",
          text: "Una estructura rápida para revisar si diste suficiente contexto e instrucciones antes de enviar tu pedido.",
        },
      ],
    },
    audience: {
      title: "La Guía Práctica de Claude AI fue hecha para ti si…",
      items: [
        "Estás empezando ahora con inteligencia artificial",
        "Ya probaste Claude u otras IAs, pero sientes que solo usas lo básico",
        "Quieres aprovechar la IA en el trabajo",
        "Tienes un negocio y quieres explorar formas de ganar productividad",
        "Quieres ahorrar tiempo en tareas intelectuales repetitivas",
        "No entiendes programación y no quieres aprender código",
        "Quieres ejemplos prácticos en vez de teoría complicada",
      ],
      note: "Si puedes enviar un mensaje de texto, puedes empezar a usar lo que hay en esta guía.",
    },
    complexity: {
      title: "“Pero yo no entiendo absolutamente nada de IA…”",
      lines: [
        "Mejor todavía.",
        "La Guía Práctica fue estructurada justamente para empezar por lo básico.",
        "Nada de asumir que ya conoces términos técnicos.",
        "Empiezas entendiendo cómo funciona Claude y avanzas poco a poco hasta aplicaciones más prácticas.",
      ],
      stack: ["EMPIEZA DE CERO.", "APRENDE HACIENDO.", "AVANZA A TU RITMO."],
    },
    offer: {
      badge: "Acceso a la guía práctica",
      title: "Empieza hoy a usar Claude con mucha más claridad.",
      cardTitle: "Guía Práctica de Claude AI™",
      intro: "Mira todo lo que recibes hoy:",
      valued: [
        {
          name: "Guía Práctica Completa de Claude AI",
          value: PRODUCT_PRICE_FROM,
          badge: "Producto principal",
        },
        {
          name: "Biblioteca de Prompts Prácticos",
          value: "US$ 9,90",
          badge: "Bonus #1",
        },
        {
          name: "50 ideas de tareas para Claude",
          value: "US$ 7,90",
          badge: "Bonus #2",
        },
        {
          name: "Checklist del Prompt Inteligente",
          value: "US$ 4,90",
          badge: "Bonus #3",
        },
      ],
      included: [
        "Ejemplos prácticos de uso",
        "Paso a paso para principiantes",
        "Acceso digital inmediato",
      ],
      includedLabel: "Incluido",
      sep: "Si compraras todo por separado",
      contrast: `Pero hoy no pagas ${FULL_VALUE}`,
      from: "Te llevas el paquete completo por solo:",
      once: "Pago único • Sin mensualidad",
      cta: `QUIERO ACCEDER A TODO POR ${PRODUCT_PRICE} →`,
      secure: "Pago procesado en un entorno seguro.",
    },
    guarantee: {
      title: `Tienes ${GUARANTEE_DAYS} días para conocer el material.`,
      text: `Después de adquirir la Guía Práctica de Claude AI, tendrás ${GUARANTEE_DAYS} días de garantía, según las condiciones mostradas en el checkout.`,
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Ya necesito saber usar Claude?",
          a: "No. El material empieza por lo básico y fue estructurado para principiantes.",
        },
        {
          q: "¿Necesito entender programación?",
          a: "No. El contenido no exige ningún conocimiento de programación.",
        },
        {
          q: "¿Es un curso o una guía?",
          a: "Es un material digital práctico y organizado para consulta y aplicación.",
        },
        {
          q: "¿Recibo los bonuses?",
          a: "Sí. Los bonuses mostrados en esta página acompañan la oferta mientras estén incluidos.",
        },
        {
          q: "¿Cómo recibo el acceso?",
          a: "Después de confirmar el pago, recibirás las instrucciones de acceso según lo indicado en el checkout.",
        },
        {
          q: "¿Puedo usarlo en el celular?",
          a: "El contenido está estructurado para funcionar en dispositivos compatibles con el formato final del producto.",
        },
        {
          q: "¿Claude está incluido en la compra?",
          a: "No. El producto vendido es una guía educativa independiente. El acceso a Claude y a los planes de la plataforma son aparte.",
        },
        {
          q: "¿Este producto es oficial de Anthropic?",
          a: "No. Este es un material educativo independiente y no tiene vínculo, patrocinio ni respaldo de Anthropic.",
        },
      ],
    },
    final: {
      title: "En una noche, puedes seguir solo haciéndole preguntas básicas a la IA…",
      alt: "…o puedes empezar a entender cómo ponerla a trabajar a tu lado.",
      lines: [
        "Claude es solo una herramienta.",
        "La diferencia está en saber qué pedir, cómo pedirlo y dónde aplicarlo.",
        "La Guía Práctica de Claude AI te muestra el camino.",
      ],
      cta: "QUIERO EMPEZAR AHORA →",
      note: "Guía Práctica de Claude AI™ • Acceso digital",
    },
    footer: {
      navLabel: "Información legal",
      terms: "Términos de uso",
      privacy: "Política de privacidad",
      contact: "Contacto",
      disclaimer:
        "Este producto es un material educativo independiente y no está afiliado, patrocinado ni respaldado por Anthropic. Claude es una marca de su respectivo propietario.",
      rights: "Todos los derechos reservados.",
    },
    sticky: "ACCEDER A LA GUÍA →",
  },
} as const;

export type ClaudeCopy = (typeof claudeCopy)["pt"];

export function getClaudeCopy(lang: ClaudeLang = "pt"): ClaudeCopy {
  return claudeCopy[lang] as ClaudeCopy;
}
