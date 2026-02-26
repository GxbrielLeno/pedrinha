import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Eye, Clock, Calendar, User, Filter } from 'lucide-react';
import { videos } from '../data/videos';
import './About.css';

const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Institucional' ,'Motion Graphics', 'Eventos', 'Promocional'];

  const filteredVideos = activeFilter === 'Todos' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);

  const openVideoModal = (video: any) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
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
          
          <div className="text-center">
            <a href="/"><h1 className="text-base sm:text-lg md:text-xl font-bold text-primary-dark">Gabriel Leno</h1></a>
          </div>
          
          <div className="w-16"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <span className="bg-primary-dark text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Portfólio Audiovisual
            </span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 font-poppins">
            Meus Vídeos
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
Uma seleção dos meus vídeos, nos quais atuei como roteirista, produtor e editor, abrangendo desde produções institucionais até motion graphics e campanhas criativas.          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center max-w-2xl mx-auto mb-8 sm:mb-12"  style={{ gap: '3.5rem' }}>
  <div className="text-center">
    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark">100K+</div>
    <div className="text-xs sm:text-sm text-gray-600">Visualizações</div>
  </div>
  <div className="text-center">
    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark">95%</div>
    <div className="text-xs sm:text-sm text-gray-600">Satisfação</div>
  </div>
  <div className="text-center">
    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark">2025</div>
    <div className="text-xs sm:text-sm text-gray-600">Ano Ativo</div>
  </div>
</div>

        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Filter className="w-4 sm:w-5 h-4 sm:h-5 text-primary-dark mr-2" />
            <span className="text-sm sm:text-base font-medium text-primary-dark">Filtrar por categoria</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base ${
                  activeFilter === category
                    ? "bg-primary-dark text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-primary-light hover:text-white shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                onClick={() => openVideoModal(video)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "slideUp 0.6s ease-out forwards",
                }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 xs:h-44 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 sm:w-8 h-6 sm:h-8 text-primary-dark fill-current" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                    <span className="bg-primary-dark text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      {video.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary-dark mb-2 sm:mb-3 line-clamp-2 leading-tight">
                    {video.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>


                  {/* Client */}
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <User className="w-3 sm:w-4 h-3 sm:h-4 text-primary-light flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-primary-dark">{video.client}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                    {video.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-4 sm:w-6 h-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;