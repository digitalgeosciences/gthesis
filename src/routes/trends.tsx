import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useContentData } from "@/lib/use-content-data";
import { PageLoader } from "@/components/ui/PageLoader";
import { buildConceptDebuts } from "@/lib/content";
import { ConceptTrendsChart } from "@/components/trends/ConceptTrendsChart";

export const Route = createFileRoute("/trends")({
  head: () => ({
    meta: [
      { title: "Trends — GeoThesis" },
      { name: "description", content: "See when each geoscience concept was first mentioned and how widely it spread across the KFUPM thesis archive." },
    ],
  }),
  component: TrendsPage,
});

function TrendsPage() {
  const data = useContentData();
  const debuts = useMemo(() => (data ? buildConceptDebuts(data) : []), [data]);

  if (!data) return <PageLoader />;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div>
        <h1 className="font-display text-4xl">Trends</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          When each concept was first mentioned (horizontal) versus how many theses engage with it (vertical). Click any point to open the concept, or use the filters icon to refine the view.
        </p>
      </div>

      <div className="mt-6">
        {debuts.length > 0 ? (
          <ConceptTrendsChart debuts={debuts} />
        ) : (
          <div className="rounded-lg border rule bg-card p-12 text-center text-muted-foreground">
            No concept data available.
          </div>
        )}
      </div>
    </div>
  );
}
