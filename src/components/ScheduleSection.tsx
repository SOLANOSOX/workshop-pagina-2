const ScheduleSection = () => {
  return (
    <>
      <section className="bg-hero-bg w-full py-12 md:py-16 lg:py-[50px] px-4 md:px-6 lg:px-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 font-geist  mx-auto">
        {/* Top divider line */}
        <div className="w-full max-w-[1186px] h-[3px] bg-gradient-to-r from-transparent via-hero-text/20 to-transparent"></div>

        {/* Main content */}
        <div className="w-full max-w-[1296px] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-8 lg:gap-8">
          {/* Left column */}
          <div className="w-full lg:w-[431px] flex flex-col justify-between items-center lg:items-start gap-8 text-center lg:text-left">
            <div className="flex flex-col justify-start items-center lg:items-start gap-5 text-center lg:text-left">
              <div className="px-4 md:px-5 py-2 md:py-[10px] border border-[#A7BBD2] rounded-[100px] inline-flex">
                <div className="text-hero-text text-sm md:text-lg font-semibold leading-tight">
                  20 e 21 de Setembro | Online
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-center md:text-left text-hero-text text-[32px] md:text-[40px] lg:text-5xl font-semibold leading-tight lg:leading-[52.32px]">
                  Cronograma
                </h2>
              </div>
              <div className="w-full">
                <p className="text-hero-text/80 text-base md:text-lg font-normal leading-relaxed lg:leading-[27px]">
                  Os dois dias seguirão esse cronograma:
                </p>
              </div>
            </div>
            <div className="w-full max-w-[309px] mx-auto lg:mx-0">
              <p className="text-hero-text/40 text-xs md:text-sm font-normal leading-tight lg:leading-[21px] text-center lg:text-left">
                *Considere encerrar mais tarde, caso os
                <br />
                participantes peçam para nos aprofundarmos
                <br />
                em algum ponto. Porém, o conteúdo combinado
                <br />
                será entregue dentro do horário programado.
              </p>
            </div>
          </div>

          {/* Right column - Schedule cards */}
          <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {/* 9h30 - Início */}
            <div className="w-full px-6 md:px-8 lg:px-[42px] py-4 md:py-5 bg-hero-text rounded-xl lg:rounded-2xl flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              <div className="text-hero-bg text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight lg:leading-[52.50px] text-center lg:text-left">
                9h30
              </div>
              <div className="text-hero-bg text-[20px] md:text-[28px] lg:text-[32px] font-semibold leading-tight lg:leading-[40px] text-center lg:text-right">
                Início
              </div>
            </div>

            {/* 12h00 - Almoço */}
            <div className="w-full px-6 md:px-8 lg:px-[42px] py-4 md:py-5 bg-hero-text rounded-xl lg:rounded-2xl flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              <div className="text-hero-bg text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight lg:leading-[52.50px] text-center lg:text-left">
                12h00
              </div>
              <div className="text-hero-bg text-[20px] md:text-[28px] lg:text-[32px] font-semibold leading-tight lg:leading-[40px] text-center lg:text-right">
                Almoço
              </div>
            </div>

            {/* 13h30 - Retorno */}
            <div className="w-full px-6 md:px-8 lg:px-[42px] py-4 md:py-5 bg-hero-text rounded-xl lg:rounded-2xl flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              <div className="text-hero-bg text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight lg:leading-[52.50px] text-center lg:text-left">
                13h30
              </div>
              <div className="text-hero-bg text-[20px] md:text-[28px] lg:text-[32px] font-semibold leading-tight lg:leading-[40px] text-center lg:text-right">
                Retorno
              </div>
            </div>

            {/* 20h00 - Encerramento */}
            <div className="w-full px-6 md:px-8 lg:px-[42px] py-4 md:py-5 bg-hero-text rounded-xl lg:rounded-2xl flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
              <div className="text-hero-bg text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight lg:leading-[52.50px] text-center lg:text-left">
                20h00
              </div>
              <div className="text-hero-bg text-[20px] md:text-[28px] lg:text-[32px] font-semibold leading-tight lg:leading-[40px] text-center lg:text-right">
                Encerramento*
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;
