import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, Mountain, BookOpen, Compass, Map as MapIcon, ChevronRight, ChevronDown, Star, Castle } from 'lucide-react';
import { forts } from '../data/forts';
import { getDailyHistory } from '../data/dailyHistory';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortCard from '../components/FortCard';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { Particles } from '../components/Particles';
import TreasuresShowcase from '../components/TreasuresShowcase';
import FAQ from '../components/FAQ';
import {
  CrossedSwordsOrnament,
  BhagwaFlag,
  FortSilhouette,
  Rajmudra,
  MaharashtraMapSilhouette,
  OrnamentalDivider,
  CornerOrnament,
  ShivajiCrown,
  BhavaniTalwar,
  MarathaShield,
  ShivajiSilhouette,
} from '../components/Ornaments';
import {
  AncientCompass,
  HandDrawnFort,
  SwarajyaMap,
  MountainRidge,
  ManuscriptCorner,
  RouteLines,
} from '../components/HeritageElements';

export default function Home() {
  const { t } = useLanguage();
  const featuredForts = forts.slice(0, 3);
  const dailyEvent = getDailyHistory();

  return (
    <div className="overflow-hidden">
      {/* ============ CINEMATIC HERO ============ */}
      <section className="relative min-h-screen flex items-center">
        {/* Layer 1: Dark stone texture base */}
        <div className="absolute inset-0 hero-stone-texture"></div>

        {/* Layer 2: Swarajya map watermark */}
        <div className="absolute inset-0 hero-map-watermark opacity-[0.07] animate-fog-slow"></div>

        {/* Layer 3: Cinematic fort photography */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile: full background */}
          <div className="absolute inset-0 animate-ken-burns md:hidden">
            <img
              src="/hero-shivaji-silhouette.jpeg"
              alt="Chhatrapati Shivaji Maharaj"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Desktop: anchored to the right as a cinematic focal point */}
          <div className="absolute inset-y-0 right-0 w-full md:w-2/5 hidden md:block opacity-80">
            <div className="absolute inset-0 animate-ken-burns">
              <img
                src="/hero-shivaji-silhouette.jpeg"
                alt="Chhatrapati Shivaji Maharaj"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Cinematic color grade + depth blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-slate-900/40"></div>
          {/* Mountain depth vignette */}
          <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 220px 70px rgba(15, 23, 42, 0.85)' }}></div>
        </div>

        {/* Golden sunrise lighting */}
        <div className="absolute inset-0 hero-sunrise"></div>

        {/* Layer 4: Atmospheric fog */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 hero-fog animate-fog"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 hero-fog animate-fog-slow"></div>

        {/* Parchment grain */}
        <div className="absolute inset-0 hero-parchment opacity-60"></div>

        {/* Floating golden particles */}
        <Particles count={20} />

        {/* Bhagwa flags as decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:block absolute right-[8%] top-[18%] z-10"
        >
          <BhagwaFlag className="w-12 h-20 drop-shadow-lg animate-fog-slow" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden lg:block absolute right-[18%] top-[35%] z-10"
        >
          <BhagwaFlag className="w-10 h-16 drop-shadow-lg animate-fog opacity-80" />
        </motion.div>

        {/* Hand-drawn Raigad fort sketch in hero */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.65, x: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="hidden lg:block absolute right-[5%] bottom-[18%] w-[420px] h-[250px] pointer-events-none z-[2]"
          style={{ color: 'var(--gold-bright)' }}
        >
          <HandDrawnFort className="w-full h-full" />
        </motion.div>

        {/* Ancient compass corner */}
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ delay: 1.8, duration: 2 }}
          className="hidden md:block absolute right-8 top-24 w-32 h-32 pointer-events-none z-[2]"
          style={{ color: 'var(--gold-bright)' }}
        >
          <AncientCompass className="w-full h-full" />
        </motion.div>

        {/* Content */}
        <div className="container-premium relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <CrossedSwordsOrnament className="w-24 h-16" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-5"
            >
              <span className="text-base md:text-lg italic" style={{ color: 'var(--gold-bright)', fontFamily: "'Playfair Display', serif" }}>
                {t({ mr: 'आपला इतिहास. आपला अभिमान.', en: 'Our History. Our Pride.' })}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-10 h-px" style={{ background: 'linear-gradient(90deg, var(--gold-bright), transparent)' }}></span>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: 'var(--gold-bright)' }}>{t({ mr: 'डिजिटल वारसा अनुभव', en: 'Digital Heritage Experience' })}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.0] text-white"
              style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
            >
              {t({ mr: 'स्वराज्याचा', en: 'Explore the' })}<br />
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t({ mr: 'वारसा शोधा', en: 'Legacy of Swarajya' })}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              {t({ mr: 'महाराष्ट्राच्या महान किल्ल्यांचा, कथांचा, लढायांचा आणि वारसा अनुभवांचा प्रवास.', en: "Journey through Maharashtra's greatest forts, stories, battles, and heritage experiences." })}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link to="/forts" className="btn-primary">{t(ui.exploreForts)}</Link>
              <Link to="/map" className="btn-glass">{t({ mr: 'नकाशा पहा', en: 'View Map' })}</Link>
            </motion.div>

            {/* Quick category chips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {[
                { to: '/forts', label: t({ mr: 'वारसा · ३५०+ गडकिल्ले', en: 'Heritage · 350+ Forts' }) },
                { to: '/timeline', label: t({ mr: 'इतिहास · स्वराज्य कालरेषा', en: 'History · Swarajya Timeline' }) },
                { to: '/heroes', label: t({ mr: 'वीर · योद्ध्यांच्या गाथा', en: 'Heroes · Warrior Tales' }) },
              ].map((chip, i) => (
                <Link
                  key={i}
                  to={chip.to}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
                  style={{ background: 'rgba(251, 245, 230, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', color: '#FBF5E6', backdropFilter: 'blur(8px)' }}
                >
                  {chip.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{t({ mr: 'स्क्रोल', en: 'Scroll' })}</span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" style={{ color: 'var(--gold)' }} />
        </motion.div>

        {/* Fort silhouette rising from below */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none" style={{ color: 'var(--maroon-deep)' }}>
          <FortSilhouette className="w-full h-full" />
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[color:var(--parchment)] to-transparent"></div>
      </section>

      {/* ============ STATISTICS ============ */}
      <section className="py-24 section-rich relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-40"></div>
        {/* Background Rajmudra watermark */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.07] pointer-events-none">
          <Rajmudra className="w-full h-full" />
        </div>
        <div className="absolute -right-16 -top-16 w-[300px] h-[300px] opacity-[0.08] pointer-events-none rotate-12">
          <MarathaShield className="w-full h-full" />
        </div>
        <div className="container-premium relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { end: 300, suffix: '+', label: t({ mr: 'किल्ले', en: 'Forts' }) },
              { end: 50000, suffix: '+', label: t({ mr: 'अभ्यागत', en: 'Visitors' }) },
              { end: 3, suffix: '', label: t({ mr: 'भाषा', en: 'Languages' }) },
              { end: 1000, suffix: '+', label: t({ mr: 'ऐतिहासिक नोंदी', en: 'Historical Records' }) },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gold-text font-display">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-ink-soft mt-3 uppercase tracking-wider font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORYTELLING ============ */}
      <section className="section-spacing relative overflow-hidden">
        {/* MASSIVE Swarajya map watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]" style={{ color: 'var(--maroon)' }}>
          <SwarajyaMap className="w-[1200px] h-[800px] max-w-none" />
        </div>
        {/* Ancient compass small corner */}
        <div className="absolute top-12 right-12 w-32 h-32 opacity-25 pointer-events-none" style={{ color: 'var(--gold)' }}>
          <AncientCompass className="w-full h-full" />
        </div>
        <div className="container-premium relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden glow-saffron">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg" alt="" className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 glass-surface rounded-2xl p-6 max-w-[240px]">
                  <p className="text-4xl font-bold gold-text font-display">१६७४</p>
                  <p className="text-sm text-ink-soft mt-1">{t({ mr: 'रायगडावर राज्याभिषेक', en: 'Coronation at Raigad' })}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="eyebrow mb-5">{t({ mr: 'आमची कथा', en: 'Our Story' })}</p>
              <h2 className="heading-lg mb-6">
                {t({ mr: 'इतिहास जिवंत करणे', en: 'Bringing History to Life' })}
              </h2>
              <p className="text-ink-soft leading-relaxed text-lg mb-6">
                {t({ mr: 'स्वराज्य एक्सप्लोरर हे महाराष्ट्राच्या किल्ल्यांना समर्पित एक डिजिटल वारसा व्यासपीठ आहे. प्रत्येक किल्ला एक कथा सांगतो — शौर्याची, बलिदानाची आणि स्वराज्याच्या स्वप्नाची.', en: 'Swarajya Explorer is a digital heritage platform dedicated to the forts of Maharashtra. Each fort tells a story — of valor, sacrifice, and the dream of self-rule.' })}
              </p>
              <p className="text-ink-soft leading-relaxed text-lg mb-8">
                {t({ mr: 'इंटरॅक्टिव्ह नकाशे, ऐतिहासिक कथा आणि ट्रेकिंग मार्गदर्शनासह, आम्ही भूतकाळ आणि वर्तमान यांना जोडतो.', en: 'With interactive maps, historical narratives, and trekking guidance, we bridge the past and present.' })}
              </p>
              <Link to="/timeline" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: 'var(--maroon)' }}>
                {t({ mr: 'कालरेषा एक्सप्लोर करा', en: 'Explore the Timeline' })} <ChevronRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Mountain Ridge Divider Band === */}
      <div className="relative h-32 overflow-hidden">
        {/* Route lines on top */}
        <div className="absolute inset-0 opacity-50" style={{ color: 'var(--maroon)' }}>
          <RouteLines className="w-full h-full" />
        </div>
        {/* Sahyadri mountains rising */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ color: 'var(--maroon-rich)' }}>
          <MountainRidge className="w-full h-full" />
        </div>
      </div>

      {/* ============ FEATURED FORTS ============ */}
      <section className="section-spacing relative overflow-hidden">
        {/* Floating Bhavani Talwars on the sides */}
        <div className="hidden lg:block absolute left-4 top-32 w-12 h-80 opacity-30 pointer-events-none">
          <BhavaniTalwar className="w-full h-full" />
        </div>
        <div className="hidden lg:block absolute right-4 top-32 w-12 h-80 opacity-30 pointer-events-none scale-x-[-1]">
          <BhavaniTalwar className="w-full h-full" />
        </div>

        <div className="container-premium relative">
          {/* Crown ornament header */}
          <div className="flex justify-center mb-8">
            <ShivajiCrown className="w-24 h-16 opacity-90" />
          </div>
          <div className="mb-16">
            <OrnamentalDivider />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <Reveal>
              <p className="eyebrow mb-4">{t({ mr: 'क्युरेटेड संग्रह', en: 'Curated Collection' })}</p>
              <h2 className="heading-lg">{t(ui.featuredForts)}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/forts" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: 'var(--maroon)' }}>
                {t(ui.viewAll)} <ChevronRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredForts.map((fort, i) => (
              <FortCard key={fort.id} fort={fort} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TREASURES OF SWARAJYA ============ */}
      <TreasuresShowcase />

      {/* ============ HERITAGE EXPERIENCES ============ */}
      <section className="section-spacing section-dark relative">
        <div className="absolute inset-0 pattern-dark opacity-60"></div>
        <div className="container-premium relative">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4 justify-center inline-flex items-center gap-2" style={{ color: 'var(--gold-bright)' }}>{t({ mr: 'अनुभव', en: 'Experiences' })}</p>
              <h2 className="heading-lg mb-4" style={{ color: 'var(--surface)' }}>{t({ mr: 'वारसा अनुभव', en: 'Heritage Experiences' })}</h2>
              <p className="text-lg" style={{ color: 'rgba(255, 246, 227, 0.7)' }}>{t({ mr: 'इतिहास अनुभवण्याचे अनेक मार्ग', en: 'Multiple ways to experience history' })}</p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Headphones, title: t(ui.expAudio), desc: t(ui.expAudioDesc) },
              { icon: Mountain, title: t(ui.expTrek), desc: t(ui.expTrekDesc) },
              { icon: BookOpen, title: t(ui.expStories), desc: t(ui.expStoriesDesc) },
              { icon: Compass, title: t(ui.expVirtual), desc: t(ui.expVirtualDesc) },
              { icon: MapIcon, title: t(ui.expMaps), desc: t(ui.expMapsDesc) },
              { icon: Castle, title: t(ui.featurePassport), desc: t(ui.featurePassportDesc) },
            ].map((exp, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl p-8 h-full group transition-all duration-500 hover:-translate-y-1" style={{ background: 'rgba(255, 246, 227, 0.04)', border: '1px solid rgba(212, 164, 55, 0.2)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(212, 164, 55, 0.25), rgba(194, 65, 12, 0.15))', border: '1px solid rgba(212, 164, 55, 0.4)' }}>
                    <exp.icon className="w-6 h-6" style={{ color: 'var(--gold-bright)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--surface)' }}>{exp.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255, 246, 227, 0.7)' }}>{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DAILY HISTORY ============ */}
      <section className="section-spacing relative">
        <div className="container-premium">
          <Reveal>
            <div className="glass-surface rounded-3xl p-10 md:p-14 relative overflow-hidden">
              {/* Rajmudra emblem watermark */}
              <div className="absolute -right-8 -top-8 w-48 h-48 opacity-[0.08] pointer-events-none">
                <Rajmudra className="w-full h-full" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--saffron), transparent)' }}></div>
              {/* Corner ornaments - manuscript style */}
              <div className="absolute top-3 left-3 w-12 h-12 opacity-50" style={{ color: 'var(--gold)' }}>
                <ManuscriptCorner className="w-full h-full" />
              </div>
              <div className="absolute top-3 right-3 w-12 h-12 opacity-50 scale-x-[-1]" style={{ color: 'var(--gold)' }}>
                <ManuscriptCorner className="w-full h-full" />
              </div>
              <div className="absolute bottom-3 left-3 w-12 h-12 opacity-50 scale-y-[-1]" style={{ color: 'var(--gold)' }}>
                <ManuscriptCorner className="w-full h-full" />
              </div>
              <div className="absolute bottom-3 right-3 w-12 h-12 opacity-50 -scale-x-100 -scale-y-100" style={{ color: 'var(--gold)' }}>
                <ManuscriptCorner className="w-full h-full" />
              </div>
              <div className="relative flex flex-col md:flex-row items-start gap-8">
                <div className="shrink-0">
                  <Rajmudra className="w-20 h-20" />
                </div>
                <div>
                  <p className="eyebrow mb-3">{t(ui.dailyHistory)}</p>
                  <h3 className="text-3xl font-bold text-ink mb-3">{dailyEvent.year} — {t(dailyEvent.title)}</h3>
                  <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">{t(dailyEvent.description)}</p>
                  {dailyEvent.relatedFortId && (
                    <Link to={`/fort/${dailyEvent.relatedFortId}`} className="inline-flex items-center gap-2 mt-6 text-sm font-semibold hover:gap-3 transition-all" style={{ color: 'var(--maroon)' }}>
                      {t({ mr: 'किल्ला पहा', en: 'View Fort' })} <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Fort Skyline Divider Band === */}
      <div className="relative h-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, transparent 0%, var(--parchment-2) 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ color: 'var(--maroon-rich)' }}>
          <FortSilhouette className="w-full h-full" />
        </div>
      </div>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-spacing section-rich relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30"></div>
        {/* Background shield */}
        <div className="absolute -right-20 top-10 w-[280px] h-[350px] opacity-[0.08] pointer-events-none">
          <MarathaShield className="w-full h-full" />
        </div>
        {/* Background bhagwa flag */}
        <div className="absolute -left-12 bottom-10 w-[200px] h-[280px] opacity-[0.1] pointer-events-none">
          <BhagwaFlag className="w-full h-full" />
        </div>
        <div className="container-premium relative">
          <div className="text-center mb-16">
            <Reveal>
              {/* Crossed swords header */}
              <div className="flex justify-center mb-6">
                <CrossedSwordsOrnament className="w-20 h-14" />
              </div>
              <p className="eyebrow mb-4 justify-center">{t({ mr: 'प्रशंसापत्रे', en: 'Testimonials' })}</p>
              <h2 className="heading-lg">{t({ mr: 'लोक काय म्हणतात', en: 'What People Say' })}</h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: t({ mr: 'महाराष्ट्राच्या किल्ल्यांसाठी सर्वोत्तम डिजिटल मार्गदर्शक.', en: 'The best digital guide for Maharashtra forts.' }), author: t({ mr: 'महाराष्ट्र वारसा समिती', en: 'Maharashtra Heritage Committee' }) },
              { quote: t({ mr: 'विद्यार्थ्यांसाठी इतिहास शिकण्याचे उत्कृष्ट साधन.', en: 'An excellent tool for students to learn history.' }), author: t({ mr: 'शिक्षण संस्था', en: 'Educational Institution' }) },
              { quote: t({ mr: 'ट्रेकर्ससाठी अत्यावश्यक. नकाशे आणि माहिती अप्रतिम.', en: 'Essential for trekkers. Maps and info are superb.' }), author: t({ mr: 'सह्याद्री ट्रेकर्स', en: 'Sahyadri Trekkers' }) },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="card-premium p-8 h-full">
                  <div className="flex gap-1 mb-5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" style={{ color: 'var(--gold)' }} />)}
                  </div>
                  <blockquote className="text-lg text-ink leading-relaxed italic mb-6">"{item.quote}"</blockquote>
                  <p className="text-sm font-semibold" style={{ color: 'var(--maroon)' }}>— {item.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-spacing">
        <div className="container-premium">
          <Reveal>
            <div className="rounded-3xl overflow-hidden relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sinhagad_Fort_Pune.jpg/1280px-Sinhagad_Fort_Pune.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(153, 27, 27, 0.6))' }}></div>
              <div className="relative px-8 py-20 md:py-28 text-center">
                <h2 className="heading-lg mb-5">{t({ mr: 'तुमचा प्रवास आज सुरू करा', en: 'Start Your Journey Today' })}</h2>
                <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">{t({ mr: 'स्वराज्याच्या वारशाचा शोध घ्या. किल्ले एक्सप्लोर करा, ट्रेक प्लॅन करा.', en: 'Discover the legacy of Swarajya. Explore forts, plan treks.' })}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/forts" className="btn-primary">{t(ui.exploreForts)}</Link>
                  <Link to="/quiz" className="btn-gold">{t({ mr: 'प्रश्नमंजुषा', en: 'Take Quiz' })}</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="pt-20 pb-10" style={{ background: 'var(--maroon-deep)' }}>
      <div className="container-premium">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--gold-bright), var(--gold))' }}>
                <Castle className="w-5 h-5" style={{ color: 'var(--maroon-deep)' }} />
              </div>
              <span className="font-display text-lg font-bold" style={{ color: 'var(--parchment)' }}>{t(ui.heroTitle)}</span>
            </div>
            <p className="leading-relaxed max-w-sm mb-6" style={{ color: 'rgba(243, 229, 200, 0.6)' }}>
              {t({ mr: 'महाराष्ट्राच्या ऐतिहासिक किल्ल्यांचा डिजिटल वारसा अनुभव.', en: "A digital heritage experience for Maharashtra's historic forts." })}
            </p>
            <div className="flex gap-3">
              {['twitter', 'instagram', 'youtube', 'facebook'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer" style={{ background: 'rgba(243, 229, 200, 0.08)', color: 'rgba(243, 229, 200, 0.7)' }}>
                  <span className="text-xs uppercase">{s[0]}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'var(--gold-bright)' }}>{t({ mr: 'एक्सप्लोर', en: 'Explore' })}</h4>
            <ul className="space-y-3">
              {[{ to: '/forts', label: t(ui.forts) }, { to: '/map', label: t(ui.map) }, { to: '/timeline', label: t(ui.timeline) }, { to: '/heroes', label: t(ui.heroes) }].map(l => (
                <li key={l.to}><Link to={l.to} className="text-sm transition-colors" style={{ color: 'rgba(243, 229, 200, 0.6)' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'var(--gold-bright)' }}>{t({ mr: 'न्यूजलेटर', en: 'Newsletter' })}</h4>
            <p className="text-sm mb-4" style={{ color: 'rgba(243, 229, 200, 0.6)' }}>{t({ mr: 'नवीन किल्ले आणि कथांसाठी सदस्यता घ्या.', en: 'Subscribe for new forts and stories.' })}</p>
            <div className="flex gap-2">
              <input type="email" placeholder={t({ mr: 'ईमेल', en: 'Email' })} className="flex-1 px-4 py-2.5 rounded-lg text-sm focus:outline-none" style={{ background: 'rgba(243, 229, 200, 0.1)', border: '1px solid rgba(243, 229, 200, 0.2)', color: 'var(--parchment)' }} />
              <button className="px-4 py-2.5 rounded-lg text-sm font-semibold" style={{ background: 'var(--gold-bright)', color: 'var(--maroon-deep)' }}>→</button>
            </div>
          </div>
        </div>
        <div className="mb-8" style={{ height: '1px', background: 'rgba(243, 229, 200, 0.15)' }}></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(243, 229, 200, 0.5)' }}>© 2024 {t(ui.heroTitle)}. {t({ mr: 'सर्व हक्क राखीव.', en: 'All rights reserved.' })}</p>
          <div className="flex gap-6">
            <span className="text-xs cursor-pointer" style={{ color: 'rgba(243, 229, 200, 0.5)' }}>{t({ mr: 'गोपनीयता', en: 'Privacy' })}</span>
            <span className="text-xs cursor-pointer" style={{ color: 'rgba(243, 229, 200, 0.5)' }}>{t({ mr: 'अटी', en: 'Terms' })}</span>
            <span className="text-xs cursor-pointer" style={{ color: 'rgba(243, 229, 200, 0.5)' }}>{t({ mr: 'संपर्क', en: 'Contact' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
