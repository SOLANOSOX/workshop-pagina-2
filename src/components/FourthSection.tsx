import background from "@/assets/dobraquatro.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DiagnosticModal from "@/components/DiagnosticModal";

const FourthSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative font-geist text-white bg-[#0E141B]">
      {/* Background só do md pra cima */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Overlay sempre presente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/90"></div>

      {/* Conteúdo */}
      <div
        className="relative z-10 max-w-[1500px] mx-auto 
                   min-h-[850px] sm:min-h-[950px] md:min-h-[1050px] lg:min-h-[1150px] xl:min-h-[1250px] 
                   flex items-center justify-end px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28"
      >
        <div
          className="
    w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 
    flex flex-col gap-14 md:gap-8   /* ↑ mais espaço no mobile */
    text-center md:text-center
    lg:pl-12 xl:pl-16 2xl:pl-24
  "
        >
          {/* Título */}
          <h1
            className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px]
                       leading-[32px] sm:leading-[38px] md:leading-[46px] lg:leading-[54px] xl:leading-[62px]
                       font-bold"
          >
            Desmistifique a IA:{" "}
            <span
              className="inline-block align-baseline
                         text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px]
                         leading-[1.15] font-semibold"
            >
              Simplicidade Genuína, Resultados Brutos.
            </span>{" "}
          </h1>

          {/* Texto */}
          <div
            className="flex flex-col gap-7 md:gap-6   /* ↑ respiro extra no mobile */
                       text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] 
                       leading-relaxed md:leading-loose"
          >
            <p className="italic text-gray-200">
              A hesitação é natural: "É para mim? Minha equipe vai dar conta? É
              complexo demais?" Sua percepção já intui. Mas a verdade é brutal:
              o poder da IA e das vendas recorrentes reside na simplicidade, não
              na dificuldade. Este workshop é a prova viva disso.
            </p>

            {/* Lista */}
            <ul
              className="list-disc 
             pl-10 sm:pl-12 md:pl-10 
             space-y-7 md:space-y-4   /* ↑ espaço entre itens no mobile */
             text-white 
             text-center mx-auto md:mx-0"
            >
              <li>
                <span className="font-bold text-hero-accent/90">
                  Pé no Chão, Sem Mimimi:
                </span>{" "}
                Estratégias diretas, focadas no que entrega resultado, sem
                teoria vazia.
              </li>
              <li>
                <span className="font-bold text-hero-accent/90">
                  Aplicabilidade Brutal:
                </span>{" "}
                Métodos que funcionam para qualquer imobiliária, de qualquer
                porte, em qualquer nicho.
              </li>
              <li>
                <span className="font-bold text-hero-accent/90">
                  Foco no Fechamento:
                </span>{" "}
                Use a IA para eliminar o trabalho operacional e liberar seu
                tempo para vender mais.
              </li>
            </ul>

            <p>
              Chega de adiar. Saia daqui com o método claro para impulsionar sua
              imobiliária e garantir vendas consistentes. BORA?
            </p>
          </div>

          <div className="w-full flex justify-center mt-4 mb-6 md:mt-2 md:mb-4 px-4">
            <Button
              variant="hero"
              size="hero"
              className="
                w-full max-w-[300px] md:max-w-[340px] lg:max-w-[360px]
                px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3
                text-[14px] md:text-[14px] lg:text-[15px] font-bold tracking-wide
                flex items-center justify-center
                bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
                shadow-none ring-0 focus:ring-0 focus:outline-none
                transition-all duration-300 ease-in-out
                hover:from-[#FFD85D] hover:to-[#FFF3C0]
                hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
              "
              onClick={() => setIsModalOpen(true)}
            >
              Quero VENDER MAIS com IA
            </Button>
          </div>
        </div>
      </div>

      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FourthSection;
