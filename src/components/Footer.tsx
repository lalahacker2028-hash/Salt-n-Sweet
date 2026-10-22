import React from 'react';
import { Phone, MessageCircle, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';
import { MENU_CATEGORIES } from '../data/menu';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C120C] text-[#D6C7BA] pt-16 pb-12 border-t border-[#C59B27]/30 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#38271D]">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#2A1D16] text-[#E5C365] flex items-center justify-center font-serif text-lg font-bold border border-[#C59B27]/40">
                S&S
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-tight">
                {RESTAURANT_CONFIG.brandName}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#A8988A] leading-relaxed">
              Fast-food restaurant, cafe and bakery in Mirpur Mathelo, Sindh. Specializing in stone-baked pizzas, crispy zinger burgers, spicy chicken broast, fresh Arabic shawarma, artisan celebration cakes, and traditional sweets.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-lg bg-[#2D1F17] hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-[#453227]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-lg bg-[#2D1F17] hover:bg-[#E4405F] text-white flex items-center justify-center transition-colors border border-[#453227]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-8 h-8 rounded-lg bg-[#2D1F17] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors border border-[#453227]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A597]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#popular" className="hover:text-white transition-colors">Popular Food</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Complete Menu</a>
              </li>
              <li>
                <a href="#bakery" className="hover:text-white transition-colors">Bakery & Sweets</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Menu Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Menu Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-[#B5A597]">
              {MENU_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href="#menu"
                  className="hover:text-white transition-colors py-0.5 truncate"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Location & Ordering
            </h4>
            <div className="space-y-2.5 text-[#B5A597]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {RESTAURANT_CONFIG.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a href={`tel:${RESTAURANT_CONFIG.secondaryPhone.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {RESTAURANT_CONFIG.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-emerald-300"
                >
                  WhatsApp: +92 300 2696166
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7968]">
          <p>© {new Date().getFullYear()} Salt'n Sweet, Mirpur Mathelo. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#B5A597] hover:text-[#E5C365] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
