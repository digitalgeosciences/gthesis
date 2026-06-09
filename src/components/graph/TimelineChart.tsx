import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import type { ContentIndex } from "@/lib/content";

export function TimelineChart({ data }: { data: ContentIndex }) {
  const chartData = data.years.map((y) => ({
    year: y,
    Total: data.thesesByYear[y]?.length ?? 0,
    MS: data.thesesByYear[y]?.filter((t) => t.degree === "MS").length ?? 0,
    PhD: data.thesesByYear[y]?.filter((t) => t.degree === "PhD").length ?? 0,
  }));

  return (
    <div className="rounded-lg border rule bg-card p-6">
      <h2 className="font-display text-2xl mb-6">Theses per year</h2>
      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#ef4444" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="MS" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="PhD" stroke="#22c55e" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
