import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    // Use a theme-aware background color from DaisyUI
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        
        {/* Your Profile Picture */}
        <img 
          src="/profile2.jpg" // This path works because the image is in the 'public' folder
          className="max-w-sm w-64 h-64 rounded-full shadow-2xl object-cover transition-transform duration-300 hover:scale-105"
          alt="A picture of Tejas"
        />

        {/* The Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hi, I'm Tejas!
          </h1>
          <p className="py-6 text-lg">
            A passionate Machine Learning student and I like learning new things.
          </p>
          <Link to="/projects" className="btn btn-outline">Explore My Projects</Link>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;