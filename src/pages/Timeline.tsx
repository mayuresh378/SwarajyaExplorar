import { Link } from 'react-router-dom';
import { timelineEvents } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
          {t({ mr: 'इतिहास', en: 'History' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.swarajyaTimeline)}</h1>
        <p className="text-stone-500 mt-2">{t(ui.timelineDesc)}</p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/50 via-amber-700/30 to-transparent -translate-x-1/2"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-[#0f0c08] -translate-x-1/2 z-10"></div>

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="heritage-card-bg rounded-lg p-5 hover-glow transition-all duration-300">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-900/40 text-amber-400 border border-amber-700/30 rounded text-xs font-bold mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-amber-100">
                    <Link to={`/fort/${event.fortId}`} className="hover:text-amber-300 transition-colors">
                      {t(event.fortName)}
                    </Link>
                  </h3>
                  <p className="text-sm text-stone-400 mt-1">{t(event.event)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
