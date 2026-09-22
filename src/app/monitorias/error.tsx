"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

import styles from "./error.module.css";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className={styles.main}>
      <AlertTriangle size={34} strokeWidth={1.6} aria-hidden="true" />
      <h1>Nao foi possivel carregar a agenda</h1>
      <p>Tente novamente. Se o problema continuar, aguarde alguns minutos.</p>
      <button onClick={reset} type="button">
        <RotateCcw size={17} aria-hidden="true" />
        Tentar novamente
      </button>
    </main>
  );
}
