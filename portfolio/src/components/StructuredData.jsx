import React from "react";

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    name: "Priyanshu Chaniyara",
    jobTitle: "Freelance Full Stack Developer",
    url: "https://priyanshu-chaniyara.me",
    image: "https://priyanshu-chaniyara.me/portfolio_web.png",
    sameAs: [
      "https://github.com/Priyanshu-2109",
      "https://www.linkedin.com/in/priyanshu-chaniyara/",
      "https://www.instagram.com/priyanshu_chaniyara/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Freelance Full Stack Developer",
      description:
        "Providing freelance web development services including custom website development, web applications, and full-stack solutions",
      skills:
        "React, Node.js, MongoDB, JavaScript, HTML, CSS, Tailwind CSS, Express.js",
    },
    knowsAbout: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Express.js",
      "Tailwind CSS",
      "Git",
      "Python",
      "Freelance Web Development",
      "Custom Website Development",
      "E-commerce Development",
      "Portfolio Website Development",
    ],
    description:
      "Passionate Freelance Full Stack Developer specializing in React, Node.js, MongoDB, and modern web technologies. Available for hire for custom web development projects.",
    serviceType: [
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Custom Website Development",
      "E-commerce Development",
      "Portfolio Development",
      "Web Application Development",
    ],
    areaServed: ["Vadodara", "Gujarat", "India", "Worldwide"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Priyanshu Chaniyara Portfolio",
    url: "https://priyanshu-chaniyara.me",
    description:
      "Portfolio website of Priyanshu Chaniyara, Full Stack Developer from Vadodara, Gujarat",
    author: {
      "@type": "Person",
      name: "Priyanshu Chaniyara",
    },
    inLanguage: "en-US",
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Priyanshu Chaniyara Portfolio",
    description:
      "A collection of web development projects showcasing Full Stack development skills and freelance services",
    creator: {
      "@type": "Person",
      name: "Priyanshu Chaniyara",
    },
    url: "https://priyanshu-chaniyara.me",
    keywords:
      "portfolio, web development, full stack, react, nodejs, freelance developer, custom websites",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freelance Full Stack Development Services",
    description:
      "Professional freelance web development services including custom websites, web applications, e-commerce solutions, and full-stack development",
    provider: {
      "@type": "Person",
      name: "Priyanshu Chaniyara",
      url: "https://priyanshu-chaniyara.me",
    },
    serviceType: [
      "Web Development",
      "Full Stack Development",
      "Custom Website Development",
      "E-commerce Development",
      "Frontend Development",
      "Backend Development",
      "React Development",
      "Node.js Development",
    ],
    areaServed: [
      {
        "@type": "Place",
        name: "Vadodara, Gujarat, India",
      },
      {
        "@type": "Place",
        name: "India",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description:
              "Professional custom website development using modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Web Application Development",
            description:
              "Complete web application development with frontend and backend",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Website Development",
            description:
              "Professional e-commerce solutions with payment integration",
          },
        },
      ],
    },
  };

  React.useEffect(() => {
    // Add structured data to head
    const addStructuredData = (schema, id) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addStructuredData(personSchema, "person-schema");
    addStructuredData(websiteSchema, "website-schema");
    addStructuredData(portfolioSchema, "portfolio-schema");
    addStructuredData(serviceSchema, "service-schema");

    return () => {
      // Cleanup function to remove scripts when component unmounts
      [
        "person-schema",
        "website-schema",
        "portfolio-schema",
        "service-schema",
      ].forEach((id) => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
};

export default StructuredData;
