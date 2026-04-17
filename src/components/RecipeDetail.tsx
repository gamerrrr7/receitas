import React, { useState, useEffect } from 'react';
import { 
  Users, Clock, Star, 
  ChevronLeft, Play, X, Check, ArrowRight,
  Heart, Share2, Printer, Bookmark, Flame, Utensils, DollarSign
} from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { cn, formatQuantity } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useUser } from '../lib/UserContext';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const { toggleFavorite, isFavorite } = useUser();
  const [servings, setServings] = useState(recipe?.servings || 4);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  
  const isFav = isFavorite(recipe.id);
  const servingsFactor = servings / (recipe.servings || 4);

  const toggleStep = (order: number) => {
    setCompletedSteps(prev => 
      prev.includes(order) ? prev.filter(s => s !== order) : [...prev, order]
    );
  };

  const toggleIngredient = (name: string) => {
    setCheckedIngredients(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  // Wake Lock for Cooking Mode
  useEffect(() => {
    let wakeLock: any = null;
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && isCookingMode) {
        try {
          wakeLock = await (navigator as any).wakeLock.request('screen');
        } catch (err) {
          console.error(err);
        }
      }
    };
    if (isCookingMode) requestWakeLock();
    return () => { if (wakeLock) wakeLock.release(); };
  }, [isCookingMode]);

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-700", 
      isCookingMode ? "bg-zinc-950 text-zinc-100" : "bg-brand-bg dark:bg-dark-bg"
    )}>
      {/* Immersive Header */}
      {!isCookingMode && (
        <div className="relative h-[450px] md:h-[600px] overflow-hidden group">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={recipe.images[0]} 
            className="w-full h-full object-cover" 
            alt={recipe.title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg md:from-brand-bg via-transparent to-black/20 dark:from-dark-bg" />
          
          <div className="absolute top-8 left-8 md:left-12 flex gap-4 z-20">
            <button 
              onClick={onBack}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-[20px] text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all shadow-2xl border border-white/20 active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-8 right-8 md:right-12 flex gap-3 z-20">
            <button className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-[20px] text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all shadow-2xl border border-white/20">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => toggleFavorite(recipe.id)}
              className={cn(
                "w-12 h-12 rounded-[20px] flex items-center justify-center transition-all shadow-2xl border backdrop-blur-xl active:scale-90",
                isFav ? "bg-brand-primary border-brand-primary text-white" : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-primary"
              )}
            >
              <Heart className={cn("w-6 h-6", isFav && "fill-current")} />
            </button>
          </div>

          <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-12 z-10">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <span className="inline-block bg-brand-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-primary/20">
                {recipe.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-brand-text-main dark:text-white tracking-tighter leading-[0.85] max-w-4xl">
                {recipe.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 group/author">
                   <div className="w-10 h-10 bg-brand-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                      {recipe.authorId.charAt(0)}
                   </div>
                   <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted transition-colors">Receita por</p>
                      <p className="text-sm font-black text-brand-text-main dark:text-white transition-colors">{recipe.authorId}</p>
                   </div>
                </div>
                <div className="h-8 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block" />
                <div className="flex items-center gap-1 text-brand-accent">
                   {[1,2,3,4,5].map(i => <Star key={i} className={cn("w-4 h-4", i <= Math.round(recipe.ratingAvg) ? "fill-current" : "opacity-30")} />)}
                   <span className="text-sm font-black text-brand-text-main dark:text-white ml-2">{recipe.ratingAvg}</span>
                   <span className="text-xs font-bold text-brand-text-muted dark:text-dark-text-muted ml-1">({recipe.ratingCount} avaliações)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className={cn(
        "max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 py-12 md:py-20",
        isCookingMode && "pt-32"
      )}>
        
        {/* Sidebar: Ingredients & Controls */}
        <aside className="space-y-12">
          {/* Quick Stats Card */}
          <div className="bg-white dark:bg-dark-surface rounded-[40px] p-8 shadow-xl shadow-black/[0.02] border border-black/5 dark:border-white/5">
             <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                   <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-brand-primary" />
                   </div>
                   <div className="text-xl font-black dark:text-white leading-none">{recipe.prepTime + (recipe.cookTime || 0)}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted">Minutos</div>
                </div>
                <div className="space-y-1">
                   <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                      <Flame className="w-6 h-6 text-orange-500" />
                   </div>
                   <div className="text-xl font-black dark:text-white leading-none">{recipe.difficulty === 'Easy' ? 'Fácil' : recipe.difficulty === 'Medium' ? 'Médio' : 'Difícil'}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted">Dificuldade</div>
                </div>
                <div className="space-y-1">
                   <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6 text-green-500" />
                   </div>
                   <div className="text-2xl font-black text-green-500 leading-none">{recipe.costEstimate}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted">Orçamento</div>
                </div>
             </div>
          </div>

          {/* Ingredients Section */}
          <section className={cn(
            "rounded-[40px] p-8 transition-all duration-500",
            isCookingMode ? "bg-zinc-900 border border-zinc-800" : "bg-white dark:bg-dark-surface shadow-2xl shadow-brand-primary/5 border border-black/5 dark:border-white/5"
          )}>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5 dark:border-white/5">
              <h2 className="text-xl font-black tracking-tight dark:text-white">Ingredientes</h2>
              <div className="flex items-center gap-4 bg-brand-bg dark:bg-dark-bg p-1 rounded-2xl">
                <button onClick={() => setServings(Math.max(1, servings - 1))} className="w-8 h-8 rounded-xl bg-white dark:bg-dark-surface shadow-sm text-brand-primary font-black">-</button>
                <span className="text-sm font-black dark:text-white min-w-[20px] text-center">{servings}</span>
                <button onClick={() => setServings(servings + 1)} className="w-8 h-8 rounded-xl bg-white dark:bg-dark-surface shadow-sm text-brand-primary font-black">+</button>
              </div>
            </div>

            <div className="space-y-3">
              {recipe.ingredients.map((ing, idx) => (
                <motion.div 
                  key={idx}
                  layout
                  onClick={() => toggleIngredient(ing.name)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-3xl cursor-pointer transition-all border-2",
                    checkedIngredients.includes(ing.name) 
                      ? "bg-brand-primary/5 border-transparent opacity-50 grayscale" 
                      : "bg-brand-bg/50 dark:bg-dark-bg border-transparent hover:border-brand-primary/20"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center transition-all",
                    checkedIngredients.includes(ing.name) ? "bg-brand-primary text-white" : "bg-white/50 border-2 border-brand-primary/20"
                  )}>
                    {checkedIngredients.includes(ing.name) && <Check className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                     <p className={cn(
                       "text-sm font-bold transition-all",
                       checkedIngredients.includes(ing.name) ? "line-through text-brand-text-muted dark:text-dark-text-muted" : "text-brand-text-main dark:text-white"
                     )}>
                        <span className="text-brand-primary mr-1">{formatQuantity(ing.quantity, servingsFactor)}</span>
                        <span>{ing.unit} de {ing.name}</span>
                     </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {!isCookingMode && (
             <button 
              onClick={() => setIsCookingMode(true)}
              className="w-full bg-brand-primary text-white p-6 rounded-[32px] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all shadow-xl shadow-brand-primary/20"
             >
               <Play className="w-5 h-5 fill-current" /> Modo Cozinha Imersivo
             </button>
          )}
        </aside>

        {/* Main Content Area: Description & Steps */}
        <main className="space-y-20">
          {!isCookingMode && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-brand-primary" />
                 </div>
                 <h2 className="text-3xl font-black tracking-tighter dark:text-white">A Receita</h2>
              </div>
              <div className="text-xl md:text-2xl text-brand-text-muted dark:text-dark-text-muted leading-relaxed font-medium transition-colors">
                 {recipe.description}
              </div>
            </section>
          )}

          {isCookingMode && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
               <div>
                  <h2 className="text-4xl font-black tracking-tighter text-white">{recipe.title}</h2>
                  <p className="text-brand-primary font-black uppercase tracking-widest text-xs mt-2">Passo a passo interativo</p>
               </div>
               <button 
                onClick={() => setIsCookingMode(false)}
                className="bg-white text-zinc-950 px-8 py-4 rounded-[20px] font-black uppercase tracking-widest text-xs shadow-2xl"
               >
                 Sair do Modo Cozinha
               </button>
            </div>
          )}

          <section className="space-y-12">
            {recipe.steps.map((step, idx) => (
              <motion.div 
                key={step.order}
                layout
                className={cn(
                  "relative pl-12 md:pl-20 py-8 transition-all duration-500",
                  completedSteps.includes(step.order) ? "opacity-30 grayscale blur-[1px]" : "opacity-100"
                )}
              >
                <button 
                  onClick={() => toggleStep(step.order)}
                  className={cn(
                    "absolute left-0 top-8 w-10 md:w-16 h-10 md:h-16 rounded-[20px] md:rounded-[28px] border-4 flex items-center justify-center font-black text-xl md:text-3xl transition-all shadow-2xl",
                    completedSteps.includes(step.order) 
                      ? "bg-brand-primary border-brand-primary text-white scale-110 rotate-[360deg] shadow-brand-primary/40" 
                      : "bg-white dark:bg-dark-surface border-black/5 dark:border-white/5 text-brand-primary hover:border-brand-primary/30"
                  )}
                >
                  {completedSteps.includes(step.order) ? <Check className="w-6 md:w-8 h-6 md:h-8 stroke-[4px]" /> : step.order}
                </button>

                <div className="space-y-10">
                   <div className={cn(
                     "text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight transition-all",
                     isCookingMode ? "text-zinc-100" : "text-brand-text-main dark:text-white"
                   )}>
                      <ReactMarkdown>{step.text}</ReactMarkdown>
                   </div>
                   
                   {step.image && (
                     <div className="relative group overflow-hidden rounded-[40px]">
                        <img 
                          src={step.image} 
                          className="w-full max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
                          alt={`Passo ${step.order}`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   )}
                </div>
              </motion.div>
            ))}
          </section>

          <footer className="pt-20 border-t border-black/5 dark:border-white/5 text-center">
             <div className="w-24 h-24 bg-brand-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Printer className="w-10 h-10 text-brand-primary/20" />
             </div>
             <p className="text-sm font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted mb-6">Fim da jornada rítmica</p>
             <button 
              onClick={onBack}
              className="px-10 py-4 bg-brand-primary text-white rounded-[24px] font-black uppercase tracking-widest text-xs hover:translate-y-[-4px] transition-all"
             >
               Voltar ao Menu Principal
             </button>
          </footer>
        </main>
      </div>

      <AnimatePresence>
        {isCookingMode && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 px-8 py-5 rounded-[32px] flex items-center gap-6 shadow-2xl z-50"
          >
            <div className="w-3 h-3 rounded-full bg-brand-primary animate-pulse" />
            <div className="text-left">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Status</p>
               <p className="text-xs font-black text-white">MODO COZINHA • TELA BLOQUEADA</p>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800" />
            <div className="text-left hidden sm:block">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Passos Concluídos</p>
               <p className="text-xs font-black text-brand-primary">{completedSteps.length} / {recipe.steps.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
