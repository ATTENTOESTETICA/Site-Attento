"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav 
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderBottomColor: "rgba(255, 255, 255, 0.05)" }}
        animate={{ 
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.90)" : "rgba(0, 0, 0, 0.4)",
          borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.0)"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Attento Logo" className="h-20 md:h-24 lg:h-32 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-400">
            <Link href="/" className={`${pathname === '/' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Início</Link>
            <Link href="/sobre" className={`${pathname === '/sobre' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Sobre</Link>
            <Link href="/servicos" className={`${pathname === '/servicos' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Serviços</Link>
          </div>

          <div className="hidden md:flex">
            <Link href="/contato" className="bg-brand-orange hover:bg-orange-500 text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]">
              Falar Conosco
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu" 
            className="md:hidden text-white hover:text-brand-orange transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center pt-24"
          >
             <div className="flex flex-col items-center gap-8 text-2xl font-medium text-neutral-400">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`${pathname === '/' ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Início</Link>
              <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className={`${pathname === '/sobre' ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Sobre</Link>
              <Link href="/servicos" onClick={() => setIsMobileMenuOpen(false)} className={`${pathname === '/servicos' ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'hover:text-white transition-colors'}`}>Serviços</Link>
              <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-brand-orange text-white px-10 py-4 rounded-full font-bold tracking-wide shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                Falar Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
