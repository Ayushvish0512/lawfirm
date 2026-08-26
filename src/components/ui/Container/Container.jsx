import styles from "./Container.module.css";

export function Container({
  children,
  size = "wide",
  className = "",
}) {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
