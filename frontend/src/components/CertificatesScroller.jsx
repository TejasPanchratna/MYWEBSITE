import React from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    name: "Machine Learning (Coursera)",
    issuer: "Andrew Ng - Stanford",
    image: "/images/certificates/coursera_ml.webp",
  },
  {
    name: "React Masterclass",
    issuer: "Udemy - Maximilian Schwarzmüller",
    image: "/images/certificates/udemy_react.webp",
  },
  {
    name: "Data Analytics Bootcamp",
    issuer: "Kaggle / DataCamp",
    image: "/images/certificates/kaggle_cert.webp",
  },
];

export default function CertificatesScroller() {
  return (
    <section className="px-6 py-12">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-primary" />
        <h2 className="text-2xl font-semibold">Certificates</h2>
      </div>

      <div className="flex overflow-x-scroll gap-6 pb-4 no-scrollbar">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="min-w-[240px] lg:min-w-[300px] backdrop-blur-lg bg-base-100/70 shadow-md border border-base-300 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="p-4 space-y-3">
              <img
                src={cert.image}
                alt={cert.name}
                loading="lazy"
                className="h-32 w-full object-cover rounded-xl"
              />
              <h3 className="text-base font-semibold">{cert.name}</h3>
              <p className="text-sm opacity-75">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
