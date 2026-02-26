import React from "react";
import logo from "../img/minipeba.png";
import "./About.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-4 sm:py-6 md:py-8 border-t border-primary-light border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-center md:text-right order-1 md:order-2 mb-2 md:mb-0">
            <p className="text-primary-light opacity-70 text-xs sm:text-sm md:text-base px-2">
              Desenvolvido por <strong>Gabriel Leno</strong> &copy; 2025 Todos
              os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
