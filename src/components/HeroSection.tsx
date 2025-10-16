import { Button } from "@/components/ui/button";
import NewLogo2 from "@/assets/log.svg";
import hero from "@/assets/2bew.png";
import hero2 from "@/assets/2new2.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-hero-bg py-8 md:py-12 lg:py-[60px] px-4 md:px-6 lg:px-[418px] font-geist">
        {/* md até xl-1 (768px até 1279px) */}
        <div
          className="absolute inset-0 hidden md:block xl:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        ></div>

        {/* xl até 2xl-1 (1280px até 1535px) */}
        <div
          className="absolute inset-0 hidden md:block 2xl:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        ></div>

        {/* 2xl pra cima (>=1536px) */}
        <div
          className="absolute inset-0 hidden 2xl:block bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        <div className="relative z-10 max-w-[1060px] mx-auto min-h-[500px] md:min-h-[600px] lg:h-[718px] flex flex-col items-start justify-center gap-6 md:gap-8">
          {/* Logo */}
          <div className="w-full max-w-[546px] flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col items-center justify-center overflow-hidden">
              <img
                src={NewLogo2}
                alt="Legado Imobiliário Logo"
                className="w-full max-w-[300px] md:max-w-[800px] lg:max-w-[1000px] h-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
              {/* Main Title */}
              <div className="flex flex-col">
                <h1
                  className="
    text-[25px] md:text-[36px] lg:text-[48px] 
    leading-[34px] md:leading-[42px] lg:leading-[52px] 
    text-hero-text
  "
                >
                  2 dias intensivos. Vendas Recorrentes com Inteligência Artificial <br />
                  <span className="text-hero-accent">+600% de Faturamento em 6 Meses</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <h2
              className="
    text-hero-text
    text-[14px] md:text-[16px] lg:text-[18px]
    m-0 p-0 leading-none
    w-full text-center md:text-left
  "
            >
              DE R$ 497 POR R$ 47
            </h2>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center md:justify-start mb-6 -mt-1">
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
                const priceSection = document.getElementById("price-section");
                priceSection?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="block font-bold text-[18px] leading-none">GARANTIR INGRESSO | LOTE 0</span>
            </Button>
          </div>

          {/* Progress Bar - Lote Vendido */}
          <div className="w-full max-w-[252px] mx-auto flex flex-col gap-2">
            <div className="relative w-full h-3 bg-gray-400 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] rounded-full transition-all duration-500"
                style={{ width: "97%" }}
              />
            </div>
            <p className="text-hero-text text-sm md:text-base font-semibold">97% dos ingressos totais vendidos</p>
          </div>

          <div className="flex flex-row flex-wrap gap-6 justify-center"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
