import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";

export function ServicesPage() {
  const practices = [
    { title: "Corporate Counsel", desc: "Startups, venture financing, mergers & acquisitions." },
    { title: "Intellectual Property", desc: "Patents, trademarks, copyrights, and licensing." },
    { title: "Commercial Litigation", desc: "Breach of contract, business disputes, white-collar defense." },
    { title: "Estate Planning", desc: "Trusts, wills, succession plans, asset protection." }
  ];

  return (
    <>
      <SEO title="Practice Areas" description="Explore our areas of legal specialization and practices." />
      <PageHero 
        title="Practice Areas" 
        description="Comprehensive legal counsel tailored to meet the dynamic demands of corporate and private clients." 
      />
      <Section background="default" spacing="normal">
        <Container size="wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
            {practices.map((p, idx) => (
              <Card key={idx} padding="large" style={{ borderTop: "3px solid var(--color-accent)" }}>
                <h3 style={{ marginBottom: "var(--space-3)", color: "var(--color-primary)" }}>{p.title}</h3>
                <p>{p.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ServicesPage;
