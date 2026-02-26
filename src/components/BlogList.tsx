import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  ArrowRight,
  Image as ImageIcon,
  ChevronDown,
  Loader2,
  Megaphone,
  ExternalLink,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  date: string; // O que aparece na tela
  excerpt?: string;
  thumbnail?: string;
  timestamp: number; // O que define a ordem
}

const AdSpace = ({ label, slot }: { label: string; slot?: string }) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="w-full bg-zinc-900/40 border border-dashed border-zinc-800 flex flex-col items-center justify-center p-8 my-8 group hover:border-blue-500/30 transition-colors overflow-hidden">
      <div className="flex items-center gap-2 text-zinc-600 group-hover:text-blue-500/50 transition-colors mb-4">
        <Megaphone size={16} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1778551508030340"
        data-ad-slot={slot || "7408830388"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const modules = import.meta.glob("../content/*.md", {
          as: "raw",
          eager: true,
        });

        const postsData = Object.keys(modules).map((path) => {
          const fileContent = modules[path] as string;
          const id = path.split("/").pop()?.replace(".md", "") || "";
          
          const headerMatch = fileContent.match(/---([\s\S]*?)---/);
          const header = headerMatch ? headerMatch[1] : "";
          const body = fileContent.split("---")[2] || "";

          const getMeta = (name: string) => {
            const regex = new RegExp(`${name}:\\s*(.*)`);
            const match = header.match(regex);
            if (!match) return "";
            return match[1].replace(/^["'](.*)["']$/, "$1").trim();
          };

          // Lógica das datas:
          const dateToDisplay = getMeta("date"); // Ex: "26 de Fevereiro, 2026"
          const dateToSort = getMeta("data");    // Ex: "26-02-2026"
          
          let timestamp = 0;

          if (dateToSort) {
            try {
              // Separa o formato DD-MM-YYYY
              const parts = dateToSort.split("-");
              if (parts.length === 3) {
                const dia = parseInt(parts[0]);
                const mes = parseInt(parts[1]) - 1; // Meses no JS começam em 0
                const ano = parseInt(parts[2]);
                
                timestamp = new Date(ano, mes, dia, 12, 0, 0).getTime();
              }
            } catch (e) {
              timestamp = 0;
            }
          }

          return {
            id,
            title: getMeta("title") || id,
            date: dateToDisplay || "Sem data",
            thumbnail: getMeta("thumbnail"),
            excerpt: body.replace(/[#*`>]/g, "").trim().substring(0, 140) + "...",
            timestamp: timestamp || 0,
          };
        });

        // Ordenação por timestamp (o campo "data" invisível)
        const sorted = postsData.sort((a, b) => b.timestamp - a.timestamp);
        setPosts(sorted);

      } catch (err) {
        console.error("Erro ao carregar posts:", err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const featuredPost = useMemo(() => posts[0] || null, [posts]);
  const displayPosts = useMemo(() => posts.slice(1, limit + 1), [posts, limit]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121214] flex items-center justify-center">
        <Loader2 className="text-blue-500 animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-blue-500/30 flex flex-col antialiased">
      <nav className="border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/blog" className="font-black text-2xl italic tracking-tighter hover:text-blue-400 transition-all uppercase group">
            Cala Boca Gabs<span className="text-blue-500 group-hover:animate-pulse">_</span>
          </Link>
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-mono text-blue-500 uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              {posts.length} Crises Registradas
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow w-full">
        <AdSpace label="Leaderboard Topo" />

        {featuredPost && (
          <section className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Link to={`/blog/${featuredPost.id}`} className="group grid lg:grid-cols-2 gap-12 items-center p-8 rounded-[2.5rem] border border-zinc-800/50 bg-zinc-900/10 hover:border-blue-500/30 transition-all duration-500">
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                {featuredPost.thumbnail ? (
                  <img src={featuredPost.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent flex items-center justify-center text-blue-500/20">
                    <ImageIcon size={80} />
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start">
                <span className="mb-6 px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-tighter rounded">Destaque</span>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] group-hover:text-blue-400 transition-colors italic tracking-tighter uppercase">
                  {featuredPost.title}
                </h1>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 font-bold text-blue-500 uppercase text-xs tracking-widest">
                  Ler Agora <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </section>
        )}

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black mb-10 flex items-center gap-4 italic uppercase tracking-tighter border-b border-zinc-800 pb-4">
              <LayoutGrid size={22} className="text-blue-500" />
              Feed de Crises
            </h2>

            <div className="grid gap-6">
              {displayPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col sm:flex-row gap-8 items-center p-6 rounded-3xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="w-full sm:w-52 aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-700/30 bg-zinc-900 flex-shrink-0">
                    {post.thumbnail ? (
                      <img src={post.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-20"><ImageIcon /></div>
                    )}
                  </div>
                  <div className="flex-1 space-y-3">
                    <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase">{post.date}</span>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors uppercase italic tracking-tighter">{post.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            {posts.length > limit + 1 && (
              <button
                onClick={() => setLimit((prev) => prev + 4)}
                className="mt-12 w-full flex items-center justify-center gap-3 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all border border-zinc-800 hover:border-blue-500 hover:text-blue-400 bg-zinc-900/30 group"
              >
                Ver mais crises
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2.5rem] border bg-[#121214] border-zinc-800 sticky top-32">
              <h3 className="text-lg font-black mb-4 italic uppercase tracking-tighter border-b border-zinc-800 pb-4">Manifesto<span className="text-blue-500">_</span></h3>
              <p className="text-sm text-zinc-400 leading-relaxed italic">
                Onde eu falo o que ninguém perguntou sobre tecnologia, design, Vasco e outras crises existenciais.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogList;