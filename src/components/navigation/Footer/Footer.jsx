import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site.config";
import { navigation } from "../../../config/navigation.config";
import { Container } from "../../ui/Container";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="wide">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandInfo}>
            <Link to="/" className={styles.logoLink}>
              <span className={styles.logoText}>{siteConfig.name}</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.brandDesc}>
              Providing world-class legal counsel and representation. Dedicated to excellence, integrity, and client success.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Office</h4>
            <p className={styles.addressText}>{siteConfig.address}</p>
            <p className={styles.contactText}>
              <strong>Phone:</strong> {siteConfig.phone}
            </p>
            <p className={styles.contactText}>
              <strong>Email:</strong> {siteConfig.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span className={styles.divider}>|</span>
            <Link to="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
