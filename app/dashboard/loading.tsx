import styles from "./loading.module.css";

// Shown instantly while the dashboard's server data loads.
export default function DashboardLoading() {
  return (
    <div className={styles.shell} aria-busy="true" aria-label="Loading dashboard">
      <div className={styles.sidebar}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={styles.item} />
        ))}
      </div>
      <div className={styles.main}>
        <span className={styles.bar} />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.avatar} />
            <div className={styles.lines}>
              <span />
              <span />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
