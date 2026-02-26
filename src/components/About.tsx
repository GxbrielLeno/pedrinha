import React from "react";
import { Palette, Layers, Figma } from "lucide-react";
import { SiCanva } from "react-icons/si";
import { SiVegas } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaElementor } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

// import capcutlogo from '../img/capcut.svg'; // removido, inline SVG agora

import "./About.css";

const About: React.FC = () => {
  return (
    <section
      id="Sobre"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-white to-primary-light opacity-30 rounded-full blur-2xl"></div>
        <div className="hidden md:block absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tl from-white to-primary-light opacity-25 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Avatar and visual elements */}
          <div className="relative flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary-light to-blue-400 opacity-40 animate-pulse"></div>
              <div
                className="hidden md:block absolute -inset-2 sm:-inset-4 rounded-full border-2 border-gradient-to-r from-blue-300 to-purple-300 opacity-25 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="hidden lg:block absolute -inset-4 sm:-inset-6 rounded-full border border-gradient-to-r from-cyan-200 to-blue-200 opacity-15"></div>

              {/* Avatar */}
              <img
                id="logo-gabriel-leno"
                src="/img/gabrielimg.jpg"
                alt="Gabriel Leno"
                className="w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 rounded-full object-cover shadow-2xl animate-float border-4 border-white relative z-10"
              />

              {/* Floating icons */}
              <div
                className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 bg-gradient-to-br from-primary-dark to-blue-600 text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Palette className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6" />
              </div>
              <div
                className="absolute -bottom-1 sm:-bottom-2 md:-bottom-4 -left-1 sm:-left-2 md:-left-4 bg-gradient-to-br from-primary-light to-cyan-400 text-primary-dark p-1.5 sm:p-2 md:p-3 rounded-full shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Layers className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6" />
              </div>
              <div
                className="hidden sm:block absolute top-1/2 -right-2 sm:-right-4 md:-right-8 bg-white text-primary-dark p-1.5 sm:p-2 md:p-3 rounded-full shadow-xl animate-float border-2 border-blue-100"
                style={{ animationDelay: "1.5s" }}
              >
                <Figma className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left lg:order-1 relative z-10 px-2">
            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <span className="bg-gray-100 border-gray-200 bg-opacity-100 text-primary-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                  Um pouco da minha jornada
                </span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-poppins">
                <span className="text-primary-dark">Sobre mim</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                Comecei a atuar como designer aos 13 anos, quando tinha um canal
                no YouTube de Minecraft. Eu criava roteiros, editava os vídeos,
                fazia as thumbnails e também gravava o conteúdo.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                O que me atraiu nessa área foi a possibilidade de tirar as
                ideias que tenho na cabeça e transformá-las em{" "}
                <strong>arte.</strong> Minha evolução profissional ganhou força
                quando fui contratado como jovem aprendiz, onde pude colocar a
                mão na massa de verdade em uma instituição de ensino — a
                faculdade onde trabalho até hoje. Ao longo do tempo, ampliei meu
                conhecimento em diversas tecnologias e softwares, buscando
                sempre entregar além do esperado, convertendo ideias em
                <strong> resultados reais.</strong>
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <div className="text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <SiAdobephotoshop className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  Photoshop
                </h3>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaElementor className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  Elementor
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <SiCanva className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  Canva PRO
                </h3>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                {/* CapCut Icon - Versão simplificada e funcional */}
                <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM12 4.5L19 8v8l-7 3.5L5 16V8l7-3.5z" />
                    <path d="M8 10v4l4-2-4-2z" />
                    <path d="M16 10v4l-4-2 4-2z" />
                  </svg>
                </div>

                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  CapCut
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <SiVegas className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  Sony Vegas
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaWordpress className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  WordPress
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaHtml5 className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  HTML5
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaCss3Alt className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  CSS3
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl hover:bg-primary-light hover:text-white text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                <IoLogoJavascript className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1 sm:mb-2 md:mb-3" />
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  JavaScript
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
