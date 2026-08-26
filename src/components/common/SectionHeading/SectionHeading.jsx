import styles from "./SectionHeading.module.css";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align] || styles.left}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}
export default SectionHeading;
