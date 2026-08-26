import styles from "./Select.module.css";

export function Select({
  label,
  error,
  id,
  options = [],
  placeholder = "Select an option",
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

      <select
        id={id}
        className={`${styles.select} ${error ? styles.error : ""}`}
        {...props}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className={styles.errorText}>
          {error}
        </p>
      )}
    </div>
  );
}
