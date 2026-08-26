import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" description="Apex Legal Partners terms of use." />
      <PageHero 
        title="Terms of Service" 
        description="Please read the terms governing the use of our digital platforms." 
      />
      <Section background="default" spacing="normal">
        <Container size="text">
          <p>
            By accessing our website or using our services, you agree to these Terms of Service. Nothing on this website constitutes legal advice or establishes an attorney-client relationship.
          </p>
        </Container>
      </Section>
    </>
  );
}

export default TermsPage;
