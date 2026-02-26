import React, { useEffect, useState } from "react";
import { ChevronDown, Star, Sparkles, Zap, Heart, Award, Target, Code2Icon } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 
import "./Header.css";

const sections = ["Inicio", "Sobre", "Projetos", "Contato"];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Se estiver no blog, primeiro volta pra home
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80; 
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 95; 

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="unico-header">
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <nav className="nav">
            <ul className={`nav-list ${scrolled ? "text-white" : "text-black"}`}>
              {sections.map((sectionId) => (
                <li key={sectionId}>
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className={`nav-btn-link ${activeSection === sectionId ? "active" : ""}`}
                  >
                    {sectionId}
                  </button>
                </li>
              ))}
              
              {/* ITEM DO BLOG - SEM BUTTON DENTRO, SÓ O LINK */}
              <li>
                <Link
                  to="/blog"
                  className={`nav-btn-link ${location.pathname === "/blog" ? "active" : ""}`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Só mostra a Hero se estiver na página inicial */}
      <section id="Inicio">
        <header className="min-h-screen flex items-center justify-center bg-gray relative overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Floating icons with elegant animations */}
          <div className="absolute top-16 right-8 sm:top-20 sm:right-20 text-primary-dark opacity-50 md:opacity-70 animate-float">
            <Star className="w-6 h-6 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute top-32 left-8 sm:top-40 sm:left-20 text-primary-dark opacity-40 md:opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div className="absolute bottom-32 right-12 sm:bottom-40 sm:right-40 text-primary-dark opacity-50 lg:opacity-75 animate-float" style={{ animationDelay: '1.5s' }}>
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
          <div className="absolute bottom-48 left-12 sm:bottom-60 sm:left-40 text-primary-dark opacity-45 lg:opacity-65 animate-float" style={{ animationDelay: '2.5s' }}>
            <Star className="w-7 h-7 animate-ping" fill="currentColor" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute top-24 left-1/4 sm:top-32 sm:left-1/3 text-primary-dark opacity-35 xl:opacity-50 animate-float" style={{ animationDelay: '1s' }}>
            <Heart className="w-4 h-4 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute bottom-24 right-1/4 sm:bottom-32 sm:right-1/3 text-primary-dark opacity-40 xl:opacity-55 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          <div className="text-center z-10 max-w-4xl mx-auto w-full pt-8 sm:pt-0" id="espaco">
            <div className="animate-fade-in">

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 font-poppins leading-tight px-2">
                <span id="meu-nome">                 Gabriel Leno
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 font-bold leading-relaxed px-4 max-w-3xl mx-auto">
                <span className="font-medium">Transformo ideias em <span id="cores-especiais-texto">arte</span>. Busco o equilíbrio entre <span id="cores-especiais-texto">autenticidade, personalidade e propósito.</span></span> 
              </p>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
                <button
                  onClick={() => scrollToSection("Projetos")}
                  id="btn-ver-projetos"
                  className="w-full sm:w-auto group to-gray-100 hover:from-gray-100 hover:to-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base flex items-center justify-center space-x-2"
                >
                  <span>Ver Meus Projetos</span>
                  <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                </button>

                <button
                id="mas-a-gente"
                  onClick={() => scrollToSection("Contato")}
                  className="w-full sm:w-auto group bg-transparent border-2 border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                >
                  Entrar em Contato
                </button>
              </div>

              {/* Specialties Section */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
                  <Award className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Branding</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
                  <Target className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Web Design</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
                  <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Marketing Estratégico</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-purple-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Edição de Vídeo</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
                  <Code2Icon className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Programação</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
