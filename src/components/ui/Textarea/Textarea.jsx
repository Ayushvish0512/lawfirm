import styles from "./Textarea.module.css";

export function Textarea({
  label,
  error,
  id,
  className = "",
  rows = 4,
  ...props
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.error : ""} ${className}`.trim()}
        {...props}
      />

      {error && (
        <p className={styles.errorText}>
          {error}
        </p>
      )}
    </div>
  );
}
