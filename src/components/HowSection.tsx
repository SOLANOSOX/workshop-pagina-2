import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const HowSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ↑ adicionamos pb-* para reservar espaço do card que vai flutuar e invadir a seção seguinte */}
      <section className="relative bg-hero-bg py-10 px-4 md:px-6 lg:px-[374px] pb-[28px] md:pb-[36px] lg:pb-[44px] font-geist overflow-visible">
        {/* Background Image - hidden on mobile */}
        <div
          className="absolute inset-0 bg-cover bg-left bg-no-repeat opacity-30 hidden md:block"
          style={{
            backgroundImage:
              "url('/lovable-uploads/8b421146-103e-47e7-9b10-66065514b90d.png')",
          }}
        ></div>

        {/* Content overlay */}
        <div className="relative z-30 max-w-[1150px] mx-auto">
          {/* Header */}
          <div className="w-full mb-8 md:mb-10">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6">
              <div className="flex-1 flex flex-col items-center lg:items-start">
                <img
                  src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png"
                  alt="Company Logo"
                  className="w-full max-w-[220px] sm:max-w-[320px] lg:max-w-[480px] h-auto object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-4">
                <h2 className="text-hero-text text-[10px] sm:text-[12px] xl:text-[12px] font-bold uppercase tracking-[6px] sm:tracking-[8px] lg:tracking-[14px]">
                  O QUE ACONTECEU?
                </h2>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="w-full flex justify-center lg:justify-end lg:pr-[60px]">
            <div className="w-full max-w-[420px] flex flex-col items-start gap-4">
              <div className="w-full text-center lg:text-left">
                <h3 className="text-hero-text text-xl sm:text-2xl lg:text-[30px] font-extrabold leading-snug mb-3">
                  Como isso foi possível?
                </h3>

                <div className="text-hero-text text-sm sm:text-base lg:text-[15px] font-normal leading-relaxed">
                  <div className="mb-4 text-left space-y-2">
                    <p>• Não foi sorte</p>
                    <p>• Não foi mercado aquecido</p>
                    <p>• Não foi alguma mudança política</p>
                    <p>• Ou bancos com baixas taxas de juros</p>
                    <p>• E muito menos localização privilegiada</p>
                  </div>

                  <p className="mb-4">
                    Foi a{" "}
                    <span className="font-bold">
                      aplicação de um método específico
                    </span>{" "}
                    que quebra completamente a forma tradicional de operar uma
                    imobiliária.
                  </p>

                  <div className="space-y-2">
                    <span className="font-bold block">
                      E você pode ter acesso a ele agora!
                    </span>
                    <span>
                      Para realmente mudar a rota da sua operação{" "}
                      <span className="font-bold">ainda esse ano!</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full max-w-[300px] mx-auto lg:mx-0 mt-4 mb-16">
                <Button
                  variant="hero"
                  size="hero"
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Liberar Acesso
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* === Card "Você está cansado de..." ===*/}
        <div className="relative z-[60] w-full flex justify-center mt-10 md:mt-12 lg:mt-14 px-4 translate-y-[40px] md:translate-y-[48px] lg:translate-y-[56px]">
          <div className="w-full max-w-[800px] bg-hero-text rounded-[25px] lg:rounded-[50px] shadow-lg p-6 md:p-8 lg:p-12 relative">
            {/* Icon */}
            <img
              src="/lovable-uploads/f9ba186f-ea08-491d-b8cc-0e8a8c9a51dd.png"
              alt="Benefits Icon"
              className="absolute -top-[40px] md:-top-[50px] lg:-top-[55px] left-[40px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] z-20"
            />

            <div className="flex flex-col items-start gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-20">
              <div className="flex flex-col gap-4 md:gap-6 text-left w-full">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight text-left">
                  <span className="text-black">Você está </span>
                  <span className="text-accent">cansado</span>
                  <span className="text-black"> de...</span>
                </h2>

                <div className="text-black text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 space-y-3 max-w-[600px]">
                  <p>
                    <span className="font-bold">❌ Mês após mês </span>
                    <span className="font-medium">
                      vendo o mesmo faturamento baixo, enquanto vê concorrentes
                      menores disparando na frente?
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">
                      ❌ Trabalhar 12+ horas por dia{" "}
                    </span>
                    <span className="font-medium">
                      mas o dinheiro não acompanha o esforço que você coloca no
                      negócio?
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">
                      ❌ Ter uma equipe desmotivada{" "}
                    </span>
                    <span className="font-medium">
                      que mal bate as metas básicas, quanto mais sonhar com
                      crescimento?
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">
                      ❌ Gastar fortunas em marketing{" "}
                    </span>
                    <span className="font-medium">
                      que não traz clientes qualificados nem vendas
                      consistentes?
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">
                      ❌ Ver seu negócio estagnado{" "}
                    </span>
                    <span className="font-medium">
                      enquanto grandes redes dominam sua região?
                    </span>
                  </p>
                </div>

                <div className="mt-4 mb-6 md:mb-8">
                  <p className="text-black text-sm md:text-base lg:text-[16px] leading-5 md:leading-6">
                    <span className="font-bold">
                      E não quer chegar ao final de 2025{" "}
                    </span>
                    <span className="font-medium">
                      com as mesmas frustrações de 2024?
                    </span>
                  </p>
                </div>
              </div>

              {/* Button inside card */}
              <div className="w-full max-w-[360px] mx-auto mt-2">
                <Button variant="hero" size="hero" className="w-full">
                  Liberar Acesso
                </Button>
              </div>
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

export default HowSection;
