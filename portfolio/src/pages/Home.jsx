import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
// import SplashCursor from './SplashCursor'


const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      {/* <SplashCursor /> */}
    </div>
  </main>
  )
}

export default Home
