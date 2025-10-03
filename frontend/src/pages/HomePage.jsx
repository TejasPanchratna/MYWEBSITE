import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import FeaturedProjectsOverview from '../components/FeaturedProjectsOverview';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjectsOverview />
    </div>
    
  );
}

export default HomePage;
