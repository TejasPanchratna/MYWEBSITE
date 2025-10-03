import React from 'react';
import ProjectCard from './ProjectCard';

function FeaturedProjectsOverview() {
  const featuredProjects = [
    {
      title: "YouTube Views Predictor",
      description: "A full-stack MERN application to predict YouTube video views using ML models.",
      imageSrc: 'https://via.placeholder.com/400x250/89b2f0/FFFFFF?text=YT+Predictor',
      imageAlt: 'YouTube Views Predictor',
      techTags: [{ name: "Machine Learning" }, { name: "Python" }, { name: "MERN Stack" }, { name: "Regression" }],
      demoLink: '/projects/ytml-predictor',
      githubLink: '#',
      isFeatured: true,
      demoComingSoon: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-black text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          My Latest Work
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectsOverview;