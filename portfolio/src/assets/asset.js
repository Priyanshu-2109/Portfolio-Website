import eateasy from "./EatEasyLogo.png";
import aboutimg from "./about-image.webp";
import jobdekho from "./JobDekhoLogo.png";
import profile from "./profile.png";
import logo from "./portfolio_logo.png";
import portfolio_web from "./portfolio_web.png";
import visionflow from "./VisionFlow.png";
import bharti_logo from "./bharti_logo.png";
import priyanshu from "./priyanshu.jpg";
import dinedesk from "./DineDesk.png";
import carepoint from "./CarePoint.png";
import resumebuilder from "./ResumeBuilder.png";
import trionic_logo from "./trionic_logo.jpeg";
import motorolaLogo from "./motorola logo.png";

export const assets = {
  aboutimg,
  eateasy,
  profile,
  logo,
  portfolio_web,
  visionflow,
  bharti_logo,
  priyanshu,
};

export const projects = [
  {
    title: "ScrapeX - SaaS Workflow Automation Platform",
    description:
      "A workflow automation and web-scraping platform with a drag-and-drop workflow builder, scheduled execution, and a scalable pay-as-you-go credit system.",
  },
  {
    title: "DineDesk - Restaurant POS & Table Booking SaaS",
    description:
      "A modular restaurant POS and table-booking platform built with the MERN stack, featuring real-time billing, Razorpay payments, invoice emails, and table management.",
    image: dinedesk,
    github: "https://github.com/Priyanshu-2109/DineDesk-POS-System",
  },
  {
    title: "JobDekho - Full Stack Job Portal",
    description:
      "A full-stack job portal for recruiters and job seekers, with authentication, protected routes, resume uploads, job filtering, application tracking, and recruiter dashboards.",
    image: jobdekho,
    github: "https://github.com/Priyanshu-2109/JobDekho-Job-Portal-Website",
  },
  {
    title: "EatEasy - Food Ordering Website",
    description:
      "EatEasy features user authentication, cart system, payment processing, and an admin panel for managing orders, food products, and categories.",
    image: eateasy,
    github: "https://github.com/Priyanshu-2109/EatEasy",
  },
  {
    title: "CarePoint - Doctor Appointment System",
    description:
      "A full-featured healthcare appointment management platform. CarePoint enables patients to book appointments, view doctor availability, manage medical records, and allows doctors to manage their schedules and patient consultations seamlessly.",
    image: carepoint,
    github: "https://github.com/Priyanshu-2109/Doctor-Appointment-System",
  },
  {
    title: "Resume Builder - Full Stack Application",
    description:
      "An intuitive resume building platform that helps users create professional resumes with customizable templates. Features include real-time preview, PDF export, multiple design options, and secure cloud storage for saved resumes.",
    image: resumebuilder,
    github: "https://github.com/Priyanshu-2109/Resume-Builder-Full-Stack",
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
    role: "Software Engineering Intern",
    company: "Motorola Solutions",
    duration: "June 2026 - Present",
    location: "Bangalore, Karnataka (Remote)",
    logo: motorolaLogo,
    highlights: [
      "Developing an internal analytics platform that brings engineering data together to surface adoption and ROI insights.",
      "Improved an internal portal's frontend performance, reducing page load time by approximately 50%.",
      "Containerized and deployed frontend and backend services with Docker and Kubernetes; built GitHub Actions CI/CD workflows.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Trionic Technologies",
    duration: "December 2025 - May 2026",
    location: "Surat, Gujarat (Remote)",
    logo: trionic_logo,
    highlights: [
      "Developed EdTech platform features with Next.js, TypeScript, FastAPI, and modular frontend architecture.",
      "Built responsive interfaces, reusable components, and API integrations.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Bharti Soft Tech Pvt. Ltd.",
    duration: "May 2025 - June 2025",
    location: "Vadodara, Gujarat (Hybrid)",
    logo: bharti_logo,
    highlights: [
      "Built a MERN-stack Resume Builder with JWT authentication and a responsive UI.",
      "Designed REST APIs, dynamic resume templates, and PDF generation.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "May 2025 - Present",
    location: "Remote",
    highlights: [
      "Developed production-ready SaaS, CRM, and client web applications with authentication, dashboards, and payment integrations.",
      "Integrated payment gateways across frontend and backend services.",
    ],
  },
];
