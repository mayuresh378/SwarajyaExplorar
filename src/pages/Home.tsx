import { Link } from 'react-router-dom';
import { Castle, Map, Clock, Compass, Mountain, Shield, Swords } from 'lucide-react';
import { forts } from '../data/forts';
import { getDailyHistory } from '../data/dailyHistory';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortCard from '../components/FortCard';

export default function Home() {
  const { t } = useLanguage();
  const featuredForts = forts.slice(0, 3);
  const dailyEvent = getDailyHistory();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative heritage-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raigad_Fort_Aerial.jpg/1280px-Raigad_Fort_Aerial.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-orange-400" />
              <span className="text-orange-300 font-medium text-sm uppercase tracking-wider">
                {t({ mr: 'वारसा शोधा', en: 'Explore the Legacy' })}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t(ui.heroTitle)}
            </h1>
            <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
              {t(ui.heroSubtitle)}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/forts" className="btn-primary text-lg px-6 py-3">
                {t(ui.exploreForts)}
              </Link>
              <Link to="/map" className="btn-secondary text-lg px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                {t(ui.viewMap)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daily History - आजचा इतिहास */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="parchment-bg rounded-xl border border-amber-200 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-3xl">📜</span>
            <div>
              <h3 className="text-lg font-bold text-orange-800">
                {t(ui.dailyHistory)}
              </h3>
              <p className="text-xl font-bold text-stone-800 mt-1">
                {dailyEvent.year} — {t(dailyEvent.title)}
              </p>
              <p className="text-stone-600 mt-1">{t(dailyEvent.description)}</p>
              {dailyEvent.relatedFortId && (
                <Link to={`/fort/${dailyEvent.relatedFortId}`} className="inline-block mt-2 text-orange-700 font-medium text-sm hover:underline">
                  {t({ mr: 'किल्ला पहा →', en: 'View Fort →' })}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-amber-100 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-700">{forts.length}</p>
              <p className="text-sm text-stone-600 mt-1">{t(ui.fortsListed)}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-700">{new Set(forts.map(f => f.district.en)).size}</p>
              <p className="text-sm text-stone-600 mt-1">{t(ui.districts)}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-700">१६४३</p>
              <p className="text-sm text-stone-600 mt-1">{t(ui.swarajyaFounded)}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-700">१६७४</p>
              <p className="text-sm text-stone-600 mt-1">{t(ui.coronationYear)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title text-center mx-auto mb-12">{t(ui.whatToExplore)}</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Castle className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featureFortExplorer)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featureFortExplorerDesc)}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Map className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featureMap)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featureMapDesc)}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featureTrek)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featureTrekDesc)}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featureTimeline)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featureTimelineDesc)}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Compass className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featureWeather)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featureWeatherDesc)}</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Swords className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t(ui.featurePassport)}</h3>
            <p className="text-stone-600 text-sm">{t(ui.featurePassportDesc)}</p>
          </div>
        </div>
      </section>

      {/* Featured Forts */}
      <section className="parchment-bg py-16 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">{t(ui.featuredForts)}</h2>
            <Link to="/forts" className="text-orange-700 font-medium hover:underline text-sm">
              {t(ui.viewAll)}
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {featuredForts.map(fort => (
              <FortCard key={fort.id} fort={fort} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="heritage-gradient text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Castle className="w-6 h-6 text-orange-400" />
            <span className="text-white font-bold text-lg">
              {t(ui.heroTitle)}
            </span>
          </div>
          <p className="text-sm max-w-md mx-auto">{t(ui.footerDesc)}</p>
          <p className="text-xs mt-6 text-stone-500">{t(ui.footerCopyright)}</p>
        </div>
      </footer>
    </div>
  );
}
