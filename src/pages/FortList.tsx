import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { forts } from '../data/forts';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';
import FortCard from '../components/FortCard';

export default function FortList() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState<string>('all');
  const [district, setDistrict] = useState<string>('all');

  const districts = useMemo(() => [...new Set(forts.map(f => f.district.en))].sort(), []);

  const filtered = useMemo(() => {
    return forts.filter(fort => {
      const query = search.toLowerCase();
      const matchesSearch = !search ||
        fort.name.mr.toLowerCase().includes(query) ||
        fort.name.en.toLowerCase().includes(query) ||
        fort.district.mr.toLowerCase().includes(query) ||
        fort.district.en.toLowerCase().includes(query);
      const matchesDifficulty = difficulty === 'all' || fort.trekDifficulty === difficulty;
      const matchesDistrict = district === 'all' || fort.district.en === district;
      return matchesSearch && matchesDifficulty && matchesDistrict;
    });
  }, [search, difficulty, district]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="eyebrow mb-2">
          {t({ mr: 'संग्रह', en: 'Collection' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink">{t(ui.fortExplorer)}</h1>
        <p className="text-ink-soft mt-2">{t(ui.fortExplorerDesc)}</p>
      </div>

      {/* Filters */}
      <div className="heritage-card-bg rounded-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
            <input
              type="text"
              placeholder={t(ui.searchPlaceholder)}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[color:rgba(168,122,30,0.3)] rounded-md text-ink placeholder-[color:var(--ink-soft)] focus:outline-none focus:border-[color:var(--saffron)] text-sm"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
                className="pl-10 pr-8 py-2.5 bg-white border border-[color:rgba(168,122,30,0.3)] rounded-md text-ink focus:outline-none focus:border-[color:var(--saffron)] text-sm appearance-none"
              >
                <option value="all">{t(ui.allDifficulties)}</option>
                <option value="Easy">{t(ui.easy)}</option>
                <option value="Medium">{t(ui.medium)}</option>
                <option value="Hard">{t(ui.hard)}</option>
                <option value="Expert">{t(ui.expert)}</option>
              </select>
            </div>
            <select
              value={district}
              onChange={e => setDistrict(e.target.value)}
              className="px-4 py-2.5 bg-white border border-[color:rgba(168,122,30,0.3)] rounded-md text-ink focus:outline-none focus:border-[color:var(--saffron)] text-sm appearance-none"
            >
              <option value="all">{t(ui.allDistricts)}</option>
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="text-sm text-ink-soft mb-6">{filtered.length} {t(ui.fortsFound)}</p>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-ink-soft text-lg">{t(ui.noFortsFound)}</p>
          <button onClick={() => { setSearch(''); setDifficulty('all'); setDistrict('all'); }} className="mt-4 font-medium hover:underline" style={{ color: 'var(--maroon)' }}>
            {t(ui.clearFilters)}
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(fort => (
            <FortCard key={fort.id} fort={fort} />
          ))}
        </div>
      )}
    </div>
  );
}
