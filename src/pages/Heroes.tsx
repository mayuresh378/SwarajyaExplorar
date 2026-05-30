import { Link } from 'react-router-dom';
import { heroes } from '../data/heroes';
import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Heroes() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="section-title text-3xl">{t(ui.heroesTitle)}</h1>
        <p className="text-stone-600 mt-4">{t(ui.heroesDesc)}</p>
      </div>

      <div className="space-y-8">
        {heroes.map((hero) => {
          const relatedFortData = forts.filter(f => hero.relatedForts.includes(f.id));

          return (
            <div key={hero.id} className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-64 h-64 md:h-auto shrink-0">
                  <img
                    src={hero.image}
                    alt={t(hero.name)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-stone-900">{t(hero.name)}</h2>
                      <p className="text-orange-700 font-medium text-sm mt-0.5">{t(hero.title)}</p>
                    </div>
                    {hero.birthYear && (
                      <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
                        {hero.birthYear}–{hero.deathYear}
                      </span>
                    )}
                  </div>

                  <p className="text-stone-700 mt-4 leading-relaxed text-sm">{t(hero.biography)}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-stone-800 mb-2">{t(ui.contributions)}:</h4>
                    <ul className="space-y-1">
                      {hero.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                          {t(c)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {relatedFortData.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-amber-100">
                      <h4 className="text-sm font-bold text-stone-800 mb-2">{t(ui.relatedForts)}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedFortData.map(fort => (
                          <Link
                            key={fort.id}
                            to={`/fort/${fort.id}`}
                            className="px-3 py-1 bg-orange-50 text-orange-800 rounded-full text-xs font-medium hover:bg-orange-100 transition-colors border border-orange-200"
                          >
                            🏰 {t(fort.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
