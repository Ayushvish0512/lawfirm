import styles from "./Section.module.css";

export function Section({
  children,
  background = "default",
  spacing = "normal",
  className = "",
  id,
}) {
  const backgroundClass =
    styles[`background-${background}`];

  const spacingClass =
    styles[`spacing-${spacing}`];

  return (
    <section
      id={id}
      className={`${styles.section} ${backgroundClass || ""} ${spacingClass || ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
