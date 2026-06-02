import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Castle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

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
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(248, 250, 252, 0.06)' : '1px solid transparent',
      }}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--saffron), var(--maratha-red))' }}>
              <Castle className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-wide text-white">
              {language === 'mr' ? 'स्वराज्य' : 'SWARAJYA'}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  location.pathname === to ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
                style={location.pathname === to ? { background: 'rgba(217, 119, 6, 0.15)' } : {}}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              {language === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-1">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(15, 23, 42, 0.98)', backdropFilter: 'blur(16px)' }}
          >
            <div className="container-premium py-4 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === to ? 'text-white bg-white/8' : 'text-slate-400'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
