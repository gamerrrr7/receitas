import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-12">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-full border border-neutral-200 dark:border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-brand-text-main dark:text-dark-text-main" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 rounded-full font-bold text-sm transition-all",
            currentPage === page
              ? "bg-brand-primary text-white shadow-sleek"
              : "text-brand-text-muted dark:text-dark-text-muted hover:bg-neutral-100 dark:hover:bg-slate-800"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full border border-neutral-200 dark:border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-brand-text-main dark:text-dark-text-main" />
      </button>
    </div>
  );
}
