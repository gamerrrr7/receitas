import React, { useState } from 'react';
import { Bookmark, User, Menu, ChefHat, Search, X, LogIn, LogOut, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useUser } from '../lib/UserContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { user, login, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginDemo = () => {
    login('Chef Convidado');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-surface/80 backdrop-blur-md dark:bg-dark-surface/80 border-b border-black/5 dark:border-white/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95 shadow-lg shadow-brand-primary/20">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <span className="text-[20px] font-black tracking-tighter text-brand-primary uppercase hidden sm:block">Receita Pro</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted dark:text-dark-text-muted transition-colors group-focus-within:text-brand-primary" />
            <input 
              type="text" 
              placeholder="Encontre sua próxima refeição..."
              className="w-full bg-brand-bg dark:bg-dark-bg/50 rounded-2xl py-2.5 pl-11 pr-4 outline-none border-2 border-transparent focus:border-brand-primary/20 focus:bg-white dark:focus:bg-dark-bg transition-all text-sm font-medium shadow-inner"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <button className="p-2.5 text-brand-text-muted dark:text-dark-text-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors hover:bg-brand-primary/5 rounded-xl hidden md:flex">
            <Bookmark className="w-5 h-5" />
          </button>

          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 p-1 pl-1 pr-3 bg-brand-bg dark:bg-dark-bg rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-primary/30 transition-all active:scale-95"
            >
              <div className="w-8 h-8 rounded-xl bg-brand-primary/10 flex items-center justify-center overflow-hidden">
                {user ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-brand-primary" />
                )}
              </div>
              <span className="text-xs font-bold text-brand-text-main dark:text-dark-text-main hidden lg:block">
                {user ? user.displayName : 'Entrar'}
              </span>
            </button>

            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-56 bg-brand-surface dark:bg-dark-surface border border-black/5 dark:border-white/5 rounded-[24px] shadow-2xl p-3 z-50 overflow-hidden"
                >
                  {user ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 mb-2 border-b border-black/5 dark:border-white/5 pb-3">
                        <p className="text-xs font-bold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-widest mb-1">Perfil</p>
                        <p className="text-sm font-black truncate">{user.displayName}</p>
                      </div>
                      <button 
                        onClick={() => { navigate('/profile'); setIsUserMenuOpen(false); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-bold text-brand-text-main dark:text-dark-text-main hover:bg-brand-primary/5 rounded-xl transition-colors"
                      >
                        <User className="w-4 h-4" /> Meu Perfil
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-bold text-brand-text-main dark:text-dark-text-main hover:bg-brand-primary/5 rounded-xl transition-colors">
                        <Settings className="w-4 h-4" /> Configurações
                      </button>
                      <button 
                        onClick={() => { logout(); setIsUserMenuOpen(false); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <LogOut className="w-4 h-4" /> Sair
                      </button>
                    </div>
                  ) : (
                    <div className="p-2 space-y-3">
                      <div className="text-center py-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <LogIn className="w-6 h-6 text-brand-primary" />
                        </div>
                        <p className="text-sm font-bold mb-1">Acesse sua conta</p>
                        <p className="text-xs text-brand-text-muted dark:text-dark-text-muted">Salve receitas e muito mais.</p>
                      </div>
                      <button 
                        onClick={handleLoginDemo}
                        className="w-full bg-brand-primary text-white py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
                      >
                        Entrar agora
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 text-brand-text-main dark:text-dark-text-main hover:bg-brand-primary/5 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5 dark:border-white/5 bg-brand-surface dark:bg-dark-surface overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted dark:text-dark-text-muted" />
                <input 
                  type="text" 
                  placeholder="Buscar receitas..."
                  className="w-full bg-brand-bg dark:bg-dark-bg rounded-2xl py-3 pl-11 pr-4 outline-none border border-black/5 dark:border-white/5 text-sm font-medium"
                />
              </div>
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-lg font-black uppercase tracking-tighter text-brand-text-main dark:text-dark-text-main">Home</Link>
                <a href="#" className="text-lg font-black uppercase tracking-tighter text-brand-text-main dark:text-dark-text-main opacity-50">Favoritos</a>
                <a href="#" className="text-lg font-black uppercase tracking-tighter text-brand-text-main dark:text-dark-text-main opacity-50">Categorias</a>
              </nav>
              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Tema do App</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
