import { BilingualText } from '../types';

export const ui: Record<string, BilingualText> = {
  // Navbar
  home: { mr: 'मुख्यपृष्ठ', en: 'Home' },
  forts: { mr: 'किल्ले', en: 'Forts' },
  map: { mr: 'नकाशा', en: 'Map' },
  timeline: { mr: 'कालरेषा', en: 'Timeline' },
  passport: { mr: 'पासपोर्ट', en: 'Passport' },
  heroes: { mr: 'वीर योद्धे', en: 'Heroes' },

  // Home
  heroTitle: { mr: 'स्वराज्य एक्सप्लोरर', en: 'Swarajya Explorer' },
  heroSubtitle: { mr: 'छत्रपती शिवाजी महाराजांच्या किल्ल्यांचा इतिहास, वैभव आणि भटकंतीचा अनुभव', en: 'Explore the history, glory, and trekking experience of Chhatrapati Shivaji Maharaj\'s forts' },
  exploreForts: { mr: 'किल्ले शोधा', en: 'Explore Forts' },
  viewMap: { mr: 'नकाशा पहा', en: 'View Map' },
  featuredForts: { mr: 'वैशिष्ट्यपूर्ण किल्ले', en: 'Featured Forts' },
  viewAll: { mr: 'सर्व पहा →', en: 'View all →' },
  dailyHistory: { mr: 'आजचा इतिहास', en: "Today's History" },
  whatToExplore: { mr: 'काय शोधता येईल', en: 'What You Can Explore' },

  // Fort Explorer
  fortExplorer: { mr: 'किल्ला शोधक', en: 'Fort Explorer' },
  fortExplorerDesc: { mr: 'स्वराज्याचे किल्ले शोधा आणि जाणून घ्या', en: 'Browse and search forts of Swarajya' },
  searchPlaceholder: { mr: 'किल्ल्याचे नाव शोधा...', en: 'Search forts by name...' },
  allDifficulties: { mr: 'सर्व कठीणता', en: 'All Difficulties' },
  allDistricts: { mr: 'सर्व जिल्हे', en: 'All Districts' },
  easy: { mr: 'सोपा', en: 'Easy' },
  medium: { mr: 'मध्यम', en: 'Medium' },
  hard: { mr: 'कठीण', en: 'Hard' },
  expert: { mr: 'तज्ञ', en: 'Expert' },
  fortsFound: { mr: 'किल्ले सापडले', en: 'forts found' },
  noFortsFound: { mr: 'कोणताही किल्ला सापडला नाही.', en: 'No forts match your search.' },
  clearFilters: { mr: 'फिल्टर साफ करा', en: 'Clear filters' },

  // Fort Detail
  about: { mr: 'माहिती', en: 'About' },
  history: { mr: '📖 इतिहास', en: '📖 History' },
  historicalSignificance: { mr: '⚔️ ऐतिहासिक महत्त्व', en: '⚔️ Historical Significance' },
  keyEvents: { mr: '📅 महत्त्वाच्या घटना', en: '📅 Key Events' },
  architectureLabel: { mr: '🏗️ वास्तुकला', en: '🏗️ Architecture' },
  strategicSignificance: { mr: '🗺️ सामरिक महत्त्व', en: '🗺️ Strategic Significance' },
  gallery: { mr: '📸 छायाचित्रे', en: '📸 Gallery' },
  trekInfo: { mr: '🥾 ट्रेक माहिती', en: '🥾 Trek Information' },
  altitude: { mr: 'उंची', en: 'Altitude' },
  duration: { mr: 'कालावधी', en: 'Duration' },
  bestSeason: { mr: 'सर्वोत्तम हंगाम', en: 'Best Season' },
  water: { mr: 'पाणी', en: 'Water' },
  waterAvailable: { mr: 'उपलब्ध', en: 'Available' },
  carryWater: { mr: 'सोबत न्या', en: 'Carry water' },
  camping: { mr: 'कॅम्पिंग', en: 'Camping' },
  allowed: { mr: 'शक्य', en: 'Allowed' },
  notAllowed: { mr: 'शक्य नाही', en: 'Not allowed' },
  markVisited: { mr: 'भेट दिली', en: 'Mark as Visited' },
  visited: { mr: 'भेट दिली ✓', en: 'Visited ✓' },
  addFavorite: { mr: 'आवडते', en: 'Add to Favorites' },
  favorited: { mr: 'आवडते ♥', en: 'Favorited' },
  addWishlist: { mr: 'इच्छासूची', en: 'Add to Wishlist' },
  inWishlist: { mr: 'इच्छासूचीत', en: 'In Wishlist' },
  backToForts: { mr: '← किल्ल्यांकडे परत', en: '← Back to Forts' },
  listenHistory: { mr: '🎧 इतिहास ऐका', en: '🎧 Listen to History' },
  founder: { mr: 'संस्थापक', en: 'Founder' },

  // Map
  fortMap: { mr: 'किल्ला नकाशा', en: 'Fort Map' },
  fortMapDesc: { mr: 'स्वराज्याचे सर्व किल्ले नकाशावर. मार्करवर क्लिक करा.', en: 'All forts of Swarajya on an interactive map. Click a marker for details.' },

  // Timeline
  swarajyaTimeline: { mr: 'स्वराज्य कालरेषा', en: 'Swarajya Timeline' },
  timelineDesc: { mr: 'स्वराज्याचा विस्तार महत्त्वाच्या किल्ल्यांद्वारे (१६४३–१६७४)', en: 'The expansion of Swarajya through important forts and events (1643–1674)' },

  // Passport
  trekPassport: { mr: 'ट्रेक पासपोर्ट', en: 'Trek Passport' },
  passportDesc: { mr: 'तुमच्या किल्ला भेटी, आवडते आणि इच्छासूची ट्रॅक करा', en: 'Track your fort visits, favorites, and wishlist' },
  yourProgress: { mr: 'तुमची प्रगती', en: 'Your Progress' },
  startJourney: { mr: 'तुमचा प्रवास सुरू करा! पहिल्या किल्ल्याला भेट द्या.', en: 'Start your journey! Visit your first fort.' },
  allVisited: { mr: '🎉 अभिनंदन! तुम्ही सर्व किल्ले पाहिले!', en: '🎉 Congratulations! You have visited all forts!' },
  complete: { mr: '% पूर्ण. शोधत रहा!', en: '% complete. Keep exploring!' },
  visitedSection: { mr: 'भेट दिलेले', en: 'Visited' },
  favoritesSection: { mr: 'आवडते', en: 'Favorites' },
  wishlistSection: { mr: 'इच्छासूची', en: 'Wishlist' },
  noVisited: { mr: 'अजून कोणत्याही किल्ल्याला भेट दिली नाही.', en: 'No forts visited yet.' },
  noFavorites: { mr: 'अजून आवडते नाहीत.', en: 'No favorites yet.' },
  noWishlist: { mr: 'इच्छासूचीत काहीही नाही.', en: 'No forts in wishlist.' },

  // Heroes
  heroesTitle: { mr: 'स्वराज्याचे वीर', en: 'Heroes of Swarajya' },
  heroesDesc: { mr: 'स्वराज्य स्थापनेत योगदान दिलेले महान योद्धे आणि व्यक्तिमत्त्वे', en: 'Great warriors and personalities who contributed to the establishment of Swarajya' },
  contributions: { mr: 'योगदान', en: 'Contributions' },
  relatedForts: { mr: 'संबंधित किल्ले', en: 'Related Forts' },

  // Features
  featureFortExplorer: { mr: 'किल्ला शोधक', en: 'Fort Explorer' },
  featureFortExplorerDesc: { mr: 'नाव, जिल्हा, कठीणता आणि ऐतिहासिक महत्त्वानुसार किल्ले शोधा.', en: 'Browse forts by name, district, difficulty, and historical significance.' },
  featureMap: { mr: 'इंटरॅक्टिव्ह नकाशा', en: 'Interactive Map' },
  featureMapDesc: { mr: 'महाराष्ट्राच्या नकाशावर सर्व किल्ले पहा.', en: 'View all forts on a Maharashtra map.' },
  featureTrek: { mr: 'ट्रेक मार्गदर्शक', en: 'Trek Guide' },
  featureTrekDesc: { mr: 'ट्रेक कठीणता, कालावधी, उंची आणि सर्वोत्तम हंगाम माहिती.', en: 'Get trek difficulty, duration, altitude, and best season information.' },
  featureTimeline: { mr: 'स्वराज्य कालरेषा', en: 'Swarajya Timeline' },
  featureTimelineDesc: { mr: 'किल्ल्यांद्वारे स्वराज्याच्या विस्ताराची कालरेषा.', en: 'Interactive timeline showing the expansion of Swarajya through forts.' },
  featureWeather: { mr: 'हवामान अपडेट्स', en: 'Weather Updates' },
  featureWeatherDesc: { mr: 'ट्रेक नियोजनापूर्वी सध्याचे हवामान तपासा.', en: 'Check current weather conditions before planning your trek.' },
  featurePassport: { mr: 'ट्रेक पासपोर्ट', en: 'Trek Passport' },
  featurePassportDesc: { mr: 'भेट दिलेले किल्ले ट्रॅक करा, आवडते जतन करा.', en: 'Track visited forts, save favorites, and build your wishlist.' },

  // Stats
  fortsListed: { mr: 'किल्ले सूचीबद्ध', en: 'Forts Listed' },
  districts: { mr: 'जिल्हे', en: 'Districts' },
  swarajyaFounded: { mr: 'स्वराज्य स्थापना', en: 'Swarajya Founded' },
  coronationYear: { mr: 'राज्याभिषेक वर्ष', en: 'Coronation Year' },

  // Footer
  footerDesc: { mr: 'स्वराज्याचा वारसा शोधा. महाराष्ट्राच्या ऐतिहासिक किल्ल्यांबद्दल जाणून घ्या.', en: 'Explore the legacy of Swarajya. Discover Maharashtra\'s historic forts.' },
  footerCopyright: { mr: '© स्वराज्य एक्सप्लोरर. महाराष्ट्राच्या वारशासाठी ❤️ ने बनवले.', en: '© Swarajya Explorer. Built with ❤️ for Maharashtra\'s heritage.' },
};
