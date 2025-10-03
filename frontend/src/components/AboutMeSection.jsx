import React from 'react';

function AboutMeSection() {
  return (
    <div className="container mx-auto px-4 py-12 -mt-16 relative z-10">
      <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>About Me</h2>
          <p className="text-gray-600">
            I thrive on transforming complex data into actionable insights and 
            creating robust ML models. My expertise spans data collection, EDA, 
            feature engineering, model training, and deploying solutions with modern 
            web technologies like the MERN stack. I'm always eager to learn and 
            solve challenging problems that make a real impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
