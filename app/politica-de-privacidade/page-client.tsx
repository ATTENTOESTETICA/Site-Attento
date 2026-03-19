"use client";

import { motion } from "framer-motion";

export default function PoliticaClient() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <motion.div initial="hidden" animate="visible" variants={revealUp} className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-white">
          Política de <span className="text-brand-orange">Privacidade</span>
        </h1>
        
        <div className="space-y-8 text-neutral-400 font-light leading-relaxed text-lg text-justify">
          <p>A Attento Estética Automotiva Premium valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais quando você interage com nossos serviços e plataformas digitais.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Coleta de Informações</h2>
          <p>Coletamos informações pessoais que você nos fornece diretamente, como nome, telefone (WhatsApp), e-mail e dados essenciais do seu veículo, no momento em que agenda uma avaliação ou entra em contato conosco por nossos canais de atendimento e estúdios físicos.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas de forma restrita e exclusivamente para os seguintes propósitos:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-300">
            <li>Processar, viabilizar e agendar os serviços de estética automotiva requeridos.</li>
            <li>Fornecer atendimento personalizado, transparente e de alto nível.</li>
            <li>Enviar atualizações sobre o andamento e o status do seu veículo durante a execução dos protocolos nas nossas dependências.</li>
            <li>Comunicar avisos de garantia periódica, revisões de revestimentos (Vitrificação e PPF) e novidades (apenas com o seu consentimento prévio).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Proteção e Compartilhamento de Dados</h2>
          <p>Adotamos as mais rigorosas práticas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação indevida. <strong>Não vendemos, alugamos ou compartilhamos</strong> seus dados do cliente ou placa do veículo com terceiros em nenhuma hipótese que não seja exigida por lei ou imperativa para o serviço prestado.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Seus Direitos (LGPD)</h2>
          <p>Em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), você tem o direito incondicional de solicitar o acesso, a correção da base, a atualização ou a exclusão total das suas informações de nosso banco de dados corporativo a qualquer momento, contatando a gerência através de qualquer canal de atendimento.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Alterações nesta Política</h2>
          <p>A Attento reserva-se o direito de atualizar e adaptar esta Política de Privacidade conforme necessário para refletir as evoluções orgânicas nos nossos serviços premium e eventuais mudanças jurídicas e legislativas vigentes.</p>
          
          <p className="mt-16 text-sm text-neutral-600 uppercase tracking-widest font-semibold">Última atualização: Março de 2026.</p>
        </div>
      </motion.div>
    </div>
  );
}
