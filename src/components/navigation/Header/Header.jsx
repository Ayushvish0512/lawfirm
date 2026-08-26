import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../../config/navigation.config";
import { siteConfig } from "../../../config/site.config";
import { Container } from "../../ui/Container";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when clicking a link
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Container size="wide" className={styles.navContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logoText}>{siteConfig.name}</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className={styles.ctaWrapper}>
          <Link to="/contact" className={styles.ctaButton}>
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.mobileToggle}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} />
        </button>
      </Container>

      {/* Mobile Nav Drawer */}
      <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.mobileNavLink} ${
                location.pathname === item.path ? styles.mobileNavLinkActive : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className={styles.mobileCta}>
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
