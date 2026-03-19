"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  q: string;
  a: string | React.ReactNode;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    title: "PPF (Paint Protection Film)",
    items: [
      {
        q: "O que é o PPF?",
        a: "O PPF (Paint Protection Film) é uma película transparente aplicada sobre a pintura do veículo com o objetivo de ajudar a proteger a superfície contra marcas do uso cotidiano, como riscos, arranhões, ralados, pedras de pequeno porte, raios UV, chuva ácida e excremento de aves.",
      },
      {
        q: "O PPF altera a aparência do veículo?",
        a: "O PPF é projetado para ser discreto e preservar a aparência original da pintura. Em condições normais de aplicação, não altera a tonalidade do veículo, aplicação com alta performance, fica imperceptível. Também existem versões com acabamento fosco para quem deseja um visual diferenciado.",
      },
      {
        q: "O PPF protege contra todos os tipos de risco?",
        a: "O PPF foi desenvolvido para reduzir o impacto de riscos leves e pequenas agressões do dia a dia. No entanto, danos mais intensos ou impactos mais fortes podem ultrapassar a capacidade de proteção da película.",
      },
      {
        q: "É necessário aplicar PPF no carro inteiro?",
        a: (
          <div className="space-y-2">
            <p>Não necessariamente. A aplicação do PPF pode ser feita de forma parcial ou total, de acordo com a preferência e a necessidade do proprietário do veículo.</p>
            <p>No entanto, o cenário ideal é realizar a aplicação em todo o veículo logo no início, principalmente quando o carro é novo ou está com a pintura em excelente estado. Dessa forma, é possível ampliar a cobertura de proteção da pintura desde o primeiro momento.</p>
            <p>Também é bastante comum que clientes optem pela aplicação apenas nas áreas mais expostas ao uso diário, onde há maior incidência de impactos de pedras, sujeira e pequenos desgastes, como:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Capô</li>
              <li>Para-choque dianteiro</li>
              <li>Retrovisores</li>
              <li>Paralamas</li>
              <li>Maçanetas</li>
              <li>Soleira</li>
            </ul>
          </div>
        ),
      },
      {
        q: "O PPF pode ser removido?",
        a: "Sim. Quando instalado e removido corretamente por profissionais qualificados, o PPF pode ser retirado sem danificar a pintura original do veículo.",
      },
      {
        q: "Como deve ser feita a lavagem do carro com PPF?",
        a: "O veículo pode ser lavado normalmente, mas evitando jatos de alta pressão. Recomenda-se, também, utilizar produtos automotivos apropriados e métodos de lavagem adequados, evitando materiais abrasivos que possam comprometer a superfície.",
      },
    ],
  },
  {
    title: "Películas",
    items: [
      {
        q: "O que é a película automotiva?",
        a: "A película automotiva é um filme aplicado nos vidros do veículo que pode contribuir para redução de calor, bloqueio de parte dos raios solares e aumento de privacidade, além de proporcionar maior conforto aos ocupantes.",
      },
      {
        q: "A película ajuda a reduzir o calor dentro do carro?",
        a: "Dependendo do tipo de película utilizada, ela pode reduzir parte da entrada de calor e radiação solar, contribuindo para um ambiente interno mais confortável.",
      },
      {
        q: "A película oferece proteção contra raios UV?",
        a: "Películas automotivas de qualidade podem ajudar a reduzir significativamente a passagem de raios UV e IR, o que pode contribuir para maior proteção dos ocupantes e do interior do veículo.",
      },
      {
        q: "Podem surgir bolhas na película?",
        a: "Quando a instalação é realizada com técnica adequada e materiais de qualidade, a formação de bolhas é incomum. Pequenas marcas temporárias podem aparecer logo após a aplicação e tendem a desaparecer durante o processo de secagem.",
      },
      {
        q: "Posso baixar os vidros logo após a instalação?",
        a: "A orientação é não abrir os vidros no período de 48 horas, para permitir a correta fixação da película. O tempo pode variar conforme o tipo de material e as condições de aplicação.",
      },
    ],
  },
  {
    title: "Vitrificação",
    items: [
      {
        q: "O que é vitrificação?",
        a: "É um revestimento cerâmico, que quando aplicado na pintura, protege contra danos causados pelos raios UV, chuva, seiva de plantas, micro riscos de lavagem e preserva a pintura original por mais tempo.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].title);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {faqData.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat.title)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat.title
                ? "bg-brand-orange text-white border-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* FAQ Items (Translucent box aesthetic) */}
      <div className="space-y-4">
        {faqData.map((cat, catIdx) => (
          <div key={catIdx} className={activeCategory === cat.title ? "block" : "hidden"}>
            <div className="space-y-4">
              {cat.items.map((item, itemIdx) => {
                const isOpen = openItems[`${catIdx}-${itemIdx}`];
                return (
                  <div
                    key={itemIdx}
                    className="border border-neutral-800/50 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden transition-colors hover:border-neutral-700/80"
                  >
                    <button
                      onClick={() => toggleItem(catIdx, itemIdx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-white text-lg pr-8">{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-orange transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 text-neutral-400 leading-relaxed text-base border-t border-neutral-800/30">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
