import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import YTMLPredictorPage from './pages/YTMLPredictorPage';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('luxury'); // default to luxury

  useEffect(() => {
    // Load saved theme or default to 'luxury'
    const savedTheme = localStorage.getItem('theme') || 'luxury';
    setTheme(savedTheme);
  }, []);

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} currentTheme={theme} />
      <main className="transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/ytml-predictor" element={<YTMLPredictorPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
