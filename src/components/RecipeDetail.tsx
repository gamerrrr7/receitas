import React, { useState, useEffect } from 'react';
import { 
  Users, Clock, BarChart, DollarSign, Star, 
  ChevronLeft, Play, X, Check, ArrowRight,
  Maximize2, Minimize2, Languages, Scale, UtensilsCrossed
} from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { cn, formatQuantity } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  useEffect(() => {
    console.log('Recipe details loaded:', recipe.title, recipe.id);
  }, [recipe]);

  const [servings, setServings] = useState(recipe?.servings || 4);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Receita não encontrada</h2>
        <button onClick={onBack} className="text-brand-primary font-bold">Voltar para Home</button>
      </div>
    );
  }

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
          console.error(`${err.name}, ${err.message}`);
        }
      }
    };
    if (isCookingMode) requestWakeLock();
    return () => { if (wakeLock) wakeLock.release(); };
  }, [isCookingMode]);

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500", 
      isCookingMode ? "bg-zinc-950 text-zinc-100" : "bg-white dark:bg-dark-bg"
    )}>
      {/* Immersive Header */}
      {!isCookingMode && (
        <div className="relative h-[320px] bg-neutral-100 dark:bg-slate-800 overflow-hidden">
          <img 
            src={recipe.images && recipe.images.length > 0 ? recipe.images[0] : 'https://picsum.photos/seed/recipe/1200/400'} 
            className="w-full h-full object-cover" 
            alt={recipe.title || 'Receita'}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-6 left-10 flex gap-4">
            <button 
              onClick={onBack}
              className="p-2 bg-white/90 rounded-full text-brand-primary hover:bg-white transition-all shadow-sleek"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute bottom-6 left-10 flex gap-2">
            <span className="bg-white/95 px-3 py-1 rounded-[6px] text-xs font-bold text-brand-primary uppercase tracking-widest shadow-sm">
              {recipe.category === 'Savory' ? 'Salgado' : recipe.category === 'Sweet' ? 'Doce' : recipe.category === 'Healthy' ? 'Saudável' : 'Padaria'}
            </span>
            {recipe.subcategory && (
              <span className="bg-white/95 px-3 py-1 rounded-[6px] text-xs font-bold text-brand-primary uppercase tracking-widest shadow-sm">
                {recipe.subcategory}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={cn("max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10", isCookingMode && "py-24")}>
        
        {/* Left Column: Hero Stats & Control Card */}
        <div className="space-y-8">
          {!isCookingMode && (
            <div className="bg-white dark:bg-dark-surface rounded-[12px] shadow-sleek overflow-hidden border border-black/5 dark:border-white/5 transition-colors duration-300">
              <div className="grid grid-cols-3 text-center py-6 border-b border-[#F1F3F5] dark:border-white/5">
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-brand-primary dark:text-dark-primary leading-tight">{(recipe.prepTime || 0) + (recipe.cookTime || 0)}</span>
                  <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted mt-1 tracking-wider transition-colors">Minutos</span>
                </div>
                <div className="flex flex-col border-x border-[#F1F3F5] dark:border-white/5">
                  <span className="text-[18px] font-bold text-brand-primary dark:text-dark-primary leading-tight">{recipe.difficulty || 'Fácil'}</span>
                  <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted mt-1 tracking-wider transition-colors">Dificuldade</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-brand-primary dark:text-dark-primary leading-tight">{recipe.costEstimate || '$$'}</span>
                  <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted mt-1 tracking-wider transition-colors">Custo</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted mb-3 transition-colors">Ingrediente Principal</div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F1F3F5] dark:bg-slate-800 rounded-[8px] flex items-center justify-center transition-colors">
                    <UtensilsCrossed className="w-5 h-5 text-brand-primary dark:text-dark-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-brand-text-main dark:text-dark-text-main leading-tight">
                      {recipe.ingredients?.[0]?.name || 'Ingrediente'}
                    </div>
                    <div className="text-[10px] text-brand-primary dark:text-dark-primary font-bold mt-1 cursor-pointer transition-colors">Ver Origem →</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <section className={cn("rounded-[12px] border transition-all duration-300", 
            isCookingMode ? "bg-zinc-900 border-zinc-800 p-8" : "bg-white dark:bg-dark-surface border-brand-accent dark:border-white/10 p-6 shadow-sleek")}>
            <div className="flex items-center justify-between mb-8">
              <h2 className={cn("text-sm font-bold uppercase tracking-widest", isCookingMode ? "text-zinc-100" : "text-brand-text-main dark:text-dark-text-main")}>Porções</h2>
              <div className="flex items-center gap-4">
                <button onClick={() => setServings(Math.max(1, servings - 1))} className="w-8 h-8 rounded-full border border-[#dee2e6] dark:border-white/10 flex items-center justify-center font-bold text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-primary hover:text-white transition-colors">-</button>
                <span className="text-lg font-[800] text-brand-text-main dark:text-dark-text-main min-w-[20px] text-center">{servings.toString().padStart(2, '0')}</span>
                <button onClick={() => setServings(servings + 1)} className="w-8 h-8 rounded-full border border-[#dee2e6] dark:border-white/10 flex items-center justify-center font-bold text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-primary hover:text-white transition-colors">+</button>
              </div>
            </div>

            <div className="space-y-3">
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((ing, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex items-center gap-3 p-3 text-[14px] rounded-[8px] border transition-all cursor-pointer group",
                      checkedIngredients.includes(ing.name) 
                        ? (isCookingMode ? "bg-zinc-800 border-transparent grayscale opacity-40" : "bg-[#F1F3F5] dark:bg-slate-800/80 border-transparent grayscale opacity-50")
                        : (isCookingMode ? "bg-zinc-900 border-zinc-700 hover:border-brand-accent" : "bg-[#F8F9FA] dark:bg-slate-800/40 border-[#E9ECEF] dark:border-white/5 hover:border-brand-accent dark:hover:border-brand-accent")
                    )}
                    onClick={() => toggleIngredient(ing.name)}
                  >
                    <div className={cn(
                      "w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-colors shrink-0",
                      checkedIngredients.includes(ing.name) ? "bg-brand-primary border-brand-primary" : "border-brand-accent bg-white dark:bg-slate-800"
                    )}>
                      {checkedIngredients.includes(ing.name) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className={cn(
                      "flex-1 font-medium transition-colors",
                      checkedIngredients.includes(ing.name) 
                        ? (isCookingMode ? "text-zinc-500 line-through" : "text-brand-text-muted dark:text-dark-text-muted line-through")
                        : (isCookingMode ? "text-zinc-100" : "text-brand-text-main dark:text-dark-text-main")
                    )}>
                      <span className="font-bold">{formatQuantity(ing.quantity, servingsFactor)} {ing.unit}</span> de {ing.name}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-brand-text-muted dark:text-dark-text-muted italic py-4">Nenhum ingrediente disponível.</p>
              )}
            </div>
          </section>

          {!isCookingMode && (
            <div className="bg-brand-primary text-white rounded-[12px] p-6 shadow-sleek">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-[18px] font-bold mb-1">Modo Cozinha</h3>
                  <p className="text-[12px] opacity-80 leading-snug">Interface focada, tela sempre ativa e comandos de voz para navegação.</p>
                </div>
                <button 
                  onClick={() => setIsCookingMode(true)}
                  className="bg-white text-brand-primary px-5 py-2 rounded-[8px] text-[12px] font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shrink-0"
                >
                  COMEÇAR
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Recipe Header & Steps */}
        <div className="space-y-12">
          {!isCookingMode && (
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="text-[32px] md:text-[42px] font-[800] text-brand-text-main dark:text-dark-text-main leading-[1.1] tracking-[-0.8px] transition-colors">
                  {recipe.title || 'Receita Sem Título'}
                </h1>
                <p className="mt-3 text-[16px] text-brand-text-muted dark:text-dark-text-muted leading-relaxed max-w-2xl transition-colors">
                  {recipe.description || 'Uma receita deliciosa preparada com ingredientes selecionados para proporcionar uma experiência gastronômica única.'}
                </p>
                <div className="flex items-center gap-1 text-[#FFB100] mt-4 font-semibold text-sm">
                  ★★★★★ <span className="text-brand-text-muted dark:text-dark-text-muted font-normal ml-1 transition-colors">({recipe.ratingCount || 0} avaliações)</span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="w-10 h-10 rounded-full border border-[#dee2e6] dark:border-white/10 flex items-center justify-center text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-primary hover:text-white dark:hover:bg-dark-primary transition-colors">
                  <Star className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-[#dee2e6] dark:border-white/10 flex items-center justify-center text-brand-text-muted dark:text-dark-text-muted hover:bg-brand-primary hover:text-white dark:hover:bg-dark-primary transition-colors">
                  <Play className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {isCookingMode && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-[800] text-white tracking-tight">Cozinhando: {recipe.title}</h2>
              <button 
                onClick={() => setIsCookingMode(false)}
                className="bg-white text-zinc-950 px-6 py-3 rounded-[12px] font-bold uppercase tracking-widest text-xs"
              >
                SAIR DO MODO COZINHA
              </button>
            </div>
          )}

          <div className="space-y-10">
            {recipe.steps && recipe.steps.length > 0 ? (
              recipe.steps.map((step) => (
                <motion.div 
                  key={step.order}
                  layout
                  className={cn(
                    "relative pl-16 group transition-all duration-300",
                    completedSteps.includes(step.order) ? "opacity-60 grayscale-[0.5]" : "opacity-100"
                  )}
                >
                    <div 
                      onClick={() => toggleStep(step.order)}
                      className={cn(
                        "absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-xl font-bold transition-all cursor-pointer",
                        completedSteps.includes(step.order) 
                          ? "bg-brand-accent border-brand-accent text-white rotate-[360deg] shadow-lg shadow-brand-accent/20" 
                          : "border-brand-primary/40 text-brand-primary/60 dark:text-dark-text-muted group-hover:border-brand-accent group-hover:text-brand-accent"
                      )}
                    >
                      {completedSteps.includes(step.order) ? <Check className="w-6 h-6" /> : step.order}
                    </div>
                  <div className="space-y-6">
                    <div className={cn(
                      "text-xl md:text-2xl leading-relaxed transition-colors", 
                      completedSteps.includes(step.order) 
                        ? (isCookingMode ? "text-zinc-600 line-through" : "text-brand-text-muted dark:text-dark-text-muted line-through")
                        : (isCookingMode ? "text-zinc-100 font-medium" : "text-brand-text-main dark:text-dark-text-main font-light")
                    )}>
                      <ReactMarkdown>{step.text || 'Instruções não fornecidas para este passo.'}</ReactMarkdown>
                    </div>
                    {step.image && (
                      <img 
                        src={step.image} 
                        className="rounded-2xl w-full max-h-[400px] object-cover border border-brand-primary/10" 
                        alt={`Step ${step.order}`}
                      />
                    )}
                    {/* Ad placement between steps */}
                    {step.order === 2 && !isCookingMode && (
                      <div className="py-12 my-8 border-y-2 border-brand-primary/5 bg-brand-primary/[0.02] dark:bg-white/[0.02] flex flex-col items-center justify-center gap-4 text-center rounded-xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted/40 dark:text-white/20">Espaço Publicitário</span>
                        <div className="w-16 h-[1px] bg-brand-primary/20" />
                        <span className="text-sm font-serif italic text-brand-text-muted/60 dark:text-white/40">Sua marca pode brilhar aqui.<br />Entre em contato para anunciar.</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-xl text-brand-text-muted dark:text-dark-text-muted italic py-12">Instruções não disponíveis para esta receita.</p>
            )}
          </div>

          {/* Interactive Tools */}
          {!isCookingMode && (
            <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-brand-primary/5 dark:bg-slate-800/40 rounded-3xl border border-brand-primary/10 dark:border-white/5 space-y-4 transition-colors">
                <div className="flex items-center gap-3 text-brand-accent dark:text-dark-primary transition-colors">
                  <Scale className="w-6 h-6" />
                  <h3 className="font-serif text-2xl font-bold dark:text-dark-text-main">Conversor</h3>
                </div>
                <p className="text-sm opacity-70 dark:text-dark-text-muted transition-colors">Converta gramas, xícaras e ml instantaneamente.</p>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="Valor" className="bg-white dark:bg-slate-900 px-4 py-3 rounded-xl border border-brand-primary/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-brand-accent transition-all dark:text-white" />
                  <select className="bg-white dark:bg-slate-900 px-4 py-3 rounded-xl border border-brand-primary/10 dark:border-white/10 outline-none text-brand-text-main dark:text-dark-text-main">
                    <option>Gramas (g)</option>
                    <option>Xícaras</option>
                    <option>Mililitros (ml)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Persistence Placeholder Notification */}
      <AnimatePresence>
        {isCookingMode && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-full flex items-center gap-4 shadow-2xl z-50 overflow-hidden"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Modo Cozinha Ativo • Tela Bloqueada</span>
            <div className="w-[1px] h-4 bg-zinc-700 mx-2" />
            <span className="text-xs text-zinc-400">Dica: Toque no número do passo para marcar como feito.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
