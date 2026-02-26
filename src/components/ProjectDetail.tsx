import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types/Project';
import './About.css'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === parseInt(id));
      setProject(foundProject || null);
      
      if (foundProject) {
        const currentIndex = projects.findIndex(p => p.id === foundProject.id);
        const nextIndex = (currentIndex + 1) % projects.length;
        const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        
        setNextProject(projects[nextIndex]);
        setPrevProject(projects[prevIndex]);
      }
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Projeto não encontrado</h2>
          <Link to="/" className="text-primary-light hover:text-primary-dark transition-colors">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? project.gallery.length - 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center space-x-2 text-primary-dark hover:text-primary-light transition-colors group"
          >
            <ArrowLeft className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium text-xs sm:text-sm md:text-base">Voltar</span>
          </Link>
          
          <div className="text-center hidden md:block">
            <a href="/"><h1 className="text-base sm:text-lg md:text-xl font-bold text-primary-dark">Gabriel Leno</h1></a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {prevProject && (
              <Link 
                to={`/project/${prevProject.id}`}
                className="p-1 sm:p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-primary-light hover:text-white transition-all duration-300"
                title="Projeto anterior"
              >
                <ChevronLeft className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              </Link>
            )}
            {nextProject && (
              <Link 
                to={`/project/${nextProject.id}`}
                className="p-1 sm:p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-primary-light hover:text-white transition-all duration-300"
                title="Próximo projeto"
              >
                <ChevronRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left px-2">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                  <span className="bg-primary-light text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm md:text-base">{project.year}</span>
                </div>
                
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-dark mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {project.title}
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                    <User className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-primary-light flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Cliente</p>
                      <p className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                    <Calendar className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-primary-light flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Ano</p>
                      <p className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{project.year}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                    <Clock className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-primary-light flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Duração</p>
                      <p className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                    <Award className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-primary-light flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Função</p>
                      <p className="font-semibold text-primary-dark text-xs sm:text-sm md:text-base">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl">
                {project.type === 'video' ? (
                  <div className="relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 md:p-6">
                        <Play className="w-8 md:w-12 h-8 md:h-12 text-primary-dark fill-current" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                    id='imagem-projetoos'
                  />
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="hidden sm:block absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg animate-float">
                <ExternalLink className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 text-primary-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player (only for video projects) */}
      {project.type === 'video' && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-6 sm:mb-8 md:mb-12">Portfólio de Vídeos</h2>
            
            <div className="bg-gradient-to-br from-primary-dark to-primary-light text-white p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Monitor className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mb-4" />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Explore Meu Trabalho Audiovisual
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Descubra uma coleção completa dos meus projetos em vídeo, desde produções institucionais até motion graphics criativos.
              </p>
              
              <Link
                to="/videos"
                className="inline-flex items-center space-x-2 bg-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span>Ver Todos os Vídeos</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 md:mb-6">O Desafio</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 md:mb-6">A Solução</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-6 sm:mb-8 md:mb-12 text-center">Galeria do Projeto</h2>
          
          {/* Main Image */}
          <div className="relative mb-4 sm:mb-6 md:mb-8" id='aaaaaaaaaaa'>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl" id='img-projeto'>
              <img 
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-auto object-cover" 
                                  id='imagem-projetoos'
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 text-primary-dark" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 text-primary-dark" />
              </button>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4" id='aaaaaaaaaaa'>
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'ring-4 ring-primary-light scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Technologies */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            
            
            {/* Technologies */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-4 sm:mb-6 md:mb-8 text-center">Tecnologias</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl text-center hover:bg-primary-light hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <p className="font-semibold text-xs sm:text-sm md:text-base">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Project */}
      {nextProject && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark mb-2 sm:mb-4">Próximo Projeto</h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Continue explorando meu portfólio</p>
            </div>
            
            <Link 
              to={`/project/${nextProject.id}`}
              className="group block relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80">
                <img 
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${nextProject.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-3 sm:p-4 md:p-6 lg:p-8">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">{nextProject.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">{nextProject.description}</p>
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base md:text-lg font-medium">
                      <span>Ver Projeto</span>
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;