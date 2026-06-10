# GeoThesis Explorer

> A knowledge-graph archive of graduate research in Geosciences at King Fahd University of Petroleum and Minerals (KFUPM).

---

## Why It Exists

Graduate theses are among the most detailed, rigorously peer-reviewed bodies of knowledge a university produces — yet they are among the least discoverable. A researcher studying carbonate diagenesis may never encounter a 2009 thesis that solved an analogous problem in a neighboring formation. A student mapping reservoir heterogeneity may unknowingly duplicate three earlier studies.

GeoThesis was built to close that gap.

---

## How It Drives Innovation

**Discovery through connection.** Every thesis is tagged with the concepts, formations, methods, and tools it engages with. When a concept like *spectral gamma-ray logging* is searched, GeoThesis surfaces every study that touched it — across years, degrees, and supervisors — revealing a lineage of knowledge that keyword search alone cannot reconstruct.

**The research graph.** A force-directed network maps theses and concepts as nodes connected by shared intellectual territory. Clusters reveal research neighborhoods; isolated nodes reveal frontiers. A researcher can literally see where the field is dense and where it is unexplored.

**Trend analysis.** The timeline and statistical charts show when topics peaked, how degree output shifted, and which departments led different eras of inquiry. This is infrastructure for evidence-based research planning.

**Knowledge inheritance.** APA-formatted citations, supervisor networks, and committee records make it possible to trace intellectual lineages — who trained whom, which ideas passed between generations, and where foundational methods were first applied regionally.

The result is a research institution that can think about itself — and plan its next contributions from a complete picture of what has already been done.

---

## Features

### Archive
- **253+ thesis summaries** with full metadata: author, year, degree, supervisor, committee, concepts
- **APA citation generation** with one-click copy
- **Source links** to the KFUPM eprints repository
- **Title case normalisation** — raw ALL-CAPS thesis titles are rendered in readable form

### Search & Filter
- Full-text search across titles and authors
- Filter by year range, degree (MS / PhD), and keyword
- Supervisor and committee member links — click any name to see all theses they supervised or examined
- Paginated results (18 per page) with Show More / Show All

### Concept Graph
- **Force-directed knowledge graph** connecting theses to concepts through shared topics
- Concept–concept edges when two concepts appear in the same thesis
- Filter by author, concept, degree, year range, department, and minimum connections
- Control node size (thesis and concept independently), link thickness, and label visibility
- Toggle labels per node type (concept labels / thesis labels independently)
- Zoom in/out controls

### Statistical Views (Graph page dropdown)
- **Timeline** — MS, PhD, and total theses per year as a line chart
- **By department** — stacked bar chart of thesis output per department
- **MS vs PhD** — grouped bar chart comparing degree types year by year

### Concept Pages
- Definition and context for each concept
- Every thesis that engages with the concept
- Related concept sections derived from co-occurrence

### Timeline Page
- Year-by-year thesis list with MS/PhD stacked bar indicators
- Author, degree, and title case rendering per entry

---

## Configuration

All content and appearance is controlled through `public/contents/config.json`:

```json
{
  "brand": { "name": "GeoThesis", "tagline": "..." },
  "home": {
    "heroHeading": "...",
    "heroSubtext": "...",
    "featuredSort": "recent",
    "featuredCount": 6
  },
  "footer": {
    "copyright": "© 2026",
    "developedBy": { "label": "Digital Geosciences", "url": "https://digitalgeoscience.com" }
  },
  "graph": {
    "nodeColors": { "concept": "#22c55e", "thesis": "#3b82f6", "focused": "#f59e0b" }
  },
  "theme": {
    "fonts": { "display": "\"DM Serif Display\", Georgia, serif" }
  }
}
```

### Supervisor name normalisation

Edit `public/contents/supervisors.csv` to unify name variants across thesis files:

```csv
professor,variant_names
Khalid Al-Ramadan,"Al-Ramadan, Khalid; Al Ramadan, Khalid A.; Alramadan, Khalid"
```

On each server restart the loader reads the CSV and normalises all `supervisor` and `committee_members` fields before serving.

---

## Content Structure

```
public/contents/
  sources/          ← one .md file per thesis (frontmatter + summary)
  concepts/         ← one .md file per concept
  config.json       ← site-wide configuration
  supervisors.csv   ← name variant normalisation table
```

### Thesis frontmatter example

```yaml
---
title: "HIGH RESOLUTION CHARACTERIZATION..."
author: "Muhammad Asif Abbas"
year: 2016
department: "Geosciences"
degree: "MS"
supervisor: "Makkawi, Mohammad H."
committee_members:
  - "Abdulraheem, Abdulazeez"
  - "Al-Shuhail, Abdullatif"
url: "https://eprints.kfupm.edu.sa/id/eprint/139856/"
---
```

---

## Development

```bash
npm install
npm run dev        # starts at http://localhost:3000
```

## Production (PM2)

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup        # register auto-start on reboot
```

Server runs on **port 3003**. Logs written to `./logs/`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (SSR) |
| Routing | TanStack Router |
| Styling | Tailwind CSS v4 |
| Graph | react-force-graph-2d |
| Charts | Recharts |
| Content | Markdown + gray-matter |
| Search | flexsearch |
| Server | Nitro / Node.js |
| Process manager | PM2 |

---

Developed by: [Digital Geosciences](https://digitalgeoscience.com)
