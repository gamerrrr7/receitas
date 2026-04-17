import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface UserContextType {
  user: UserProfile | null;
  login: (name: string, photo?: string) => void;
  logout: () => void;
  updateProfile: (name: string, photo: string) => void;
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('receita_pro_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const saveUser = (userData: UserProfile | null) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('receita_pro_user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('receita_pro_user');
    }
  };

  const login = (name: string, photo?: string) => {
    const newUser: UserProfile = {
      uid: Math.random().toString(36).substr(2, 9),
      displayName: name,
      photoURL: photo || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      favorites: [],
    };
    saveUser(newUser);
  };

  const logout = () => {
    saveUser(null);
  };

  const updateProfile = (name: string, photo: string) => {
    if (user) {
      saveUser({ ...user, displayName: name, photoURL: photo });
    }
  };

  const toggleFavorite = (recipeId: string) => {
    if (!user) return;
    const isFav = user.favorites.includes(recipeId);
    const newFavorites = isFav 
      ? user.favorites.filter(id => id !== recipeId)
      : [...user.favorites, recipeId];
    saveUser({ ...user, favorites: newFavorites });
  };

  const isFavorite = (recipeId: string) => {
    return user?.favorites.includes(recipeId) || false;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile, toggleFavorite, isFavorite }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
