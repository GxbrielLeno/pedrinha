export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  client: string;
  size: string;
  color: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  role: string;
  gallery: string[];
  type?: 'project' | 'video';
  videoUrl?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}