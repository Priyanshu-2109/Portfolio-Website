import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "../assets/asset";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let ticking = false;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when screen size changes to desktop
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          // Enhanced easing function for smoother transitions
          const rawProgress = Math.min(scrollPosition / 180, 1); // Extended range for smoother transition

          // Improved cubic bezier easing
          const easedProgress =
            rawProgress < 0.5
              ? 4 * rawProgress * rawProgress * rawProgress
              : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

          setScrollProgress(easedProgress);
          setScrolled(scrollPosition > 15); // Earlier trigger for smoother transition

          ticking = false;
        });
        ticking = true;
      }
    };

    // Add small initial delay for better perceived performance
    setTimeout(handleScroll, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Close mobile menu with delay for better UX
      if (isOpen) {
        setTimeout(() => setIsOpen(false), 150);
      }

      // Better scroll offset calculation based on device
      const navbarHeight = windowWidth < 768 ? 70 : 90;
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }; // Enhanced responsive values with device-aware calculations
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  // Capsule effect on scroll - width changes and adds border radius
  const smoothWidth = isMobile ? 100 : scrolled ? 92 : 100;
  const navOpacity = Math.max(0.75, 0.85 - scrollProgress * 0.1);
  const borderRadius = isMobile ? 0 : scrolled ? 20 : 0; // Capsule effect on scroll
  const marginTop = isMobile ? 0 : scrolled ? 12 : 0; // Add margin when scrolled for capsule effect
  const paddingX = isMobile ? 20 : scrolled ? 32 : 40;
  const paddingY = isMobile ? 16 : scrolled ? 16 : 20;
  const logoScale = isMobile ? 1 : 1 - scrollProgress * 0.05;
  const menuScale = isMobile ? 1 : 1 - scrollProgress * 0.02;
  return (
    <nav
      className={`fixed top-0 z-50 will-change-transform ${
        isMobile ? "left-0 right-0" : "left-1/2 transform -translate-x-1/2"
      }`}
      style={{
        width: `${smoothWidth}%`,
        marginTop: `${marginTop}px`,
        backgroundColor: scrolled
          ? `rgba(15, 15, 15, ${navOpacity})`
          : `rgba(18, 18, 18, ${navOpacity})`,
        backdropFilter: `blur(${8 + scrollProgress * 12}px)`,
        WebkitBackdropFilter: `blur(${8 + scrollProgress * 12}px)`,
        borderRadius: `${borderRadius}px`,
        boxShadow:
          scrolled && !isMobile
            ? `0 4px 20px -4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.04)`
            : isMobile
              ? "0 2px 10px -2px rgba(0, 0, 0, 0.1)"
              : "0 1px 4px -1px rgba(0, 0, 0, 0.1)",
        borderBottom:
          !scrolled && !isMobile
            ? "1px solid rgba(107, 114, 128, 0.15)"
            : "none",
        transition: isMobile
          ? "all 0.3s ease"
          : "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div
        className="flex justify-between items-center will-change-transform"
        style={{
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
          transition: isMobile
            ? "all 0.3s ease"
            : "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="font-extrabold tracking-wide text-white cursor-pointer will-change-transform"
          style={{
            transition: isMobile
              ? "all 0.3s ease"
              : "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: `scale(${logoScale}) translateZ(0)`,
          }}
        >
          <img
            src={assets.logo}
            alt="PRIYANSHU"
            className="object-contain w-auto will-change-transform"
            style={{
              height: `${isMobile ? 32 : 32 + (1 - scrollProgress) * 4}px`,
              maxWidth: `${isMobile ? 140 : 140 + (1 - scrollProgress) * 40}px`,
              transition: isMobile
                ? "all 0.3s ease"
                : "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              filter: `brightness(${1 + scrollProgress * 0.06})`,
            }}
          />
        </h1>
        {/* Desktop Menu */}
        <div
          className="hidden lg:flex space-x-6 xl:space-x-8 will-change-transform"
          style={{
            transform: `scale(${menuScale}) translateZ(0)`,
            transition: isMobile
              ? "all 0.3s ease"
              : "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            opacity: isMobile ? 1 : 1 - scrollProgress * 0.08,
          }}
        >
          {" "}
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-300 text-white will-change-transform relative overflow-hidden"
            style={{
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: `${15 + (1 - scrollProgress) * 1.5}px`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-1px)";
              e.target.style.textShadow = "0 4px 12px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.textShadow = "none";
            }}
          >
            About
          </button>{" "}
          {/* Other desktop menu buttons with improved animations */}
          <button
            onClick={() => scrollToSection("education")}
            className="hover:text-gray-300 text-white will-change-transform relative overflow-hidden"
            style={{
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: `${15 + (1 - scrollProgress) * 1.5}px`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-1px)";
              e.target.style.textShadow = "0 4px 12px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.textShadow = "none";
            }}
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-gray-300 text-white will-change-transform relative overflow-hidden"
            style={{
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: `${15 + (1 - scrollProgress) * 1.5}px`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-1px)";
              e.target.style.textShadow = "0 4px 12px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.textShadow = "none";
            }}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-300 text-white will-change-transform relative overflow-hidden"
            style={{
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: `${15 + (1 - scrollProgress) * 1.5}px`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-1px)";
              e.target.style.textShadow = "0 4px 12px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.textShadow = "none";
            }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-300 text-white will-change-transform relative overflow-hidden"
            style={{
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: `${15 + (1 - scrollProgress) * 1.5}px`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-1px)";
              e.target.style.textShadow = "0 4px 12px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.textShadow = "none";
            }}
          >
            Contact
          </button>{" "}
        </div>{" "}
        {/* Mobile Menu Button - Enhanced with improved animations - Only show on mobile/tablet */}
        {windowWidth < 1024 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:block lg:hidden xl:hidden 2xl:hidden text-white will-change-transform relative overflow-hidden touch-manipulation"
            style={{
              padding: windowWidth < 375 ? "10px" : "12px",
              borderRadius: "12px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: "scale(1) translateZ(0)",
              fontSize: windowWidth < 375 ? "22px" : "26px",
              backgroundColor: isOpen
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(255, 255, 255, 0.08)",
              border: `1px solid ${
                isOpen ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"
              }`,
              boxShadow: isOpen
                ? "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "0 4px 15px rgba(0, 0, 0, 0.15)",
              minWidth: "44px",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              if (!isOpen) {
                e.target.style.transform = "scale(1.05) translateZ(0)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isOpen) {
                e.target.style.transform = "scale(1) translateZ(0)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.15)";
              }
            }}
            onTouchStart={(e) => {
              e.target.style.transform = "scale(0.95) translateZ(0)";
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = "scale(1) translateZ(0)";
            }}
            aria-label="Toggle menu"
          >
            <div
              style={{
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: isOpen
                  ? "rotate(180deg) scale(1.1)"
                  : "rotate(0deg) scale(1)",
                filter: isOpen ? "brightness(1.3)" : "brightness(1)",
              }}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </div>
          </button>
        )}
      </div>{" "}
      {/* Enhanced Mobile Menu (Full Screen Overlay with Improved Blur) - Only show on mobile/tablet */}
      {windowWidth < 1024 && (
        <div
          className={`fixed top-0 left-0 h-screen w-full lg:hidden will-change-transform z-[60]`}
          style={{
            transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transform: isOpen
              ? "translateY(0) scale(1)"
              : "translateY(-100%) scale(0.95)",
            background: `linear-gradient(135deg, 
            rgba(0, 0, 0, 0.97) 0%, 
            rgba(15, 15, 15, 0.94) 50%,
            rgba(5, 5, 5, 0.96) 100%)`,
            backdropFilter: `blur(${isOpen ? 20 : 0}px) saturate(1.2)`,
            WebkitBackdropFilter: `blur(${isOpen ? 20 : 0}px) saturate(1.2)`,
            maxHeight: "100vh",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Enhanced Background pattern with animated gradient */}
          <div
            className="absolute inset-0"
            style={{
              opacity: isOpen ? 0.15 : 0,
              transition: "opacity 0.6s ease-in-out",
              background: `
              radial-gradient(circle at 30% 20%, rgba(255,255,255,0.04) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.01) 49%, rgba(255,255,255,0.01) 51%, transparent 52%)
            `,
            }}
          />{" "}
          {/* Menu content container */}
          <div className="relative h-full flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 sm:px-8 py-16 sm:py-8 overflow-y-auto">
            {/* Enhanced Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white will-change-transform touch-manipulation"
              style={{
                fontSize: windowWidth < 375 ? "24px" : "28px",
                padding: windowWidth < 375 ? "10px" : "14px",
                borderRadius: "16px",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow:
                  "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                opacity: isOpen ? 1 : 0,
                transform: isOpen
                  ? "scale(1) rotate(0deg)"
                  : "scale(0.5) rotate(-180deg)",
                minWidth: "44px",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1) rotate(90deg)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
                e.target.style.boxShadow =
                  "0 12px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
              }}
              onTouchStart={(e) => {
                e.target.style.transform = "scale(0.95) rotate(0deg)";
              }}
              onTouchEnd={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)";
              }}
              aria-label="Close menu"
            >
              <FiX />
            </button>{" "}
            {/* Enhanced Mobile menu items with improved animations */}
            {[
              "home",
              "about",
              "education",
              "experience",
              "projects",
              "contact",
            ].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white font-semibold tracking-wider will-change-transform relative overflow-hidden group touch-manipulation"
                style={{
                  padding:
                    windowWidth < 375
                      ? "14px 24px"
                      : windowWidth < 425
                        ? "16px 28px"
                        : "18px 32px",
                  fontSize:
                    windowWidth < 375
                      ? "18px"
                      : windowWidth < 425
                        ? "20px"
                        : "22px",
                  borderRadius: "16px",
                  minWidth:
                    windowWidth < 375
                      ? "200px"
                      : windowWidth < 425
                        ? "220px"
                        : "240px",
                  maxWidth: "90vw",
                  transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                  transitionDelay: isOpen ? `${index * 0.08}s` : "0s",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? "translateY(0) scale(1) rotateX(0deg)"
                    : "translateY(40px) scale(0.85) rotateX(-10deg)",
                  background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08) 0%, 
                  rgba(255, 255, 255, 0.04) 100%)`,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.05)
                `,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform =
                    "translateY(-4px) scale(1.08) rotateX(0deg)";
                  e.target.style.background = `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  rgba(255, 255, 255, 0.08) 100%)`;
                  e.target.style.textShadow =
                    "0 6px 20px rgba(255,255,255,0.4)";
                  e.target.style.boxShadow = `
                  0 16px 40px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  0 0 30px rgba(255, 255, 255, 0.1)
                `;
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform =
                    "translateY(0) scale(1) rotateX(0deg)";
                  e.target.style.background = `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08) 0%, 
                  rgba(255, 255, 255, 0.04) 100%)`;
                  e.target.style.textShadow = "none";
                  e.target.style.boxShadow = `
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.05)
                `;
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                }}
                onTouchStart={(e) => {
                  e.target.style.transform = "scale(0.95)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                }}
                onTouchEnd={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
