import React from 'react';
import { ArrowDown, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';

export const HeroSection: React.FC = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFAF7] pt-6 pb-16 md:pt-12 md:pb-24 border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Location Reference */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7968]">
              <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>{RESTAURANT_CONFIG.locationShort}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C59B27]">Sindh, Pakistan</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C120C] font-serif leading-[1.1] text-balance">
                Good Food. <br />
                <span className="italic font-normal text-[#C59B27]">Sweet Moments.</span>
              </h1>
              <div className="w-16 h-1 bg-[#C59B27] rounded-full mt-3"></div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#55473E] leading-relaxed max-w-xl font-normal">
              {RESTAURANT_CONFIG.supportingText}
            </p>

            {/* Offerings strip (clean unboxed text with subtle typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#736355] pt-1">
              <span>Stone-Baked Pizzas</span>
              <span aria-hidden="true" className="text-[#C59B27]">·</span>
              <span>Crispy Zinger Burgers</span>
              <span aria-hidden="true" className="text-[#C59B27]">·</span>
              <span>Artisan Cakes</span>
              <span aria-hidden="true" className="text-[#C59B27]">·</span>
              <span>Traditional Sweets</span>
              <span aria-hidden="true" className="text-[#C59B27]">·</span>
              <span>Cafe Chillers</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3.5 bg-[#1C120C] hover:bg-[#2F2118] text-[#F5F1EA] text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer border border-[#C59B27]/40"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#E5C365]" />
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order food.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust highlight */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#7A6C5F]">
              <div className="w-5 h-5 rounded-full bg-[#EAE2D2] flex items-center justify-center text-[#8C6D1F]">
                <Sparkles className="w-3 h-3" />
              </div>
              <span>Freshly prepared on order · Direct WhatsApp coordination</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CE] bg-[#1C120C] group">
              <img
                src="/src/assets/images/hero_saltnsweet_spread_1792155261487.jpg"
                alt="Salt'n Sweet premium table feast featuring oven baked pizza, crispy zinger burger, and chocolate cake in Mirpur Mathelo"
                className="w-full h-full aspect-16/10 lg:aspect-4/3 object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.img-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="img-fallback hidden w-full aspect-16/10 items-center justify-center bg-[#2A1D16] text-[#E5C365] p-8 text-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Salt'n Sweet</h3>
                  <p className="text-sm mt-1 text-[#D4AF37]">Restaurant, Cafe & Bakery — Mirpur Mathelo</p>
                </div>
              </div>

              {/* Subtle scrim for editorial label */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#1C120C]/90 via-[#1C120C]/40 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#E5C365]">Oven-Baked & Freshly Fried</p>
                    <p className="text-sm sm:text-base font-serif font-medium text-[#F5F1EA]">Signature Pizzas, Crispy Broast, Burgers & Cakes</p>
                  </div>
                  <span className="text-xs text-[#C59B27] font-semibold bg-[#1C120C]/60 px-2.5 py-1 rounded backdrop-blur-xs border border-[#C59B27]/30">
                    Mirpur Mathelo
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative accent card */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-white p-4 rounded-xl border border-[#EAE5DC] shadow-lg max-w-xs">
              <p className="text-xs font-bold text-[#1C120C]">Family Dining & Home Delivery</p>
              <p className="text-[11px] text-[#6E6155] mt-0.5">Quick order dispatch via WhatsApp: 0300-2696166</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
