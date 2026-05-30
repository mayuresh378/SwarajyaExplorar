import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortMap from '../components/FortMap';

export default function MapPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="section-title text-3xl">{t(ui.fortMap)}</h1>
        <p className="text-stone-600 mt-4">{t(ui.fortMapDesc)}</p>
      </div>
      <FortMap forts={forts} className="h-[calc(100vh-220px)]" />
    </div>
  );
}
