"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Droplets, ScanLine, ShieldCheck, ChevronDown, Wand2, Shield } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function Home() {
  const revealUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  return (
    <div className="flex flex-col w-full bg-black selection:bg-brand-orange selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center p-6 overflow-hidden">
        
        {/* Imagem de Fundo (Uploaded by User) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.05] bg-[url('/hero-bg.jpg')]"
        >
          {/* Imagem mais escura com blur intensificado para destacar 100% o texto */}
          <div className="w-full h-full backdrop-blur-md bg-black/75"></div>
        </div>

        {/* Textura de Noise minimalista */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        {/* Transição suave em degradê da Hero para o Preto */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-20"></div>

        <motion.div 
          variants={revealUp}
          initial="hidden"
          animate="visible"
          className="relative z-30 max-w-5xl mx-auto text-center mt-12 will-change-transform"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-600/50 bg-white/5 backdrop-blur-md text-xs font-semibold text-neutral-300 mb-8 uppercase tracking-[0.2em] shadow-lg"
          >
            Estética Automotiva Premium
          </motion.div>
          
          {/* Trocado drop-shadow por text-shadow pura para evitar processamento abusivo no Lenis */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-white [text-shadow:0_4px_15px_rgba(0,0,0,0.5)]">
            Tratamentos que Redefinem <br className="hidden md:block"/>
            <span className="text-brand-orange [text-shadow:0_0_20px_rgba(255,107,0,0.4)]">Brilho</span> e <span className="text-brand-orange [text-shadow:0_0_20px_rgba(255,107,0,0.4)]">Proteção</span>.
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            Elevamos o padrão estético do seu veículo através de técnicas de detalhamento de precisão e proteção de classe mundial.
          </p>
          
          {/* Botões do CTA - Tamanho Aumentado */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link href="/contato" className="group flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-500 text-white px-12 py-6 rounded-2xl text-xl md:text-2xl font-bold transition-all w-full sm:w-auto overflow-hidden relative shadow-[0_10px_30px_rgba(255,107,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.5)]">
              <span className="relative z-10 flex items-center gap-3">Agendar Avaliação <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
            </Link>
            
            <Link href="/servicos" className="flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 text-white px-12 py-6 rounded-2xl text-xl md:text-2xl font-bold transition-all w-full sm:w-auto">
              Ver Nossos Projetos
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator Bouncing */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 will-change-transform"
        >
          <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Descubra</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="will-change-transform"
          >
            <ChevronDown className="w-6 h-6 text-brand-orange opacity-80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section: A Ciência do Detalhe */}
      <section className="py-24 md:py-40 px-4 md:px-6 relative bg-black z-20">
        
        {/* Animated Laser Divider - com will-change e sombra reduzida */}
        <div className="absolute top-0 left-0 w-full h-px bg-neutral-800/50 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "300%" }} transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }} 
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent will-change-transform"
          />
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp}
          className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center mt-10 will-change-[transform,opacity]"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            A Ciência do Detalhe.<br/>
            A Arte da <span className="text-brand-orange">Perfeição</span>.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl mb-32 leading-relaxed font-light">
            Nós restauramos a glória original e protegemos seu investimento. A Attento combina paixão automotiva com produtos de tecnologia de ponta para entregar resultados que superam as expectativas.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24 md:space-y-40">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp} className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 will-change-[transform,opacity]">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-800/80 group shadow-2xl bg-neutral-900/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 w-full h-full"></div>
                <motion.div 
                  className="relative z-20 flex flex-col items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Wand2 className="w-32 h-32 text-brand-orange opacity-80 group-hover:opacity-100 transition-all duration-500 will-change-[transform,filter] drop-shadow-[0_0_10px_rgba(255,107,0,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(255,107,0,0.8)]" strokeWidth={1} />
                </motion.div>
                
                {/* Efeito de brilho de fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-orange/20 blur-[80px] rounded-full z-0 group-hover:bg-brand-orange/30 transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-flex px-4 py-2 rounded-lg border border-neutral-800/60 bg-white/5 backdrop-blur-md text-xs font-bold text-brand-orange mb-6 uppercase tracking-[0.15em]">Estética e Polimento</div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">A Arte da Correção de Pintura</h3>
              <p className="text-neutral-400 text-xl leading-relaxed font-light text-justify">Realizamos um nivelamento cirúrgico do verniz para remover micro-riscos, hologramas e oxidação. O resultado é uma superfície lisa, pura e com uma profundidade de cor que supera o acabamento de fábrica, entregando aquele aspecto brilhante inigualável.</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp} className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24 will-change-[transform,opacity]">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-800/80 group shadow-2xl bg-neutral-900/30 flex items-center justify-center">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 w-full h-full"></div>
                <motion.div 
                  className="relative z-20 flex flex-col items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Shield className="w-32 h-32 text-brand-orange opacity-80 group-hover:opacity-100 transition-all duration-500 will-change-[transform,filter] drop-shadow-[0_0_10px_rgba(255,107,0,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(255,107,0,0.8)]" strokeWidth={1} />
                </motion.div>

                {/* Efeito de brilho de fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-orange/20 blur-[80px] rounded-full z-0 group-hover:bg-brand-orange/30 transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-flex px-4 py-2 rounded-lg border border-neutral-800/60 bg-white/5 backdrop-blur-md text-xs font-bold text-brand-orange mb-6 uppercase tracking-[0.15em]">Vitrificação & PPF</div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Escudo de Tecnologia Suprema</h3>
              <p className="text-neutral-400 text-xl leading-relaxed mb-10 font-light text-justify">Após a correção, blindamos seu veículo com películas PPF e nanotecnologia. Nossos revestimentos criam uma barreira indestrutível, protegendo contra pedras, marcas e clima.</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/5 rounded-xl text-sm text-neutral-300 font-medium hover:border-brand-orange/50 transition-colors">Hidrofobia</span>
                <span className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/5 rounded-xl text-sm text-neutral-300 font-medium hover:border-brand-orange/50 transition-colors">Brilho Extremo</span>
                <span className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/5 rounded-xl text-sm text-neutral-300 font-medium hover:border-brand-orange/50 transition-colors">Resistência UV</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protocolo Attento */}
      <section className="py-24 md:py-40 px-4 md:px-6 relative bg-gradient-to-b from-black via-[#050505] to-black">
        
        {/* Animated Laser Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-neutral-800/50 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "300%" }} transition={{ repeat: Infinity, duration: 4.5, ease: "linear", delay: 1 }} 
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent will-change-transform"
          />
        </div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp} className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center mb-24 mt-10 will-change-[transform,opacity]">
          <div className="inline-flex px-4 py-2 rounded-lg border border-neutral-800/60 bg-white/5 backdrop-blur-md text-xs font-bold text-neutral-300 mb-6 uppercase tracking-[0.2em]">Nosso Método</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            O Protocolo <span className="text-brand-orange">Attento</span>:<br/> Padrão Internacional
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 will-change-[transform,opacity]">
          {[
            { tag: "Etapa 1", title: "Diagnóstico Clínico", desc: "Mapeamos o veículo para identificar riscos e contaminações ocultas do dia a dia.", icon: <ScanLine className="w-16 h-16 text-brand-orange shadow-sm" /> },
            { tag: "Etapa 2", title: "Descontaminação Absoluta", desc: "Limpeza minuciosa das superfícies e rodas removendo impurezas que a lavagem normal não atinge.", icon: <Droplets className="w-16 h-16 text-neutral-400" /> },
            { tag: "Etapa 3", title: "Correção & Lapidação", desc: "Polimento em múltiplas etapas nivelando o verniz à perfeição sem falhas.", icon: <div className="w-3/4 h-2 bg-gradient-to-r from-neutral-800 via-brand-orange to-neutral-800 rounded-full my-auto" /> },
            { tag: "Etapa 4", title: "Blindagem Master", desc: "Instalação do PPF ou Vitrificador Cerâmico para garantir o selamento total do brilho.", icon: <ShieldCheck className="w-16 h-16 text-brand-orange shadow-sm" /> },
          ].map((item, i) => (
            <motion.div key={i} variants={revealUp} className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-[2rem] p-12 hover:bg-white/[0.04] hover:border-brand-orange/30 transition-all duration-500 flex flex-col justify-between shadow-xl relative overflow-hidden will-change-[transform,opacity]">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/10 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="inline-flex px-3 py-1.5 rounded-md border border-white/10 bg-black/50 text-[10px] font-bold text-neutral-400 mb-8 uppercase tracking-[0.2em]">{item.tag}</div>
                <h3 className="text-3xl font-bold mb-5 tracking-tight">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-lg mb-10 font-light text-justify">{item.desc}</p>
              </div>
              <div className="mt-auto relative z-10 rounded-2xl overflow-hidden border border-white/5 aspect-[2.5/1] flex items-center justify-center bg-black/60 group-hover:scale-[1.02] transition-transform duration-500 will-change-transform">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Seção de FAQ */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative bg-black">
        
        {/* Animated Laser Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-neutral-800/50 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "300%" }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2 }} 
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent will-change-transform"
          />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp} className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center mb-16 mt-10 will-change-[transform,opacity]">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Tem <span className="text-brand-orange">Dúvidas?</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-xl font-light">
            Nós preparamos as respostas para as perguntas mais comuns dos nossos clientes.
          </p>
        </motion.div>

        <FAQ />
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-4 md:px-6 relative border-t border-neutral-800/30 bg-black overflow-hidden">
        {/* Diminuído blur abusivo de 150px para 80px */}
        <div className="absolute inset-0 bg-brand-orange/[0.03] blur-[80px] pointer-events-none rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"></div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealUp} className="relative z-10 max-w-4xl mx-auto text-center will-change-[transform,opacity]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Pronto para transformar seu carro?</h2>
          <p className="text-neutral-400 text-2xl mb-14 font-light">Fale com nossos especialistas e descubra a solução perfeita.</p>
          <Link href="/contato" className="group inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-500 text-white px-12 py-5 rounded-2xl text-xl md:text-2xl font-bold transition-all hover:scale-[1.03] shadow-[0_10px_30px_rgba(255,107,0,0.3)]">
            Avançar Agora
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
