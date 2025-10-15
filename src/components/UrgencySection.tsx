import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  return (
    <>
      <section className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-geist py-12 md:py-16 lg:py-20">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12 text-center">
          {/* Title */}
          <div className="w-full">
            <h2 className="text-[#010D15] text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-tight">
              A Hora É Agora
            </h2>
          </div>

          {/* Content */}
          <div className="w-full max-w-[600px] text-[#010D15] text-lg md:text-xl leading-relaxed space-y-4">
            <p className="font-bold">As vagas são limitadíssimas.</p>
            <p className="font-bold">Não haverá reprise.</p>
            <p className="font-bold">
              Enquanto você pensa, sua concorrência já garante o futuro dela.
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[360px] mx-auto ">
            <Button
              variant="hero"
              size="hero"
              className="
      w-full max-w-[360px] 
      whitespace-normal break-words text-center 
      px-3 py-0 text-xs
      sm:px-4 sm:py-3 sm:text-xs
      md:px-6 md:py-3 md:text-xs
      lg:px-8 lg:py-4 lg:text-xs
      flex flex-col items-center justify-center
      font-bold
      rounded-full
      text-black
      bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
      shadow-none ring-0 focus:ring-0 focus:outline-none
      transition-all duration-300 ease-in-out
      hover:from-[#FFD85D] hover:to-[#FFF3C0]
      hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
    "
              onClick={() => {
                const priceSection = document.getElementById('price-section');
                priceSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="block font-bold text-[18px] leading-none">
                GARANTIR INGRESSO | LOTE 0
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrgencySection;
