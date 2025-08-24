import React from 'react';
import { Mail, Users, Zap  } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-black' 
        : 'bg-gradient-to-b from-white to-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8">
            <Zap size={24} className="text-indigo-500" />
            <Zap size={32} className="text-purple-500" />
            <Zap size={24} className="text-indigo-500" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Gear up, ideate, and{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              lead the frontier!
            </span>
          </h2>
          
          <p className={`text-lg mb-8 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Ready to shape the future with your innovative ideas?
          </p>
        </div>

        {/* Contact Information */}
        <div className={`border-t pt-16 ${
          isDark ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Contact & Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Email
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      freshers.frontier@college.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Organizers
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Student Innovation Committee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center md:text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Freshers Frontier
                </span>
              </div>
              <p className="text-sm mb-2">Exclusively for First-Year Students 2025 Admission</p>
              <p className="text-xs opacity-75">
                © Coding Club of RVCE. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-700/50' 
              : 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'
          }`}>
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-ping"></div>
            <span className={`text-sm font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Innovation starts with a single idea
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};