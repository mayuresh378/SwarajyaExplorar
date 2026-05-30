import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserState {
  visited: string[];
  favorites: string[];
  wishlist: string[];
}

interface UserContextType {
  user: UserState;
  toggleVisited: (fortId: string) => void;
  toggleFavorite: (fortId: string) => void;
  toggleWishlist: (fortId: string) => void;
  isVisited: (fortId: string) => boolean;
  isFavorite: (fortId: string) => boolean;
  isInWishlist: (fortId: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = 'swarajya-explorer-user';

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { visited: [], favorites: [], wishlist: [] };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const toggleVisited = (fortId: string) => {
    setUser(prev => ({
      ...prev,
      visited: prev.visited.includes(fortId)
        ? prev.visited.filter(id => id !== fortId)
        : [...prev.visited, fortId],
    }));
  };

  const toggleFavorite = (fortId: string) => {
    setUser(prev => ({
      ...prev,
      favorites: prev.favorites.includes(fortId)
        ? prev.favorites.filter(id => id !== fortId)
        : [...prev.favorites, fortId],
    }));
  };

  const toggleWishlist = (fortId: string) => {
    setUser(prev => ({
      ...prev,
      wishlist: prev.wishlist.includes(fortId)
        ? prev.wishlist.filter(id => id !== fortId)
        : [...prev.wishlist, fortId],
    }));
  };

  const isVisited = (fortId: string) => user.visited.includes(fortId);
  const isFavorite = (fortId: string) => user.favorites.includes(fortId);
  const isInWishlist = (fortId: string) => user.wishlist.includes(fortId);

  return (
    <UserContext.Provider value={{ user, toggleVisited, toggleFavorite, toggleWishlist, isVisited, isFavorite, isInWishlist }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
