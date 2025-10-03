import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // <-- Import motion

function ProjectCard({ title, description, imageSrc, imageAlt, techTags, demoLink, githubLink, demoComingSoon }) {
  return (
    // --- CHANGES ARE HERE ---
    <motion.div
      className="card bg-base-100 shadow-xl"
      whileHover={{ scale: 1.005, y: -5 }} // Scale up and move up on hover
      transition={{ duration: 0.3 }} // Make the animation smooth
    >
    {/* --- The rest of your card code is exactly the same --- */}
      <figure>
        <img src={imageSrc} alt={imageAlt} className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-700">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions justify-start mt-4 flex-wrap">
          {techTags?.map((tag, index) => (
            <div key={index} className={`badge badge-outline`}>{tag.name}</div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={demoLink} className={`btn btn-primary ${demoComingSoon ? 'btn-disabled' : ''}`}>
            {demoComingSoon ? "Demo (Soon!)" : "More Info"}
          </Link>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;