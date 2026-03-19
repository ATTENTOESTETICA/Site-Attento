"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, SunDim, X, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicosPage() {
  const [selectedService, setSelectedService] = useState<{title: string, desc: string, detail: string} | null>(null);

  const categories = [
    {
      title: "Estética Automotiva",
      description: "Cuidados profundos e restauração de nível espetacular para o seu veículo, devolvendo a sensação de carro zero e valorizando cada detalhe.",
      icon: <Sparkles className="w-12 h-12 text-brand-orange" />,
      items: [
        { name: "Lavagem Simples", detail: "Processo cuidadoso focado na limpeza externa segura, utilizando produtos automotivos de pH neutro que protegem o verniz e revelam o brilho original, sem agredir revestimentos existentes." },
        { name: "Lavagem Detalhada", detail: "Mapeamento completo da sujeira onde lavagens normais não alcançam: limpeza cirúrgica de emblemas, grades, frestas, caixa de roda e motor, com lubrificação intensa para zero atrito." },
        { name: "Higienização Interna e Externa", detail: "Sanitização de cabine completa com vapor e extração profunda de manchas em tecidos, eliminando bactérias e ácaros, além do tratamento de plásticos internos e externos." },
        { name: "Hidratação de Couros e Plásticos", detail: "Limpeza com produtos dedicados seguida por condicionadores premium que nutrem o couro (evitando trincas) e revitalizam plásticos esbranquiçados de forma não-gordurosa." },
        { name: "Descontaminação de Vidros e Rodas", detail: "Remoção química e mecânica de chuva ácida nos vidros (garantindo visibilidade perfeita) e descontaminação de pó de freio e ferro incrustado nas rodas." },
        { name: "Polimento", detail: "O processo de nivelamento do verniz. Em múltiplas etapas de corte, refino e lustro, eliminamos marcas de lavagem (teias de aranha), arranhões superficiais e oxidação." },
        { name: "Vitrificação", detail: "A aplicação de Nano Cerâmica (9H/10H) que cria uma armadura invisível sobre a pintura recém-polida. Promove hidrofobia extrema, reflexo espelhado profundo e proteção UV prolongada." },
        { name: "Renovador de Odor", detail: "Processo de oxi-sanitização (Ozônio) e nebulização de fragrância premium que purifica o ar condicionado e remove permanentemente odores de cigarro ou umidade." },
        { name: "Remoção de Gorduras e Impurezas", detail: "Preparador de superfície que descontamina a pintura de resíduos asfálticos, seiva de árvore e pulverizações industriais, deixando a tela lisa e pura." },
      ]
    },
    {
      title: "PPF (Paint Protection Film)",
      description: "O escudo supremo para a pintura do seu carro. A película regenerativa de última geração que blinda contra riscos, arranhões e pedras.",
      icon: <ShieldCheck className="w-12 h-12 text-brand-orange" />,
      items: [
        { name: "PPF Gloss (Normal - Brilho Extremo)", detail: "Película termoplástica transparente e de alto brilho. Protege contra impactos de pedra na estrada, vandalismo e raios UV, possuindo tecnologia de auto-regeneração no sol." },
        { name: "PPF Matte (Fosco Acetinado)", detail: "Transforma a pintura original em um visual fosco acetinado e extremamente esportivo, mantendo a exata mesma proteção robusta e auto-curativa contra o uso diário." },
        { name: "PPF Winshield (Para-brisa)", detail: "Proteção específica para o vidro mais atingido do carro. Evita trincas causadas por pedradas na estrada, poupando o custo astronômico da troca de um para-brisa original." },
      ]
    },
    {
      title: "Películas",
      description: "Conforto térmico absoluto, redução inteligente da luz solar e segurança avançada contra vandalismo.",
      icon: <SunDim className="w-12 h-12 text-brand-orange" />,
      items: [
        { name: "Térmica (Alta rejeição de calor)", detail: "Filme nano-cerâmico que bloqueia até 99% dos raios UV e IR (Calor). Mantém o interior do carro gelado, protege os passageiros e evita que painel e bancos ressequem com o tempo." },
        { name: "Nano Carbono (Estilo e Conforto)", detail: "Película construída com partículas de carbono que não desbota com o tempo. Oferece excelente visão de dentro para fora, privacidade inigualável vista de fora e rejeição de calor eficiente." },
        { name: "Anti-Vandalismo (Proteção extrema)", detail: "Filme multi-laminado de altíssima resistência e espessura robusta. Em caso de batida ou assalto, o vidro não estilhaça, segurando os fragmentos e protegendo os ocupantes." }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-black relative">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Soluções de <span className="text-brand-orange">Alta Performance</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Conheça nosso portfólio completo de serviços dedicados a proteger, revitalizar e elevar o nível do seu veículo. <span className="text-white font-medium">Clique em cada serviço para saber mais.</span>
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8 }} 
              className="flex flex-col lg:flex-row gap-16 items-start bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 hover:border-brand-orange/20 transition-all duration-500 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <div className="lg:w-1/3 flex flex-col gap-6 relative z-10">
                <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.15)] relative">
                  <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full"></div>
                  {category.icon}
                </div>
                <h2 className="text-4xl font-bold tracking-tight">{category.title}</h2>
                <p className="text-neutral-400 leading-relaxed text-lg font-light">{category.description}</p>
              </div>

              <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                {category.items.map((item, itemIdx) => (
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService({ title: item.name, desc: category.title, detail: item.detail })}
                    key={itemIdx} 
                    className="group bg-black/40 border border-white/5 p-6 rounded-2xl flex items-center gap-5 hover:border-brand-orange/40 hover:bg-white/[0.05] transition-all text-left shadow-lg overflow-hidden relative cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
                    <div className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0 group-hover:shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                    <span className="text-neutral-300 font-medium group-hover:text-white transition-colors relative z-10 text-[15px]">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quadro Comparativo */}
        <div className="max-w-5xl mx-auto mt-24 md:mt-40">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center border border-white/10 rounded-lg px-4 py-1.5 mb-6 text-sm font-medium text-neutral-300 bg-white/5">
              Porque nós?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              O padrão que <span className="text-brand-orange">nos diferencia.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              Combinamos técnica, produtos de qualidade e atenção aos detalhes para entregar resultados que superam expectativas.
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: Sem a Attento */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-white/5 bg-transparent rounded-3xl p-10 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight text-neutral-300">Sem a Attento</h3>
              
              <ul className="space-y-6 w-full">
                {[
                  'Pintura sem proteção adequada', 
                  'Desgaste precoce do veículo', 
                  'Serviços sem garantia de qualidade', 
                  'Falta de atenção aos detalhes', 
                  'Desvalorização do seu carro'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-400 font-medium text-base md:text-lg">
                    <X className="w-5 h-5 text-neutral-300 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Card: Com a Attento */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white/10 bg-white/[0.02] rounded-3xl p-10 md:p-12 relative overflow-hidden shadow-[0_0_30px_rgba(255,107,0,0.05)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[80px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />
              
              <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight text-white relative z-10">Com a Attento</h3>
              
              <ul className="space-y-6 w-full relative z-10">
                {[
                  'Proteção duradoura para seu veículo', 
                  'Aparência renovada e valorizada', 
                  'Serviços com alto padrão de qualidade', 
                  'Cuidado em cada detalhe', 
                  'Confiança e transparência sempre'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium text-base md:text-lg">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20, x: "-50%", translateY: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%", translateY: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, y: 20, x: "-50%", translateY: "-50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 w-[90%] max-w-lg bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-8 z-[101] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">{selectedService.desc}</p>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors text-neutral-400 hover:text-white"
                  aria-label="Fechar"
                  title="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-neutral-400 text-lg leading-relaxed font-light mb-8 relative z-10">
                {selectedService.detail}
              </p>

              <div className="flex gap-4 relative z-10">
                <Link href="/contato" className="w-full text-center bg-brand-orange hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]">
                  Agendar Este Serviço
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
