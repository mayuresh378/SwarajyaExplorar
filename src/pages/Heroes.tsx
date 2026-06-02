import { Link } from 'react-router-dom';
import { heroes } from '../data/heroes';
import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Heroes() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
          {t({ mr: 'महान योद्धे', en: 'Great Warriors' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.heroesTitle)}</h1>
        <p className="text-stone-500 mt-3">{t(ui.heroesDesc)}</p>
      </div>

      <div className="space-y-6">
        {heroes.map((hero) => {
          const relatedFortData = forts.filter(f => hero.relatedForts.includes(f.id));

          return (
            <div key={hero.id} className="heritage-card-bg rounded-lg overflow-hidden hover-glow transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-64 h-72 md:h-auto shrink-0 relative">
                  <img src={hero.image} alt={t(hero.name)} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1714] hidden md:block"></div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-amber-100">{t(hero.name)}</h2>
                      <p className="text-amber-500 font-medium text-sm mt-0.5">{t(hero.title)}</p>
                    </div>
                    {hero.birthYear && (
                      <span className="text-xs text-stone-500 bg-stone-800/50 border border-stone-700/30 px-2 py-1 rounded">
                        {hero.birthYear}–{hero.deathYear}
                      </span>
                    )}
                  </div>

                  <p className="text-stone-400 mt-4 leading-relaxed text-sm">{t(hero.biography)}</p>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">{t(ui.contributions)}</h4>
                    <ul className="space-y-1.5">
                      {hero.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone-400">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></span>
                          {t(c)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {relatedFortData.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-amber-900/20">
                      <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">{t(ui.relatedForts)}</h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedFortData.map(fort => (
                          <Link key={fort.id} to={`/fort/${fort.id}`}
                            className="px-3 py-1.5 bg-amber-900/20 text-amber-300 rounded-md text-xs font-medium hover:bg-amber-900/40 transition-colors border border-amber-700/20">
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
