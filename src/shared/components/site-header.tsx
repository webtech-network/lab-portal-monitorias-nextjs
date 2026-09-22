import { CalendarDays, GraduationCap } from "lucide-react";
import Link from "next/link";

import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/monitorias" aria-label="Portal de Monitorias">
          <span className={styles.brandIcon} aria-hidden="true">
            <GraduationCap size={24} strokeWidth={1.8} />
          </span>
          <span>
            <strong>Portal de Monitorias</strong>
            <small>Computacao PUC Minas</small>
          </span>
        </Link>

        <nav aria-label="Navegacao principal">
          <Link className={styles.navLink} href="/monitorias">
            <CalendarDays size={18} aria-hidden="true" />
            Agenda
          </Link>
        </nav>
      </div>
    </header>
  );
}
