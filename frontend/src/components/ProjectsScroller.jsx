import React from "react";
import { FolderOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HoverCard from "./HoverCard";

const projects = [
  {
    title: "YouTube Views Predictor",
    description: "ML-assisted predictor that estimates video views from metadata & thumbnails.",
    image: "/assets/projects/ytml_v1.webp",
    slug: "youtube-views-predictor",
  },
  {
    title: "Portfolio Website",
    description: "MERN + AI integrations, aesthetic UI, project showcase and blog.",
    image: "/assets/projects/portfolio_app.webp",
    slug: "portfolio-website",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard with charts, filters and export features.",
    image: "/assets/projects/analytics_dashboard.webp",
    slug: "analytics-dashboard",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard with charts, filters and export features.",
    image: "/assets/projects/analytics_dashboard.webp",
    slug: "analytics-dashboard",
  },
];

export default function ProjectsScroller() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-12 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <FolderOpen className="text-primary transition-colors duration-300" />
        <h2 className="text-2xl font-semibold transition-colors duration-300">My Projects</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {projects.map((p) => (
          <HoverCard
            key={p.slug}
            variant="project"
            title={p.title}
            image={p.image}
            description={p.description}
            buttonText="View Project"
            onClick={() => navigate(`/projects/${p.slug}`)}
          />
        ))}
      </div>
    </section>
  );
}