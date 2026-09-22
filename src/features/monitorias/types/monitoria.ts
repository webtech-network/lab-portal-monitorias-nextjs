export const weekdays = [
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
] as const;

export type Weekday = (typeof weekdays)[number];

export type MonitoringSession = {
  id: string;
  discipline: string;
  courseCode: string;
  monitor: string;
  campus: "Coracao Eucaristico" | "Praca da Liberdade";
  weekday: Weekday;
  startTime: string;
  endTime: string;
  room: string;
  observations?: string;
};

export type MonitoringFilters = {
  query?: string;
  campus?: string;
  discipline?: string;
  weekday?: string;
  monitor?: string;
};
