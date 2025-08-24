import React, { useState } from 'react';
import { 
  GraduationCap, 
  Leaf, 
  BookOpen, 
  Heart, 
  ChevronDown, 
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
      'Navigating college for the first time can be overwhelming, with students often missing updates or struggling with resource access. Imagine a solution that integrates academic, social, and campus services into a single experience to make student life effortless.',
      'Lost devices, bags, card, IDs, etc. and unreported findings are everyday struggles. Think about how a systematic approach to lost-and-found can build trust and efficiency in campus life.',
      'College fosters diversity, yet it can feel isolating for newcomers without support. Envision a model where peer guidance and shared experiences create a culture of inclusivity and belonging.'
    ]
  },
  {
    id: 'sustainable-living',
    title: 'Sustainable Living',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    problems: [
      'In India, solar power is abundant but adoption remains limited due to high costs, frequent maintenance, and convenience barriers, even with government subsidies. Suggest how companies can rethink models and solutions that make solar energy truly affordable, reliable, and accessible for the masses.',
      'Despite growing awareness, college campuses still generate large amounts of plastic and food waste. Imagine rethinking everyday habits—like packaging, meals, and events—to create a culture of zero waste.',
      'While recycling bins exist, their effectiveness depends entirely on consistent student engagement. Envision ways to make recycling more visible, rewarding, and habitual.',
      'Sustainability requires collective participation, not just rules. Consider how gamification, peer influence, or reward systems could make green practices part of student identity.',
      'Fast fashion drives overproduction and landfill pollution. Suggest circular economy models can transform clothing consumption into a sustainable, long-term practice.'
    ]
  },
  {
    id: 'edtech',
    title: 'EdTech',
    icon: BookOpen,
    color: 'from-purple-500 to-violet-500',
    problems: [
      'Text-heavy study material makes it hard to visualize concepts in physics, chemistry, or engineering. Reflect on AR/VR or simulation tools that can make abstract concepts tangible.',
      'Time management is a skill rarely taught but desperately needed. Think of how an adaptive digital mentor could help students build habits for productivity.',
      'Students struggle with different learning speeds—some lag behind, others get bored. Think about on how technology can bridge this gap while keeping learning inclusive.'
    ]
  },
  {
    id: 'wellness-mental-health',
    title: 'Wellness & Mental Health',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    problems: [
      'Rising costs of education and living add significant mental stress to students, especially those from modest backgrounds. How might institutions and communities reduce this financial burden\'s psychological toll?',
      'With students spending hours on screens for lectures, assignments, and entertainment, digital burnout is becoming common. Yet, reducing screen time feels unrealistic. How can solutions help students maintain digital balance without disrupting academics or social life?',
      'The fear of failure holds back many students from trying new things. Reflect on how campus communities can become safer spaces for experimentation.',
      'Despite being surrounded by people, many students feel lonely and disconnected. First-years and introverts face this most. How might we design inclusive initiatives that create authentic peer bonds and belonging?'
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
            Choose from four exciting themes, each with unique problem statements designed to spark your creativity.
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
                        Click to explore problem statements
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
      </div>
    </section>
  );
};