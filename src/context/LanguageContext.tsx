import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, BilingualText } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: BilingualText) => string;
  isMarathi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('swarajya-lang');
    return (saved === 'en' || saved === 'mr') ? saved : 'mr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('swarajya-lang', lang);
    document.documentElement.lang = lang;
  };

  // Sync lang attribute on initial load and language change
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (text: BilingualText): string => {
    const primary = text[language];
    if (primary && primary.trim().length > 0) return primary;
    const fallback = language === 'mr' ? text['en'] : text['mr'];
    return fallback || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isMarathi: language === 'mr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
