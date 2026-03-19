"use client";
import { motion } from "framer-motion";
import { Target, Eye, Diamond, Car } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function AnimatedBorderTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const R = 32; // 2rem pra bater com rounded-[2rem]
  const inset = 0; 
  const { w, h } = size;
  
  const showTrack = w > R * 2 && h > R * 2;
  
  let pathData = "";
  if (showTrack) {
    pathData = `
      M ${R+inset},${inset}
      L ${w-R-inset},${inset}
      A ${R},${R} 0 0 1 ${w-inset},${R+inset}
      L ${w-inset},${h-R-inset}
      A ${R},${R} 0 0 1 ${w-R-inset},${h-inset}
      L ${R+inset},${h-inset}
      A ${R},${R} 0 0 1 ${inset},${h-R-inset}
      L ${inset},${R+inset}
      A ${R},${R} 0 0 1 ${R+inset},${inset}
      Z
    `;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-20 rounded-[2rem]">
      {showTrack && (
        <svg width="100%" height="100%" className="absolute inset-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="beamGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
            </linearGradient>
            <path id="borderPath" d={pathData} pathLength="100" />
          </defs>

          <use href="#borderPath" fill="none" stroke="transparent" />

          {/* New curved trails */}
          <use href="#borderPath" fill="none" stroke="#ff6b00" strokeWidth="3" opacity="0.2" strokeDasharray="4 96">
            <animate attributeName="stroke-dashoffset" from="104.5" to="4.5" dur="18s" repeatCount="indefinite" />
          </use>
          <use href="#borderPath" fill="none" stroke="#ff6b00" strokeWidth="3" opacity="0.4" strokeDasharray="2.5 97.5">
            <animate attributeName="stroke-dashoffset" from="103" to="3" dur="18s" repeatCount="indefinite" />
          </use>
          <use href="#borderPath" fill="none" stroke="#ff6b00" strokeWidth="3" opacity="0.8" strokeDasharray="1 99" className="drop-shadow-[0_0_4px_rgba(255,107,0,1)]">
            <animate attributeName="stroke-dashoffset" from="101.5" to="1.5" dur="18s" repeatCount="indefinite" />
          </use>
          <use href="#borderPath" fill="none" stroke="#ffffff" strokeWidth="3" opacity="1" strokeDasharray="0.2 99.8" className="drop-shadow-[0_0_8px_rgba(255,107,0,1)]">
            <animate attributeName="stroke-dashoffset" from="100.7" to="0.7" dur="18s" repeatCount="indefinite" />
          </use>

          <g>
            <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
              <mpath href="#borderPath" />
            </animateMotion>
            
            <g transform="translate(-14, -22)">
              <Car className="text-brand-orange drop-shadow-[0_0_12px_rgba(255,107,0,1)]" width={28} height={28} strokeWidth={1.5} />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

export default function SobrePage() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="pt-24 min-h-screen pb-16 md:pb-24 bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <motion.div initial="hidden" animate="visible" variants={revealUp} className="max-w-4xl mx-auto text-center will-change-[transform,opacity]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            A Paixão Pela <span className="text-brand-orange [text-shadow:0_0_15px_rgba(255,107,0,0.3)]">Perfeição</span> Automotiva.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Mais do que apenas estética veicular. A Attento nasceu da obsessão pelo detalhe e pelo compromisso total com a satisfação dos nossos clientes.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0 }} 
          className="max-w-4xl mx-auto mt-16 relative will-change-[transform,opacity] p-8 md:p-14 rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Animated Car and Trail Tracker Box (SVG Tracing) */}
          <AnimatedBorderTrack />

          <div className="space-y-6 text-neutral-300 text-lg md:text-xl font-light leading-relaxed text-justify relative z-10">
            <p>
              A <strong className="text-white font-medium">Attento Estética Automotiva Premium</strong> nasceu não apenas da admiração por automóveis, mas de uma busca incessante pela perfeição visual e estrutural. Entendemos que cada veículo possui uma identidade própria e demanda cuidados desenhados sob medida para alcançar o máximo do seu potencial estético e ser preservado ao longo do tempo.
            </p>
            <p>
              Nossos estúdios funcionam como verdadeiros laboratórios de detalhamento de ponta, equipados com a mais avançada tecnologia disponível no mercado mundial. Utilizamos produtos com formulações cerâmicas nanotecnológicas, compostos de polimento de microprecisão e películas <strong className="text-white font-medium">PPF (Paint Protection Film)</strong> de classe internacional, garantindo resultados que consistentemente superam os exigentes padrões originais de fábrica.
            </p>
            <p>
              Nossa equipe é formada por especialistas obstinados que dominam a arte da restauração de verniz e da proteção de superfícies. Cada projeto em nossas mãos é tratado com exclusividade, rigor técnico e verdadeira paixão. Na Attento, não realizamos apenas serviços; nós criamos experiências exclusivas de contemplação automotiva, redefinimos o brilho e entregamos tranquilidade e segurança absolutas aos proprietários mais exigentes do Brasil.
            </p>
          </div>
        </motion.div>

        {/* MVV Section - Textos bem formatados com processamento de sombra cortado */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 will-change-[transform,opacity]">
          
          <motion.div variants={revealUp} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-10 rounded-3xl flex flex-col items-start hover:border-brand-orange/40 transition-colors shadow-xl will-change-[transform,opacity]">
            <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Target className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Missão</h3>
            <p className="text-neutral-400 leading-relaxed text-lg font-light text-justify">
              Oferecer serviços de estética automotiva com alto padrão de qualidade, cuidando da aparência, proteção e valorização dos veículos. Garantimos atenção meticulosa aos detalhes e compromisso inabalável com a total satisfação e confiança dos nossos clientes.
            </p>
          </motion.div>

          <motion.div variants={revealUp} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-10 rounded-3xl flex flex-col items-start hover:border-brand-orange/40 transition-colors shadow-xl will-change-[transform,opacity]">
            <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Eye className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Visão</h3>
            <p className="text-neutral-400 leading-relaxed text-lg font-light text-justify">
              Ser a maior e mais absoluta referência no mercado de estética automotiva, reconhecida pela excelência indiscutível dos serviços, pela extrema confiança e lealdade dos clientes e pela qualidade incomparável entregue em cada projeto realizado.
            </p>
          </motion.div>

          <motion.div variants={revealUp} className="md:col-span-2 lg:col-span-1 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-10 rounded-3xl flex flex-col items-start hover:border-brand-orange/40 transition-colors shadow-xl will-change-[transform,opacity]">
            <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Diamond className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Valores</h3>
            <ul className="text-neutral-400 leading-relaxed text-lg font-light space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-justify">Honestidade nas relações diretas com clientes e parceiros.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-justify">Transparência impecável em todos os processos e serviços prestados.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-justify">Dedicação cirúrgica e paixão em cada detalhe do trabalho realizado.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-justify">Excelência inegociável na qualidade e no atendimento pessoal.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-justify">Segurança máxima e cuidado extremo com cada veículo a nós confiado.</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}
