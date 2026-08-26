import { Container } from "../../../components/ui/Container";
import { Button } from "../../../components/ui/Button";
import legalAdviceIcon from "../../../assets/icons/online legal advice svg.svg";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container size="wide" className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.badge}>Corporate & Litigation Specialists</span>
            <h1 className={styles.title}>
              Defending Your Trust. <br />
              Advocating Your Success.
            </h1>
            <p className={styles.description}>
              Providing sophisticated, strategic legal representation to corporations, startups, and individuals nationwide. Experience excellence with Apex Legal.
            </p>
            <div className={styles.actions}>
              <Button variant="accent" size="large">Schedule a Consultation</Button>
              <Button variant="outline" size="large" className={styles.outlineBtn}>Our Practice Areas</Button>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img 
              src={legalAdviceIcon} 
              alt="Online Legal Advice Illustration" 
              className={styles.heroImage} 
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
