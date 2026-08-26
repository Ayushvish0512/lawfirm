import styles from "./Card.module.css";

export function Card({
  children,
  className = "",
  padding = "medium",
}) {
  return (
    <article
      className={`${styles.card} ${styles[padding] || styles.medium} ${className}`.trim()}
    >
      {children}
    </article>
  );
}
