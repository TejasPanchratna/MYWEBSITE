import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar({ setTheme, currentTheme }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'luxury' ? 'pastel' : 'luxury';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.div
      // Animate background color on theme change
      initial={{ backgroundColor: 'var(--base-100)' }}
      animate={{ backgroundColor: 'var(--base-100)' }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="navbar px-6">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Portfolio
          </Link>
        </div>

        <div className="flex-none gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeChange}
            className="btn btn-ghost btn-circle transition-colors duration-300"
          >
            {currentTheme === 'luxury' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu Links */}
          <ul className="menu menu-horizontal px-1 transition-colors duration-300">
            {location.pathname !== '/' && <li><Link to="/">Home</Link></li>}
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
