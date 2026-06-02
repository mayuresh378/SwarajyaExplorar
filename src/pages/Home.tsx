import { Link } from 'react-router-dom';
import { Castle, Map, Clock, Compass, Mountain, Shield, Swords, BookOpen, ChevronRight } from 'lucide-react';
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
    <div className="heritage-dark">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raigad_Fort_Aerial.jpg/1280px-Raigad_Fort_Aerial.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c08] via-transparent to-black/30"></div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-amber-600/30 rounded-tl-lg"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-amber-600/30 rounded-br-lg"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
              <Shield className="w-4 h-4 text-amber-500" />
              <span className="text-amber-400 font-medium text-xs uppercase tracking-[0.3em]">
                {t({ mr: 'वारसा शोधा', en: 'Explore the Legacy' })}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight text-white">
              {t(ui.heroTitle)}
            </h1>

            <p className="mt-8 text-base md:text-lg text-stone-400 max-w-xl leading-relaxed">
              {t(ui.heroSubtitle)}
            </p>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link to="/forts" className="btn-primary">
                {t(ui.exploreForts)}
              </Link>
              <Link to="/quiz" className="btn-gold">
                {t({ mr: 'प्रश्नमंजुषा', en: 'Take Quiz' })}
              </Link>
              <Link to="/map" className="btn-outline">
                {t(ui.viewMap)}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 decorative-line"></div>
      </section>

      {/* Daily History */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="parchment-bg rounded-lg p-8 hover-glow transition-all duration-500">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-amber-900/30 border border-amber-700/30 flex items-center justify-center shrink-0">
              <span className="text-3xl">📜</span>
            </div>
            <div>
              <p className="text-amber-500 text-xs uppercase tracking-[0.2em] font-semibold">{t(ui.dailyHistory)}</p>
              <p className="text-2xl font-bold text-amber-100 mt-2">
                {dailyEvent.year} — {t(dailyEvent.title)}
              </p>
              <p className="text-stone-400 mt-2 leading-relaxed">{t(dailyEvent.description)}</p>
              {dailyEvent.relatedFortId && (
                <Link to={`/fort/${dailyEvent.relatedFortId}`} className="inline-flex items-center gap-1 mt-4 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors">
                  {t({ mr: 'किल्ला पहा', en: 'View Fort' })} <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stone-texture">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: forts.length.toString(), label: t(ui.fortsListed), icon: '🏰' },
              { value: new Set(forts.map(f => f.district.en)).size.toString(), label: t(ui.districts), icon: '📍' },
              { value: '१६४३', label: t(ui.swarajyaFounded), icon: '⚔️' },
              { value: '१६७४', label: t(ui.coronationYear), icon: '👑' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <span className="text-3xl block mb-2">{stat.icon}</span>
                <p className="text-4xl font-black gold-text">{stat.value}</p>
                <p className="text-xs text-stone-500 mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {t({ mr: 'वैशिष्ट्ये', en: 'Features' })}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.whatToExplore)}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Castle, title: t(ui.featureFortExplorer), desc: t(ui.featureFortExplorerDesc) },
            { icon: Map, title: t(ui.featureMap), desc: t(ui.featureMapDesc) },
            { icon: Mountain, title: t(ui.featureTrek), desc: t(ui.featureTrekDesc) },
            { icon: Clock, title: t(ui.featureTimeline), desc: t(ui.featureTimelineDesc) },
            { icon: Compass, title: t(ui.featureWeather), desc: t(ui.featureWeatherDesc) },
            { icon: Swords, title: t(ui.featurePassport), desc: t(ui.featurePassportDesc) },
          ].map((feature, i) => (
            <div key={i} className="heritage-card-bg rounded-lg p-6 hover-glow transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-amber-900/30 border border-amber-700/20 flex items-center justify-center mb-4 group-hover:border-amber-600/40 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-bold text-amber-100 mb-2">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="decorative-divider max-w-7xl mx-auto px-4">
        <span className="text-amber-600">✦</span>
      </div>

      {/* Featured Forts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
              {t({ mr: 'संग्रह', en: 'Collection' })}
            </p>
            <h2 className="text-3xl font-bold text-amber-100">{t(ui.featuredForts)}</h2>
          </div>
          <Link to="/forts" className="flex items-center gap-1 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors">
            {t(ui.viewAll)} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredForts.map(fort => (
            <FortCard key={fort.id} fort={fort} />
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-lg overflow-hidden glow-border">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-orange-900/10 to-amber-900/20"></div>
          <div className="relative p-12 md:p-16 text-center">
            <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-amber-100 mb-3">
              {t({ mr: 'तुमचे ज्ञान तपासा!', en: 'Test Your Knowledge!' })}
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto mb-8">
              {t({ mr: 'स्वराज्याच्या इतिहासावर आधारित प्रश्नमंजुषा खेळा.', en: 'Play the quiz based on the history of Swarajya.' })}
            </p>
            <Link to="/quiz" className="btn-gold inline-block">
              {t({ mr: 'प्रश्नमंजुषा सुरू करा', en: 'Start Quiz' })}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
              <Castle className="w-4 h-4 text-amber-100" />
            </div>
            <span className="text-amber-200 font-bold text-lg">{t(ui.heroTitle)}</span>
          </div>
          <p className="text-sm text-stone-500 max-w-md mx-auto">{t(ui.footerDesc)}</p>
          <div className="decorative-line w-24 mx-auto my-6"></div>
          <p className="text-xs text-stone-600">{t(ui.footerCopyright)}</p>
        </div>
      </footer>
    </div>
  );
}
