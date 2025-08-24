import React from 'react';
import { ChevronDown, Lightbulb, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  isDark: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const scrollToThemes = () => {
    const themesSection = document.querySelector('#themes');
    if (themesSection) {
      themesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900' 
        : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-white'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <Lightbulb size={48} className="animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <Users size={40} className="animate-bounce" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-10">
          <Zap size={44} className="animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          <span className={`${isDark? 'from-indigo-300 via-purple-300 to-indigo-300':'from-indigo-600 via-purple-600 to-indigo-600'} bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
            Freshers
          </span>
          <br />
          <span className={`${isDark? 'from-indigo-300 via-purple-300 to-indigo-300':'from-indigo-600 via-purple-600 to-indigo-600'} bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
            Frontier
          </span>
        </h1>
        
        <p className={`text-xl sm:text-2xl md:text-3xl mb-8 font-light ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          An Ideathon to Shape the Future,{' '}
          <span className={`${isDark? 'from-indigo-300 via-purple-300 to-indigo-300':'from-indigo-600 via-purple-600 to-indigo-600'} bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold`}>
            One Idea at a Time
          </span>
        </p>

        <button
          onClick={scrollToThemes}
          className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Explore Themes
          <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
        </button>

        <div className="mt-16 flex justify-center items-center space-x-8 text-sm text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Exclusively for First-Year Students 2025 Admission</span>
          </div>
        </div>
      </div>
    </section>
  );
};