import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ALWAYS_UPPER = new Set([
  "CO2","H2S","NMR","GIS","API","KFUPM","ANN","GPR","EOR","IOR","PVT",
  "3D","2D","1D","GPS","GHG","UAE","KSA","SPE","SEG","AAPG","CT","MRI",
  "XRD","SEM","TEM","UV","IR","pH","DNA","RNA","BTEX","VOC","TOC",
]);

export function extractLastName(name: string): string {
  if (!name) return "";
  if (name.includes(",")) return name.split(",")[0].trim();
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1];
}

export function toTitleCase(str: string): string {
  const minorWords = new Set(["a","an","the","and","but","or","for","nor","on","at","to","by","in","of","up","as"]);
  return str.toLowerCase().split(" ").map((word, i) => {
    const clean = word.replace(/[^a-z0-9]/gi, "");
    if (ALWAYS_UPPER.has(clean.toUpperCase())) return clean.toUpperCase();
    if (i !== 0 && minorWords.has(clean)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
