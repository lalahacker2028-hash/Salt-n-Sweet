import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/config';

export const FloatingActions: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2.5 items-end">
      {/* Floating Cart Button (visible when items present) */}
      {totalItems > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Open Cart"
          className="p-3 bg-[#1C120C] hover:bg-[#332218] text-[#E5C365] rounded-full shadow-lg border border-[#C59B27]/40 flex items-center justify-center relative transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-[#C59B27] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs">
            {totalItems}
          </span>
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to inquire / order food.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="flex items-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/40"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-xs font-bold pr-1">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
