import { Routes, Route } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { SiteLayout } from "../../layouts/SiteLayout";

// Pages
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import ContactPage from "../../pages/ContactPage";
import PrivacyPage from "../../pages/PrivacyPage";
import TermsPage from "../../pages/TermsPage";
import NotFoundPage from "../../pages/NotFoundPage";

export function PublicRoutes() {
  return (
    <SiteLayout>
      <Routes>
        <Route path={RoutePaths.HOME} element={<HomePage />} />
        <Route path={RoutePaths.ABOUT} element={<AboutPage />} />
        <Route path={RoutePaths.SERVICES} element={<ServicesPage />} />
        <Route path={RoutePaths.CONTACT} element={<ContactPage />} />
        <Route path={RoutePaths.PRIVACY} element={<PrivacyPage />} />
        <Route path={RoutePaths.TERMS} element={<TermsPage />} />
        <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}

export default PublicRoutes;
