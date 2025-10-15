// BeforeSixSection.tsx
import React from "react";

type ScheduleItem = { time: string; label: string };

const DEFAULT_ITEMS: ScheduleItem[] = [
  { time: "9h30",  label: "Início" },
  { time: "12h00", label: "Almoço" },
  { time: "13h30", label: "Retorno" },
  { time: "18h30", label: "Encerramento*" },
];

export default function BeforeSixSection({
  date = "25 e 26 de Outubro | Online",
  items = DEFAULT_ITEMS,
  note = "*Considere encerrar mais tarde, caso os participantes peçam para nos aprofundarmos em algum ponto. Porém, o conteúdo combinado será entregue dentro do horário programado."
}: {
  date?: string;
  items?: ScheduleItem[];
  note?: string;
}) {
  return (
    <section className="bg-hero-bg px-4 md:px-6 lg:px-[418px] font-geist">
      <div className="max-w-[1060px] mx-auto py-10 md:py-14">
        {/* Badge de data */}
        <div className="w-full flex justify-center">
          <span
            className="
              inline-flex items-center justify-center
              rounded-full px-4 py-1.5
              text-[12px] md:text-sm font-semibold
              bg-hero-accent/10 text-hero-text
              ring-1 ring-hero-accent/30
            "
          >
            {date}
          </span>
        </div>

        {/* Título + subtítulo */}
        <div className="text-center mt-5 md:mt-6">
          <h2 className="text-hero-text text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-tight">
            Cronograma
          </h2>
          <p className="mt-2 text-hero-text/80 text-sm md:text-base leading-relaxed">
            Os dois dias seguirão esse cronograma:
          </p>
        </div>

        {/* Lista de horários */}
        <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
          {items.map(({ time, label }, i) => (
            <li
              key={`${time}-${i}`}
              className="
                rounded-2xl md:rounded-3xl
                bg-white/5 backdrop-blur-sm
                ring-1 ring-white/10
                px-4 py-4 md:px-8 md:py-6
                flex items-center justify-between
              "
            >
              <span className="text-hero-text font-bold text-[20px] md:text-[24px]">
                {time}
              </span>
              <span className="text-hero-text font-bold text-[16px] md:text-[20px]">
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Nota de rodapé */}
        <p className="mt-6 md:mt-8 text-center text-hero-text/60 text-xs md:text-sm leading-relaxed px-2">
          {note}
        </p>
      </div>
    </section>
  );
}
