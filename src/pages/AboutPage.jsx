import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function AboutPage() {
  return (
    <>
      <SEO title="About Us" description="Learn about the history, vision, and team at Apex Legal Partners." />
      <PageHero 
        title="Our Story" 
        description="Dedicated to defending truth and advocating for our clients' success with sophisticated legal counsel." 
      />
      <Section background="default" spacing="normal">
        <Container size="medium">
          <h2>Who We Are</h2>
          <p style={{ marginTop: "var(--space-4)" }}>
            Apex Legal Partners was founded on the principles of integrity, excellence, and diligence. We serve as trusted advisors to businesses and individuals navigating complex legal landscapes.
          </p>
        </Container>
      </Section>
    </>
  );
}

export default AboutPage;
