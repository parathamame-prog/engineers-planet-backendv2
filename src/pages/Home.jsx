import React, { useRef } from 'react';
import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import CompaniesSection from '@/components/landing/CompaniesSection';
import EngineersSection from '@/components/landing/EngineersSection';
import ProjectSubmissionSection from '@/components/landing/ProjectSubmissionSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <CompaniesSection />
      <EngineersSection />
      <ProjectSubmissionSection />
      <Footer />
    </div>
  );
}