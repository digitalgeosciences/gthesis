import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

const STORAGE_KEY = "geothesis:department";

interface DepartmentContextValue {
  department: string;
  setDepartment: (d: string) => void;
}

const DepartmentContext = createContext<DepartmentContextValue | null>(null);

function readStored(): string {
  if (typeof window === "undefined") return "all";
  try {
    return localStorage.getItem(STORAGE_KEY) || "all";
  } catch {
    return "all";
  }
}

export function DepartmentProvider({ children }: { children: ReactNode }) {
  const [department, setDepartmentState] = useState<string>(readStored);

  const setDepartment = useCallback((d: string) => {
    setDepartmentState(d);
    try {
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, d);
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, []);

  return (
    <DepartmentContext.Provider value={{ department, setDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
}

export function useDepartment(): DepartmentContextValue {
  const ctx = useContext(DepartmentContext);
  if (!ctx) throw new Error("DepartmentProvider missing");
  return ctx;
}
