import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const EighthSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="
          bg-[#0E141B] text-white 
          px-4 md:px-6 lg:px-[418px] font-geist 
          rounded-t-[50px] lg:rounded-t-[100px] 
          -mt-8 md:-mt-10 lg:-mt-12         
          pt-20 md:pt-24 lg:pt-28          
          pb-12 md:pb-16 lg:pb-20         
          relative
        "
      >
        <div className="max-w-[1060px] mx-auto flex flex-col items-center relative">
          {/* Título */}
          <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight text-center mb-10 md:mb-16">
            Você vive essa realidade?
          </h2>

          {/* Lista de Problemas */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-5 lg:gap-6 mb-8 w-full">
            <div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-[12px] flex items-center justify-center md:justify-start p-4 md:p-6 lg:p-[30px]">
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                Leads caros e desqualificados
              </span>
            </div>

            <div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-[12px] flex items-center justify-center md:justify-start p-4 md:p-6 lg:p-[30px]">
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                Equipe desmotivada
              </span>
            </div>

            <div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-[12px] flex items-center justify-center md:justify-start p-4 md:p-6 lg:p-[30px]">
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                Processos que travam sua imobiliária
              </span>
            </div>

            <div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-[12px] flex items-center justify-center md:justify-start p-4 md:p-6 lg:p-[30px]">
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                Concorrência disparando enquanto você fica para trás
              </span>
            </div>
          </div>

          {/* Texto de apoio */}
          <div className="text-center mb-10 px-4">
            <p
              className="
      text-white 
      text-[18px] md:text-[22px] lg:text-[26px] 
      font-bold 
      leading-snug 
      drop-shadow-sm
    "
            >
              Se você se reconhece aqui,{" "}
              <span className="text-[red]">
                está deixando dinheiro e clientes
              </span>{" "}
              na mesa.
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center px-4">
            <Button
              variant="hero"
              size="hero"
              className="
                w-full max-w-[360px]
                px-6 py-4
                text-[16px] font-bold tracking-wide
                flex flex-col items-center justify-center
                rounded-full
                text-black
                bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
                transition-all duration-300 ease-in-out
                hover:from-[#FFD85D] hover:to-[#FFF3C0]
                hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
              "
              onClick={() => setIsModalOpen(true)}
            >
              Quero sair dessa realidade
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

export default EighthSection;
