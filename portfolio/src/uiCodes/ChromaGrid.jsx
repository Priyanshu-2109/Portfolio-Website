import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const demo = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    // On mobile, immediately set fade overlay to transparent to show all skills
    if (isMobile && fadeRef.current) {
      gsap.set(fadeRef.current, { opacity: 0 });
    }
  }, [isMobile]);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    // Only handle mouse movement on desktop
    if (isMobile) return;

    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    // Only handle mouse leave on desktop
    if (isMobile) return;

    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    // Only handle card mouse move on desktop for spotlight effect
    if (isMobile) return;

    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-start content-start gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-1.5 lg:gap-x-4 lg:gap-y-2 bg-[#121212] ${className} ${
        isMobile ? "px-2 py-4" : ""
      }`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className={`group relative flex flex-col ${
            isMobile
              ? "w-[calc(20%-8px)] h-[70px] min-w-[60px] max-w-[70px]"
              : "w-[calc(33.333%-8px)] max-w-[90px] h-[90px]"
          } sm:w-[90px] sm:h-[100px] lg:w-[100px] lg:h-[110px] rounded-[6px] sm:rounded-[8px] overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
            isMobile
              ? "border-transparent"
              : "border-transparent hover:scale-105"
          }`}
          style={{
            "--card-border": c.borderColor || "transparent",
            background: c.gradient,
            "--spotlight-color": "rgba(255,255,255,0.2)",
          }}
        >
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 ${
              isMobile
                ? "opacity-0" // No spotlight effect on mobile
                : "opacity-0 group-hover:opacity-100"
            }`}
            style={{
              background: isMobile
                ? "none"
                : "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex-1 flex items-center justify-center p-1 sm:p-1.5 lg:p-2 box-border">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className={`${
                isMobile ? "w-5 h-5" : "w-6 h-6"
              } sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain filter ${
                isMobile ? "brightness-125 saturate-110" : "brightness-110"
              }`}
            />
          </div>
          <footer className="relative z-10 p-1 sm:p-1.5 text-white font-sans text-center">
            <h3
              className={`m-0 ${
                isMobile ? "text-[0.5rem]" : "text-[0.55rem]"
              } sm:text-[0.6rem] lg:text-[0.65rem] font-medium leading-tight ${
                isMobile ? "opacity-100" : ""
              }`}
            >
              {c.title}
            </h3>
          </footer>
        </article>
      ))}
      {/* Desktop overlay effects - hidden on mobile */}
      {!isMobile && (
        <>
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backdropFilter: "grayscale(1) brightness(1)",
              WebkitBackdropFilter: "grayscale(1) brightness(1)",
              background: "rgba(18,18,18,0.8)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 10%,rgba(0,0,0,0.05) 20%,rgba(0,0,0,0.15)35%,rgba(0,0,0,0.25)50%,rgba(0,0,0,0.40)65%,rgba(0,0,0,0.60)80%,white 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 10%,rgba(0,0,0,0.05) 20%,rgba(0,0,0,0.15)35%,rgba(0,0,0,0.25)50%,rgba(0,0,0,0.40)65%,rgba(0,0,0,0.60)80%,white 100%)",
            }}
          />
          <div
            ref={fadeRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
            style={{
              backdropFilter: "grayscale(1) brightness(1)",
              WebkitBackdropFilter: "grayscale(1) brightness(1)",
              background: "rgba(18,18,18,0.8)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 10%,rgba(255,255,255,0.95)20%,rgba(255,255,255,0.85)35%,rgba(255,255,255,0.75)50%,rgba(255,255,255,0.60)65%,rgba(255,255,255,0.40)80%,transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 10%,rgba(255,255,255,0.95)20%,rgba(255,255,255,0.85)35%,rgba(255,255,255,0.75)50%,rgba(255,255,255,0.60)65%,rgba(255,255,255,0.40)80%,transparent 100%)",
              opacity: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ChromaGrid;
