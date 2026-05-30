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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="section-title text-3xl">{t(ui.trekPassport)}</h1>
        <p className="text-stone-600 mt-4">{t(ui.passportDesc)}</p>
      </div>

      {/* Progress */}
      <div className="parchment-bg rounded-xl border border-amber-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-stone-900">{t(ui.yourProgress)}</h2>
          <span className="text-2xl font-bold text-orange-700">{visitedForts.length}/{forts.length}</span>
        </div>
        <div className="w-full bg-orange-200 rounded-full h-3">
          <div className="bg-orange-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-sm text-stone-600 mt-2">
          {progress === 0 ? t(ui.startJourney) : progress === 100 ? t(ui.allVisited) : `${progress}${t(ui.complete)}`}
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            {t(ui.visitedSection)} ({visitedForts.length})
          </h2>
          {visitedForts.length === 0 ? (
            <p className="text-stone-500 text-sm bg-stone-50 rounded-lg p-4">{t(ui.noVisited)}</p>
          ) : (
            <div className="grid gap-3">
              {visitedForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}
            </div>
          )}
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            {t(ui.favoritesSection)} ({favoriteForts.length})
          </h2>
          {favoriteForts.length === 0 ? (
            <p className="text-stone-500 text-sm bg-stone-50 rounded-lg p-4">{t(ui.noFavorites)}</p>
          ) : (
            <div className="grid gap-3">
              {favoriteForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}
            </div>
          )}
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-4">
            <Bookmark className="w-5 h-5 text-blue-600" />
            {t(ui.wishlistSection)} ({wishlistForts.length})
          </h2>
          {wishlistForts.length === 0 ? (
            <p className="text-stone-500 text-sm bg-stone-50 rounded-lg p-4">{t(ui.noWishlist)}</p>
          ) : (
            <div className="grid gap-3">
              {wishlistForts.map(fort => <FortListItem key={fort.id} fort={fort} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function FortListItem({ fort }: { fort: typeof forts[0] }) {
  const { t } = useLanguage();
  return (
    <Link to={`/fort/${fort.id}`} className="flex items-center gap-4 bg-white rounded-lg border border-amber-100 p-3 hover:shadow-sm transition-shadow">
      <img src={fort.images[0]} alt={t(fort.name)} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-stone-900 truncate">{t(fort.name)}</h3>
        <p className="text-sm text-stone-500">{t(fort.district)} • {fort.trekDifficulty}</p>
      </div>
      <Castle className="w-5 h-5 text-stone-300 shrink-0" />
    </Link>
  );
}
