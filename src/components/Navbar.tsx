import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/config';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Popular', href: '#popular' },
    { label: 'Bakery & Sweets', href: '#bakery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#EAE5DC] transition-all">
        {/* Top notice bar with direct contact */}
        <div className="bg-[#1C120C] text-[#E5C365] text-xs py-1.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <span className="truncate">
              📍 Mirpur Mathelo, Near Bus Stand · Fresh Fast Food & Artisan Bakery
            </span>
            <div className="hidden sm:flex items-center gap-4 shrink-0 text-[#F5F1EA]">
              <a href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/-/g, '')}`} className="hover:text-[#E5C365] transition-colors flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{RESTAURANT_CONFIG.primaryPhone}</span>
              </a>
              <span className="text-[#6B5E51]">·</span>
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5C365] transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1C120C] text-[#E5C365] flex items-center justify-center font-serif text-lg font-bold shadow-sm border border-[#C59B27]/40 group-hover:scale-105 transition-transform">
              S&S
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1C120C] font-serif block leading-none">
                Salt'n Sweet
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8A7968] font-medium block mt-0.5">
                Restaurant & Bakery
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3E36]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#1C120C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions (Cart & WhatsApp CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-lg border border-[#E0D8CE] bg-white text-[#1C120C] hover:bg-[#F5F1EA] hover:border-[#C59B27] transition-all cursor-pointer flex items-center justify-center shadow-xs"
            >
              <ShoppingBag className="w-5 h-5 text-[#1C120C]" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C59B27] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs tabular-nums animate-in zoom-in-75 duration-150">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Primary Order Action */}
            <a
              href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order food.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C120C] hover:bg-[#2F2118] border border-[#C59B27]/40 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-lg border border-[#E0D8CE] bg-white text-[#1C120C] hover:bg-[#F5F1EA] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE5DC] bg-[#FAFAF7] px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-sm font-medium text-[#2E241E] hover:text-[#C59B27] transition-colors cursor-pointer border-b border-[#F0EBE3] last:border-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order food.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C120C] rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/-/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#1C120C] border border-[#D5CBC0] rounded-lg bg-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Call {RESTAURANT_CONFIG.primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
