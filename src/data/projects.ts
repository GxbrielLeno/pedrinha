import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 3,
    title: "Campanha Visual Impressa — Faculdade UPIS",
    description:
      "Criação de materiais gráficos impressos como fronts de fachada, outdoors, panfletos e faixas promocionais para uma campanha institucional da Faculdade UPIS. As peças foram desenvolvidas com foco em impacto visual, legibilidade e coerência com a identidade da marca, contribuindo para o fortalecimento da presença da instituição em ambientes externos e de grande circulação. ",
    image: "/img-projetos/upis.png",
    category: "branding",
    year: "2025",
    client: "Faculdades UPIS",
    size: "large",
    color: "from-red-500 to-blue-600",
    fullDescription:
      "Criação de materiais gráficos físicos para campanhas de captação da Faculdade UPIS, incluindo fronts de fachada, outdoors, panfletos, faixas e outros itens promocionais. O foco foi manter a identidade visual da marca enquanto se destacava em espaços públicos de alta circulação.",
    challenge:
      "Desenvolver peças visuais impactantes e coerentes com a identidade da instituição, que funcionassem em diversos formatos e tamanhos, mantendo a legibilidade, harmonia visual e o apelo comercial, mesmo em ambientes externos e de passagem rápida.",
    solution:
      "Produzi uma série de artes com hierarquia visual clara, cores institucionais e chamadas de ação diretas, adaptando o design para diferentes superfícies e dimensões. O resultado foi uma comunicação consistente que aumentou a visibilidade da campanha e fortaleceu o reconhecimento da marca em Brasília.",

    results: [
      "Aumento de 200% no engajamento",
      "Crescimento de 150% em leads qualificados",
      "Redução de 60% no tempo de produção de conteúdo",
      "Reconhecimento como Campanha do Ano",
    ],
    technologies: ["Canva Pro", "Adobe Photoshop"],
    duration: "2 meses",
    role: "Designer Visual",
    gallery: [
      "/img-projetos/upis.png",
      "/img-projetos/upis2.png",
      "/img-projetos/upis3.png",
    ],
    testimonial: {
      text: "Gabriel entendeu perfeitamente nossa necessidade e criou uma campanha que superou todas as expectativas.",
      author: "Marina Costa",
      position: "Diretora Criativa, SocialBuzz",
    },
  },
  {
    id: 4,
    title: "Meus Vídeos",
    description: "Portfólio completo de produções audiovisuais",
    image: "/img-projetos/video.png",
    category: "video",
    year: "2025",
    client: "Portfólio de Vídeos",
    size: "medium",
    color: "from-red-500 to-pink-600",
    type: "video",
    fullDescription:
      "Uma coleção completa dos meus trabalhos em produção audiovisual, incluindo vídeos institucionais, motion graphics, edição de eventos e campanhas digitais. Cada projeto demonstra diferentes técnicas e estilos de edição.",
    challenge:
      "Criar conteúdo audiovisual diversificado que atenda diferentes necessidades de comunicação, desde vídeos corporativos até campanhas criativas para redes sociais.",
    solution:
      "Desenvolvi uma abordagem versátil combinando técnicas de storytelling, motion design e edição dinâmica para criar vídeos que engajam e comunicam efetivamente a mensagem de cada cliente.",
    results: [
      "Mais de 500K visualizações totais",
      "Aumento médio de 180% no engajamento",
      "15+ projetos audiovisuais concluídos",
      "95% de satisfação dos clientes",
    ],
    technologies: ["Sony Vegas", "CapCut", "Adobe After Effects", "Adobe Photoshop"],
    duration: "Portfólio em desenvolvimento",
    role: "Editor de Vídeo / Motion Designer",
    gallery: [
      "/img-projetos/video-thumb-1.jpg",
      "/img-projetos/video-thumb-2.jpg",
      "/img-projetos/video-thumb-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Landing page para conversão de leads para alunos",
    image: "/img-projetos/lp.png",
    category: "ui-ux",
    year: "2024",
    client: "Faculdades UPIS",
    size: "small",
    color: "from-green-500 to-teal-600",
    fullDescription:
      "Landing page desenvolvida para a Faculdade UPIS durante o processo de matrículas. O objetivo era criar uma página estratégica, com alta conversão, para captação de leads e impulsionamento das inscrições em uma campanha de marketing educacional. Landing Page integrada com google sheets e RD Station",
    challenge:
      "Desenvolver uma landing page que fosse visualmente atraente, responsiva e extremamente funcional, com foco em performance e usabilidade, diante de um cenário competitivo no setor educacional privado.",
    solution:
      "Criei uma landing page moderna e objetiva, utilizando seções bem estruturadas, chamadas para ação claras e elementos visuais que reforçavam a credibilidade da instituição. A campanha resultou em mais de 3 mil inscritos e mais de 450 matrículas efetivadas por meio da página.",
    results: [
      "Aumento de 85% na retenção de usuários",
      "Crescimento de 120% no valor médio dos pedidos",
      "Redução de 40% no tempo de abandono do carrinho",
      "4.8 estrelas na App Store",
    ],
    technologies: ["Figma", "Adobe Photoshop", "React JS", "Responsivo"],
    duration: "2 meses",
    role: "UI / UX / Desenvolvedor",
    gallery: [
      "/img-projetos/lp.png",
      "/img-projetos/lp (2).png",
      "/img-projetos/lp (3).png",
    ],
    testimonial: {
      text: "A interface criada pelo Gabriel revolucionou nossa experiência do usuário. Os números falam por si só!",
      author: "Carlos Mendes",
      position: "Product Manager, FoodieGo",
    },
  },
  {
    id: 1,
    title: "Identidade Visual | Doces Emerick",
    description: "Desenvolvimento completo de marca",
    image: "/img-projetos/doces.jpg",
    category: "branding",
    year: "2025",
    client: "Doces Emerick",
    size: "small",
    color: "from-blue-500 to-purple-600",
    fullDescription:
      "Doces Emerick é uma doceria fictícia voltada para a produção artesanal de doces que remetem às receitas caseiras de antigamente. O objetivo foi criar uma identidade visual que transmitisse aconchego, tradição e carinho, destacando-se pela sua simplicidade e delicadeza.",
    challenge:
      "Criar uma marca que unisse elementos nostálgicos e artesanais com uma estética moderna e atraente, capaz de se destacar em um mercado repleto de marcas padronizadas e visuais genéricos.",
    solution:
      "Desenvolvi uma identidade visual com traços suaves e tipografia manuscrita, combinada a uma paleta de cores pastéis que evocam doçura e proximidade. O logotipo possui elementos ilustrativos sutis que reforçam a tradição e o cuidado artesanal da marca.",
    results: [
      "Aumento de 150% no reconhecimento da marca",
      "Captação de R$ 2.5M em investimentos",
      "Crescimento de 300% no engajamento nas redes sociais",
      "Prêmio de Melhor Design de Startup 2024",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    duration: "1 meses",
    role: "Designer Gráfico",
    gallery: [
      "/img-projetos/doces2.jpg",
      "/img-projetos/doces3.jpg",
      "/img-projetos/doces4.jpg",
    ],
    testimonial: {
      text: "Gabriel transformou nossa visão em uma identidade visual incrível. O trabalho dele foi fundamental para nosso sucesso na captação de investimentos.",
      author: "Ana Silva",
      position: "CEO, TechFlow",
    },
  },
];
