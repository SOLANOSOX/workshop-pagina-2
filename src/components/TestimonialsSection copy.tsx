import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const slides = [
    "/lovable-uploads/fa485f0f-b244-4e06-8d00-6cdb0a7c166a.png",
    "/lovable-uploads/1342d0dc-ce18-4efd-bcae-520ab6ce304f.png",
    "/lovable-uploads/9621122d-95fe-47eb-9e24-36ac6d9e3e30.png",
    "/lovable-uploads/e0602336-cdbb-4b6a-b4ae-3e29baae4e68.png",
    "/lovable-uploads/9903cc19-908c-4572-8d21-e6ed3a7b3b07.png",
    "/lovable-uploads/fa485f0f-b244-4e06-8d00-6cdb0a7c166a.png",
    "/lovable-uploads/1342d0dc-ce18-4efd-bcae-520ab6ce304f.png",
    "/lovable-uploads/9621122d-95fe-47eb-9e24-36ac6d9e3e30.png",
  ];

  const totalSlides = slides.length;
  const itemsToShow = 3; // quantos itens mostrar ao mesmo tempo
  const maxSlides = totalSlides - itemsToShow + 1;

  // --- Drag states ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translate, setTranslate] = useState(0);

  const nextSlide = (slideIndex: number) => {
    if (slideIndex < maxSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = x - startX;
    setTranslate(-currentSlide * (slideWidth + 16) + diff);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const x = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = x - startX;

    if (Math.abs(diff) > slideWidth / 4) {
      if (diff < 0 && currentSlide < maxSlides - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (diff > 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    } else {
      setTranslate(-currentSlide * (slideWidth + 16));
    }
  };

  // --- Measure slide width ---
  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
      setTranslate(-currentSlide * (slideRef.current.offsetWidth + 16));
    }

    const handleResize = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
        setTranslate(-currentSlide * (slideRef.current.offsetWidth + 16));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  // --- Autoplay ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev < maxSlides - 1 ? prev + 1 : 0) // volta pro começo
      );
    }, 3000); // 4 segundos

    return () => clearInterval(interval);
  }, [maxSlides]);

  return (
    <>
      <section className="w-full bg-[#FDF8ED] rounded-t-[50px] md:rounded-t-[100px] py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1060px] mx-auto px-4 md:px-6 relative">
          {/* Header Content */}
          <div className="w-full flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-[572px] text-center">
              {/* <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold leading-tight md:leading-[38.40px] font-['inter'] mb-4 md:mb-6">
                <span className="text-[#B8943F]">Resultados Reais</span>
                <span className="text-[#010D15]">
                  {" "}
                  
                  de quem aplicou nosso método
                  <br />e transformou seu negócio imobiliário.
                </span>
              </h2> */}

              <h2 className="text-[#010D15] text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight">
                Eles Já Aplicaram e Lucraram
              </h2>

              {/* <div className="flex flex-col items-center gap-4 md:gap-6 text-[#010D15] text-sm md:text-base font-medium leading-5 md:leading-6 font-['inter']">
                <p className="text-center">
                  Corretores e imobiliárias que saíram da zona de conforto e
                  implementaram
                  <br className="hidden md:block" />
                  os 3A's da Venda Imobiliária em seus negócios.
                </p>
                <p className="text-center">Os resultados falam por si só...</p>
                <p className="text-center">E você pode ser o próximo!</p>
                <p className="text-center">
                  Veja alguns dos casos de sucesso dos nossos alunos que
                  multiplicaram
                  <br className="hidden md:block" />
                  suas vendas e faturamento aplicando nosso método comprovado.
                </p>
                <p className="text-center">Como a...</p>
              </div> */}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full overflow-hidden mb-8 md:mb-12">
            <div className="flex flex-col items-center">
              <div className="w-full overflow-hidden">
                <div
                  className="flex items-start transition-transform duration-500 ease-in-out gap-4 md:gap-5"
                  style={{
                    transform: `translateX(-${
                      isDragging ? -translate : currentSlide * (slideWidth + 16)
                    }px)`,
                    width: "fit-content",
                  }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                >
                  {slides.map((imageSrc, index) => (
                    <div
                      key={index}
                      ref={index === 0 ? slideRef : null}
                      className="w-[90vw] sm:w-[280px] md:w-[340px] lg:w-[360px] flex-shrink-0 flex flex-col justify-center items-start"
                    >
                      <div className="w-full flex flex-col justify-start items-start">
                        <img
                          src={imageSrc}
                          alt={`Case de sucesso ${index + 1}`}
                          className="w-full max-h-[500px] sm:max-h-[400px] md:max-h-[600px] lg:max-h-[764px] object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-3 py-4 mt-8 md:mt-12">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => nextSlide(index)}
                  className={`w-[12px] h-[12px] rounded-full transition-colors duration-200 hover:scale-110 ${
                    currentSlide === index
                      ? "bg-black"
                      : "bg-black/70 hover:bg-black/80"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[360px] mx-auto">
            <Button
              variant="hero"
              size="hero"
              className="
      w-full max-w-[360px] 
      whitespace-normal break-words text-center 
      px-3 py-0 text-xs   /* mobile */
      sm:px-4 sm:py-3 sm:text-xs   /* tablet */
      md:px-6 md:py-3 md:text-xs  /* desktop médio */
      lg:px-8 lg:py-4 lg:text-xs   /* desktop grande */
    "
              onClick={() => setIsModalOpen(true)}
            >
              Quero os mesmos resultados
            </Button>
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

export default TestimonialsSection;
