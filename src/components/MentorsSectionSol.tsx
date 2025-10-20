import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import background2 from "@/assets/backgroundMobile/10.png";
import backgroundMobile from "@/assets/backgroundMobile/8.png";

const MentorsSectionSol = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative font-geist overflow-hidden"
        // evita o auto-zoom/auto-resize de fonte do Safari iOS que cria gaps
        style={{ WebkitTextSizeAdjust: "100%" }}
      >
        {/* BG Mobile */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundMobile})` }}
        />
        {/* BG Desktop */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${background2})` }}
        />

        {/* CONTAINER: usa flex p/ manter o CTA no fundo, sem gap exagerado */}
        <div
          className="
            relative z-10
            px-4 md:px-6 lg:px-[100px]
            min-h-[700px] md:min-h-[878px]
            flex flex-col justify-between
            pt-8 md:pt-[83px]
            pb-6 md:pb-10
          "
          // respeita a safe-area do iPhone sem acrescentar espaço em outros devices
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          {/* TEXTO */}
          <div
            className="
              flex flex-col gap-5 text-[#FFF]
              text-center md:text-center
              items-end md:items-center
              w-full md:max-w-[1000px]
              ml-10 md:ml-0 lg:ml-[80px]
              px-2 md:px-0
              mt-[120px] md:mt-[180px] lg:mt-[250px]   /* 👈 agora no desktop o texto desce */
    pr-10
            "
          >
            <h2
              className="
                text-[16px] xs:text-[18px] sm:text-[20px] md:text-[28px] lg:text-[30px]
                font-bold leading-snug text-hero-accent
                max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[500px]
              "
            >
              O Arquiteto da Tecnologia
            </h2>

            <p
              className="
                text-sm xs:text-[15px] sm:text-base lg:text-lg
                leading-relaxed font-medium w-full
                max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[400px] lg:max-w-[500px]
              "
            >
              O cérebro por trás da implementação. Solano desmistifica
              ferramentas, as IA’s e a tecnologia, mostrando como transformar
              complexidade em ferramentas simples e eficazes.
            </p>

            <p
              className="
                text-sm xs:text-[15px] sm:text-base lg:text-lg
                leading-relaxed font-medium w-full
                max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[400px] lg:max-w-[500px]
              "
            >
              Com ele, você entenderá o "como" e o "porquê" de cada automação,
              garantindo que sua imobiliária opere com a eficiência de uma
              máquina do futuro.
            </p>
          </div>

          {/* CTA (agora dentro do mesmo container, ancorado no fundo) */}
          <div className="w-full max-w-[360px] mx-auto mt-6 md:mt-10">
            <Button
              variant="hero"
              size="hero"
              className="
                w-full max-w-[360px]
                px-6 py-0
                text-[16px] font-bold tracking-wide
                flex items-center justify-center
                rounded-full text-black
                bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
                transition-all duration-300 ease-in-out
                hover:from-[#FFD85D] hover:to-[#FFF3C0]
                hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
              "
              onClick={() => setIsModalOpen(true)}
            >
               GARANTIR INGRESSO | R$ 97
            </Button>
          </div>
        </div>
      </section>

      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MentorsSectionSol;
