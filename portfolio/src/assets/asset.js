import eateasy from "./EatEasyLogo.png";
import aboutimg from "./about-image.webp";
import jobdekho from "./JobDekhoLogo.png";
import profile from './profile.png';
import logo from './portfolio_logo.png';
import portfolio_web from './portfolio_web.png';

export const assets = {
    aboutimg,
    eateasy,
    profile,
    logo,
    portfolio_web,
};


export const projects = [
    {
        title: "EatEasy - Food Ordering Website",
        description: "EatEasy features user authentication, cart system, payment processing, and an admin panel for managing orders, food products, and categories.",
        image: eateasy,
        github: "https://github.com/Priyanshu-2109/EatEasy",
    },
    {
        title: "JobDekho - Job Portal Website",
        description: "JobDekho features search & apply for jobs, track applications, filter by category & location. It also includes Clerk authentication and lets recruiters post jobs and manage applications.",
        image: jobdekho,
        github: "https://github.com/Priyanshu-2109/JobDekho-Job-Portal-Website",
    },
    {
        title: "Portfolio Website - Priyanshu Chaniyara",
        description: "A modern, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. It includes a fully working contact form for email communication.",
        image: portfolio_web,
        github: " ",
    },
    

];