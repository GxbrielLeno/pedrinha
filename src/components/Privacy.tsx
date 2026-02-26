import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 pt-10 pb-20 px-6 font-sans antialiased">
      <nav className="max-w-3xl mx-auto mb-16 flex justify-between items-center border-b border-zinc-800/50 pb-6">
        <Link to="/blog" className="text-white font-black tracking-tighter text-xl uppercase italic hover:text-blue-500 transition-colors">
          Cala Boca Gabs<span className="text-blue-500">_</span>
        </Link>
        <Link to="/blog" className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 font-mono text-[10px] tracking-widest transition-colors uppercase">
          <ArrowLeft size={14} /> VOLTAR
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto">
        <header className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800/60 bg-zinc-900/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <div className="flex items-center gap-3 mb-4 text-blue-500">
            <ShieldCheck size={20} />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">Segurança</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
            Política de Privacidade
          </h1>
        </header>

        <div className="p-8 md:p-12 rounded-[2.5rem] border border-zinc-800/40 bg-[#121214]/50 space-y-8 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-white font-bold mb-4 flex items-center gap-2">
              <Lock size={18} className="text-blue-500" /> Introdução
            </h2>
            <p>
              A sua privacidade é importante para nós. É política do <strong>Cala Boca Gabs</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold mb-4">Cookies e Google AdSense</h2>
            <p>
              O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios neste site. Com o cookie DART, o Google pode exibir anúncios com base nas visitas que você faz a este e a outros sites na Internet.
            </p>
            <p className="mt-4">
              Os usuários podem desativar o cookie DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google.
            </p>
          </section>

          <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-white font-bold mb-4">Compromisso do Usuário</h2>
            <p className="text-sm italic">
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Cala Boca Gabs oferece, não se envolvendo em atividades ilícitas ou contrárias à boa fé e à ordem pública.
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            Última atualização: 21 de Fevereiro de 2026
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;