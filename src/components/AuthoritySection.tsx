import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import selo from "@/assets/selo.png";

const AuthoritySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className=" bg-[#010D15] text-[#fff] px-4 md:px-6 lg:px-[418px] font-geist py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto mb-6 md:mb-8 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[318px] h-auto">
          <img
            src={selo}
            alt="Selo Garantia"
            className="block w-full h-auto object-contain rounded-[14px]"
          />
        </div>

        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          {/* Title */}
          <div className="w-full text-center">
            <h2 className="text-[#fff] text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight">
              Sua Satisfação Garantida
            </h2>
          </div>
          {/* Content */}
          <div className="w-full max-w-[800px] text-[#fff] text-lg md:text-xl leading-relaxed text-center">
            <p>
              Confiamos plenamente na qualidade e no valor transformador do
              nosso workshop. Por isso, oferecemos uma{" "}
              <strong>Garantia Incondicional</strong>. Se você assistir ao 1º
              dia completo e por qualquer motivo, não se sentir satisfeito com o
              conteúdo, basta entrar em contato conosco e devolveremos 100% do
              seu investimento, sem perguntas. Seu risco é zero, o nosso é te
              entregar resultados.
            </p>
          </div>
          <div
            className="
    flex flex-col items-center gap-2 text-center
    sm:flex-row sm:items-center sm:gap-3 sm:text-left
  "
            data-border="true"
          >
            {/* Texto 2 */}
            <p className="uppercase font-geist text-[11px] sm:text-[12px] font-medium tracking-[0.02em] leading-[130%] text-[#fff]">
              Pagamento 100% seguro
            </p>

            {/* Separador */}
            <div className="hidden sm:block w-px h-3 bg-[#fff]/40"></div>

            {/* Texto 3 */}
            <p className="uppercase font-geist text-[11px] sm:text-[12px] font-medium tracking-[0.02em] leading-[130%] text-[#fff]">
              Garanta o futuro da sua imobiliária!
            </p>
          </div>
          <div className="w-full max-w-[800px] text-[#fff] text-lg md:text-xl leading-relaxed text-center">
            {" "}
            © 2025 Workshop ImobiliarIA Lucrativa | Todos os direitos reservados
            a SOX Soluções e Adel Gabrielle
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

export default AuthoritySection;
