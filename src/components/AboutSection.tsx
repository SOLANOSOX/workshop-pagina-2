import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import background from "@/assets/background.jpg";

const AboutSection = () => {
  return (
    <>
      <section
        className="relative px-4 md:px-6 lg:px-[418px] font-geist min-h-[400px] md:min-h-[878px] bg-[#FDF8ED] md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Hide background on mobile with overlay */}
        <div className="absolute inset-0 bg-[#FDF8ED] md:hidden"></div>
        <div className="max-w-[1060px] mx-auto pt-8 md:pt-[83px] pb-8 md:pb-[96px] flex justify-center md:justify-end relative z-10">
          <div className="w-full max-w-[429px] pt-[7px]">
            <div className="flex flex-col gap-5">
              {/* Name Title */}
              <div className="pb-[0.58px]">
                <h2 className="text-[#010D15] text-[32px] font-extrabold leading-[38.4px] text-center">
                  Adel Gabrielle
                </h2>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[27px]">
                <div className="text-[#010D15] text-lg font-medium leading-[27px]">
                  É referência nacional em crescimento de imobiliárias, com:
                </div>

                <div className="text-[#010D15] text-lg font-medium leading-[27px]">
                  ✅ 15+ anos de experiência no mercado imobiliário
                  <br />
                  ✅ 200+ imobiliárias transformadas em todo o Brasil
                  <br />
                  ✅ R$ 50+ milhões em vendas geradas pelos seus métodos
                  <br />
                  ✅ Palestrante nos principais eventos do setor
                  <br />✅ Consultor de grandes redes imobiliárias
                </div>

                <div className="text-[#010D15] text-lg font-medium leading-[27px]">
                  "Minha missão é provar que qualquer imobiliária pode
                  multiplicar seus resultados, independente do tamanho ou
                  localização."
                </div>

                <div className="text-[#010D15] text-lg font-bold leading-[27px]">
                  Sua fama vai além da internet, já participando de
                  <br />
                  programas de televisão e atuando nos bastidores
                  <br />
                  como terapeuta de grandes nomes do cinema,
                  <br />
                  música e milionários em momentos de
                  <br />
                  dificuldade, como:
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
