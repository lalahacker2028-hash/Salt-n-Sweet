import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MENU_PRODUCTS } from '../data/menu';
import { ProductCard } from './ProductCard';

export const PopularSection: React.FC = () => {
  const popularProducts = MENU_PRODUCTS.filter((item) => item.isPopular);

  return (
    <section id="popular" className="py-16 md:py-20 bg-[#F5F1EA]/60 border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Favourites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C120C] text-balance">
              Popular Delights from Our Kitchen
            </h2>
            <p className="text-sm text-[#66574C] font-normal">
              Most requested oven-baked pizzas, signature zinger burgers, Arabic shawarma, and artisan Belgian chocolate cakes.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C120C] hover:text-[#C59B27] transition-colors group cursor-pointer shrink-0"
          >
            <span>View Complete Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
