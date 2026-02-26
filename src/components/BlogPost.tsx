import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ThumbsUp,
  ThumbsDown,
  Megaphone,
  ArrowLeft,
  Calendar,
  User,
} from "lucide-react";

// Componente para Anúncios (AdSense)
const PostAd = ({ slot }: { slot: string }) => {
  useEffect(() => {
    try {
      // Força o carregamento do anúncio pelo script do index.html
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (e) {
      console.error("Erro ao carregar AdSense", e);
    }
  }, []);

  return (
    <div className="w-full bg-zinc-900/40 border border-dashed border-zinc-800 flex flex-col items-center justify-center p-8 my-12 group hover:border-blue-500/30 transition-all">
      <div className="flex items-center gap-2 text-zinc-600 group-hover:text-blue-500/50 transition-colors mb-2">
        <Megaphone size={14} />
        <span className="text-[9px] font-black uppercase tracking-[0.2em]"></span>
      </div>

      {/* Bloco Real do AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-1778551508030340"
        data-ad-slot={slot}
      ></ins>

      <div className="text-zinc-700 text-[10px] font-mono mt-2 uppercase tracking-widest opacity-50">
        Anúncio Google
      </div>
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({ title: "", date: "" });

  useEffect(() => {
    // Importa o arquivo .md baseado no ID da URL
    import(`../content/${id}.md?raw`)
      .then((res) => {
        const rawText = res.default;

        // Extração de metadados do Markdown
        const titleMatch = rawText.match(/title:\s*"(.*)"/);
        const dateMatch = rawText.match(/date:\s*"(.*)"/);
        const body = rawText.replace(/---[\s\S]*?---/, "");

        setMetadata({
          title: titleMatch ? titleMatch[1] : "Sem Título",
          date: dateMatch ? dateMatch[1] : "",
        });
        setContent(body);
      })
      .catch(() =>
        setContent(
          "# Erro\nPost não encontrado. Verifique se o arquivo .md existe na pasta content.",
        ),
      );

    window.scrollTo(0, 0); // Garante que a página comece no topo
  }, [id]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 pt-10 pb-20 px-6 font-sans antialiased">
      {/* NAVEGAÇÃO SUPERIOR */}
      <nav className="max-w-3xl mx-auto mb-16 flex justify-between items-center border-b border-zinc-800/50 pb-6">
        <Link
          to="/blog"
          className="text-white font-black tracking-tighter text-2xl uppercase italic hover:text-blue-500 transition-colors group"
        >
          Cala Boca Gabs
          <span className="text-blue-500 group-hover:animate-pulse">_</span>
        </Link>
        <Link
          to="/blog"
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 font-mono text-[10px] tracking-widest transition-colors uppercase"
        >
          <ArrowLeft size={14} /> VOLTAR_AO_INDEX
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* CABEÇALHO DO POST (CARD PRINCIPAL) */}
        <header className="mb-12 p-10 md:p-14 rounded-[3rem] border border-zinc-800/60 bg-zinc-900/20 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500/80"></div>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest">
              <Calendar size={12} /> {metadata.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase italic">
            {metadata.title}
          </h1>
        </header>

        {/* ANÚNCIO 1: TOPO DO CONTEÚDO */}
        {/* Substitua o slot pelo número que o Google te der para o bloco de topo */}
        <PostAd slot="7408830388" />

        {/* ÁREA DO TEXTO (MARKDOWN) */}
        <div
          className="px-2 md:px-8 text-zinc-400 text-lg selection:bg-blue-500/30
          [&>h2]:text-3xl [&>h2]:text-white [&>h2]:font-black [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:italic [&>h2]:uppercase [&>h2]:tracking-tighter [&>h2]:flex [&>h2]:items-center [&>h2]:gap-3
          [&>h3]:text-xl [&>h3]:text-zinc-200 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4
          [&>p]:mb-8 [&>p]:leading-relaxed
          [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-500/5 [&>blockquote]:py-8 [&>blockquote]:pl-8 [&>blockquote]:pr-6 [&>blockquote]:italic [&>blockquote]:text-zinc-300 [&>blockquote]:my-12 [&>blockquote]:rounded-r-3xl
          [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:mb-8 [&>ul]:space-y-4
          [&>strong]:text-blue-500 [&>strong]:font-bold
          [&>hr]:border-zinc-800/50 [&>hr]:my-16"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>

        {/* ANÚNCIO 2: FINAL DO TEXTO */}
        <PostAd slot="7408830388" />

        {/* RODAPÉ DO POST: FEEDBACK E AUTOR */}
        <footer className="mt-20">
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[3rem] p-8 md:p-14 shadow-2xl relative">
            <div className="mb-12">
              <h3 className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter">
                E aí, qual foi a do texto?
                <span className="text-blue-500">_</span>
              </h3>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                Feedback é o combustível do blog.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Card Positivo */}
              <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <ThumbsUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="font-black text-zinc-100 italic uppercase tracking-tighter text-xl">
                    ACHOU MASSA
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-4 font-mono uppercase tracking-[0.2em] leading-relaxed">
                  Manda um salve pra gente:
                </p>
                <code className="block w-full bg-[#09090b] p-4 rounded-xl text-blue-400 text-xs border border-zinc-800 font-mono">
                  gabrielleno.p@gmail.com
                </code>
              </div>

              {/* Card Negativo */}
              <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2rem] hover:border-red-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <ThumbsDown className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="font-black text-zinc-100 italic uppercase tracking-tighter text-xl text-zinc-200">
                    ACHOU BOSTA
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-4 font-mono uppercase tracking-[0.2em] leading-relaxed">
                  Diga o que não curtiu:
                </p>
                <code className="block w-full bg-[#09090b] p-4 rounded-xl text-red-400 text-xs border border-zinc-800 font-mono">
                  gabrielleno.p@gmail.com
                </code>
              </div>
            </div>

            {/* SEÇÃO DO AUTOR */}
            <div className="pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-900/20 transform hover:rotate-6 transition-transform">
                  GL
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">
                    <User size={10} /> Escrito por
                  </div>
                  <p className="text-xl text-white font-black italic uppercase tracking-tighter">
                    Gabriel Leno
                  </p>
                </div>
              </div>
              <Link
                to="/blog/privacidade"
                className="hover:text-blue-500 underline decoration-zinc-800 underline-offset-4"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/blog"
                className="group flex items-center gap-3 text-[10px] font-mono text-zinc-500 hover:text-blue-500 transition-all uppercase tracking-[0.3em] bg-zinc-900/50 px-8 py-4 rounded-2xl border border-zinc-800 hover:border-blue-500/50"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                VOLTAR_AO_INDEX
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
