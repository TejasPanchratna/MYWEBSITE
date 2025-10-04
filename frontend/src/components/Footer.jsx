import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons for GitHub & LinkedIn

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded transition-colors duration-300">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
      <aside className="mt-4">
        <p>Copyright © 2025 - All rights reserved by Tejas Panchratna</p>
      </aside>
    </footer>
  );
};

export default Footer;
