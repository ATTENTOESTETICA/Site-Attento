"use client";

import { motion } from "framer-motion";

export default function TermosClient() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <motion.div initial="hidden" animate="visible" variants={revealUp} className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-white">
          Termos de <span className="text-brand-orange">Uso</span>
        </h1>
        
        <div className="space-y-8 text-neutral-400 font-light leading-relaxed text-lg text-justify">
          <p>Bem-vindo à Attento Estética Automotiva Premium. Ao navegar no nosso site corporativo, solicitar orçamentos, ou contratar formalmente nossos serviços em nosso estúdio físico, o cliente manifesta concordar incondicionalmente com os presentes Termos de Uso e Condições Gerais.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Natureza dos Serviços Prestados</h2>
          <p>A Attento atua com excelência absoluta na prestação de serviços detalhados e artesanais de alta performance estética veicular. Nosso portfólio restrito abarca: higienização detalhada profunda, correção de verniz (polimento de precisão), vitrificação (nanocerâmica 9H/10H), e aplicação profissional de películas PPF e nanocarbono térmicas.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Orçamentos e Avaliações Presenciais</h2>
          <p>Qualquer estimativa de valor ou prazo fornecida genericamente por meio de redes sociais (WhatsApp/Instagram) <strong>não possui caráter vinculativo ou final</strong>.</p>
          <p>O nível de dano microscópico no verniz, o estado das peças e o histórico de contaminação exigem <strong className="text-white font-medium">Avaliação Técnica Presencial</strong> prévia ao fechamento do pacote. O orçamento detalhado e definitivo do serviço, bem como o investimento necessário, será formalizado exclusivamente em nossas dependências após a iluminação criteriosa do carro.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Prazos e Execução de Projetos</h2>
          <p>A obsessão pelos detalhes que define o nosso padrão pode implicar flexibilizações mínimas ao cronograma original. Os prazos orçados operam como estimativas balizadoras; intercorrências relativas à resposta do verniz do chassi, cura climática e compatibilidade técnica das películas podem exigir variações de entrega, visando <strong>jamais comprometer o resultado estético final desejado</strong>. Clientes são notificados sobre cada etapa do processo em tempo real.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Garantia Restrita e Regras de Manutenção</h2>
          <p>Oferecemos tratamentos protetivos oficiais com selo de garantia documentado. Entretanto, a vigência dessa garantia contra falhas químicas e de material restringe-se intrinsecamente ao <strong>cumprimento sistemático do cronograma de Manutenção de Garantia na Attento</strong> e às diretrizes dos selantes cerâmicos.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-300">
            <li>Não nos responsabilizamos pela durabilidade das superfícies frente a lavagens agressivas executadas por terceiros (postos com solupan ou produtos altamente cáusticos e abrasivos).</li>
            <li>A remoção forçada, vandalismo físico direto ou falotamento contínuo sobre o PPF configuram uso indevido da blindagem.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Responsabilidade, Bens e Uso de Imagem</h2>
          <p>A Attento zela pela máxima proteção material dos veículos em suas garagens físicas (sob apólice e segurança controlada 24/7). Pede-se a remoção de itens valiosos e dispositivos não fixos de dentro do carro no ato do recebimento.</p>
          <p>Para fins educacionais de engenharia automotiva, portfólio da oficina e divulgação de arte aplicada (antes e depois), a empresa assume o direito inerente de registrar e divulgar gravações técnicas da estética do veículo finalizado <strong>ocultando sumariamente identificadores literais das placas veiculares</strong> e mantendo o completo sigilo da identidade comercial dos proprietários sem autorização explícita.</p>

          <p className="mt-16 text-sm text-neutral-600 uppercase tracking-widest font-semibold">Última atualização: Março de 2026.</p>
        </div>
      </motion.div>
    </div>
  );
}
