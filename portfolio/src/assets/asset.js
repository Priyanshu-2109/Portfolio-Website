import eateasy from "./EatEasyLogo.png";
import aboutimg from "./about-image.webp";
import jobdekho from "./JobDekhoLogo.png";
import profile from "./profile.png";
import logo from "./portfolio_logo.png";
import portfolio_web from "./portfolio_web.png";
import visionflow from "./visionflow.avif";
import bharti_logo from "./bharti_logo.png";
import priyanshu from "./priyanshu.jpg"

export const assets = {
  aboutimg,
  eateasy,
  profile,
  logo,
  portfolio_web,
  visionflow,
  bharti_logo,
  priyanshu
};

export const projects = [
  {
    title: "EatEasy - Food Ordering Website",
    description:
      "EatEasy features user authentication, cart system, payment processing, and an admin panel for managing orders, food products, and categories.",
    image: eateasy,
    github: "https://github.com/Priyanshu-2109/EatEasy",
  },
  {
    title: "JobDekho - Job Portal Website",
    description:
      "JobDekho features search & apply for jobs, track applications, filter by category & location. It also includes Clerk authentication and lets recruiters post jobs and manage applications.",
    image: jobdekho,
    github: "https://github.com/Priyanshu-2109/JobDekho-Job-Portal-Website",
  },
  {
    title: "Portfolio Website - Priyanshu Chaniyara",
    description:
      "A modern, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. It includes a fully working contact form for email communication.",
    image: portfolio_web,
    github: "https://github.com/Priyanshu-2109/Portfolio-Website",
  },
  {
    title: "VisionFlow - AI Business Strategist Platform",
    description:
      "An AI-powered business intelligence and strategy platform built with the MERN stack. VisionFlow empowers companies with automated dashboards, real-time analytics, strategy generation, and risk forecasting. Features include seamless data upload, AI chatbot insights, and integrated workflow automation.",
    image: visionflow,
    github: "https://github.com/Priyanshu-2109/VisionFlow",
  },
];

export const experiences = [
  {
    role: "Freelancer",
    company: "Self-Employed",
    duration: "May 2025 - Present",
    location: "Remote", 
  },
  {
    role: "Full Stack Development Intern",
    company: "Bharti Soft Tech Pvt Ltd",
    duration: "May - June 2025",
    location: "Vadodara, Gujarat",
    logo: bharti_logo,
  },
];
