"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";

import type { MonitoringFilters } from "@/features/monitorias/types/monitoria";

import styles from "./filter-bar.module.css";

type FilterBarProps = {
  filters: MonitoringFilters;
  options: {
    campuses: string[];
    disciplines: string[];
    monitors: string[];
  };
};

const weekdays = [
  { value: "segunda", label: "Segunda-feira" },
  { value: "terca", label: "Terca-feira" },
  { value: "quarta", label: "Quarta-feira" },
  { value: "quinta", label: "Quinta-feira" },
  { value: "sexta", label: "Sexta-feira" },
];

export function FilterBar({ filters, options }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();
  const hasFilters = [...currentSearchParams.keys()].length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      const normalizedValue = value.toString().trim();
      if (normalizedValue) params.set(key, normalizedValue);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function clearFilters() {
    router.push(pathname);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.heading}>
        <span className={styles.headingIcon} aria-hidden="true">
          <SlidersHorizontal size={18} />
        </span>
        <div>
          <h2>Encontre uma monitoria</h2>
          <p>Busque por disciplina, monitor ou codigo e refine os resultados.</p>
        </div>
      </div>

      <div className={styles.searchRow}>
        <label className={styles.searchField}>
          <span className="sr-only">Buscar monitoria</span>
          <Search size={20} aria-hidden="true" />
          <input
            defaultValue={filters.query}
            name="query"
            placeholder="Ex.: Calculo, AED I ou Ana Beatriz"
            type="search"
          />
        </label>
        <button className={styles.searchButton} type="submit">
          Buscar
        </button>
      </div>

      <div className={styles.filters}>
        <label>
          <span>Campus</span>
          <select defaultValue={filters.campus ?? ""} name="campus">
            <option value="">Todos os campi</option>
            {options.campuses.map((campus) => (
              <option key={campus} value={campus}>
                {campus}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Disciplina</span>
          <select defaultValue={filters.discipline ?? ""} name="discipline">
            <option value="">Todas as disciplinas</option>
            {options.disciplines.map((discipline) => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Dia</span>
          <select defaultValue={filters.weekday ?? ""} name="weekday">
            <option value="">Todos os dias</option>
            {weekdays.map((weekday) => (
              <option key={weekday.value} value={weekday.value}>
                {weekday.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Monitor</span>
          <select defaultValue={filters.monitor ?? ""} name="monitor">
            <option value="">Todos os monitores</option>
            {options.monitors.map((monitor) => (
              <option key={monitor} value={monitor}>
                {monitor}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.actions}>
        {hasFilters ? (
          <button className={styles.clearButton} onClick={clearFilters} type="button">
            <X size={17} aria-hidden="true" />
            Limpar filtros
          </button>
        ) : (
          <span>Os filtros serao mantidos na URL para facilitar o compartilhamento.</span>
        )}
        <button className={styles.applyButton} type="submit">
          Aplicar filtros
        </button>
      </div>
    </form>
  );
}
