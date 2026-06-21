import { useEffect, useMemo } from "react";
import { useContentData } from "@/lib/use-content-data";
import { departmentsByCount } from "@/lib/content";
import { useDepartment } from "@/lib/department";

export function DepartmentSelect({ className = "" }: { className?: string }) {
  const data = useContentData();
  const { department, setDepartment } = useDepartment();

  const departments = useMemo(
    () => (data ? departmentsByCount(data).map((d) => d.name) : []),
    [data],
  );

  // Reset to "all" if a stored department is no longer present in the data.
  useEffect(() => {
    if (department !== "all" && departments.length > 0 && !departments.includes(department)) {
      setDepartment("all");
    }
  }, [department, departments, setDepartment]);

  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      aria-label="Filter by department"
      className={`h-9 rounded-md border rule bg-card px-3 text-sm text-muted-foreground outline-none focus:border-[var(--teal-soft)] ${className}`}
    >
      <option value="all">All departments</option>
      {departments.map((d) => (
        <option key={d} value={d}>{d}</option>
      ))}
    </select>
  );
}
