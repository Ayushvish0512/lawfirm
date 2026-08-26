import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Apex Legal Partners privacy practices." />
      <PageHero 
        title="Privacy Policy" 
        description="Our commitment to safeguarding your privacy and personal data." 
      />
      <Section background="default" spacing="normal">
        <Container size="text">
          <p>
            This Privacy Policy outlines how Apex Legal Partners collects, uses, and protects client data. We take attorney-client privilege and data confidentiality extremely seriously.
          </p>
        </Container>
      </Section>
    </>
  );
}

export default PrivacyPage;
