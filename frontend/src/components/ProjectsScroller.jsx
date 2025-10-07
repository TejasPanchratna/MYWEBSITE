import React from "react";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "YouTube Views Predictor",
    description: "An ML-powered app predicting YouTube video performance.",
    image: "/images/projects/ytml_v1.webp",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with MERN and AI integrations.",
    image: "/images/projects/portfolio_app.webp",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard using React + D3.js.",
    image: "/images/projects/analytics_dashboard.webp",
  },
];

export default function ProjectsScroller() {
  return (
    <section className="px-6 py-12">
      <div className="flex items-center gap-3 mb-6">
        <FolderOpen className="text-primary" />
        <h2 className="text-2xl font-semibold">My Projects</h2>
      </div>

      <div className="flex overflow-x-scroll gap-6 pb-4 no-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[280px] lg:min-w-[340px] backdrop-blur-xl bg-base-100/70 shadow-lg border border-base-300 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="p-4 space-y-3">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-40 w-full object-cover rounded-xl"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
