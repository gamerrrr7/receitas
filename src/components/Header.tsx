import React from 'react';
import { Bookmark, User, Menu, ChefHat, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-dark-surface/80 dark:backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-10 h-[70px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <ChefHat className="w-7 h-7 text-brand-primary" />
          <span className="text-[22px] font-[800] tracking-[-0.5px] text-brand-primary uppercase">Receita Pro</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-brand-text-main dark:text-dark-text-main">
          <a href="#" className="hover:text-brand-primary transition-colors">Favoritos</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Minha Conta</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center bg-[#F1F3F5] dark:bg-slate-800 rounded-full px-4 py-2 w-[240px] xl:w-[300px] gap-2 transition-colors">
            <Search className="w-4 h-4 text-brand-text-muted dark:text-dark-text-muted" />
            <span className="text-sm text-brand-text-muted dark:text-dark-text-muted truncate">Procure ingredientes...</span>
          </div>
          <button className="hidden md:flex items-center justify-center w-10 h-10 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-colors shadow-sleek">
            <span className="text-xl font-bold">+</span>
          </button>
          <button className="md:hidden p-2 text-brand-text-main dark:text-dark-text-main">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
