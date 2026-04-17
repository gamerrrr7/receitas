import React, { useState } from 'react';
import { Scale, X, ArrowRightLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function UnitConverter() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState('g');
  const [toUnit, setToUnit] = useState('cups');

  const conversions: Record<string, Record<string, number>> = {
    'g': { 'cups': 0.008, 'ml': 1 },
    'cups': { 'g': 125, 'ml': 236 },
    'ml': { 'g': 1, 'cups': 0.0042 }
  };

  const calculateResult = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return 0;
    if (fromUnit === toUnit) return num;
    return num * (conversions[fromUnit]?.[toUnit] || 1);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 border-2 border-brand-accent/20"
      >
        <Scale className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 w-80 bg-white dark:bg-dark-surface border border-brand-primary/10 dark:border-white/10 rounded-[32px] shadow-2xl p-8 z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Scale className="w-4 h-4 text-brand-primary" />
                </div>
                <h3 className="text-xl font-black tracking-tight dark:text-white">Conversor</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-brand-primary/5 dark:hover:bg-white/5 rounded-full transition-colors dark:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted ml-2">Valor</label>
                <input 
                  type="number" 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Ex: 500"
                  className="w-full px-5 py-4 bg-brand-bg dark:bg-dark-bg rounded-2xl border-2 border-transparent focus:border-brand-primary/30 focus:bg-white dark:focus:bg-dark-bg outline-none transition-all font-bold dark:text-white shadow-inner"
                />
              </div>

              <div className="flex items-center gap-2">
                <select 
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="flex-1 px-4 py-3 bg-brand-bg dark:bg-dark-bg rounded-2xl text-xs font-black uppercase tracking-widest outline-none border border-transparent focus:border-brand-primary/30 dark:text-white"
                >
                  <option value="g">Gramas (g)</option>
                  <option value="cups">Xícaras</option>
                  <option value="ml">Mililitros (ml)</option>
                </select>
                <ArrowRightLeft className="w-4 h-4 text-brand-primary" />
                <select 
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="flex-1 px-4 py-3 bg-brand-bg dark:bg-dark-bg rounded-2xl text-xs font-black uppercase tracking-widest outline-none border border-transparent focus:border-brand-primary/30 dark:text-white"
                >
                  <option value="g">Gramas (g)</option>
                  <option value="cups">Xícaras</option>
                  <option value="ml">Mililitros (ml)</option>
                </select>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted mb-2">Resultado Estimado</div>
                <div className="text-4xl font-black text-brand-accent tracking-tighter">
                  {calculateResult().toFixed(2)} <span className="text-sm uppercase tracking-widest opacity-40 ml-1">{toUnit === 'cups' ? 'Xícs' : toUnit}</span>
                </div>
              </div>

              <p className="text-[10px] font-bold text-brand-text-muted dark:text-dark-text-muted italic mt-4 leading-snug opacity-60">
                * As conversões são aproximadas para referência culinária rápida.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
