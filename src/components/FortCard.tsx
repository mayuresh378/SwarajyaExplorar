import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { Fort } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FortCardProps {
  fort: Fort;
  index?: number;
}

const difficultyStyle: Record<string, string> = {
  Easy: 'text-emerald-300 border-emerald-400/20 bg-emerald-400/10',
  Medium: 'text-amber-300 border-amber-400/20 bg-amber-400/10',
  Hard: 'text-orange-300 border-orange-400/20 bg-orange-400/10',
  Expert: 'text-red-300 border-red-400/20 bg-red-400/10',
};

export default function FortCard({ fort, index = 0 }: FortCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link to={`/fort/${fort.id}`} className="card-premium group block h-full">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={fort.images[0]}
            alt={t(fort.name)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${difficultyStyle[fort.trekDifficulty]}`}>
              {fort.trekDifficulty}
            </span>
          </div>

          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="text-2xl font-bold text-white leading-tight">{t(fort.name)}</h3>
            <p className="flex items-center gap-1.5 text-sm text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              {t(fort.district)}
              {fort.yearCaptured && <span style={{ color: 'var(--gold)' }}>• {fort.yearCaptured}</span>}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <p className="text-sm text-ink-soft line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {t(fort.significance)}
          </p>

          <div className="flex items-center gap-5 mt-5 pt-5" style={{ borderTop: '1px solid rgba(168, 122, 30, 0.2)' }}>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Mountain className="w-4 h-4" style={{ color: 'var(--saffron)' }} />
              {fort.altitude}m
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="w-4 h-4" style={{ color: 'var(--saffron)' }} />
              {t(fort.trekDuration)}
            </span>
            <span className="ml-auto flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2" style={{ color: 'var(--maroon)' }}>
              {t({ mr: 'पहा', en: 'Visit' })}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
