import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our legal team will contact you shortly.");
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with the team at Apex Legal Partners." />
      <PageHero 
        title="Contact Our Firm" 
        description="Schedule a confidential case review or submit an inquiry to our specialists." 
      />
      <Section background="default" spacing="normal">
        <Container size="medium">
          <Card padding="large">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                <Input label="First Name" id="first-name" placeholder="John" required />
                <Input label="Last Name" id="last-name" placeholder="Doe" required />
              </div>
              <Input label="Email Address" id="email" type="email" placeholder="john.doe@example.com" required />
              <Input label="Phone Number" id="phone" type="tel" placeholder="(555) 000-0000" />
              <Textarea label="Message or Inquiry Details" id="message" placeholder="Please describe your legal needs..." required />
              <Button type="submit" variant="primary" style={{ marginTop: "var(--space-2)" }}>
                Submit Consultation Request
              </Button>
            </form>
          </Card>
        </Container>
      </Section>
    </>
  );
}

export default ContactPage;
