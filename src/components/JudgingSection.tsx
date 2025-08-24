import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Users, 
  Presentation, 
  HandHeart 
} from 'lucide-react';

interface JudgingSectionProps {
  isDark: boolean;
}

const criteria = [
  {
    icon: Sparkles,
    title: 'Creativity & Originality',
    description: 'How unique and innovative is your idea? Does it bring a fresh perspective to the problem?',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: CheckCircle,
    title: 'Feasibility & Practicality',
    description: 'Can your solution be realistically implemented? How practical is it for the target audience?',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: HandHeart,
    title: 'Impact on Students & Society',
    description: 'What positive change will your solution bring? How many people will benefit from it?',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Presentation,
    title: 'Clarity of Presentation',
    description: 'How well can you communicate your idea? Is your presentation clear and engaging?',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'How effectively did your team work together? Is everyone contributing meaningfully?',
    color: 'from-indigo-400 to-purple-500'
  }
];

export const JudgingSection: React.FC<JudgingSectionProps> = ({ isDark }) => {
  return (
    <section id="judging" className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Judging{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Criteria
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Your ideas will be evaluated based on these five key criteria. Focus on creating impactful solutions!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700' 
                    : 'bg-slate-50 hover:bg-slate-100'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${criterion.color} rounded-full mb-6`}>
                  <Icon className="text-white" size={24} />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {criterion.title}
                </h3>
                
                <p className={`leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {criterion.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600' 
              : 'bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200'
          }`}>
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className={`font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              All criteria are weighted equally in the final evaluation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};