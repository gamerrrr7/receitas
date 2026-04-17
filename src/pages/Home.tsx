import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { ALL_RECIPES } from '../data/recipes';
import { Category, Difficulty } from '../types';
import { Search, SlidersHorizontal, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRecipes = useMemo(() => {
    return ALL_RECIPES.filter(recipe => {
      const matchesSearch = (recipe.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (recipe.ingredients || []).some(ing => (ing.name || '').toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
      const matchesDifficulty = activeDifficulty === 'All' || recipe.difficulty === activeDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, activeCategory, activeDifficulty]);

  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRecipes.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRecipes, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-[6px] text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
            <UtensilsCrossed className="w-3 h-3" />
            Ganhador do Prêmio Gastronomia 2026
          </div>
          <h1 className="text-[56px] md:text-[82px] font-[800] text-brand-text-main dark:text-dark-text-main leading-[0.9] tracking-[-2px] transition-colors">
            Cozinhe como um <span className="text-brand-primary">Pro</span>.
          </h1>
          <p className="text-[18px] text-brand-text-muted dark:text-dark-text-muted max-w-lg leading-relaxed font-medium transition-colors">
            Acesse receitas testadas, ferramentas profissionais e um modo de cozinha imersivo focado no que importa: o sabor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted dark:text-dark-text-muted" />
              <input 
                type="text" 
                placeholder="Busque por ingrediente..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#F1F3F5] dark:bg-slate-800 rounded-full py-4 pl-12 pr-4 outline-none border border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-brand-primary transition-all text-sm dark:text-white"
              />
            </div>
            <button className="px-10 py-4 bg-brand-primary text-white rounded-full font-extrabold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all shadow-sleek">
              Explorar <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden shadow-sleek">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
            alt="Professional Chef"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] text-white">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">Receita do Dia</div>
            <div className="text-2xl font-extrabold">Risoto de Açafrão</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-10 mb-12">
        <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-black/5 dark:border-white/5 transition-colors">
          <div className="flex items-center gap-2 mr-4">
            <SlidersHorizontal className="w-4 h-4 text-brand-text-muted dark:text-dark-text-muted" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted">Filtros</span>
          </div>
          
          <div className="flex gap-3">
            {['All', 'Savory', 'Sweet', 'Healthy', 'Bakery'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat as any);
                  setCurrentPage(1);
                }}
                className={cn(
                  "px-6 py-2 rounded-[8px] text-[11px] font-bold uppercase tracking-widest border transition-all",
                  activeCategory === cat 
                    ? "bg-brand-primary text-white border-brand-primary shadow-sleek" 
                    : "bg-white dark:bg-slate-800 border-[#dee2e6] dark:border-white/10 text-brand-text-muted dark:text-dark-text-muted hover:border-brand-primary hover:text-brand-primary"
                )}
              >
                {cat === 'All' ? 'Todos' : cat === 'Savory' ? 'Salgados' : cat === 'Sweet' ? 'Doces' : cat === 'Healthy' ? 'Saudável' : 'Padaria'}
              </button>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-black/5 dark:bg-white/5 mx-2" />

          <div className="flex gap-3">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => {
                  setActiveDifficulty(diff as any);
                  setCurrentPage(1);
                }}
                className={cn(
                  "px-6 py-2 rounded-[8px] text-[11px] font-bold uppercase tracking-widest border transition-all",
                  activeDifficulty === diff 
                    ? "bg-brand-primary text-white border-brand-primary shadow-sleek" 
                    : "bg-white dark:bg-slate-800 border-[#dee2e6] dark:border-white/10 text-brand-text-muted dark:text-dark-text-muted hover:border-brand-primary hover:text-brand-primary"
                )}
              >
                {diff === 'All' ? 'Dificuldade' : diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="max-w-7xl mx-auto px-10">
        {paginatedRecipes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={(r) => navigate(`/recipe/${r.slug}`)}
                />
              ))}
            </div>
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="py-24 text-center space-y-4">
            <p className="text-6xl italic font-[800] text-brand-primary/10 dark:text-white/5 transition-colors">Nenhuma receita encontrada...</p>
            <p className="text-brand-text-muted dark:text-dark-text-muted uppercase tracking-widest font-bold text-xs transition-colors">Tente mudar seus filtros de busca</p>
          </div>
        )}
      </section>

      {/* Persistence Notification Bar (Newsletter) */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-primary text-white py-4 z-40 transform translate-y-0 shadow-2xl transition-colors">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center font-[800] text-xl italic">R</div>
            <div>
              <div className="text-sm font-bold uppercase tracking-widest">Entre na Comunidade Receita Pro</div>
              <div className="text-xs opacity-60">Receba eBooks exclusivos e salve suas receitas favoritas.</div>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="seu@email.com" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm outline-none focus:bg-white/20 flex-1 md:w-64 placeholder:text-white/50" />
            <button className="bg-white text-brand-primary hover:bg-white/90 px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors shadow-sm">Assinar</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
