import React from "react";

const SEO = ({
  title = "Priyanshu Chaniyara - Official Portfolio | Freelance Full Stack Developer",
  description = "Official portfolio of Priyanshu Chaniyara - Professional Freelance Full Stack Developer. Expert in React, Node.js, MongoDB. Available for custom website development and web applications.",
  keywords = "Priyanshu Chaniyara official portfolio, Priyanshu Chaniyara developer, Priyanshu Chaniyara freelancer, Freelance Full Stack Developer, Priyanshu Chaniyara React developer, Professional web developer Gujarat, Priyanshu Chaniyara official website",
  image = "https://priyanshu-chaniyara.me/portfolio_web.png",
  url = "https://priyanshu-chaniyara.me",
  type = "website",
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", url);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) ogDescription.setAttribute("content", description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", image);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", url);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", type);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription)
      twitterDescription.setAttribute("content", description);

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", image);
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
