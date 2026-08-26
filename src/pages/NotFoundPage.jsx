import { Link } from "react-router-dom";
import { PageHero } from "../components/common/PageHero/PageHero";
import { SEO } from "../components/common/SEO";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <PageHero 
        title="404 - Page Not Found" 
        description="The legal page or document you are looking for cannot be located." 
      >
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </PageHero>
    </>
  );
}

export default NotFoundPage;
