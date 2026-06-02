import { Link } from 'react-router-dom';
import { Mountain, Clock, MapPin, Star } from 'lucide-react';
import { Fort } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FortCardProps {
  fort: Fort;
}

const difficultyLabel: Record<string, string> = {
  Easy: 'Easy Trek',
  Medium: 'Moderate Trek',
  Hard: 'Challenging Trek',
  Expert: 'Expert Trek',
};

export default function FortCard({ fort }: FortCardProps) {
  const { t } = useLanguage();

  return (
    <Link to={`/fort/${fort.id}`} className="card group block">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={fort.images[0]}
          alt={t(fort.name)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white/90 border border-white/10">
            {difficultyLabel[fort.trekDifficulty]}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
          <Star className="w-3 h-3 fill-current" style={{ color: 'var(--gold)' }} />
          <span className="text-[10px] font-bold text-white">Heritage Site</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-parchment group-hover:text-white transition-colors leading-tight">
            {t(fort.name)}
          </h3>
          {fort.yearCaptured && (
            <span className="text-xs text-stone-500 shrink-0">{fort.yearCaptured}</span>
          )}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-stone-500 mt-1.5">
          <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--saffron)' }} />
          {t(fort.district)}
        </p>

        {/* Quick Facts */}
        <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/5">
          <span className="flex items-center gap-1.5 text-xs text-stone-400">
            <Mountain className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            {fort.altitude}m
          </span>
          <span className="flex items-center gap-1.5 text-xs text-stone-400">
            <Clock className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            {t(fort.trekDuration)}
          </span>
          <span className="text-xs text-stone-400">
            {t(fort.bestSeason)}
          </span>
        </div>
      </div>
    </Link>
  );
}
