const GuaranteeSection = () => {
  return (
    <>
      <section className="relative bg-hero-primary font-geist ">
        <div className="max-w-[1392px] mx-auto px-4 md:px-6 lg:px-[450px] py-40">
          <div className="w-full max-w-[492px] mx-auto flex flex-col justify-center items-center gap-5">
            {/* Guarantee Icon */}
            <div className="w-[168px] h-[169px] flex flex-col justify-center items-center">
              <div className="relative w-[168px] h-[169px]">
                {/* Main circle */}
                <div className="absolute w-[168px] h-[168px] left-0 top-0.5 rounded-full border-[3.28px] border-white/20"></div>
                {/* Inner circle */}
                <div className="absolute w-[68.5px] h-[68.5px] left-[49.75px] top-[50px] rounded-full border-[3.28px] border-white"></div>
                {/* Check mark */}
                <div className="absolute left-[73.76px] top-[77.43px]">
                  <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L8 12L19 2" stroke="white" strokeWidth="3.28" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-[48px] font-semibold leading-[57.6px]">
                Garantia de
              </h2>
              <h2 className="text-white text-[48px] font-semibold leading-[57.6px]">
                Satisfação
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-[367px] flex flex-col justify-center items-center text-center">
              <div className="text-center text-white/80 text-lg font-normal leading-[27px]">
                Se ainda no primeiro dia do workshop, você<br />
                sentir que não é o que você procurava ou<br />
                esperava, devolvemos 100% do seu dinheiro.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuaranteeSection;