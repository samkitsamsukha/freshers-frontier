import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ThemesSection } from './components/ThemesSection';
import { JudgingSection } from './components/JudgingSection';
import { RewardsSection } from './components/RewardsSection';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <AboutSection isDark={isDark} />
      <ThemesSection isDark={isDark} />
      <JudgingSection isDark={isDark} />
      <RewardsSection isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;