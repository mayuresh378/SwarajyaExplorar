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
        <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
          {t({ mr: 'संग्रह', en: 'Collection' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.fortExplorer)}</h1>
        <p className="text-stone-500 mt-2">{t(ui.fortExplorerDesc)}</p>
      </div>

      {/* Filters */}
      <div className="heritage-card-bg rounded-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder={t(ui.searchPlaceholder)}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/30 border border-amber-900/30 rounded-md text-amber-100 placeholder-stone-600 focus:outline-none focus:border-amber-600/50 text-sm"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
                className="pl-10 pr-8 py-2.5 bg-black/30 border border-amber-900/30 rounded-md text-amber-100 focus:outline-none focus:border-amber-600/50 text-sm appearance-none"
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
              className="px-4 py-2.5 bg-black/30 border border-amber-900/30 rounded-md text-amber-100 focus:outline-none focus:border-amber-600/50 text-sm appearance-none"
            >
              <option value="all">{t(ui.allDistricts)}</option>
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-500 mb-6">{filtered.length} {t(ui.fortsFound)}</p>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-500 text-lg">{t(ui.noFortsFound)}</p>
          <button onClick={() => { setSearch(''); setDifficulty('all'); setDistrict('all'); }} className="mt-4 text-amber-400 font-medium hover:text-amber-300">
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
