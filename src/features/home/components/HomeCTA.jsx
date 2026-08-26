import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import styles from "./HomeCTA.module.css";

export function HomeCTA() {
  return (
    <Section background="primary" spacing="large">
      <Container size="medium" className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Secure Your Consultation</h2>
          <p className={styles.description}>
            Discuss your case or legal requirements with our leading specialists today. We provide confidential consultations.
          </p>
          <Button variant="accent" size="large" className={styles.ctaButton}>
            Contact Our Firm
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default HomeCTA;
