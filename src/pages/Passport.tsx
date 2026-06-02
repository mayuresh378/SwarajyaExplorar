import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Bookmark, Castle } from 'lucide-react';
import { forts } from '../data/forts';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import { ui } from '../data/i18n';

export default function Passport() {
  const { user } = useUser();
  const { t } = useLanguage();

  const visitedForts = forts.filter(f => user.visited.includes(f.id));
  const favoriteForts = forts.filter(f => user.favorites.includes(f.id));
  const wishlistForts = forts.filter(f => user.wishlist.includes(f.id));
  const progress = Math.round((visitedForts.length / forts.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
          {t({ mr: 'तुमचा प्रवास', en: 'Your Journey' })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100">{t(ui.trekPassport)}</h1>
        <p className="text-stone-500 mt-2">{t(ui.passportDesc)}</p>
      </div>

      {/* Progress */}
      <div className="parchment-bg rounded-lg p-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-amber-200">{t(ui.yourProgress)}</h2>
          <span className="text-3xl font-black gold-text">{visitedForts.length}/{forts.length}</span>
        </div>
        <div className="w-full bg-stone-800 rounded-full h-2.5">
          <div className="h-2.5 rounded-full transition-all duration-700" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #d97706, #fbbf24)' }}></div>
        </div>
        <p className="text-sm text-stone-500 mt-3">
          {progress === 0 ? t(ui.startJourney) : progress === 100 ? t(ui.allVisited) : `${progress}${t(ui.complete)}`}
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-200 mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            {t(ui.visitedSection)} ({visitedForts.length})
          </h2>
          {visitedForts.length === 0 ? (
            <p className="text-stone-500 text-sm heritage-card-bg rounded-lg p-4">{t(ui.noVisited)}</p>
          ) : (
            <div className="grid gap-3">{visitedForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}</div>
          )}
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-200 mb-4">
            <Heart className="w-5 h-5 text-red-400" />
            {t(ui.favoritesSection)} ({favoriteForts.length})
          </h2>
          {favoriteForts.length === 0 ? (
            <p className="text-stone-500 text-sm heritage-card-bg rounded-lg p-4">{t(ui.noFavorites)}</p>
          ) : (
            <div className="grid gap-3">{favoriteForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}</div>
          )}
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-200 mb-4">
            <Bookmark className="w-5 h-5 text-blue-400" />
            {t(ui.wishlistSection)} ({wishlistForts.length})
          </h2>
          {wishlistForts.length === 0 ? (
            <p className="text-stone-500 text-sm heritage-card-bg rounded-lg p-4">{t(ui.noWishlist)}</p>
          ) : (
            <div className="grid gap-3">{wishlistForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}</div>
          )}
        </section>
      </div>
    </div>
  );
}

function FortListItem({ fort }: { fort: typeof forts[0] }) {
  const { t } = useLanguage();
  return (
    <Link to={`/fort/${fort.id}`} className="flex items-center gap-4 heritage-card-bg rounded-lg p-3 hover-glow transition-all duration-300">
      <img src={fort.images[0]} alt={t(fort.name)} className="w-16 h-16 rounded-md object-cover" />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-amber-100 truncate">{t(fort.name)}</h3>
        <p className="text-sm text-stone-500">{t(fort.district)} • {fort.trekDifficulty}</p>
      </div>
      <Castle className="w-5 h-5 text-amber-700 shrink-0" />
    </Link>
  );
}
