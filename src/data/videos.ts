export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
  views: string;
  client: string;
  year: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Vídeo Institucional – Curso de Enfermagem",
    description: "Edição e finalização do vídeo institucional, com foco nas instalações do curso, apresentação do conteúdo programático e entrevista com a coordenadora do curso.",
    thumbnail: "/img-projetos/video-thumb-1.jpg",
    videoUrl: "https://www.youtube.com/embed/UchGqueKd5g",
    category: "Institucional",
    duration: "1:12",
    views: "",
    client: "Faculdades UPIS",
    year: "2025",
    tags: ["Institucional", "Educação", "Captação"]
  },
  {
    id: 2,
    title: "Motion Graphics - Campanha Digital",
    description: "Animações criativas para redes sociais e campanhas de marketing digital com foco em conversão.",
    thumbnail: "/img-projetos/video-thumb-2.jpg",
    videoUrl: "https://youtube.com/embed/UR0ulIwZkss",
    category: "Motion Graphics",
    duration: "0:20",
    views: "",
    client: "Faculdade UPIS",
    year: "2025",
    tags: ["Motion", "Social Media", "Marketing"]
  },
  {
    id: 3,
    title: "Cobertura de Evento - Zoologico",
    description: "Edição e gravação do vídeo voltado para redes sociais de vídeos curtos",
    thumbnail: "/img-projetos/video-thumb-3.jpg",
    videoUrl: "https://drive.google.com/file/d/16J-wqH8-sGn6h-3q9Um-Xe4VzNCEJpzH/preview",
    category: "Eventos",
    duration: "0:33",
    views: "25K",
    client: "Faculdades UPIS",
    year: "2025",
    tags: ["Evento", "Institucional"]
  },
  {
    id: 4,
    title: "Vídeo Promocional - Vestibular",
    description: "Material promocional para divulgação do vestibular da instituição.",
    thumbnail: "/img-projetos/video-thumb-4.jpg",
    videoUrl: "https://youtube.com/embed/QDAyZAxTlBo",
    category: "Promocional",
    duration: "1:00",
    views: "80K",
    client: "Faculdades UPIS",
    year: "2024",
    tags: ["Promocional", "Educação", "Design"]
  }
];