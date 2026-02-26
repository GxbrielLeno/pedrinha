import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Eye,
  ArrowRight,
  Palette,
  Monitor,
  Package,
  Edit3,
  Smartphone,
  BookOpen,
} from "lucide-react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "Todos", icon: Palette },
    { id: "branding", name: "Branding", icon: Edit3 },
    { id: "ui-ux", name: "Web Design", icon: Smartphone },
    { id: "video", name: "Vídeos", icon: Monitor }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getGridClass = (size: string, index: number) => {
    if (size === "large") return "md:col-span-2 md:row-span-2";
    if (size === "medium") return "md:col-span-2";
    return "md:col-span-1";
  };

  return (
    <section
      id="Projetos"
      className="py-8 sm:py-12 md:py-16 lg:py-24 from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-3 sm:mb-4 md:mb-6 font-poppins relative px-2">
              Meus Projetos
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
Uma amostra dos trabalhos que desenvolvi, cada um com sua própria história e expressão através do design
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base ${
                  activeFilter === category.id
                    ? "bg-primary-dark text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-primary-light hover:text-white shadow-md"
                }`}
              >
                <IconComponent className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[200px] xs:auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[280px] lg:auto-rows-[300px]">
          {filteredProjects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] ${getGridClass(
                project.size,
                index
              )}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "slideUp 0.8s ease-out forwards",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between text-white">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="hidden md:flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full hover:bg-opacity-30 transition-all duration-200">
                      <Eye className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <div className="mb-2 sm:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs opacity-90 mb-2 sm:mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-medium bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded-full">
                        {project.client}
                      </span>
                      <ArrowRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 transform transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-white border-opacity-0 group-hover:border-opacity-30 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-500"></div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
