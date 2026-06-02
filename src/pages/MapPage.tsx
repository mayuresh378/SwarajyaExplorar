import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortMap from '../components/FortMap';

export default function MapPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="eyebrow mb-2">
          {t({ mr: 'महाराष्ट्र', en: 'Maharashtra' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink">{t(ui.fortMap)}</h1>
        <p className="text-ink-soft mt-2">{t(ui.fortMapDesc)}</p>
      </div>
      <div className="rounded-lg overflow-hidden border border-[color:rgba(168,122,30,0.25)]">
        <FortMap forts={forts} className="h-[calc(100vh-220px)]" />
      </div>
    </div>
  );
}
