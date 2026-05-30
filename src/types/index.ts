export type Language = 'mr' | 'en';

export interface BilingualText {
  mr: string;
  en: string;
}

export interface Fort {
  id: string;
  name: BilingualText;
  district: BilingualText;
  description: BilingualText;
  history: BilingualText;
  significance: BilingualText;
  keyEvents: BilingualText[];
  architecture: BilingualText;
  strategicSignificance: BilingualText;
  founder: BilingualText;
  latitude: number;
  longitude: number;
  altitude: number;
  trekDifficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  trekDuration: BilingualText;
  bestSeason: BilingualText;
  waterAvailability: boolean;
  campingAllowed: boolean;
  images: string[];
  yearCaptured?: number;
}

export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  visited: string[];
  favorites: string[];
  wishlist: string[];
}

export interface TimelineEvent {
  year: number;
  fortId: string;
  fortName: BilingualText;
  event: BilingualText;
}

export interface Hero {
  id: string;
  name: BilingualText;
  title: BilingualText;
  biography: BilingualText;
  contributions: BilingualText[];
  birthYear?: number;
  deathYear?: number;
  image: string;
  relatedForts: string[];
  category: 'warrior' | 'advisor' | 'naval' | 'royal' | 'queen';
}

export interface DailyHistoryEvent {
  id: string;
  date: string; // "MM-DD" format
  title: BilingualText;
  description: BilingualText;
  year: number;
  relatedFortId?: string;
}
