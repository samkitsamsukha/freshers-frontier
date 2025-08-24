import React from 'react';
import { Sparkles, Target, Users2 } from 'lucide-react';

interface AboutSectionProps {
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About{' '}
            <span className={`${isDark? 'from-indigo-300 via-purple-300 to-indigo-300':'from-indigo-600 via-purple-600 to-indigo-600'} bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
              Freshers Frontier
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className={`text-xl md:text-2xl leading-relaxed mb-12 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Freshers Frontier is an ideathon designed exclusively for first-year students to explore creativity, 
              innovation, and problem-solving. It's not about technical depth, but about{' '}
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                fresh perspectives
              </span>{' '}
              and{' '}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                impactful ideas
              </span>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-slate-50 hover:bg-slate-100'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Creative Innovation
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Unleash your creativity and think outside the box to solve real-world problems
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-slate-50 hover:bg-slate-100'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Impact Focus
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Develop solutions that make a meaningful difference in students' lives and society
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-slate-50 hover:bg-slate-100'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
              <Users2 className="text-white" size={24} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Fresh Perspectives
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Bring your unique viewpoint as a first-year student to challenge conventional thinking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};