import React from 'react';
import { Cake, Sparkles, MessageCircle } from 'lucide-react';
import { MENU_PRODUCTS } from '../data/menu';
import { ProductCard } from './ProductCard';
import { RESTAURANT_CONFIG } from '../data/config';

export const BakerySection: React.FC = () => {
  const bakeryItems = MENU_PRODUCTS.filter(
    (item) => item.categoryId === 'cakes-bakery' || item.categoryId === 'pastries-sweets'
  );

  return (
    <section id="bakery" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE5DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
            <Cake className="w-3.5 h-3.5" />
            <span>Artisan Bakery & Traditional Sweets</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1C120C] text-balance">
            Freshly Baked Cakes & Traditional Mithai
          </h2>
          <p className="text-sm sm:text-base text-[#615247] leading-relaxed">
            From multi-layered Belgian chocolate fudge cakes to warm fragrant Gulab Jamun and luxury assorted mithai boxes, crafted with care for all your celebrations in Mirpur Mathelo.
          </p>
        </div>

        {/* Feature Split Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Banner 1: Cakes & Celebration */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E0D8CE] bg-[#1C120C] group">
            <img
              src="/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg"
              alt="Artisan chocolate fudge cake slice at Salt'n Sweet Bakery"
              className="w-full h-64 sm:h-72 object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C]/95 via-[#1C120C]/40 to-transparent p-6 flex flex-col justify-end text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E5C365]">
                Custom Celebration Cakes
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                Birthday, Anniversary & Party Cakes
              </h3>
              <p className="text-xs sm:text-sm text-[#D6C7BA] mb-3">
                Pre-order custom designer fondant or whipped buttercream cakes with personalised inscriptions.
              </p>
              <div>
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to inquire about ordering a custom cake for an event.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C120C] bg-[#E5C365] hover:bg-[#F3D78E] px-3.5 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Custom Cake Inquiry on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Banner 2: Traditional Sweets */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E0D8CE] bg-[#1C120C] group">
            <img
              src="/src/assets/images/traditional_pakistani_sweets_1792155315064.jpg"
              alt="Traditional Pakistani sweets including Gulab Jamun and Barfi"
              className="w-full h-64 sm:h-72 object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C]/95 via-[#1C120C]/40 to-transparent p-6 flex flex-col justify-end text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E5C365]">
                Traditional Mithai
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                Special Gulab Jamun & Assorted Mithai
              </h3>
              <p className="text-xs sm:text-sm text-[#D6C7BA] mb-3">
                Freshly prepared daily with pure ingredients. Available by the kilogram or in elegant gift boxes.
              </p>
              <div>
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order fresh mithai / sweets.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C120C] bg-[#E5C365] hover:bg-[#F3D78E] px-3.5 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order Mithai on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bakery Products Display */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E0D8CE] pb-3 text-left">
            <h3 className="font-serif text-2xl font-bold text-[#1C120C]">
              Bakery & Sweets Menu
            </h3>
            <span className="text-xs text-[#8A7968]">
              {bakeryItems.length} items available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bakeryItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
