import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import { ALL_RECIPES } from '../data/recipes';
import { motion } from 'motion/react';

export default function RecipePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const recipe = ALL_RECIPES.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-[800] text-brand-primary">404</h1>
          <p className="text-brand-text-muted font-bold uppercase tracking-widest">Receita não encontrada</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-brand-primary text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-sleek"
          >
            Voltar para Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "circOut" }}
    >
      <RecipeDetail 
        recipe={recipe} 
        onBack={() => navigate('/')} 
      />
    </motion.div>
  );
}
