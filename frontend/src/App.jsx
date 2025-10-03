import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import YTMLPredictorPage from './pages/YTMLPredictorPage';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('retro');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'retro';
    setTheme(savedTheme);
  }, []);

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} currentTheme={theme} />
      <main>
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