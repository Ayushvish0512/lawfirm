import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[variant] || styles.primary} ${styles[size] || styles.medium} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
