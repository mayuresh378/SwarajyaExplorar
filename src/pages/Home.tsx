import { Link } from 'react-router-dom';
import { Castle, Map, Clock, Compass, Mountain, Shield, Swords, BookOpen } from 'lucide-react';
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
      <section className="relative min-h-[85vh] flex items-center heritage-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raigad_Fort_Aerial.jpg/1280px-Raigad_Fort_Aerial.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-orange-500/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-amber-500/10 rounded-full opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-orange-400"></div>
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-medium text-sm uppercase tracking-[0.2em]">
                {t({ mr: 'वारसा शोधा', en: 'Explore the Legacy' })}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              {t(ui.heroTitle)}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
              {t(ui.heroSubtitle)}
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/forts" className="btn-primary text-lg px-8 py-4 rounded-xl">
                🏰 {t(ui.exploreForts)}
              </Link>
              <Link to="/quiz" className="btn-gold text-lg px-8 py-4 rounded-xl">
                ⚔️ {t({ mr: 'प्रश्नमंजुषा', en: 'Take Quiz' })}
              </Link>
              <Link to="/map" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg px-8 py-4 rounded-xl transition-all">
                🗺️ {t(ui.viewMap)}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </section>

      {/* Daily History - आजचा इतिहास */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="parchment-bg rounded-2xl border-2 border-amber-200 p-8 shadow-xl hover-glow transition-all duration-300">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl">📜</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-800">{t(ui.dailyHistory)}</h3>
              <p className="text-2xl font-bold text-stone-800 mt-2">
                {dailyEvent.year} — {t(dailyEvent.title)}
              </p>
              <p className="text-stone-600 mt-2 leading-relaxed">{t(dailyEvent.description)}</p>
              {dailyEvent.relatedFortId && (
                <Link to={`/fort/${dailyEvent.relatedFortId}`} className="inline-flex items-center gap-1 mt-3 text-orange-700 font-medium text-sm hover:underline">
                  {t({ mr: 'किल्ला पहा →', en: 'View Fort →' })}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stone-texture border-y border-amber-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: forts.length.toString(), label: t(ui.fortsListed), icon: '🏰' },
              { value: new Set(forts.map(f => f.district.en)).size.toString(), label: t(ui.districts), icon: '📍' },
              { value: '१६४३', label: t(ui.swarajyaFounded), icon: '⚔️' },
              { value: '१६७४', label: t(ui.coronationYear), icon: '👑' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl hover:bg-white/50 transition-colors">
                <span className="text-2xl">{stat.icon}</span>
                <p className="text-3xl font-bold gold-text mt-2">{stat.value}</p>
                <p className="text-sm text-stone-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="section-title text-3xl mx-auto">{t(ui.whatToExplore)}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: Castle, title: t(ui.featureFortExplorer), desc: t(ui.featureFortExplorerDesc) },
            { icon: Map, title: t(ui.featureMap), desc: t(ui.featureMapDesc) },
            { icon: Mountain, title: t(ui.featureTrek), desc: t(ui.featureTrekDesc) },
            { icon: Clock, title: t(ui.featureTimeline), desc: t(ui.featureTimelineDesc) },
            { icon: Compass, title: t(ui.featureWeather), desc: t(ui.featureWeatherDesc) },
            { icon: Swords, title: t(ui.featurePassport), desc: t(ui.featurePassportDesc) },
          ].map((feature, i) => (
            <div key={i} className="text-center p-8 rounded-2xl hover:bg-amber-50/80 transition-all duration-300 hover-glow group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-orange-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="decorative-divider max-w-7xl mx-auto px-4">
        <span className="text-orange-600 text-xl">⚔️</span>
      </div>

      {/* Featured Forts */}
      <section className="parchment-bg py-20 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="section-title text-3xl">{t(ui.featuredForts)}</h2>
            <Link to="/forts" className="text-orange-700 font-medium hover:underline text-sm flex items-center gap-1">
              {t(ui.viewAll)}
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {featuredForts.map(fort => (
              <FortCard key={fort.id} fort={fort} />
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="heritage-gradient rounded-2xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border border-orange-400/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-amber-400/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative">
            <BookOpen className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">
              {t({ mr: 'तुमचे ज्ञान तपासा!', en: 'Test Your Knowledge!' })}
            </h2>
            <p className="text-stone-300 max-w-lg mx-auto mb-8">
              {t({ mr: 'स्वराज्याच्या इतिहासावर आधारित प्रश्नमंजुषा खेळा आणि तुमचे ज्ञान सिद्ध करा.', en: 'Play the quiz based on the history of Swarajya and prove your knowledge.' })}
            </p>
            <Link to="/quiz" className="btn-gold text-lg px-8 py-4 rounded-xl inline-block">
              ⚔️ {t({ mr: 'प्रश्नमंजुषा सुरू करा', en: 'Start Quiz' })}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="heritage-gradient text-stone-400 py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Castle className="w-7 h-7 text-orange-400" />
            <span className="text-white font-bold text-xl">{t(ui.heroTitle)}</span>
          </div>
          <p className="text-sm max-w-md mx-auto leading-relaxed">{t(ui.footerDesc)}</p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto my-6"></div>
          <p className="text-xs text-stone-500">{t(ui.footerCopyright)}</p>
        </div>
      </footer>
    </div>
  );
}
