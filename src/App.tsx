import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import VideosPage from "./components/VideosPage";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import { Toaster } from "react-hot-toast";
import Privacy from "./components/Privacy"; // importe o componente

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.origin === window.location.origin) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        {/* PÁGINA INICIAL: Montada com as seções do portfólio */}
        <Route
          path="/"
          element={
            <div className="font-poppins">
              <Header />
              <main>
                <About />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />

        {/* DETALHE DO PROJETO: Como sua página já tem Nav e Footer próprio, chamamos ela PURA */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        
        {/* VÍDEOS: Se o VideosPage for igual ao ProjectDetail (tiver Nav próprio), deixe puro também */}
        <Route path="/project/4" element={<VideosPage />} />

        {/* BLOG: Isolado, All Black, sem interferência do CSS da Home */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;