import React from 'react';
import { Clock, ChefHat, Star, Heart, ArrowRight, DollarSign } from 'lucide-react';
import { Recipe } from '../types';
import { cn } from '../lib/utils';
import { useUser } from '../lib/UserContext';
import { motion } from 'motion/react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const { toggleFavorite, isFavorite } = useUser();
  const fav = isFavorite(recipe.id);

  const totalTime = recipe.prepTime + (recipe.cookTime || 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white dark:bg-dark-surface rounded-[40px] overflow-hidden border border-black/5 dark:border-white/5 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:shadow-brand-primary/10 transition-all cursor-pointer flex flex-col h-full"
      onClick={() => onClick?.(recipe)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={recipe.images[0]} 
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Soft Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className={cn(
            "absolute top-6 right-6 w-12 h-12 rounded-[20px] flex items-center justify-center transition-all backdrop-blur-xl border border-white/20 z-10",
            fav ? "bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/40" : "bg-white/10 text-white hover:bg-white/30 hover:scale-110"
          )}
        >
          <Heart className={cn("w-6 h-6 transition-transform duration-300", fav && "fill-current scale-110")} />
        </button>

        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className={cn(
              "w-1.5 h-1.5 rounded-full",
              recipe.difficulty === 'Easy' ? "bg-green-400" : recipe.difficulty === 'Medium' ? "bg-yellow-400" : "bg-red-400"
            )} />
            {recipe.difficulty === 'Easy' ? 'Fácil' : recipe.difficulty === 'Medium' ? 'Médio' : 'Difícil'}
          </div>
          {recipe.ratingAvg >= 4.9 && (
            <div className="bg-brand-accent text-brand-text-main px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand-accent/20">
              <Star className="w-3 h-3 fill-current" />
              Elite
            </div>
          )}
        </div>

        {/* Content on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star 
                  key={i} 
                  className={cn("w-3 h-3 transition-colors", i <= Math.round(recipe.ratingAvg) ? "text-brand-accent fill-current" : "text-white/20")} 
                />
              ))}
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest ml-1">{recipe.ratingAvg}</span>
          </div>
          
          <h3 className="text-2xl font-black leading-none tracking-tighter mb-4 group-hover:text-brand-accent transition-colors line-clamp-2">
            {recipe.title}
          </h3>

          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-all whitespace-nowrap overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0 bg-white/10 px-2 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              {totalTime}m
            </div>
            <div className="flex items-center gap-1.5 shrink-0 bg-white/10 px-2 py-1 rounded-lg">
              <ChefHat className="w-3.5 h-3.5 text-brand-accent" />
              {recipe.category}
            </div>
            <div className="flex items-center gap-1.5 shrink-0 bg-brand-accent/20 text-brand-accent px-2 py-1 rounded-lg border border-brand-accent/20">
              <DollarSign className="w-3.5 h-3.5" />
              {recipe.costEstimate}
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black">
                  {recipe.authorId.charAt(0)}
                </div>
                <span className="text-[10px] font-bold opacity-60">{recipe.authorId}</span>
             </div>
             <div className="flex items-center gap-2 text-brand-accent font-black">
               VER AGORA <ArrowRight className="w-4 h-4" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
