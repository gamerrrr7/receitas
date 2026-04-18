import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { ALL_RECIPES } from '../data/recipes';
import { Category, Difficulty } from '../types';
import { Search, SlidersHorizontal, ArrowRight, UtensilsCrossed, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useUser } from '../lib/UserContext';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos' | 'Favoritos'>('Todos');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | 'Todos'>('Todos');

  const filteredRecipes = useMemo(() => {
    return ALL_RECIPES.filter(recipe => {
      const matchesSearch = (recipe.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (recipe.ingredients || []).some(ing => (ing.name || '').toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeCategory === 'Todos' 
        ? true 
        : activeCategory === 'Favoritos' 
          ? user?.favorites.includes(recipe.id)
          : recipe.category === activeCategory;
      const matchesDifficulty = activeDifficulty === 'Todos' || recipe.difficulty === activeDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, activeCategory, activeDifficulty, user]);

  const popularRecipes = useMemo(() => {
    return [...ALL_RECIPES].sort((a, b) => (b.ratingCount || 0) - (a.ratingCount || 0)).slice(0, 4);
  }, []);

  const categories: (Category | 'Todos' | 'Favoritos')[] = ['Todos', 'Favoritos', 'Café da manhã', 'Almoço', 'Jantar', 'Sobremesas', 'Lanches'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32 bg-brand-bg dark:bg-dark-bg min-h-screen transition-colors duration-500"
    >
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3" />
              Upgrade na sua cozinha
            </div>
            <h1 className="text-[52px] md:text-[88px] font-black text-brand-text-main dark:text-white leading-[0.88] tracking-[-0.04em]">
              {user ? (
                <>Olá, <span className="text-brand-primary">{user.displayName.split(' ')[0]}</span>.<br /> O que vamos cozinhar?</>
              ) : (
                <>Onde o sabor <br />encontra a <span className="text-brand-primary">perfeição</span>.</>
              )}
            </h1>
            <p className="text-lg md:text-xl text-brand-text-muted dark:text-dark-text-muted max-w-lg leading-relaxed font-medium">
              Explore mais de 30 receitas curadas, técnicas profissionais e um guia passo a passo infalível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative flex-1 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted dark:text-dark-text-muted transition-colors group-focus-within:text-brand-primary" />
                <input 
                  type="text" 
                  placeholder="Macarrão, bolo, frango..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white dark:bg-dark-surface rounded-[24px] py-4 pl-14 pr-4 outline-none border-2 border-black/5 dark:border-white/5 focus:border-brand-primary/30 transition-all text-sm dark:text-white font-bold shadow-xl shadow-black/[0.02]"
                />
              </div>
              <button className="px-10 py-4 bg-brand-primary text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:translate-y-[-4px] active:translate-y-0 transition-all shadow-xl shadow-brand-primary/20">
                Começar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover scale-110" 
                referrerPolicy="no-referrer"
                alt="Risoto Trufado de Cogumelos"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent" />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Recomendação Premium</span>
                </div>
                <div className="text-3xl font-black tracking-tight leading-none mb-2">Risoto Trufado de Cogumelos</div>
                <div className="text-sm opacity-70 font-medium">Por Chef Lucas Mendonça</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      {!searchTerm && activeCategory === 'Todos' && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-black tracking-tight dark:text-white">Mais amadas</h2>
            </div>
            <div className="h-[2px] flex-1 mx-8 bg-black/5 dark:bg-white/5 hidden sm:block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <RecipeCard recipe={recipe} onClick={(r) => navigate(`/recipe/${r.slug}`)} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Main Categories & Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tighter dark:text-white">Explore o Menu</h2>
              <p className="text-xs text-brand-text-muted dark:text-dark-text-muted font-bold uppercase tracking-widest">Encontre seu estilo</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest border-2 transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 scale-105" 
                    : "bg-white dark:bg-dark-surface border-black/5 dark:border-white/5 text-brand-text-muted dark:text-dark-text-muted hover:border-brand-primary/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 min-h-[400px]">
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredRecipes.map((recipe, idx) => (
                <motion.div
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx % 8 * 0.05 }}
                >
                  <RecipeCard 
                    recipe={recipe} 
                    onClick={(r) => navigate(`/recipe/${r.slug}`)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-32 text-center space-y-6">
            <div className="w-24 h-24 bg-brand-primary/5 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-brand-primary/20" />
            </div>
            <div>
              <p className="text-4xl font-black tracking-tight text-brand-text-main dark:text-white transition-colors">Nenhum resultado...</p>
              <p className="text-brand-text-muted dark:text-dark-text-muted font-bold uppercase tracking-widest mt-2">Tente buscar por outros termos ou categorias</p>
            </div>
          </div>
        )}
      </section>

      {/* Recommendations Banner */}
      {!searchTerm && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 mb-10">
          <div className="bg-brand-primary rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 text-white">
            <div className="relative z-10 flex-1 space-y-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full w-fit text-[10px] font-black uppercase tracking-widest">
                <Flame className="w-3 h-3" /> Receita da Semana
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                O Brownie <br />que você <br />merece.
              </h2>
              <p className="text-lg opacity-80 max-w-sm font-medium">
                Descubra por que este Brownie de Chocolate Belga é a receita mais favoritada da semana.
              </p>
              <button 
                onClick={() => navigate('/recipe/brownie-de-chocolate-belga')}
                className="bg-white text-brand-primary px-10 py-4 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-2xl"
              >
                Ver Receita
              </button>
            </div>
            <div className="flex-1 w-full md:w-auto relative group">
              <img 
                src="https://images.unsplash.com/photo-1461008413523-c527c92a3d07?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover rounded-[32px] rotate-2 shadow-2xl transition-transform group-hover:rotate-0 duration-500 aspect-square"
                alt="Brownie"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1606347171076-0f73010b991b?auto=format&fit=crop&w=1200&q=80`;
                }}
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent rounded-2xl -rotate-6 flex items-center justify-center shadow-xl">
                <div className="text-center font-black text-brand-text-main leading-tight">
                  <div className="text-4xl">4.9</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Avg Rating</div>
                </div>
              </div>
            </div>
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </section>
      )}
    </motion.div>
  );
}
