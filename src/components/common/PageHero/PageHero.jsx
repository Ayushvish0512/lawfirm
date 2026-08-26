import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";
import styles from "./PageHero.module.css";

export function PageHero({
  title,
  description,
  children,
}) {
  return (
    <Section
      background="surface"
      spacing="large"
      className={styles.heroSection}
    >
      <Container size="medium">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}

          {children && (
            <div className={styles.actions}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
export default PageHero;
