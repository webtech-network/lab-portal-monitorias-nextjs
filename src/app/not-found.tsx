import { SearchX } from "lucide-react";
import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <SearchX size={36} strokeWidth={1.6} aria-hidden="true" />
      <span>Erro 404</span>
      <h1>Monitoria nao encontrada</h1>
      <p>O horario pode ter sido alterado ou removido da agenda.</p>
      <Link href="/monitorias">Voltar para a agenda</Link>
    </main>
  );
}
