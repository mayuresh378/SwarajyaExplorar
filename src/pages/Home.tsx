import { Link } from 'react-router-dom';
import { Castle, Map, Clock, Compass, Mountain, Swords, ChevronRight, Star } from 'lucide-react';
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
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raigad_Fort_Aerial.jpg/1280px-Raigad_Fort_Aerial.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-transparent to-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-40">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label">
              {t({ mr: 'डिजिटल वारसा अनुभव', en: 'Digital Heritage Experience' })}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
              {t({ mr: 'स्वराज्याचा\nवारसा शोधा', en: 'Discover the\nLegacy of Swarajya' })}
            </h1>

            <p className="mt-8 text-base md:text-lg text-stone-300 leading-relaxed max-w-xl">
              {t({ mr: 'महाराष्ट्राच्या ऐतिहासिक किल्ल्यांचा इंटरॅक्टिव्ह नकाशे, कथा आणि डिजिटल वारसा अनुभवांद्वारे शोध घ्या.', en: 'Explore Maharashtra\'s Historic Forts Through Interactive Maps, Stories, and Digital Heritage Experiences.' })}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/forts" className="btn-primary">
                {t(ui.exploreForts)}
              </Link>
              <Link to="/map" className="btn-outline-light">
                {t({ mr: 'नकाशा पहा', en: 'View Map' })}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0e0b07] to-transparent"></div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section className="section-spacing border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {[
              { value: '300+', label: t({ mr: 'किल्ले दस्तऐवजीकरण', en: 'Forts Documented' }) },
              { value: '50,000+', label: t({ mr: 'मासिक अन्वेषक', en: 'Monthly Explorers' }) },
              { value: '3', label: t({ mr: 'भाषा', en: 'Languages' }) },
              { value: '100+', label: t({ mr: 'ऐतिहासिक कथा', en: 'Historical Stories' }) },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-black gold-text">{stat.value}</p>
                <p className="text-sm text-stone-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DAILY HISTORY ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="parchment-bg rounded-xl p-8 md:p-10 hover-glow transition-all duration-500">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255, 153, 51, 0.1)' }}>
              <span className="text-2xl">📜</span>
            </div>
            <div>
              <p className="section-label">{t(ui.dailyHistory)}</p>
              <p className="text-2xl font-bold text-parchment mt-1">
                {dailyEvent.year} — {t(dailyEvent.title)}
              </p>
              <p className="text-stone-400 mt-3 leading-relaxed">{t(dailyEvent.description)}</p>
              {dailyEvent.relatedFortId && (
                <Link to={`/fort/${dailyEvent.relatedFortId}`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium hover:gap-2 transition-all" style={{ color: 'var(--saffron)' }}>
                  {t({ mr: 'किल्ला पहा', en: 'View Fort' })} <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED FORTS ===== */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="section-label">{t({ mr: 'संग्रह', en: 'Collection' })}</p>
              <h2 className="section-title">{t(ui.featuredForts)}</h2>
            </div>
            <Link to="/forts" className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all" style={{ color: 'var(--saffron)' }}>
              {t(ui.viewAll)} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredForts.map(fort => (
              <FortCard key={fort.id} fort={fort} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="section-spacing border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className="section-label">{t({ mr: 'वैशिष्ट्ये', en: 'Platform Features' })}</p>
            <h2 className="section-title">{t(ui.whatToExplore)}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Castle, title: t(ui.featureFortExplorer), desc: t(ui.featureFortExplorerDesc) },
              { icon: Map, title: t(ui.featureMap), desc: t(ui.featureMapDesc) },
              { icon: Mountain, title: t(ui.featureTrek), desc: t(ui.featureTrekDesc) },
              { icon: Clock, title: t(ui.featureTimeline), desc: t(ui.featureTimelineDesc) },
              { icon: Compass, title: t(ui.featureWeather), desc: t(ui.featureWeatherDesc) },
              { icon: Swords, title: t(ui.featurePassport), desc: t(ui.featurePassportDesc) },
            ].map((feature, i) => (
              <div key={i} className="heritage-card-bg rounded-xl p-7 hover-glow transition-all duration-500 group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(255, 153, 51, 0.08)', border: '1px solid rgba(255, 153, 51, 0.15)' }}>
                  <feature.icon className="w-5 h-5" style={{ color: 'var(--saffron)' }} />
                </div>
                <h3 className="font-semibold text-parchment text-lg mb-2">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-8">
            {t({ mr: 'यांच्यासाठी विश्वसनीय', en: 'Trusted By' })}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              t({ mr: 'वारसा प्रेमी', en: 'Heritage Enthusiasts' }),
              t({ mr: 'ट्रेकिंग समुदाय', en: 'Trekking Communities' }),
              t({ mr: 'शैक्षणिक संस्था', en: 'Educational Institutions' }),
              t({ mr: 'पर्यटन संघटना', en: 'Tourism Organizations' }),
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-stone-400">
                <Star className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--gold)' }} />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-parchment leading-relaxed italic">
            "{t({ mr: 'महाराष्ट्राच्या किल्ल्यांसाठी सर्वोत्तम डिजिटल मार्गदर्शक. प्रत्येक इतिहासप्रेमींसाठी अत्यावश्यक.', en: 'The best digital guide for Maharashtra forts. Essential for every history enthusiast.' })}"
          </blockquote>
          <p className="text-stone-500 mt-6 text-sm">
            — {t({ mr: 'महाराष्ट्र वारसा समिती', en: 'Maharashtra Heritage Committee' })}
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="rounded-2xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.15), rgba(255, 153, 51, 0.1))' }}>
          <div className="absolute inset-0 border border-white/5 rounded-2xl"></div>
          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-parchment mb-4">
              {t({ mr: 'तुमचा प्रवास आज सुरू करा', en: 'Start Your Journey Today' })}
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto mb-8">
              {t({ mr: 'स्वराज्याच्या इतिहासाचा शोध घ्या. किल्ले एक्सप्लोर करा, ट्रेक प्लॅन करा, आणि वारसा जपा.', en: 'Explore the history of Swarajya. Discover forts, plan treks, and preserve heritage.' })}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/forts" className="btn-primary">{t(ui.exploreForts)}</Link>
              <Link to="/quiz" className="btn-gold">{t({ mr: 'प्रश्नमंजुषा', en: 'Take Quiz' })}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Castle className="w-6 h-6" style={{ color: 'var(--saffron)' }} />
                <span className="font-bold text-lg text-parchment">{t(ui.heroTitle)}</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                {t({ mr: 'महाराष्ट्राच्या ऐतिहासिक किल्ल्यांचा डिजिटल वारसा अनुभव. इतिहास, ट्रेकिंग आणि संस्कृती एकत्र.', en: 'A digital heritage experience for Maharashtra\'s historic forts. History, trekking, and culture combined.' })}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-parchment text-sm uppercase tracking-wider mb-4">{t({ mr: 'एक्सप्लोर', en: 'Explore' })}</h4>
              <ul className="space-y-2">
                {[
                  { to: '/forts', label: t(ui.forts) },
                  { to: '/map', label: t(ui.map) },
                  { to: '/timeline', label: t(ui.timeline) },
                  { to: '/heroes', label: t(ui.heroes) },
                ].map(link => (
                  <li key={link.to}><Link to={link.to} className="text-stone-500 text-sm hover:text-stone-300 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-parchment text-sm uppercase tracking-wider mb-4">{t({ mr: 'कंपनी', en: 'Company' })}</h4>
              <ul className="space-y-2">
                <li><span className="text-stone-500 text-sm">{t({ mr: 'आमच्याबद्दल', en: 'About' })}</span></li>
                <li><span className="text-stone-500 text-sm">{t({ mr: 'गोपनीयता धोरण', en: 'Privacy Policy' })}</span></li>
                <li><span className="text-stone-500 text-sm">{t({ mr: 'अटी व शर्ती', en: 'Terms' })}</span></li>
                <li><span className="text-stone-500 text-sm">{t({ mr: 'संपर्क', en: 'Contact' })}</span></li>
              </ul>
            </div>
          </div>
          <div className="decorative-line mt-10 mb-6"></div>
          <p className="text-xs text-stone-600 text-center">
            © 2024 {t(ui.heroTitle)}. {t({ mr: 'सर्व हक्क राखीव.', en: 'All rights reserved.' })}
          </p>
        </div>
      </footer>
    </div>
  );
}
