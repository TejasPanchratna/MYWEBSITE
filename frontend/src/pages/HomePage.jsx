import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsScroller from "../components/ProjectsScroller";
import CertificatesScroller from "../components/CertificatesScroller";

export default function HomePage() {
  return (
    <div className="pt-20 lg:pt-24 bg-base-200 min-h-screen transition-colors duration-300">
      <HeroSection />
      <AboutMeSection />
      <ProjectsScroller />
      <CertificatesScroller />
    </div>
  );
}
