import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Castle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(243, 229, 200, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(168, 122, 30, 0.25)',
      }}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--saffron), var(--maroon))' }}>
              <Castle className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-wide" style={{ color: 'var(--ink)' }}>
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
                    color: active ? 'var(--maroon)' : 'var(--ink-soft)',
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
                color: 'var(--ink)',
                border: '1px solid rgba(168, 122, 30, 0.4)',
              }}
            >
              {language === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1" style={{ color: 'var(--ink)' }}>
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
