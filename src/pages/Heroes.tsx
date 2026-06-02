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
        <p className="eyebrow mb-2">
          {t({ mr: 'महान योद्धे', en: 'Great Warriors' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink">{t(ui.heroesTitle)}</h1>
        <p className="text-ink-soft mt-3">{t(ui.heroesDesc)}</p>
      </div>

      <div className="space-y-6">
        {heroes.map((hero) => {
          const relatedFortData = forts.filter(f => hero.relatedForts.includes(f.id));

          return (
            <div key={hero.id} className="heritage-card-bg rounded-lg overflow-hidden hover-glow transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-64 h-72 md:h-auto shrink-0 relative">
                  <img src={hero.image} alt={t(hero.name)} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-ink">{t(hero.name)}</h2>
                      <p className="font-medium text-sm mt-0.5" style={{ color: 'var(--maroon)' }}>{t(hero.title)}</p>
                    </div>
                    {hero.birthYear && (
                      <span className="text-xs text-ink-soft px-2 py-1 rounded" style={{ background: 'rgba(168,122,30,0.12)', border: '1px solid rgba(168,122,30,0.25)' }}>
                        {hero.birthYear}–{hero.deathYear}
                      </span>
                    )}
                  </div>

                  <p className="text-ink-soft mt-4 leading-relaxed text-sm">{t(hero.biography)}</p>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--saffron)' }}>{t(ui.contributions)}</h4>
                    <ul className="space-y-1.5">
                      {hero.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--saffron)' }}></span>
                          {t(c)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {relatedFortData.length > 0 && (
                    <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(168,122,30,0.2)' }}>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--saffron)' }}>{t(ui.relatedForts)}</h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedFortData.map(fort => (
                          <Link key={fort.id} to={`/fort/${fort.id}`}
                            className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors" style={{ background: 'rgba(194,65,12,0.1)', color: 'var(--maroon)', border: '1px solid rgba(194,65,12,0.2)' }}>
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
