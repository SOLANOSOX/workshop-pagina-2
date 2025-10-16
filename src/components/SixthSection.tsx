// SixthSection.tsx
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const IconClock = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconDoubleCheck = ({ className = "w-4 h-4 md:w-[18px] md:h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 12.5l3 3 6-6" />
    <path d="M8.5 12.5l3 3 6-6" />
  </svg>
);

export default function SixthSection({
  date = "Evento acessível",
  hoursLabel = "16h de conteúdo",
  expLabel = "Experiência imersiva",
  priceTitle = " ou 5x de",
  bigPrice = "R$ 10,60",
  cashText = "ou R$ 47 à vista",
  ctaText = "GARANTIR INGRESSO | LOTE 0",
}: {
  date?: string;
  hoursLabel?: string;
  expLabel?: string;
  priceTitle?: string;
  bigPrice?: string;
  cashText?: string;
  ctaText?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pega "R$ 47" do cashText para ficar GIGANTE
  const cashNumber = useMemo(() => {
    const m = cashText.match(/R\$\s?[\d.,]+/);
    return m ? m[0] : "R$ 47";
  }, [cashText]);

  return (
    <section id="price-section" className="bg-hero-bg px-4 md:px-6 lg:px-[218px] font-geist">
      <div className="max-w-[1060px] mx-auto py-8 md:py-12">
        {/* Título + badge centralizados */}
        <div className="text-center">
          <h2 className="text-hero-text text-[26px] md:text-[34px] lg:text-[38px] font-bold leading-tight">
            Qual é o <span className="font-extrabold">investimento</span>
            <br className="hidden sm:block" /> para aprender tudo isso?
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[12px] md:text-sm font-semibold bg-hero-accent/10 text-hero-text ring-1 ring-hero-accent/30">
              {date}
            </span>
          </div>
        </div>

        {/* Layout: empilhado no mobile; no desktop lado a lado, com o card centralizado verticalmente */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {/* CARD (esq) */}
          <div className="w-full lg:max-w-[520px] mx-auto lg:mx-0">
            <div className="rounded-2xl md:rounded-3xl bg-[#FCF6E8] ring-1 ring-hero-accent/40 shadow-lg px-6 md:px-8 py-7 md:py-9 text-[#0E141B] flex flex-col items-center text-center gap-5">
              {/* features */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <IconClock className="w-5 h-5" />
                  <span className="font-medium text-[15px] md:text-[16px]">{hoursLabel}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <IconUsers className="w-5 h-5" />
                  <span className="font-medium text-[15px] md:text-[16px]">{expLabel}</span>
                </div>
              </div>

              <hr className="w-full border-[#0E141B]/15 my-3 md:my-4" />

              {/* PREÇO – R$ 47 grande; abaixo parcelado pequeno */}
              <div>
                <p className="font-black leading-[1.05] text-[48px] md:text-[64px]">{cashNumber}</p>
                <p className="mt-1 text-[15px] md:text-[17px] font-semibold">
                  {priceTitle} {bigPrice}
                </p>
              </div>

              {/* CTA */}
              <div className="w-full pt-1">
                <Button
                  variant="hero"
                  size="hero"
                  className="w-full max-w-[360px] mx-auto px-5 md:px-6 py-3 md:py-4 rounded-full text-black font-bold bg-gradient-to-r from-[#CBA135] to-[#F5D78E] hover:from-[#FFD85D] hover:to-[#FFF3C0] transition-all duration-300 ease-in-out shadow-[0_6px_24px_rgba(0,0,0,0.12)]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span
                    className="block text-center whitespace-normal break-words leading-tight font-bold text-[clamp(13px,3.6vw,18px)]"
                    style={{ textWrap: "balance" }}
                  >
                    {ctaText}
                  </span>
                </Button>
              </div>

              {/* Progress Bar - Lote Vendido */}
              <div className="w-full flex justify-center pt-1">
                <div className="w-full max-w-[252px] flex flex-col gap-2">
                  <div className="relative w-full h-3 bg-gray-400 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] rounded-full transition-all duration-500"
                      style={{ width: '97%' }}
                    />
                  </div>
                  <p className="text-[#0E141B] text-sm md:text-base font-semibold text-center">
                    97% dos ingressos totais vendidos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LISTA (dir) — mesma largura do card e um pouco mais compacta */}
          <div className="w-full lg:max-w-[520px] mx-auto lg:mx-0">
            <div className="bg-[#1A1F25] rounded-[20px] md:rounded-[28px] lg:rounded-[32px] p-5 md:p-7 shadow-md">
              <ul className="divide-y divide-hero-text/20">
                {[
                  "Análise de Projeto Pessoal",
                  "Estratégia de Captação 5X com IA",
                  "Modelo Estruturado de Gestão de Equipe de Alta Performance",
                  "Quais Ferramentas de Automação já Validamos de Nutrição e Aquecimento para Vender 24h",
                  "Estratégia de Expansão Inteligente para Domínio Regional",
                  "Painel de Controle de Métricas Essenciais para Retorno Máximo",
                  "Plano de Ação de 7 Dias Pós-Workshop",
                ].map((item, i) => (
                  <li key={i} className="py-2.5 md:py-3.5">
                    <div className="flex items-start gap-3 text-left">
                      <span className="shrink-0 text-hero-accent pt-[2px]">
                        <IconDoubleCheck />
                      </span>
                      <span className="text-hero-text text-[15px] md:text-base lg:text-lg leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <DiagnosticModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
