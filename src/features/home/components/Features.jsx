import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { SectionHeading } from "../../../components/common/SectionHeading/SectionHeading";
import styles from "./Features.module.css";

export function Features() {
  const practices = [
    {
      title: "Corporate Law",
      description: "Entity formation, mergers & acquisitions, venture financing, intellectual property, and transactional advisory."
    },
    {
      title: "Commercial Litigation",
      description: "Breach of contract, shareholder disputes, IP infringement, white-collar defense, and complex arbitration."
    },
    {
      title: "Estate Planning",
      description: "Wealth preservation, trust management, succession planning, business structures, and probate administration."
    }
  ];

  return (
    <Section background="default" spacing="large">
      <Container size="wide">
        <SectionHeading
          eyebrow="Areas of Practice"
          title="Sophisticated Counsel for Complex Matters"
          description="We guide corporate leaders, innovators, and private clients through their most critical legal opportunities and challenges."
          align="center"
        />
        
        <div className={styles.grid}>
          {practices.map((item, idx) => (
            <Card key={idx} padding="large" className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>§</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Features;
