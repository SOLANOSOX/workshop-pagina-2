import { Button } from "@/components/ui/button";
import LogoWorkshop from "@/assets/logo-workshop.webp";
import heroDesktop from "@/assets/hero-desktop.webp";
import heroMobile from "@/assets/hero-mobile.webp";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-hero-bg h-[100vh] py-8 md:py-12 lg:py-[60px] px-6 md:px-6 lg:px-8 font-geist overflow-hidden">
        {/* Mobile background */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroMobile})`,
            backgroundAttachment: 'scroll'
          }}
        ></div>

        {/* Mobile fallback image */}
        <img 
          src={heroMobile}
          alt="Hero background mobile"
          className="absolute inset-0 block md:hidden w-full h-full object-cover object-center"
          style={{ zIndex: 1 }}
        />

        {/* Tablet e Desktop background */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-right bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroDesktop})`,
            backgroundAttachment: 'scroll'
          }}
        ></div>

        {/* Overlay escuro à esquerda para destacar o texto e manter Adel visível à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent md:from-black/80 md:via-black/30 md:to-transparent" style={{ zIndex: 2 }}></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-start pt-2 md:pt-12" style={{ zIndex: 10 }}>
          <div className="w-[540px] max-w-[540px] flex flex-col items-start justify-start gap-3 md:gap-4">
          {/* Logo */}
          <div className="w-full max-w-[546px] flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col items-start justify-center overflow-hidden">
              <img
                src={LogoWorkshop}
                alt="Legado Imobiliário Logo"
                className="w-full min-w-[180px] max-w-[280px] h-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Badge */}
            <div className="px-3 md:px-4 py-1 md:py-2 border border-[#A7BBD2] rounded-[100px] flex w-fit">
              <div className="text-hero-text text-xs md:text-sm font-semibold leading-tight">
                25 e 26 de Outubro | Ao Vivo | Online
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-2 md:gap-3 text-left">
              {/* Main Title */}
              <div className="flex flex-col">
                <h1
                  className="
    text-[22px] md:text-[36px] lg:text-[48px] 
    leading-[30px] md:leading-[42px] lg:leading-[52px] 
    text-hero-text
  "
                >
                  2 dias intensivos. Vendas Recorrentes com Inteligência Artificial <br />
                  <span className="text-hero-accent">+600% de Faturamento em 6 Meses</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-start">
            <h2
              className="
    text-hero-text
    text-[14px] md:text-[16px] lg:text-[18px]
    m-0 p-0 leading-none
    text-left
  "
            >
              DE R$ 697 POR R$ 97
            </h2>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-start mb-2 -mt-1">
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
              <span className="block font-bold text-[18px] leading-none">GARANTIR INGRESSO | LOTE 2</span>
            </Button>
          </div>

          {/* Progress Bar - Lote Vendido */}
          <div className="w-full flex justify-start">
            <div className="w-full max-w-[252px] flex flex-col gap-2">
              <div className="relative w-full h-2 bg-gray-400 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] rounded-full transition-all duration-500"
                  style={{ width: "97%" }}
                />
              </div>
              <p className="text-hero-text text-sm md:text-base font-semibold whitespace-nowrap">97% dos ingressos totais vendidos</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
