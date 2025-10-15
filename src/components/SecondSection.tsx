import { useState } from "react";
import chart1 from "@/assets/charts/18.png";
import chart2 from "@/assets/charts/vgv_acumulado_2024.svg";
import ChartsWrapper from "@/components/ChartsWrapper";

const SecondSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="bg-hero-text px-4 md:px-6 lg:px-[100px] font-geist rounded-t-[40px] lg:rounded-t-[80px] 
          -mt-8 md:-mt-10 lg:-mt-12         
          pt-16 md:pt-24 lg:pt-28          
          pb-12 md:pb-16 lg:pb-20         
          relative"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col items-center relative gap-10">
          {/* Título */}
          <h2 className="text-black text-[26px] md:text-[34px] lg:text-[40px] font-bold leading-tight text-center">
            O Salto Que Sua Imobiliária Precisa
          </h2>

          {/* Texto explicativo */}
          <div className="flex flex-col gap-3 text-center max-w-3xl">
            <p className="text-[#0E141B] text-[14px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
              Imobiliárias comuns e reais, muitas delas com menos de 10
              corretores, estão{" "}
              <span className="font-extrabold text-hero-accent">
                virando o jogo de forma brutal
              </span>
              .
            </p>

            <p className="text-[#0E141B] text-[14px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
              Estamos vendo retornos de{" "}
              <span className="font-extrabold text-hero-accent">
                +600% em apenas 6 meses
              </span>
              .
            </p>

            <p className="text-[#0E141B] text-[14px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
              Isso não é magia, é <span className="font-extrabold">método</span>
              . Com um sistema completo, testado e validado no campo de batalha,
              você vai{" "}
              <span className="font-extrabold">dominar neste workshop</span>.
            </p>
          </div>
          {/* Espaço para gráficos */}

          <ChartsWrapper />
        </div>
      </section>
    </>
  );
};

export default SecondSection;
