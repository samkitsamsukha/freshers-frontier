import React from 'react';
import { 
  Trophy, 
  Star, 
  Award, 
  Users,
  Sparkles
} from 'lucide-react';

interface RewardsSectionProps {
  isDark: boolean;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({ isDark }) => {
  return (
    <section id="rewards" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Rewards &{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Outstanding ideas deserve outstanding rewards. Here's what awaits the winners!
          </p>
        </div>

        {/* Main Prize */}
        <div className={`mb-12 p-8 rounded-3xl relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900' 
            : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500'
        }`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-12 h-12 border border-white/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-1/4 w-6 h-6 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-8 right-1/4 w-10 h-10 border border-white/30 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Trophy size={36} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🏆 Winners
            </h3>
            
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles size={20} />
              <p className="text-xl md:text-2xl font-semibold">
                Direct Entry to the Coding Club Interview Round!
              </p>
              <Sparkles size={20} />
            </div>
            
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Skip the screening test and get fast-tracked to the interview round of Coding Club Recruitment drive
            </p>
          </div>
        </div>

        {/* Additional Rewards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-white hover:bg-slate-50 border border-slate-200'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
              <Award size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Certificates
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              All participants receive digital certificates recognizing their participation and achievements
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-white hover:bg-slate-50 border border-slate-200'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6">
              <Star size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Recognition
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Winner spotlights on social media and college platforms to showcase your innovative thinking
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-white hover:bg-slate-50 border border-slate-200'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mb-6">
              <Users size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Showcase Opportunity
            </h3>
            <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Present your ideas to seniors and get valuable feedback along with critical aspects
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full ${
            isDark 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-slate-100 border border-slate-200'
          }`}>
            <Trophy size={20} className="text-yellow-500" />
            <span className={`font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Winners will be announced within 24 hours of the event
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};