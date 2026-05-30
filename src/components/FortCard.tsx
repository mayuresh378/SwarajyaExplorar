import { Link } from 'react-router-dom';
import { Mountain, Clock, Droplets, Heart, MapPin } from 'lucide-react';
import { Fort } from '../types';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';

interface FortCardProps {
  fort: Fort;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Hard: 'bg-orange-100 text-orange-800',
  Expert: 'bg-red-100 text-red-800',
};

export default function FortCard({ fort }: FortCardProps) {
  const { isFavorite, toggleFavorite } = useUser();
  const { t } = useLanguage();

  return (
    <div className="card group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={fort.images[0]}
          alt={t(fort.name)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(fort.id);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label={isFavorite(fort.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 ${isFavorite(fort.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`}
          />
        </button>
        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[fort.trekDifficulty]}`}>
          {fort.trekDifficulty}
        </span>
      </div>

      <Link to={`/fort/${fort.id}`} className="block p-4">
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
          {t(fort.name)}
        </h3>
        <p className="flex items-center gap-1 text-sm text-stone-500 mt-1">
          <MapPin className="w-3.5 h-3.5" />
          {t(fort.district)}
        </p>
        <p className="text-sm text-stone-600 mt-2 line-clamp-2">{t(fort.description)}</p>

        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-amber-100">
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Mountain className="w-3.5 h-3.5" />
            {fort.altitude}m
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Clock className="w-3.5 h-3.5" />
            {t(fort.trekDuration)}
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Droplets className="w-3.5 h-3.5" />
            {fort.waterAvailability ? '💧' : '⚠️'}
          </span>
        </div>
      </Link>
    </div>
  );
}
