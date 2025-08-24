import React, { useState } from 'react';
import { 
  GraduationCap, 
  Leaf, 
  BookOpen, 
  Heart, 
  ChevronDown, 
  ChevronRight,
  Lightbulb
} from 'lucide-react';

interface ThemesSectionProps {
  isDark: boolean;
}

const themes = [
  {
    id: 'campus-life',
    title: 'Campus Life Simplified',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    problems: [
      'Design a peer-to-peer study group matching system for students with similar academic goals.',
      'Create a campus navigation app that helps new students find classrooms, facilities, and services efficiently.',
      'Develop a digital marketplace for students to buy, sell, and exchange textbooks and study materials.',
      'Build a roommate compatibility finder using lifestyle preferences and study habits.',
      'Design a campus event discovery platform that personalizes recommendations based on student interests.'
    ]
  },
  {
    id: 'sustainable-living',
    title: 'Sustainable Living',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    problems: [
      'Create a campus waste reduction challenge that gamifies recycling and sustainable practices.',
      'Design a shared resource platform for students to borrow and lend items instead of buying new ones.',
      'Develop a carbon footprint tracker specifically designed for college students\' daily activities.',
      'Build a community garden management app that connects students with sustainable food production.',
      'Create an energy-saving competition system that encourages dormitories to reduce their consumption.'
    ]
  },
  {
    id: 'edtech',
    title: 'EdTech',
    icon: BookOpen,
    color: 'from-purple-500 to-violet-500',
    problems: [
      'Design a personalized learning path generator that adapts to different learning styles and paces.',
      'Create a collaborative note-taking platform where students can share and build upon each other\'s notes.',
      'Develop a skill-gap identifier that helps students discover and bridge knowledge gaps in their field.',
      'Build a virtual study buddy system that uses AI to provide study reminders and motivation.',
      'Design a peer tutoring marketplace that connects students who need help with those who excel.'
    ]
  },
  {
    id: 'wellness-mental-health',
    title: 'Wellness & Mental Health',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    problems: [
      'Create a mood tracking app specifically designed for the unique stresses of college life.',
      'Design a peer support network that anonymously connects students facing similar challenges.',
      'Develop a stress management toolkit with quick, accessible techniques for busy students.',
      'Build a sleep optimization system that helps students establish healthy sleep patterns.',
      'Create a campus mental health resource finder that provides immediate access to support services.'
    ]
  }
];

export const ThemesSection: React.FC<ThemesSectionProps> = ({ isDark }) => {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  const toggleTheme = (themeId: string) => {
    setExpandedTheme(expandedTheme === themeId ? null : themeId);
  };

  return (
    <section id="themes" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Themes &{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Problem Statements
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Choose from four exciting themes, each with five unique problem statements designed to spark your creativity.
          </p>
        </div>

        <div className="grid gap-6">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isExpanded = expandedTheme === theme.id;
            
            return (
              <div
                key={theme.id}
                className={`rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 hover:border-slate-600' 
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleTheme(theme.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-opacity-50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${theme.color} flex items-center justify-center transform transition-transform duration-200 ${
                      isExpanded ? 'scale-110' : 'hover:scale-105'
                    }`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {theme.title}
                      </h3>
                      <p className={`text-sm ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Click to explore 5 problem statements
                      </p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown size={24} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 pb-8">
                    <div className="grid gap-4">
                      {theme.problems.map((problem, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                            isDark 
                              ? 'bg-slate-700 hover:bg-slate-600' 
                              : 'bg-slate-50 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <p className={`text-sm leading-relaxed ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                              {problem}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
          }`}>
            <Lightbulb size={16} />
            <span className="text-sm font-medium">Each problem statement is designed to be solved in ≤50 words</span>
          </div>
        </div>
      </div>
    </section>
  );
};