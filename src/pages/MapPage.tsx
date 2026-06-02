import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortMap from '../components/FortMap';

export default function MapPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
          {t({ mr: 'महाराष्ट्र', en: 'Maharashtra' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.fortMap)}</h1>
        <p className="text-stone-500 mt-2">{t(ui.fortMapDesc)}</p>
      </div>
      <div className="rounded-lg overflow-hidden border border-amber-900/20">
        <FortMap forts={forts} className="h-[calc(100vh-220px)]" />
      </div>
    </div>
  );
}
