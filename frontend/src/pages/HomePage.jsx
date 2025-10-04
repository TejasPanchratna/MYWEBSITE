import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import FeaturedProjectsOverview from '../components/FeaturedProjectsOverview';

function HomePage() {
  return (
    // Theme-aware background: bg-base-200 changes automatically with DaisyUI themes
    <div className="pt-20 lg:pt-24 bg-base-200 min-h-screen transition-colors duration-300">
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjectsOverview />
    </div>
  );
}

export default HomePage;
