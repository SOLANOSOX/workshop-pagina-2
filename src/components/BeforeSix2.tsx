import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const BeforeSix2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section
        className="
          bg-hero-bg px-4 md:px-6 lg:px-[418px] font-geist
          pt-10 md:pt-12
          pb-16 md:pb-24 lg:pb-32
        "
        // respeita a safe-area do iPhone
        style={{ paddingBottom: "max(6rem, env(safe-area-inset-bottom))" }}
      >
        {/* Special Offer */}
        <div className="text-center mb-2 mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            BÔNUS EXCLUSIVOS INCLUÍDOS:
          </h3>
        </div>

        {/* Bonus Section */}
        <div className="bg-hero-bg rounded-[25px] md:rounded-[50px] shadow-sm">
          <div className="space-y-4 text-hero-text">
            <div className="bg-hero-bg rounded-[25px] md:rounded-[40px] p-6 md:p-10 shadow-md w-full max-w-[950px] mx-auto">
              <ul className="space-y-6">
                <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                  <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                    BÔNUS #1
                  </span>
                  <p className="text-hero-text text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">
                      Scripts Pré-SOX - Pré-atendimento de Alta Conversão:
                    </span>{" "}
                    Roteiros testados para qualificar leads e prepará-los para o
                    fechamento, otimizando o tempo da sua equipe.
                  </p>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                  <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                    BÔNUS #2
                  </span>
                  <p className="text-hero-text text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">
                      Modelo Efetivo de Contrato de Parceria:
                    </span>{" "}
                    Base Modelo Documento jurídico para firmar parcerias
                    comerciais de forma segura e estratégica, ampliando sua rede
                    de negócios.
                  </p>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                  <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                    BÔNUS #3
                  </span>
                  <p className="text-hero-text text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">
                      Direcionamento de Criativos para Tráfego:
                    </span>{" "}
                    Diretrizes e exemplos de anúncios que realmente convertem,
                    para você copiar, colar e adaptar nas suas campanhas de
                    marketing.
                  </p>
                </li>
              </ul>
            </div>

            <div className="border-t border-hero-text/20 pt-6 mt-8 w-full text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-hero-text mb-4">
                SEU INVESTIMENTO HOJE POR TUDO ISSO:
              </h3>

              <p className="text-2xl md:text-3xl mb-6 md:mb-8">
                5x de <span className="text-hero-accent">R$ 21,30</span> ou{" "}
                <span className="text-hero-accent">R$ 97 à vista</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA – agora com respiro acima e abaixo */}
        <div className="w-full flex justify-center mt-8 md:mt-10 lg:mt-12 mb-16 md:mb-24 lg:mb-28">
          <Button
            variant="hero"
            size="hero"
            className="
              w-full max-w-[380px]
              px-4 sm:px-5 md:px-6
              py-3 md:py-4
              text-[14px] sm:text-[15px] md:text-[16px] font-bold tracking-tight
              flex items-center justify-center
              rounded-full
              text-black
              bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
              transition-all duration-300 ease-in-out
              hover:from-[#FFD85D] hover:to-[#FFF3C0]
              hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
            "
            onClick={() => setIsModalOpen(true)}
          >
            <span
              className="block text-center whitespace-normal break-words leading-tight font-bold
                         text-[clamp(13px,3.6vw,18px)]"
              style={{ textWrap: "balance" }}
            >
              GARANTIR INGRESSO | LOTE 2 por apenas R$ 97
            </span>
          </Button>
        </div>

        <DiagnosticModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </>
  );
};
export default BeforeSix2;
