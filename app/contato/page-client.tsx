"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function ContatoPage() {
  return (
    <div className="min-h-screen pt-24 bg-black relative">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          {/* Left Column - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="will-change-[transform,opacity]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Vem pra <span className="text-brand-orange [text-shadow:0_0_15px_rgba(255,107,0,0.3)]">Attento</span>.
            </h1>
            <p className="text-neutral-400 text-lg md:text-2xl mb-14 leading-relaxed font-light">
              Fale com um especialista e elevaremos o seu veículo ao mais alto padrão de estética e proteção.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-brand-orange" />, label: "E-mail", value: "attento@attentoestetica.com.br", url: "mailto:attento@attentoestetica.com.br", isLink: true },
                { icon: <Phone className="text-brand-orange" />, label: "WhatsApp", value: "+55 61 99165-3813", url: "https://wa.me/5561991653813", isLink: true },
                { icon: <Clock className="text-brand-orange" />, label: "Horários", value: "Seg - Sex: 08:00 às 18:00", isLink: false },
                { 
                  icon: <MapPin className="text-brand-orange" />, 
                  label: "Studio BMW (Brasília)", 
                  value: "EPAR - Antigo Terminal 2 - Aeroporto Internacional - Lago Sul, Brasília - DF, 71608-900", 
                  url: "https://maps.google.com/?q=EPAR+-+Antigo+Terminal+2+-+Aeroporto+Internacional+-+Lago+Sul,+Brasília+-+DF,+71608-900", 
                  isLink: true 
                },
                { 
                  icon: <MapPin className="text-brand-orange" />, 
                  label: "Studio PORSCHE (Brasília)", 
                  value: "Aeroporto internacional Juscelino Kubitschek, DF 047, Lote 04 - Lago Sul, Brasília - DF, 71608-900", 
                  url: "https://maps.google.com/?q=Aeroporto+internacional+Juscelino+Kubitschek,+DF+047,+Lote+04+-+Lago+Sul,+Brasília+-+DF,+71608-900", 
                  isLink: true 
                },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white/[0.02] backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-lg hover:bg-white/[0.04] transition-all duration-300">
                  <div className="bg-black border border-white/10 p-5 rounded-2xl group-hover:scale-[1.05] transition-transform duration-300 shadow-md flex-shrink-0 will-change-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-brand-orange font-bold uppercase tracking-[0.2em] mb-1.5">{item.label}</p>
                    {item.isLink ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-medium text-neutral-200 hover:text-white transition-colors block leading-snug">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg md:text-xl font-medium text-neutral-200 block leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="bg-white/[0.02] backdrop-blur-lg p-6 md:p-14 rounded-[2.5rem] border border-white/[0.05] shadow-2xl relative overflow-hidden flex flex-col justify-center will-change-[transform,opacity]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-xl pointer-events-none"></div>

            {/* Logo flutuante acima do formulário */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex justify-center mb-10 relative z-10 will-change-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Attento Form Logo" className="h-24 md:h-28 lg:h-32 object-contain opacity-90 shadow-sm" />
            </motion.div>

            <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Em desenvolvimento!'); }}>
              <div className="space-y-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">Nome Completo</label>
                <input type="text" placeholder="Como devemos chamá-lo?" className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-brand-orange focus:bg-white/5 transition-all text-lg font-light placeholder:text-neutral-600" required />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">WhatsApp</label>
                <input type="tel" placeholder="(61) 90000-0000" className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-brand-orange focus:bg-white/5 transition-all text-lg font-light placeholder:text-neutral-600" required />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">Veículo e Serviço Desejado</label>
                <input type="text" placeholder="Ex: Porsche 911 - Polimento e PPF" className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-brand-orange focus:bg-white/5 transition-all text-lg font-light placeholder:text-neutral-600" required />
              </div>
              <button type="submit" className="w-full bg-brand-orange hover:bg-orange-500 text-white font-bold py-6 rounded-2xl transition-all hover:scale-[1.02] shadow-[0_5px_15px_rgba(255,107,0,0.3)] text-lg mt-4 tracking-wide">
                Solicitar Avaliação Pessoal
              </button>
            </form>
          </motion.div>
        </div>

        {/* Separated FAQ for Contact page */}
        <div className="max-w-6xl mx-auto pt-20 md:pt-32 border-t border-neutral-800/50 relative">
          
          {/* Animated Laser Divider */}
          <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: "300%" }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }} 
              className="w-1/4 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent will-change-transform"
            />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="text-center mb-20 mt-10 will-change-[transform,opacity]">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ainda com <span className="text-brand-orange">Dúvidas?</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-xl font-light">
              Verifique as perguntas mais frequentes sobre nossos principais serviços de luxo.
            </p>
          </motion.div>
          <FAQ />
        </div>

      </section>
    </div>
  );
}
