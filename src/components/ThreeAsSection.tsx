
import fundamentosImage from "@/assets/fundamentos.png";
import implementacaoImage from "@/assets/implementacao.png"

const ThreeAsSection = () => {
  return (
    <section className="bg-hero-bg min-h-screen w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-20 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-[90px] font-geist mx-auto">
      {/* Title */}
      <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-5 text-center">
        <h2 className="text-hero-text text-[28px] md:text-[40px] lg:text-5xl font-semibold leading-tight md:leading-[50px] lg:leading-[57.6px]">
          Seu Cronograma para Dominar em 2 Dias Intensivos
        </h2>
      </div>

      {/* Day 1 Card */}
      <div className="w-full max-w-[1230px] p-6 md:p-10 lg:p-14 bg-hero-text rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row gap-6 lg:gap-[54px]">
        {/* Imagem */}
        <div className="w-full lg:w-[318px] h-[300px] lg:h-[469px] overflow-hidden rounded-[14px] flex-shrink-0">
          <img
            src={fundamentosImage}
            alt="Fundamentos da Venda Imobiliária"
            className="w-full h-full object-contain rounded-[14px]"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-[42px]">
          <h3 className="text-hero-bg text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-[50px] text-center lg:text-left">
            DIA 1: Acendendo o Motor da Máquina
          </h3>

          <div className="w-full flex flex-col gap-6">
            {/* Linha 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Captação 5x mais leads com IA
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Como gerar 5x mais leads qualificados sem queimar verba,
                  usando a IA como seu maior aliado. Menos custo, mais potencial
                  cliente.
                </p>
              </div>
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Funil de Conversão Sem Perdas
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  O roteiro exato que transforma 40% dos leads em clientes
                  qualificados. Da percepção à ação, cada etapa otimizada para o
                  fechamento.
                </p>
              </div>
            </div>

            {/* Linha 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Gestão de Equipe Imparável
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Dê um fim na desmotivação! Técnicas para sua equipe vender 3x
                  mais, sem pressão, com inteligência.
                </p>
              </div>
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Automação que Vende 24h
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Configure sistemas que trabalham por você, qualificando e
                  nutrindo clientes enquanto você foca no fechamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 2 Card */}
      <div className="w-full max-w-[1230px] p-6 md:p-10 lg:p-14 bg-hero-text rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row gap-6 lg:gap-[54px]">
        {/* Imagem */}
        <div className="w-full lg:w-[318px] h-[300px] lg:h-[469px] overflow-hidden rounded-[14px] flex-shrink-0">
          <img
            src={implementacaoImage}
            alt="Implementação da Venda Imobiliária"
            className="w-full h-full object-contain rounded-[14px]"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-[42px]">
          <h3 className="text-hero-bg text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-[50px] text-center lg:text-left">
            DIA 2: Acelerando Crescimento e Blindando Resultados
          </h3>

          <div className="w-full flex flex-col gap-6">
            {/* Linha 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Expansão Inteligente
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Domine sua região, identifique os melhores nichos e deixe a
                  concorrência para trás.
                </p>
              </div>
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Métricas que Importam
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Saiba exatamente onde seu dinheiro está indo e como otimizar
                  cada centavo para o máximo retorno.
                </p>
              </div>
            </div>

            {/* Linha 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Plano de Ação 7 Dias
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Saia do workshop com um plano de implementação claro e
                  validado para ver resultados na primeira semana.
                </p>
              </div>
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-[rgba(167,187,210,0.70)]">
                <h4 className="text-hero-bg font-bold text-lg md:text-xl mb-2 text-center md:text-left">
                  Mesa Redonda
                </h4>
                <p className="text-hero-bg text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
                  Possibilidade de selecionarmos seu projeto para 1ª análise ao
                  vivo de casos reais. Aprenda com a prática e otimize sua
                  visão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeAsSection;
