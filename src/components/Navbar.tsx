import { Link, useLocation } from 'react-router-dom';
import { Castle, Map, Clock, Compass, Heart, Swords, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { to: '/', label: t(ui.home), icon: Castle },
    { to: '/forts', label: t(ui.forts), icon: Compass },
    { to: '/map', label: t(ui.map), icon: Map },
    { to: '/timeline', label: t(ui.timeline), icon: Clock },
    { to: '/heroes', label: t(ui.heroes), icon: Swords },
    { to: '/quiz', label: t({ mr: 'प्रश्नमंजुषा', en: 'Quiz' }), icon: BookOpen },
    { to: '/passport', label: t(ui.passport), icon: Heart },
  ];

  return (
    <nav className="heritage-gradient text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Castle className="w-8 h-8 text-orange-400" />
            <span className="text-xl font-bold tracking-tight">
              {language === 'mr' ? 'स्वराज्य एक्सप्लोरर' : 'Swarajya Explorer'}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'bg-orange-700 text-white'
                    : 'text-stone-300 hover:bg-stone-700/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-orange-700/80 hover:bg-orange-600 transition-colors border border-orange-500/30"
            >
              {language === 'mr' ? 'EN' : 'मरा'}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden flex items-center gap-1 pb-2 overflow-x-auto">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                location.pathname === to
                  ? 'bg-orange-700 text-white'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
