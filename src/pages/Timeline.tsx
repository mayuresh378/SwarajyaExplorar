import { Link } from 'react-router-dom';
import { timelineEvents } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="section-title text-3xl">{t(ui.swarajyaTimeline)}</h1>
        <p className="text-stone-600 mt-4">{t(ui.timelineDesc)}</p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-orange-100 -translate-x-1/2 z-10"></div>

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-5 hover:shadow-md transition-shadow">
                  <span className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-800 rounded text-xs font-bold mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-stone-900">
                    <Link to={`/fort/${event.fortId}`} className="hover:text-orange-700 transition-colors">
                      {t(event.fortName)}
                    </Link>
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">{t(event.event)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
