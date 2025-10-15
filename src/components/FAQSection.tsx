import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section
        className="relative bg-black font-geist py-12 md:py-16 lg:py-20 overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1897px] mx-auto px-4 md:px-6 lg:px-[418px]">
          <div className="max-w-[1060px] mx-auto flex flex-col justify-start items-center gap-8 md:gap-12 lg:gap-[60px]">
            {/* Title Section */}
            <div className="w-full max-w-[760px] flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full text-center text-[20px] md:text-[28px] lg:text-[32px] font-extrabold leading-[24px] md:leading-[32px] lg:leading-[38.4px]">
                  <span className="text-white">Perguntas Frequentes</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full max-w-[1060px] relative z-10">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-5"
              >
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Vai ficar gravado?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Não. Mas você pode comprar a gravação na hora que finalizar
                    a compra do seu ingresso.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Serve para iniciantes?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Sim, se você está começando a usar IA, já começa do jeito
                    certo e sairá na frente de 99% dos seus concorrentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Serve para quem já tem experiência?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Sim, se você já tem experiência, você vai adaptar o que já
                    faz e colher resultados ainda mais rápido.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Existem pré-requisitos técnicos?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Apenas acesso à internet. As ferramentas de IA recomendadas
                    são em sua maioria intuitivas e ensinaremos o passo a passo
                    básico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Terei suporte para minhas dúvidas?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Sim, você terá acesso ao chat da sala em todo o tempo do
                    workshop, por ser ao vivo vai poder tirar dúvidas e
                    interagir com outros participantes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        Vai falar quais ferramentas de IA utiliza?
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Sim, vamos abrir tudo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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

export default FAQSection;
