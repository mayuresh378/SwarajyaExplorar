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
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-amber-900/20" style={{ background: 'rgba(15, 12, 8, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-900/30">
              <Castle className="w-5 h-5 text-amber-100" />
            </div>
            <span className="text-lg font-bold text-amber-100 tracking-tight group-hover:text-amber-50 transition-colors">
              {language === 'mr' ? 'स्वराज्य' : 'Swarajya'}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'bg-amber-900/40 text-amber-300 border border-amber-700/30'
                    : 'text-stone-400 hover:text-amber-200 hover:bg-amber-900/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
            className="px-3 py-1.5 rounded-md text-xs font-bold text-amber-300 border border-amber-700/40 hover:bg-amber-900/30 hover:border-amber-600/50 transition-all"
          >
            {language === 'mr' ? 'EN' : 'मरा'}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                location.pathname === to
                  ? 'bg-amber-900/40 text-amber-300'
                  : 'text-stone-500 hover:text-amber-300'
              }`}
            >
              <Icon className="w-3 h-3" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
