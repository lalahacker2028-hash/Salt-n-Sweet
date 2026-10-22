import React from 'react';
import { MapPin, UtensilsCrossed, Clock, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAFAF7] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual feature */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E0D8CE] shadow-lg bg-[#2A1D16]">
              <img
                src="/src/assets/images/hero_saltnsweet_spread_1792155261487.jpg"
                alt="Salt'n Sweet dining ambience and food in Mirpur Mathelo"
                className="w-full h-80 sm:h-96 object-cover opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-[#1C120C] text-[#E5C365] p-5 rounded-xl border border-[#C59B27]/40 shadow-xl max-w-xs text-left hidden sm:block">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-semibold">Location</span>
              <p className="text-xs font-serif font-bold text-white mt-1">Data-3 Petroleum, Near Bus Stand, Mirpur Mathelo</p>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] block">
                About Salt'n Sweet
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C120C] text-balance">
                Your Destination for Savoury Food & Sweet Celebrations
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#55473E] leading-relaxed">
              <strong>Salt'n Sweet</strong> is a fast-food restaurant, cafe, and bakery located at Data-3 Petroleum, Near Bus Stand, Mirpur Mathelo, Sindh. We cater to individuals, families, and gatherings across the city with a diverse menu designed for every craving.
            </p>

            <p className="text-sm sm:text-base text-[#55473E] leading-relaxed">
              Our kitchen serves freshly prepared stone-baked pizzas, crispy zinger burgers, spicy fried chicken broast, authentic shawarma wraps, triple-decker club sandwiches, and continental dishes. In our bakery, we bake custom celebration cakes, delicate European pastries, and traditional South Asian sweets including hot syrup Gulab Jamun and assorted mithai.
            </p>

            {/* Factual features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE5DC]">
                <UtensilsCrossed className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C120C]">Fast Food & Cafe</h4>
                  <p className="text-[11px] text-[#6B5E51] mt-0.5">Pizzas, burgers, broast, shawarma & chilled frappes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE5DC]">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C120C]">Bakery & Mithai</h4>
                  <p className="text-[11px] text-[#6B5E51] mt-0.5">Fresh cakes, pastries, and traditional Pakistani sweets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE5DC]">
                <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C120C]">Central Location</h4>
                  <p className="text-[11px] text-[#6B5E51] mt-0.5">Easily accessible near Mirpur Mathelo bus stand.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE5DC]">
                <Clock className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C120C]">Operating Hours</h4>
                  <p className="text-[11px] text-[#6B5E51] mt-0.5">{RESTAURANT_CONFIG.hoursNote}.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
