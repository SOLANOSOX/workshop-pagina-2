import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import andreza from "@/assets/carrossel/andreza3.png";
import bruno from "@/assets/carrossel/bruno3.png";
import fernanda from "@/assets/carrossel/fernanda3.png";
import lincon from "@/assets/carrossel/lincon3.png";
import michel from "@/assets/carrossel/michel3.png";

const SeventhSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const slides = [
    andreza,
    bruno,
    fernanda,
    lincon,
    michel,
    andreza, // se quiser repetir pra dar mais "loop"
    bruno,
    fernanda,
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
          {/* Header Content */}
          <div className="w-full flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-[720px] text-center px-4">
              <h2
                className="
        text-[#010D15] 
        text-[26px] md:text-[34px] lg:text-[42px] 
        font-bold 
        leading-tight
        mb-4
      "
              >
                Eles também <span className="text-hero-accent">Aplicaram</span>{" "}
                e <span className="text-hero-accent">Lucraram</span>
              </h2>

              <h3
                className="
        text-[#2E2E2E] 
        text-[16px] md:text-[18px] lg:text-[20px] 
        font-medium 
        leading-relaxed
        max-w-[600px] mx-auto
      "
              >
                Histórias de Quem Agiu
              </h3>
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
        px-6 py-4
        text-[16px] font-bold tracking-wide
        flex flex-col items-center justify-center
        rounded-full
        text-black
        bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
        transition-all duration-300 ease-in-out
        hover:from-[#FFD85D] hover:to-[#FFF3C0]
        hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
      "
              onClick={() => setIsModalOpen(true)}
            >
              <span className="block font-bold text-[18px] leading-none">
                EU QUERO ESSES RESULTADOS
              </span>
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

export default SeventhSection;
