import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.main} aria-busy="true" aria-label="Carregando monitorias">
      <div className={styles.title} />
      <div className={styles.filters} />
      <div className={styles.agenda} />
    </main>
  );
}
