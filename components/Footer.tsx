import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-black pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          {/* Logo uploaded by the user - increased size */}
          <Link href="/">
            <img src="/logo.png" alt="Attento Logo" className="h-32 md:h-40 lg:h-52 w-auto object-contain mb-6" />
          </Link>
          <p className="text-sm text-neutral-500 tracking-wide">A arte da perfeição automotiva.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
          <Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
        </div>

        <div className="flex flex-col items-center gap-4 text-xs text-neutral-600 text-center tracking-widest uppercase">
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-500">
            <Link href="/politica-de-privacidade" className="hover:text-brand-orange transition-colors">Política de Privacidade</Link>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/termos-de-uso" className="hover:text-brand-orange transition-colors">Termos de Uso</Link>
          </div>
          <div>&copy; {new Date().getFullYear()} Attento Estética Veicular.<br className="md:hidden"/> Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
