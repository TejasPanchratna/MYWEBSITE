import React, { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Import the HoverCard component to use the same card style
import HoverCard from "./HoverCard"; 

const certificates = [
  {
    id: "udemy-react",
    name: "100-Hour Java Workshop",
    issuer: "Ypsilon - IT Solutions",
    date: "Jun 2024",
    image: "/assets/certificates/ypsilonJAVA.webp",
    description: "React fundamentals, hooks, routing and project deployment.",
    tags: ["React", "Hooks", "Frontend"],
  },
  {
    id: "coursera-ml",
    name: "Machine Learning With Python",
    issuer: "Andrew Ng - Stanford",
    date: "Jun 2024",
    image: "/assets/certificates/MachineLearningWPython.webp",
    description:
      "Core ML concepts, supervised learning and model evaluation.",
    tags: [
      "Dimensionality Reduction",
      "Scikit Learn (Machine Learning Library)",
      "Predictive Modeling",
      "Supervised Learning",
      "Regression Analysis",
      "Feature Engineering",
      "Applied Machine Learning",
      "Classification And Regression Tree (CART)",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Machine Learning",
      "Python Programming",
    ],
    externalUrl: "https://coursera.org/verify/EOJMLWP3LIZF",
  },
  {
    id: "kaggle-analytics",
    name: "Data Analytics Bootcamp",
    issuer: "Kaggle",
    date: "Mar 2023",
    image: "/assets/certificates/kaggle_cert.webp",
    description: "Practical data cleaning and EDA projects.",
    tags: ["Data Cleaning", "EDA", "Python"],
  },
];

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/65" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative z-10 max-w-[1200px] w-[90vw] h-[90vh] 
                     bg-base-100 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 w-full flex items-center justify-center bg-base-200 p-4 transition-colors duration-300">
              <div className="max-h-full max-w-full overflow-auto cursor-zoom-in">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="object-contain max-h-[80vh] max-w-full"
                  onClick={() => window.open(cert.image, "_blank")}
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full p-6 overflow-auto transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{cert.name}</h3>
                  <p className="text-sm opacity-80">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <button
                  className="ml-4 px-3 py-2 rounded-md border"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed">{cert.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags?.map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {cert.externalUrl && (
                <div className="mt-6">
                  <a
                    href={cert.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
                  >
                    Verify Credentials
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CertificatesScroller() {
  const [openCert, setOpenCert] = useState(null);

  return (
    <section className="px-6 py-12 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-primary transition-colors duration-300" />
        <h2 className="text-2xl font-semibold transition-colors duration-300">Certificates</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {certificates.map((cert) => (
          <HoverCard
            key={cert.id}
            variant="certificate"
            title={cert.name}
            image={cert.image}
            description={`${cert.issuer} • ${cert.date}`}
            buttonText="Details"
            onClick={() => setOpenCert(cert)}
          />
        ))}
      </div>

      <CertificateModal cert={openCert} onClose={() => setOpenCert(null)} />
    </section>
  );
}