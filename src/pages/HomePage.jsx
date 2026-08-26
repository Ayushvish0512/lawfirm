import { Home } from "../features/home/Home";
import { SEO } from "../components/common/SEO";

export function HomePage() {
  return (
    <>
      <SEO 
        title="Sophisticated Counsel" 
        description="Premium legal advisory and litigation services for corporate and private clients." 
      />
      <Home />
    </>
  );
}

export default HomePage;
