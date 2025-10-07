import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero min-h-[35vh] bg-base-200 transition-colors duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">

        {/* Profile Picture */}
        <img 
          src="assets/profile2.jpg"
          className="w-64 h-64 rounded-full shadow-2xl object-cover transition-transform duration-300 hover:scale-105"
          alt="A picture of Tejas"
        />

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left lg:ml-8 transition-colors duration-300">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hi! I'm Tejas Panchratna
          </h1>
          <p className="py-4 text-2xl">
            A passionate Machine Learning student and I like learning new things.
          </p>
          <Link to="/projects" className="btn btn-outline">Explore My Projects</Link>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
