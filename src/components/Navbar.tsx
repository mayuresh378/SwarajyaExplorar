import { Link, useLocation } from 'react-router-dom';
import { Castle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { to: '/', label: t(ui.home) },
    { to: '/forts', label: t(ui.forts) },
    { to: '/map', label: t(ui.map) },
    { to: '/timeline', label: t(ui.timeline) },
    { to: '/heroes', label: t(ui.heroes) },
    { to: '/quiz', label: t({ mr: 'प्रश्नमंजुषा', en: 'Quiz' }) },
    { to: '/passport', label: t(ui.passport) },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5" style={{ background: 'rgba(14, 11, 7, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Castle className="w-5 h-5" style={{ color: 'var(--saffron)' }} />
            <span className="text-base font-bold text-parchment tracking-tight">
              {language === 'mr' ? 'स्वराज्य' : 'Swarajya'}
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-white bg-white/8'
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-stone-300 border border-white/10 hover:border-white/25 hover:text-white transition-all"
            >
              {language === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <button className="hidden md:block px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all" style={{ background: 'var(--saffron)', color: '#000' }}>
              {t({ mr: 'लॉगिन', en: 'Login' })}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden flex items-center gap-1 pb-2 overflow-x-auto">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                location.pathname === to ? 'text-white bg-white/8' : 'text-stone-500 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
