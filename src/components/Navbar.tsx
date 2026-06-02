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
        background: scrolled ? 'rgba(243, 229, 200, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168, 122, 30, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--saffron), var(--maroon))' }}>
              <Castle className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-wide" style={{ color: scrolled ? 'var(--ink)' : '#FBF5E6' }}>
              {language === 'mr' ? 'स्वराज्य' : 'SWARAJYA'}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={{
                    color: active ? 'var(--maroon)' : (scrolled ? 'var(--ink-soft)' : 'rgba(251, 245, 230, 0.9)'),
                    background: active ? 'rgba(194, 65, 12, 0.12)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'mr' ? 'en' : 'mr')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                color: scrolled ? 'var(--ink)' : '#FBF5E6',
                border: `1px solid ${scrolled ? 'rgba(168, 122, 30, 0.4)' : 'rgba(251, 245, 230, 0.4)'}`,
              }}
            >
              {language === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1" style={{ color: scrolled ? 'var(--ink)' : '#FBF5E6' }}>
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
            style={{ background: 'rgba(243, 229, 200, 0.98)', backdropFilter: 'blur(16px)' }}
          >
            <div className="container-premium py-4 flex flex-col gap-1">
              {links.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                    style={{
                      color: active ? 'var(--maroon)' : 'var(--ink-soft)',
                      background: active ? 'rgba(194, 65, 12, 0.1)' : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
