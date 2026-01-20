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
    title: "DineDesk - POS System",
    description:
      "A comprehensive Point of Sale system for restaurants and cafes. DineDesk streamlines order management, billing, inventory tracking, and payment processing with an intuitive interface for efficient restaurant operations.",
    image: dinedesk,
    github: "https://github.com/Priyanshu-2109/DineDesk-POS-System",
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
  {
    role: "Software Development Intern",
    company: "Trionic Technologies",
    duration: "Dec 2025 - Present",
    location: "Remote",
    logo: trionic_logo,
  },
];
