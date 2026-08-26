import { useEffect } from "react";
import { siteConfig } from "../../../config/site.config";

export function SEO({ title, description }) {
  useEffect(() => {
    const mainTitle = title 
      ? `${title} | ${siteConfig.name}` 
      : `${siteConfig.seo.defaultTitle}`;
    
    document.title = mainTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent = description || siteConfig.seo.defaultDescription;
    
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}

export default SEO;
