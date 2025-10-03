import React from 'react';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  const projects = [
    {
      title: "YouTube Views Predictor",
      description: "A full-stack MERN application to predict YouTube video views using ML models.",
      imageSrc: 'https://via.placeholder.com/400x250/89b2f0/FFFFFF?text=YT+Predictor',
      imageAlt: 'YouTube Views Predictor',
      techTags: [{ name: "Machine Learning" }, { name: "Python" }, { name: "MERN Stack" }],
      demoLink: '/projects/ytml-predictor',
      githubLink: '#',
      isFeatured: true,
      demoComingSoon: false,
    },
    {
      title: "Data Science Portfolio Item",
      description: "A detailed analysis project focusing on [specific dataset]. Explores advanced statistical modeling and impactful data visualization techniques.",
      imageSrc: 'https://via.placeholder.com/400x250/f0e6d2/333?text=Project+2',
      imageAlt: 'Placeholder Project',
      techTags: [{ name: "Data Analysis" }, { name: "Visualization" }, { name: "Pandas" }],
      demoLink: '#',
      githubLink: '#',
      demoComingSoon: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700" style={{ fontFamily: "'Playfair Display', serif" }}>
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;