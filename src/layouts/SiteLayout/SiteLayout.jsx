import { Header } from "../../components/navigation/Header";
import { Footer } from "../../components/navigation/Footer";
import styles from "./SiteLayout.module.css";

export function SiteLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default SiteLayout;
