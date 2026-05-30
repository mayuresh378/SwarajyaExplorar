import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Clock, Droplets, Calendar, MapPin, Heart, CheckCircle, Bookmark, Tent } from 'lucide-react';
import { forts } from '../data/forts';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import WeatherWidget from '../components/WeatherWidget';
import FortMap from '../components/FortMap';

export default function FortDetail() {
  const { id } = useParams<{ id: string }>();
  const { isVisited, isFavorite, isInWishlist, toggleVisited, toggleFavorite, toggleWishlist } = useUser();
  const { t } = useLanguage();

  const fort = forts.find(f => f.id === id);

  if (!fort) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-stone-900">Fort not found</h1>
        <Link to="/forts" className="mt-4 inline-block text-orange-700 hover:underline">
          {t(ui.backToForts)}
        </Link>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-orange-100 text-orange-800',
    Expert: 'bg-red-100 text-red-800',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/forts" className="inline-flex items-center gap-1 text-stone-600 hover:text-orange-700 mb-6 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" />
        {t(ui.backToForts)}
      </Link>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
        <img src={fort.images[0]} alt={t(fort.name)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[fort.trekDifficulty]}`}>
            {fort.trekDifficulty}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{t(fort.name)}</h1>
          <p className="flex items-center gap-1 text-white/80 mt-1">
            <MapPin className="w-4 h-4" />
            {t(fort.district)}
            {fort.yearCaptured && ` • ${fort.yearCaptured}`}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button onClick={() => toggleVisited(fort.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isVisited(fort.id) ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}>
          <CheckCircle className="w-4 h-4" />
          {isVisited(fort.id) ? t(ui.visited) : t(ui.markVisited)}
        </button>
        <button onClick={() => toggleFavorite(fort.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isFavorite(fort.id) ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}>
          <Heart className={`w-4 h-4 ${isFavorite(fort.id) ? 'fill-current' : ''}`} />
          {isFavorite(fort.id) ? t(ui.favorited) : t(ui.addFavorite)}
        </button>
        <button onClick={() => toggleWishlist(fort.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isInWishlist(fort.id) ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}>
          <Bookmark className={`w-4 h-4 ${isInWishlist(fort.id) ? 'fill-current' : ''}`} />
          {isInWishlist(fort.id) ? t(ui.inWishlist) : t(ui.addWishlist)}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section className="parchment-bg rounded-xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.about)}</h2>
            <p className="text-stone-700 leading-relaxed">{t(fort.description)}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.history)}</h2>
            <p className="text-stone-700 leading-relaxed">{t(fort.history)}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.historicalSignificance)}</h2>
            <p className="text-stone-700 leading-relaxed">{t(fort.significance)}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.keyEvents)}</h2>
            <ul className="space-y-2">
              {fort.keyEvents.map((event, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-700">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 shrink-0"></span>
                  {t(event)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.architectureLabel)}</h2>
            <p className="text-stone-700 leading-relaxed">{t(fort.architecture)}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.strategicSignificance)}</h2>
            <p className="text-stone-700 leading-relaxed">{t(fort.strategicSignificance)}</p>
          </section>

          {/* Photo Gallery */}
          {fort.images.length > 1 && (
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-3">{t(ui.gallery)}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {fort.images.slice(1).map((img, i) => (
                  <img key={i} src={img} alt={`${t(fort.name)} - ${i + 1}`} className="rounded-lg w-full h-40 object-cover border border-amber-100" loading="lazy" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-5">
            <h3 className="font-bold text-stone-900 mb-4">{t(ui.trekInfo)}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-stone-600"><Mountain className="w-4 h-4" /> {t(ui.altitude)}</span>
                <span className="font-semibold text-sm">{fort.altitude}m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-stone-600"><Clock className="w-4 h-4" /> {t(ui.duration)}</span>
                <span className="font-semibold text-sm">{t(fort.trekDuration)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-stone-600"><Calendar className="w-4 h-4" /> {t(ui.bestSeason)}</span>
                <span className="font-semibold text-sm">{t(fort.bestSeason)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-stone-600"><Droplets className="w-4 h-4" /> {t(ui.water)}</span>
                <span className={`font-semibold text-sm ${fort.waterAvailability ? 'text-green-600' : 'text-red-600'}`}>
                  {fort.waterAvailability ? t(ui.waterAvailable) : t(ui.carryWater)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-stone-600"><Tent className="w-4 h-4" /> {t(ui.camping)}</span>
                <span className={`font-semibold text-sm ${fort.campingAllowed ? 'text-green-600' : 'text-stone-500'}`}>
                  {fort.campingAllowed ? t(ui.allowed) : t(ui.notAllowed)}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-amber-100">
                <span className="text-sm text-stone-600">{t(ui.founder)}</span>
                <span className="font-semibold text-sm text-right max-w-[60%]">{t(fort.founder)}</span>
              </div>
            </div>
          </div>

          <WeatherWidget latitude={fort.latitude} longitude={fort.longitude} fortName={t(fort.name)} />

          <div className="rounded-xl overflow-hidden">
            <FortMap forts={[fort]} center={[fort.latitude, fort.longitude]} zoom={12} className="h-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
