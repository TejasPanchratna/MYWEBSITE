import React from 'react';
import { motion } from 'framer-motion';

function AboutMeSection() {
  return (
    <div className="relative z-10 py-16 px-6 sm:px-10 lg:px-16 flex justify-center items-center bg-base-200/30 backdrop-blur-sm transition-colors duration-300">
      <motion.div
        className="card bg-base-100 shadow-xl p-10 sm:p-12 lg:p-14 max-w-6xl w-full rounded-2xl transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-8">
          {/* Heading */}
          <h2
            className="text-4xl lg:text-5xl mb-6 font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>

          {/* Paragraph */}
          <p className="text-lg lg:text-2xl text-base-content/80 leading-relaxed text-justify transition-colors duration-300">
            I like building things that connect logic, data, and people.
            <br /><br />
            As a final-year Computer Science student with a focus on <span className="font-semibold">AI & Machine Learning</span>, 
            I’ve worked across a wide range of projects — from full-stack web applications and secure SaaS platforms 
            to predictive models that analyze YouTube trends.
            <br /><br />
            I see technology as more than code — it’s a way to solve problems, tell stories, and bring ideas to life. 
            My work combines structured problem-solving with curiosity and creativity, whether I’m designing a backend system, 
            training a model, or visualizing insights in Tableau.
            <br /><br />
            I’m currently interning as a <span className="font-semibold">MERN Stack Developer</span> at 'ApnaDharm', 
            where I’m contributing to a multi-tenant SaaS platform and learning what it takes to build reliable, scalable systems 
            that make a real impact.
            <br /><br />
            I’m always exploring new tools, ideas, and perspectives — from AI and data to filmmaking and storytelling — 
            because to me, learning is a lifelong experiment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMeSection;
