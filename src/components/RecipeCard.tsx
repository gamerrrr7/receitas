import React, { useState } from 'react';
import { Clock, ChefHat, DollarSign, Star, Bookmark, Heart } from 'lucide-react';
import { Recipe } from '../types';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const subcategory = recipe.subcategory || 'GOURMET';
  const categoryLabel = recipe.category === 'Sweet' ? 'DOCE' : recipe.category === 'Savory' ? 'SALGADO' : 'SAUDÁVEL';
  const imageUrl = (recipe.images && recipe.images.length > 0) ? recipe.images[0] : 'https://picsum.photos/seed/food/800/600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-white dark:bg-dark-surface rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(45,106,79,0.12)] border border-neutral-100 dark:border-white/10 transition-all duration-500 flex flex-col h-full"
      onClick={() => onClick?.(recipe)}
    >
      {/* Image Section */}
      <div className="relative aspect-[5/4] overflow-hidden bg-neutral-100 dark:bg-slate-800 transition-colors">
        <motion.img
          src={imageUrl}
          alt={recipe.title || 'Receita'}
          referrerPolicy="no-referrer"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="w-full h-full object-cover"
        />
        
        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-500 group-hover:opacity-80" />
 
        {/* Category Tags - Bottom Left */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 transition-transform duration-500 group-hover:translate-x-1">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-primary uppercase tracking-wider shadow-sm"
          >
            {categoryLabel}
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="bg-brand-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-white uppercase tracking-wider shadow-sm"
          >
            {subcategory}
          </motion.span>
        </div>

        {/* Save Button - Top Right */}
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className={cn(
            "absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20",
            isSaved ? "bg-red-500 text-white border-red-400" : "bg-white/20 text-white hover:bg-white/40"
          )}
        >
          <Heart className={cn("w-5 h-5 transition-colors", isSaved && "fill-current")} />
        </motion.button>

        {/* Rating Floating Badge */}
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm flex items-center gap-1 transition-colors">
          <Star className="w-3 h-3 text-[#FFB100] fill-current" />
          <span className="text-[11px] font-bold text-slate-800 dark:text-white">{recipe.ratingAvg || '5.0'}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Title */}
        <h3 className="text-[22px] font-extrabold text-brand-text-main dark:text-dark-text-main leading-[1.1] tracking-tight group-hover:text-brand-primary dark:group-hover:text-dark-primary transition-colors duration-300 min-h-[48px] flex items-center">
          {recipe.title || 'Receita Sem Título'}
        </h3>

        {/* Info Row */}
        <div className="flex items-center justify-between py-4 border-y border-neutral-100/80 dark:border-white/5 transition-colors">
          <div className="flex flex-col items-center gap-1.5 flex-1 group/info">
            <Clock className="w-4 h-4 text-brand-primary/60 dark:text-dark-primary/60 group-hover/info:text-brand-primary dark:group-hover/info:text-dark-primary transition-colors" />
            <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted tracking-widest whitespace-nowrap">
              {(recipe.prepTime || 0) + (recipe.cookTime || 0)} Min
            </span>
          </div>
          
          <div className="w-[1px] h-8 bg-neutral-100 dark:bg-white/5" />
          
          <div className="flex flex-col items-center gap-1.5 flex-1 group/info">
            <ChefHat className="w-4 h-4 text-brand-primary/60 dark:text-dark-primary/60 group-hover/info:text-brand-primary dark:group-hover/info:text-dark-primary transition-colors" />
            <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted tracking-widest whitespace-nowrap">
              {recipe.difficulty || 'Fácil'}
            </span>
          </div>

          <div className="w-[1px] h-8 bg-neutral-100 dark:bg-white/5" />

          <div className="flex flex-col items-center gap-1.5 flex-1 group/info">
            <DollarSign className="w-4 h-4 text-brand-primary/60 dark:text-dark-primary/60 group-hover/info:text-brand-primary dark:group-hover/info:text-dark-primary transition-colors" />
            <span className="text-[10px] font-bold uppercase text-brand-text-muted dark:text-dark-text-muted tracking-widest whitespace-nowrap">
              {recipe.costEstimate || '$$'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-primary/10 dark:bg-dark-primary/20 flex items-center justify-center text-brand-primary dark:text-dark-primary text-[10px] font-black uppercase transition-colors">
              {(recipe.authorId || 'A').charAt(0)}
            </div>
            <span className="text-[11px] font-bold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider">
              {recipe.authorId || 'Anônimo'}
            </span>
          </div>
          
          <div className="flex items-center gap-1 group/btn text-[11px] font-bold uppercase tracking-widest text-brand-primary dark:text-dark-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
            Ver agora <Bookmark className="w-3 h-3 group-hover/btn:fill-current" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
