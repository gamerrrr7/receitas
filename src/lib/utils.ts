import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatQuantity(quantity: number, servingsFactor: number): string {
  const final = quantity * servingsFactor;
  if (final === 0) return '0';
  // Round to 2 decimal places if needed
  return Number.isInteger(final) ? final.toString() : final.toFixed(2);
}
