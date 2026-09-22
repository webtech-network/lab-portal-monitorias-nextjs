import { Building2, CalendarDays, UsersRound } from "lucide-react";
import type { Metadata } from "next";

import { FilterBar } from "@/features/monitorias/components/filter-bar";
import { WeeklyAgenda } from "@/features/monitorias/components/weekly-agenda";
import {
  getMonitoringFilterOptions,
  getMonitoringSessions,
} from "@/features/monitorias/services/monitoring-service";
import type { MonitoringFilters } from "@/features/monitorias/types/monitoria";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Agenda",
};

type MonitoringPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function MonitoringPage({ searchParams }: MonitoringPageProps) {
  const params = await searchParams;
  const filters: MonitoringFilters = {
    query: firstValue(params.query),
    campus: firstValue(params.campus),
    discipline: firstValue(params.discipline),
    weekday: firstValue(params.weekday),
    monitor: firstValue(params.monitor),
  };

  const [sessions, options] = await Promise.all([
    getMonitoringSessions(filters),
    getMonitoringFilterOptions(),
  ]);

  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div>
            <span className={styles.kicker}>Ciencia da Computacao</span>
            <h1>Encontre sua proxima monitoria</h1>
            <p>
              Consulte dias, horarios, campi e salas em uma agenda unica. Nao e necessario fazer login.
            </p>
          </div>

          <dl className={styles.stats} aria-label="Resumo do portal">
            <div>
              <CalendarDays size={20} aria-hidden="true" />
              <dt>Agenda</dt>
              <dd>Segunda a sexta</dd>
            </div>
            <div>
              <Building2 size={20} aria-hidden="true" />
              <dt>Campi</dt>
              <dd>2 unidades</dd>
            </div>
            <div>
              <UsersRound size={20} aria-hidden="true" />
              <dt>Monitores</dt>
              <dd>{options.monitors.length} disponiveis</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className={styles.content}>
        <FilterBar filters={filters} options={options} />
        <WeeklyAgenda sessions={sessions} />
      </div>
    </main>
  );
}
