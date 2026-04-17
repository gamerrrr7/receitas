import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useUser } from '../lib/UserContext';
import { motion } from 'motion/react';
import { Camera, Save, LogOut, ChevronLeft, User as UserIcon } from 'lucide-react';

export default function ProfilePage() {
  const { user, updateProfile, logout } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [isSaved, setIsSaved] = useState(false);

  if (!user) {
    navigate('/');
    return null;
  }

  const handleSave = () => {
    updateProfile(name, photo);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const avatarOptions = [
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${name || 'Chef'}`,
    `https://api.dicebear.com/7.x/bottts/svg?seed=${name || 'Chef'}`,
    `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name || 'Chef'}`,
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${name || 'Chef'}`,
  ];

  return (
    <div className="min-h-screen bg-brand-bg dark:bg-dark-bg transition-colors duration-500">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-20">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-text-muted dark:text-dark-text-muted hover:text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Voltar ao Início
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-surface rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/[0.02] border border-black/5 dark:border-white/5"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative group">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-[40px] overflow-hidden bg-brand-primary/10 border-4 border-brand-primary/20 shadow-xl">
                <img src={photo || user.photoURL} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-primary text-white rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
            </div>

            <div className="w-full space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted ml-4">Nome do Chef</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-bg dark:bg-dark-bg rounded-[24px] px-6 py-4 outline-none border-2 border-transparent focus:border-brand-primary font-bold text-lg dark:text-white transition-all shadow-inner"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted dark:text-dark-text-muted ml-4">Escolha seu Avatar</label>
                <div className="grid grid-cols-4 gap-4">
                  {avatarOptions.map((url, i) => (
                    <button 
                      key={i}
                      onClick={() => setPhoto(url)}
                      className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${photo === url ? 'border-brand-primary scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={url} alt={`Option ${i}`} className="w-full h-full object-cover bg-brand-bg dark:bg-dark-bg" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleSave}
                  className="flex-1 bg-brand-primary text-white py-4 rounded-[24px] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all shadow-xl shadow-brand-primary/20"
                >
                  {isSaved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
                  {isSaved ? 'Salvo!' : 'Salvar Alterações'}
                </button>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="px-8 py-4 bg-red-50 text-red-500 rounded-[24px] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Sair da Conta
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function Check(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
