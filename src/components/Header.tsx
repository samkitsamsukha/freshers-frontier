import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Themes', href: '#themes' },
    { label: 'Judging', href: '#judging' },
    { label: 'Rewards', href: '#rewards' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-slate-900/90' : 'bg-white/90'
      } backdrop-blur-md border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-row h-16 gap-4">
            <img
              src={'/src/rvce.png'}
              alt="RVCE Logo"
              className={`w-40 ${isDark ? 'invert' : ''}`}
            />
            <div className={`w-[1px] h-16 ${isDark?'bg-white':'bg-black'}`}></div>
            <img
              src={'/src/cc.png'}
              alt="RVCE Logo"
              className={`w-20 scale-150 ${isDark ? '' : 'invert'}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`hover:text-indigo-600 transition-colors duration-200 ${isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 hover:text-indigo-600 transition-colors duration-200 ${isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};