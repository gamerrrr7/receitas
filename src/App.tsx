/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import UnitConverter from './components/UnitConverter';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:slug" element={<RecipePage />} />
        </Routes>
        
        <UnitConverter />
      </div>
    </BrowserRouter>
  );
}
