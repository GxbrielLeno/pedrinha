import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Instagram, Linkedin, Bean as Send } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import toast from "react-hot-toast"; // ← Importação do toast
import './Header.css'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID, // ← seu service ID
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ← seu template ID
        form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ← sua public key
      )
      .then(() => {
        toast.success("Mensagem enviada com sucesso! 🎉");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Erro real do EmailJS:", error);
        toast.error("Erro ao enviar. Tente novamente. 😢");
      });
  };

  return (
    <section
      id="Contato"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-poppins px-2">
            Vamos Trabalhar Juntos!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-light max-w-3xl mx-auto px-4">
            Tem um projeto em mente? Adoraria ouvir suas ideias e transformá-las
            em realidade visual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8" id="section-infos-pessoal">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:gabrielleno.p@gmail.com"
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-3 sm:p-4 bg-primary-light bg-opacity-10 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <Mail className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary-light group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg break-all">
                    gabrielleno.p@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
                Redes Sociais
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5561996529012"
                  target="_blank"
                  className="bg-primary-light bg-opacity-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <BsWhatsapp className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/gabrielleno7/"
                  target="_blank"
                  className="bg-primary-light bg-opacity-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabrielleno7/"
                  target="_blank"
                  className="bg-primary-light bg-opacity-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full bg-white bg-opacity-10 border border-primary-light border-opacity-30 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-white placeholder-primary-light placeholder-opacity-70 focus:outline-none focus:border-primary-light transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Seu E-mail"
                    className="w-full bg-white bg-opacity-10 border border-primary-light border-opacity-30 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-white placeholder-primary-light placeholder-opacity-70 focus:outline-none focus:border-primary-light transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  name="subject"
                  type="text"
                  placeholder="Assunto"
                  className="w-full bg-white bg-opacity-10 border border-primary-light border-opacity-30 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-white placeholder-primary-light placeholder-opacity-70 focus:outline-none focus:border-primary-light transition-all duration-300 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full bg-white bg-opacity-10 border border-primary-light border-opacity-30 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-white placeholder-primary-light placeholder-opacity-70 focus:outline-none focus:border-primary-light transition-all duration-300 resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-light hover:bg-white text-primary-dark font-semibold py-2.5 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
