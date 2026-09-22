import { ArrowUpRight, CalendarX, MapPin, UserRound } from "lucide-react";
import Link from "next/link";

import type {
  MonitoringSession,
  Weekday,
} from "@/features/monitorias/types/monitoria";

import styles from "./weekly-agenda.module.css";

type WeeklyAgendaProps = {
  sessions: MonitoringSession[];
};

const dayColumns: { value: Weekday; label: string; shortLabel: string }[] = [
  { value: "segunda", label: "Segunda-feira", shortLabel: "SEG" },
  { value: "terca", label: "Terca-feira", shortLabel: "TER" },
  { value: "quarta", label: "Quarta-feira", shortLabel: "QUA" },
  { value: "quinta", label: "Quinta-feira", shortLabel: "QUI" },
  { value: "sexta", label: "Sexta-feira", shortLabel: "SEX" },
];

const timeSlots = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

function getSessionForCell(
  sessions: MonitoringSession[],
  weekday: Weekday,
  startTime: string,
) {
  return sessions.find(
    (session) => session.weekday === weekday && session.startTime === startTime,
  );
}

export function WeeklyAgenda({ sessions }: WeeklyAgendaProps) {
  return (
    <section className={styles.section} aria-labelledby="agenda-title">
      <div className={styles.sectionHeading}>
        <div>
          <span className={styles.eyebrow}>Agenda semanal</span>
          <h2 id="agenda-title">Horarios disponiveis</h2>
        </div>
        <p>
          {sessions.length} {sessions.length === 1 ? "monitoria encontrada" : "monitorias encontradas"}
        </p>
      </div>

      {sessions.length === 0 ? (
        <div className={styles.emptyState}>
          <CalendarX size={30} strokeWidth={1.6} aria-hidden="true" />
          <h3>Nenhuma monitoria encontrada</h3>
          <p>Revise os filtros ou limpe a busca para ver todos os horarios.</p>
          <Link href="/monitorias">Ver agenda completa</Link>
        </div>
      ) : (
        <div className={styles.scrollArea} tabIndex={0} aria-label="Agenda semanal de monitorias">
          <div className={styles.agenda}>
            <div className={`${styles.cell} ${styles.cornerCell}`}>Horario</div>
            {dayColumns.map((day) => (
              <div className={`${styles.cell} ${styles.dayHeader}`} key={day.value}>
                <span>{day.shortLabel}</span>
                <strong>{day.label}</strong>
              </div>
            ))}

            {timeSlots.map((time) => (
              <div className={styles.rowContents} key={time}>
                <div className={`${styles.cell} ${styles.timeCell}`}>
                  <strong>{time}</strong>
                  <span>ate {String(Number(time.slice(0, 2)) + 2).padStart(2, "0")}:00</span>
                </div>

                {dayColumns.map((day) => {
                  const session = getSessionForCell(sessions, day.value, time);

                  return (
                    <div className={`${styles.cell} ${styles.slot}`} key={`${day.value}-${time}`}>
                      {session ? (
                        <Link className={styles.event} href={`/monitorias/${session.id}`}>
                          <span className={styles.eventTopline}>
                            <span>{session.courseCode}</span>
                            <ArrowUpRight size={15} aria-hidden="true" />
                          </span>
                          <strong>{session.discipline}</strong>
                          <span className={styles.eventMeta}>
                            <UserRound size={13} aria-hidden="true" />
                            {session.monitor}
                          </span>
                          <span className={styles.eventMeta}>
                            <MapPin size={13} aria-hidden="true" />
                            {session.campus}
                          </span>
                        </Link>
                      ) : (
                        <span className={styles.freeSlot} aria-hidden="true" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
