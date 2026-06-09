import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import type { ContentIndex } from "@/lib/content";

export function DegreeChart({ data }: { data: ContentIndex }) {
  const chartData = data.years.map((y) => ({
    year: y,
    MS: data.thesesByYear[y]?.filter((t) => t.degree === "MS").length ?? 0,
    PhD: data.thesesByYear[y]?.filter((t) => t.degree === "PhD").length ?? 0,
  }));

  return (
    <div className="rounded-lg border rule bg-card p-6">
      <h2 className="font-display text-2xl mb-6">MS vs PhD by year</h2>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="MS" fill="#3b82f6" />
          <Bar dataKey="PhD" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
