import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { OpenBankingApp } from './components/OpenBankingApp';
import { EPayrollApp } from './components/EPayrollApp';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('maple-theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('maple-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('maple-theme', 'light');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/open-banking/*"
            element={<OpenBankingApp darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="/epayroll" element={<EPayrollApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
