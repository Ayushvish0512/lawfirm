import { MarketingPage } from "../../templates/MarketingPage";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HomeCTA } from "./components/HomeCTA";

export function Home() {
  return (
    <MarketingPage
      hero={<Hero />}
      features={<Features />}
      cta={<HomeCTA />}
    />
  );
}

export default Home;
