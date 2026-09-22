import { monitoringSessions } from "@/features/monitorias/data/monitoring-sessions";
import type {
  MonitoringFilters,
  MonitoringSession,
} from "@/features/monitorias/types/monitoria";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export async function getMonitoringSessions(
  filters: MonitoringFilters = {},
): Promise<MonitoringSession[]> {
  const normalizedQuery = normalize(filters.query ?? "");

  return monitoringSessions.filter((session) => {
    const searchableContent = normalize(
      [session.discipline, session.courseCode, session.monitor, session.room].join(" "),
    );

    return (
      (!normalizedQuery || searchableContent.includes(normalizedQuery)) &&
      (!filters.campus || session.campus === filters.campus) &&
      (!filters.discipline || session.discipline === filters.discipline) &&
      (!filters.weekday || session.weekday === filters.weekday) &&
      (!filters.monitor || session.monitor === filters.monitor)
    );
  });
}

export async function getMonitoringSessionById(id: string) {
  return monitoringSessions.find((session) => session.id === id);
}

export async function getMonitoringFilterOptions() {
  const unique = (values: string[]) => [...new Set(values)].sort();

  return {
    campuses: unique(monitoringSessions.map((session) => session.campus)),
    disciplines: unique(monitoringSessions.map((session) => session.discipline)),
    monitors: unique(monitoringSessions.map((session) => session.monitor)),
  };
}
