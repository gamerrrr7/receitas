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
            className="fixed bottom-24 right-8 w-80 bg-white border border-brand-primary/10 rounded-3xl shadow-2xl p-6 z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-bold italic text-brand-primary">Conversor</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-brand-primary/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Valor</label>
                <input 
                  type="number" 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Ex: 500"
                  className="w-full px-4 py-3 bg-brand-primary/5 rounded-xl border border-transparent focus:border-brand-accent focus:bg-white outline-none transition-all font-mono"
                />
              </div>

              <div className="flex items-center gap-2">
                <select 
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="flex-1 px-3 py-2 bg-brand-primary/5 rounded-xl text-sm outline-none border border-transparent focus:border-brand-accent"
                >
                  <option value="g">Gramas (g)</option>
                  <option value="cups">Xícaras</option>
                  <option value="ml">Mililitros (ml)</option>
                </select>
                <ArrowRightLeft className="w-4 h-4 opacity-20" />
                <select 
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="flex-1 px-3 py-2 bg-brand-primary/5 rounded-xl text-sm outline-none border border-transparent focus:border-brand-accent"
                >
                  <option value="g">Gramas (g)</option>
                  <option value="cups">Xícaras</option>
                  <option value="ml">Mililitros (ml)</option>
                </select>
              </div>

              <div className="pt-4 border-t border-brand-primary/5">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Resultado Estimado</div>
                <div className="text-3xl font-serif font-bold text-brand-accent italic">
                  {calculateResult().toFixed(2)} <span className="text-sm not-italic opacity-60 ml-1">{toUnit}</span>
                </div>
              </div>

              <p className="text-[9px] opacity-40 italic mt-4 leading-tight">
                * As conversões são aproximadas e podem variar dependendo da densidade do ingrediente.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
