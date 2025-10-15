import { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  LabelList,
} from "recharts";

// === Dados do VGV acumulado ===
const dataAcumulado = [
  { mes: "jan", 2024: 1625526.41, 2025: 3393500.0 },
  { mes: "fev", 2024: 3500526.41, 2025: 10863500.0 },
  { mes: "mar", 2024: 5460526.41, 2025: 11913532.18 },
  { mes: "abr", 2024: 5460526.41, 2025: 15015403.36 },
  { mes: "mai", 2024: 6060526.41, 2025: 18565403.36 },
  { mes: "jun", 2024: 6763478.52, 2025: 21434833.36 },
  { mes: "jul", 2024: 7564526.13, 2025: 23574833.36 },
  { mes: "ago", 2024: 8246526.41, 2025: 28859533.36 },
  { mes: "set", 2024: 8968526.22, 2025: 33222580.55 },
  { mes: "out", 2024: 9568345.56, },
{ mes: "nov", 2024: 10168875.28  },
{ mes: "dez", 2024: 10768973.18 },
];

// === Dados do VGV mensal ===
const dataMensal = [
  { mes: "jan", 2024: 521786.13, 2025: 1074000.00 },
  { mes: "fev", 2024: 628000.00, 2025: 1495000.00 },
  { mes: "mar", 2024: 1015000.00, 2025: 2275000.00 },
  { mes: "abr", 2024: 1680900.00, 2025: 3211000.00 },
  { mes: "mai", 2024: 1915000.00, 2025: 4590000.00 },
  { mes: "jun", 2024: 2800000.00, 2025: 6200000.00 },
];

// === formatador abreviado ===

// formatador customizado para "mil" e "MI"
const formatMilhares = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} M`; // milhões
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)} mil`; // milhares
  }
  return value.toString(); // abaixo de 1000 mostra normal
};

const formatCompact = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

// === Componente base reutilizável ===
function ChartBase({ data, titulo }: { data: any[]; titulo: string }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        w-full 
        h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] 
        bg-[#0E141B] rounded-xl shadow-md p-2 sm:p-4
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 40,
            right: 50, // espaço extra pros labels
            left: 50,
            bottom: isMobile ? 10 : 30,
          }}
        >
          {/* Título */}
          <text
            x="50%"
            y={20}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={isMobile ? 12 : 16}
            fontWeight="bold"
          >
            {titulo}
          </text>

          {/* Gradientes */}
          <defs>
            <linearGradient id="gradient2025" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF0C" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0E141B" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradient2024" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F6DE96" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#0E141B" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />

          {/* Eixo X */}
          <XAxis
            dataKey="mes"
            stroke="#aaa"
            tickMargin={isMobile ? 10 : 12}
            interval={0}
            minTickGap={isMobile ? 5 : 15}
            tick={{
              fontSize: isMobile ? 10 : 13,
              textAnchor: isMobile ? "end" : "middle",
            }}
          />

          <YAxis hide />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: number) => formatMilhares(value)}
            labelStyle={{ color: "#fff" }}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "6px",
            }}
          />

          {/* Áreas */}
          <Area
            type="monotone"
            dataKey="2025"
            stroke="none"
            fill="url(#gradient2025)"
            isAnimationActive={false}
            activeDot={false}
            tooltipType="none"
          />
          <Area
            type="monotone"
            dataKey="2024"
            stroke="none"
            fill="url(#gradient2024)"
            isAnimationActive={false}
            activeDot={false}
            tooltipType="none"
          />

          {/* Linhas */}
          <Line
            type="monotone"
            dataKey="2025"
            stroke="#FBBF0C"
            strokeWidth={3}
            dot={{ r: 4, fill: "#FBBF0C" }}
          >
            <LabelList
              dataKey="2025"
              formatter={formatMilhares}
              position="top"
              style={{
                fill: "#FBBF0C",
                fontSize: isMobile ? 8 : 12,
                fontWeight: "bold",
              }}
            />
          </Line>

          <Line
            type="monotone"
            dataKey="2024"
            stroke="#F6DE96"
            strokeWidth={2}
            dot={{ r: 3, fill: "#F6DE96" }}
          >
            <LabelList
              dataKey="2024"
              formatter={formatMilhares}
              position="top"
              style={{
                fill: "#F6DE96",
                fontSize: isMobile ? 8 : 12,
              }}
            />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

// === Export com dois gráficos ===
export default function ChartsWrapper() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="w-full md:w-1/2">
        <ChartBase data={dataAcumulado} titulo="VGV ACUMULADO [2024-2025]" />
      </div>
      <div className="w-full md:w-1/2">
        <ChartBase data={dataMensal} titulo="VGV ACUMULADO [2024-2025]" />
      </div>
    </div>
  );
}
