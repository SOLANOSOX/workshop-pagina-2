const StorySection = () => {
  return (
    <>
      <section className="bg-hero-bg px-4 md:px-6 lg:px-[418px] font-geist mb-0">
        <div className="max-w-[1060px] mx-auto min-h-[400px] md:min-h-[750px] flex flex-col items-center relative py-6">
          {/* Header with logo and title - proper spacing to avoid overlap */}
          <div className="w-full flex flex-col items-center mb-6 relative z-10">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
              <div className="flex-1 flex flex-col items-center lg:items-start">
                <img
                  src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png"
                  alt="Company Logo"
                  className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-6">
                <div className="w-full text-center lg:text-left">
                  <h2 className="text-hero-text text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-bold uppercase leading-relaxed tracking-[6px] sm:tracking-[10px] lg:tracking-[20px]">
                    BIG IDEA + PROMESSA
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Main content card - responsive positioning */}
          <div className="relative md:absolute md:top-[100px] md:bottom-4 bg-hero-text rounded-[25px] md:rounded-[50px] shadow-sm p-6 md:p-12 lg:p-16 flex flex-col justify-center mt-8 md:mt-0 w-full max-w-[800px] mx-auto">
            {/* Title */}
            <div className="w-full mb-6 md:mb-8">
              <h3 className="text-hero-bg text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold leading-tight md:leading-[40px] text-center">
                O Salto Que Sua Imobiliária Precisa
              </h3>
            </div>

            {/* Content */}
            <div className="w-full">
              <div className="text-center space-y-4">
                <p className="text-hero-bg text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                  Imobiliárias comuns, muitas com menos de 10 corretores, já estão crescendo{" "}
                  <span className="font-bold">+600% em apenas 6 meses</span> com este sistema validado.
                </p>
                <p className="text-hero-bg text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-relaxed">
                  Não é sorte. Não é mágica. É método.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;
