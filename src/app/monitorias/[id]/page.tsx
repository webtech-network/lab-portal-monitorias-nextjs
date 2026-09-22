import {
  ArrowLeft,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  Info,
  MapPin,
  UserRound,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMonitoringSessionById } from "@/features/monitorias/services/monitoring-service";

import styles from "./page.module.css";

const weekdayLabels = {
  segunda: "Segunda-feira",
  terca: "Terca-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
};

type MonitoringDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: MonitoringDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const session = await getMonitoringSessionById(id);

  return {
    title: session?.discipline ?? "Monitoria nao encontrada",
  };
}

export default async function MonitoringDetailsPage({
  params,
}: MonitoringDetailsPageProps) {
  const { id } = await params;
  const session = await getMonitoringSessionById(id);

  if (!session) notFound();

  return (
    <main className={styles.main}>
      <Link className={styles.backLink} href="/monitorias">
        <ArrowLeft size={17} aria-hidden="true" />
        Voltar para a agenda
      </Link>

      <section className={styles.hero}>
        <div>
          <span className={styles.code}>{session.courseCode}</span>
          <h1>{session.discipline}</h1>
          <p>Confira as informacoes antes de ir ao local da monitoria.</p>
        </div>
        <span className={styles.status}>Horario recorrente</span>
      </section>

      <div className={styles.contentGrid}>
        <section className={styles.details} aria-labelledby="details-title">
          <div className={styles.sectionHeading}>
            <BookOpen size={20} aria-hidden="true" />
            <h2 id="details-title">Detalhes da monitoria</h2>
          </div>

          <dl className={styles.detailGrid}>
            <div>
              <dt>
                <CalendarDays size={17} aria-hidden="true" />
                Dia
              </dt>
              <dd>{weekdayLabels[session.weekday]}</dd>
            </div>
            <div>
              <dt>
                <Clock3 size={17} aria-hidden="true" />
                Horario
              </dt>
              <dd>
                {session.startTime} as {session.endTime}
              </dd>
            </div>
            <div>
              <dt>
                <UserRound size={17} aria-hidden="true" />
                Monitor responsavel
              </dt>
              <dd>{session.monitor}</dd>
            </div>
            <div>
              <dt>
                <Building2 size={17} aria-hidden="true" />
                Campus
              </dt>
              <dd>{session.campus}</dd>
            </div>
            <div className={styles.fullWidth}>
              <dt>
                <MapPin size={17} aria-hidden="true" />
                Local
              </dt>
              <dd>{session.room}</dd>
            </div>
          </dl>
        </section>

        <aside className={styles.note}>
          <Info size={20} aria-hidden="true" />
          <h2>Antes de participar</h2>
          <p>
            {session.observations ??
              "Chegue com alguns minutos de antecedencia e organize as duvidas que deseja discutir."}
          </p>
          <p className={styles.publicNotice}>
            A consulta e publica. O registro de presenca do monitor pertence a uma entrega futura.
          </p>
        </aside>
      </div>
    </main>
  );
}
