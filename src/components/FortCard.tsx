import { Link } from 'react-router-dom';
import { Mountain, Clock, Droplets, Heart, MapPin } from 'lucide-react';
import { Fort } from '../types';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';

interface FortCardProps {
  fort: Fort;
}

const difficultyColors = {
  Easy: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/30',
  Medium: 'bg-amber-900/60 text-amber-300 border-amber-700/30',
  Hard: 'bg-orange-900/60 text-orange-300 border-orange-700/30',
  Expert: 'bg-red-900/60 text-red-300 border-red-700/30',
};

export default function FortCard({ fort }: FortCardProps) {
  const { isFavorite, toggleFavorite } = useUser();
  const { t } = useLanguage();

  return (
    <div className="card group">
      <div className="relative h-52 overflow-hidden">
        <img
          src={fort.images[0]}
          alt={t(fort.name)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(fort.id); }}
          className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-amber-500/50 transition-all"
          aria-label={isFavorite(fort.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite(fort.id) ? 'fill-amber-400 text-amber-400' : 'text-white/70'}`} />
        </button>

        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${difficultyColors[fort.trekDifficulty]}`}>
          {fort.trekDifficulty}
        </span>

        {/* Fort name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
            {t(fort.name)}
          </h3>
          <p className="flex items-center gap-1 text-xs text-stone-300 mt-1">
            <MapPin className="w-3 h-3" />
            {t(fort.district)}
            {fort.yearCaptured && <span className="ml-2 text-amber-400/70">• {fort.yearCaptured}</span>}
          </p>
        </div>
      </div>

      <Link to={`/fort/${fort.id}`} className="block p-4">
        <p className="text-sm text-stone-400 line-clamp-2 leading-relaxed">{t(fort.description)}</p>

        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-amber-900/20">
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Mountain className="w-3.5 h-3.5 text-amber-600" />
            {fort.altitude}m
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            {t(fort.trekDuration)}
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Droplets className="w-3.5 h-3.5 text-amber-600" />
            {fort.waterAvailability ? '💧' : '⚠️'}
          </span>
        </div>
      </Link>
    </div>
  );
}
