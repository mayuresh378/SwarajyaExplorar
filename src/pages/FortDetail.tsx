import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Clock, Droplets, Calendar, MapPin, Heart, CheckCircle, Bookmark, Tent, Shield } from 'lucide-react';
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
        <h1 className="text-2xl font-bold text-amber-100">Fort not found</h1>
        <Link to="/forts" className="mt-4 inline-block text-amber-400 hover:text-amber-300">
          {t(ui.backToForts)}
        </Link>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/30',
    Medium: 'bg-amber-900/50 text-amber-300 border border-amber-700/30',
    Hard: 'bg-orange-900/50 text-orange-300 border border-orange-700/30',
    Expert: 'bg-red-900/50 text-red-300 border border-red-700/30',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/forts" className="inline-flex items-center gap-1 text-ink-soft hover:text-[color:var(--maroon)] mb-6 text-sm font-medium transition-colors">
        <ArrowLeft className="w-4 h-4" />
        {t(ui.backToForts)}
      </Link>

      {/* Hero Image */}
      <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden mb-8 glow-saffron">
        <img src={fort.images[0]} alt={t(fort.name)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${difficultyColors[fort.trekDifficulty]}`}>
            {fort.trekDifficulty}
          </span>
        </div>
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{t(fort.name)}</h1>
          <p className="flex items-center gap-2 text-stone-200 mt-2">
            <MapPin className="w-4 h-4" style={{ color: 'var(--gold-bright)' }} />
            {t(fort.district)}
            {fort.yearCaptured && <span style={{ color: 'var(--gold-bright)' }}>• {fort.yearCaptured}</span>}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button onClick={() => toggleVisited(fort.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-medium text-sm transition-all border ${
            isVisited(fort.id) ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-ink-soft border-[color:rgba(168,122,30,0.3)] hover:border-[color:var(--saffron)]'
          }`}>
          <CheckCircle className="w-4 h-4" />
          {isVisited(fort.id) ? t(ui.visited) : t(ui.markVisited)}
        </button>
        <button onClick={() => toggleFavorite(fort.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-medium text-sm transition-all border ${
            isFavorite(fort.id) ? 'bg-red-100 text-red-800 border-red-300' : 'bg-white text-ink-soft border-[color:rgba(168,122,30,0.3)] hover:border-[color:var(--saffron)]'
          }`}>
          <Heart className={`w-4 h-4 ${isFavorite(fort.id) ? 'fill-current' : ''}`} />
          {isFavorite(fort.id) ? t(ui.favorited) : t(ui.addFavorite)}
        </button>
        <button onClick={() => toggleWishlist(fort.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-medium text-sm transition-all border ${
            isInWishlist(fort.id) ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-white text-ink-soft border-[color:rgba(168,122,30,0.3)] hover:border-[color:var(--saffron)]'
          }`}>
          <Bookmark className={`w-4 h-4 ${isInWishlist(fort.id) ? 'fill-current' : ''}`} />
          {isInWishlist(fort.id) ? t(ui.inWishlist) : t(ui.addWishlist)}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section className="parchment-bg rounded-lg p-6">
            <h2 className="text-lg font-bold text-ink mb-3 flex items-center gap-2"><Shield className="w-5 h-5" style={{ color: 'var(--saffron)' }} />{t(ui.about)}</h2>
            <p className="text-ink-soft leading-relaxed">{t(fort.description)}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">{t(ui.history)}</h2>
            <p className="text-ink-soft leading-relaxed">{t(fort.history)}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">{t(ui.historicalSignificance)}</h2>
            <p className="text-ink-soft leading-relaxed">{t(fort.significance)}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">{t(ui.keyEvents)}</h2>
            <ul className="space-y-3">
              {fort.keyEvents.map((event, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-soft">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--saffron)' }}></span>
                  {t(event)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">{t(ui.architectureLabel)}</h2>
            <p className="text-ink-soft leading-relaxed">{t(fort.architecture)}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">{t(ui.strategicSignificance)}</h2>
            <p className="text-ink-soft leading-relaxed">{t(fort.strategicSignificance)}</p>
          </section>

          {/* Photo Gallery */}
          {fort.images.length > 1 && (
            <section>
              <h2 className="text-lg font-bold text-ink mb-4">{t(ui.gallery)}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {fort.images.slice(1).map((img, i) => (
                  <img key={i} src={img} alt={`${t(fort.name)} - ${i + 1}`} className="rounded-lg w-full h-40 object-cover border border-[color:rgba(168,122,30,0.25)] hover:border-[color:var(--saffron)] transition-all" loading="lazy" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass-surface rounded-lg p-5">
            <h3 className="font-bold text-ink mb-4">{t(ui.trekInfo)}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-soft"><Mountain className="w-4 h-4" style={{ color: 'var(--saffron)' }} /> {t(ui.altitude)}</span>
                <span className="font-semibold text-sm text-ink">{fort.altitude}m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-soft"><Clock className="w-4 h-4" style={{ color: 'var(--saffron)' }} /> {t(ui.duration)}</span>
                <span className="font-semibold text-sm text-ink">{t(fort.trekDuration)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-soft"><Calendar className="w-4 h-4" style={{ color: 'var(--saffron)' }} /> {t(ui.bestSeason)}</span>
                <span className="font-semibold text-sm text-ink">{t(fort.bestSeason)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-soft"><Droplets className="w-4 h-4" style={{ color: 'var(--saffron)' }} /> {t(ui.water)}</span>
                <span className={`font-semibold text-sm ${fort.waterAvailability ? 'text-emerald-700' : 'text-red-700'}`}>
                  {fort.waterAvailability ? t(ui.waterAvailable) : t(ui.carryWater)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-soft"><Tent className="w-4 h-4" style={{ color: 'var(--saffron)' }} /> {t(ui.camping)}</span>
                <span className={`font-semibold text-sm ${fort.campingAllowed ? 'text-emerald-700' : 'text-ink-soft'}`}>
                  {fort.campingAllowed ? t(ui.allowed) : t(ui.notAllowed)}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(168,122,30,0.2)' }}>
                <span className="text-sm text-ink-soft">{t(ui.founder)}</span>
                <span className="font-semibold text-sm text-ink text-right max-w-[60%]">{t(fort.founder)}</span>
              </div>
            </div>
          </div>

          <WeatherWidget latitude={fort.latitude} longitude={fort.longitude} fortName={t(fort.name)} />

          <div className="rounded-lg overflow-hidden border border-[color:rgba(168,122,30,0.25)]">
            <FortMap forts={[fort]} center={[fort.latitude, fort.longitude]} zoom={12} className="h-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
