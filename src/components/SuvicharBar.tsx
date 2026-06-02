import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { suvichar } from '../data/suvichar';
import { useLanguage } from '../context/LanguageContext';

export default function SuvicharBar() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % suvichar.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-[60] overflow-hidden" style={{ background: 'linear-gradient(90deg, var(--maroon-deep) 0%, var(--maroon-rich) 50%, var(--maroon-deep) 100%)', borderBottom: '1px solid rgba(212, 164, 55, 0.3)' }}>
      <div className="container-premium">
        <div className="flex items-center justify-center gap-3 h-10">
          <Quote className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--gold-bright)' }} />
          <span className="text-[11px] font-semibold uppercase tracking-wider shrink-0" style={{ color: 'var(--gold-bright)' }}>
            {t({ mr: 'सुविचार', en: 'Thought' })}
          </span>
          <span className="hidden sm:block w-px h-4" style={{ background: 'rgba(243,229,200,0.2)' }}></span>
          <div className="relative flex-1 max-w-xl overflow-hidden h-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 text-center text-[12px] md:text-sm truncate"
                style={{ color: 'rgba(243,229,200,0.9)' }}
              >
                {t(suvichar[index])}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
