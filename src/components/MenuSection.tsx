import React, { useState, useMemo } from 'react';
import { Search, Utensils, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_PRODUCTS } from '../data/menu';
import { CategoryId } from '../types';
import { ProductCard } from './ProductCard';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return MENU_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categoryId === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAFAF7] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
            <Utensils className="w-3.5 h-3.5" />
            <span>Full Restaurant & Bakery Menu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1C120C] text-balance">
            Explore Our Delicious Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#615247] leading-relaxed">
            Browse our full selection of freshly baked pizzas, crispy chicken, shawarma, sandwiches, artisan cakes and chilled cafe drinks.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          {/* Real-time search input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A7968]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, pizzas, cakes, shawarma..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-sm text-[#1C120C] placeholder-[#9A8D80] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 focus:border-[#C59B27] shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8A7968] hover:text-[#1C120C] px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented control button elements as per Frontend Constitution) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 no-scrollbar sm:flex-wrap sm:justify-center">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#1C120C] text-[#E5C365] shadow-xs'
                  : 'bg-white text-[#5C4F44] border border-[#E0D8CE] hover:border-[#C59B27]'
              }`}
            >
              All Items ({MENU_PRODUCTS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_PRODUCTS.filter((p) => p.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#1C120C] text-[#E5C365] shadow-xs'
                      : 'bg-white text-[#5C4F44] border border-[#E0D8CE] hover:border-[#C59B27]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing notice info box */}
        <div className="max-w-2xl mx-auto mb-8 p-3 rounded-lg bg-[#F5EFE6] border border-[#E2D8CA] flex items-center gap-3 text-xs text-[#6B5A4B]">
          <Info className="w-4 h-4 text-[#C59B27] shrink-0" />
          <span>
            <strong>Pricing Note:</strong> All verified prices are listed in PKR. Items marked <em>“Price on WhatsApp”</em> will have their final rate confirmed directly with Salt'n Sweet before delivery or pickup.
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-2xl border border-dashed border-[#D5CBC0] max-w-md mx-auto p-8">
            <Utensils className="w-10 h-10 text-[#C59B27] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#1C120C]">No dishes found</h3>
            <p className="text-xs text-[#736355] mt-1 mb-4">
              We couldn't find any menu items matching "{searchQuery}". Try selecting another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1C120C] rounded-lg cursor-pointer hover:bg-[#332218]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
