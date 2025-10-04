import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  techTags, 
  demoLink, 
  githubLink, 
  demoComingSoon
}) {
  return (
    <motion.div
      className="card bg-base-100 shadow-xl transition-colors duration-300"
      whileHover={{ scale: 1.005, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <figure>
        <img src={imageSrc} alt={imageAlt} className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base-content transition-colors duration-300">{title}</h2>
        <p className="text-base-content/70 transition-colors duration-300">{description}</p>
        <div className="card-actions justify-start mt-4 flex-wrap">
          {techTags?.map((tag, index) => (
            <div key={index} className="badge badge-outline text-base-content transition-colors duration-300">
              {tag.name}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            to={demoLink}
            className={`btn btn-primary ${demoComingSoon ? 'btn-disabled' : ''} transition-colors duration-300`}
          >
            {demoComingSoon ? "Demo (Soon!)" : "More Info"}
          </Link>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
