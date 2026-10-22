import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, Clock, Facebook, Instagram } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F1EA] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] block">
            Visit & Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1C120C]">
            Get in Touch with Salt'n Sweet
          </h2>
          <p className="text-sm text-[#6B5E51]">
            We are located in the heart of Mirpur Mathelo. Call or message us directly on WhatsApp to place your order or inquire about party catering.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-left">
          
          {/* Card 1: Phone Numbers (Click to Call) */}
          <div className="bg-white p-6 rounded-2xl border border-[#E0D8CE] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1C120C] text-[#E5C365] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C120C]">Phone Orders & Inquiries</h3>
              <p className="text-xs text-[#7A6C5F] mt-1">Tap a number to call directly:</p>
            </div>
            <div className="space-y-2 pt-1">
              <a
                href={`tel:${RESTAURANT_CONFIG.primaryPhone.replace(/-/g, '')}`}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#C59B27] text-sm font-bold text-[#1C120C] transition-colors"
              >
                <span>Primary: {RESTAURANT_CONFIG.primaryPhone}</span>
                <span className="text-xs text-[#C59B27] font-semibold">Call Now →</span>
              </a>
              <a
                href={`tel:${RESTAURANT_CONFIG.secondaryPhone.replace(/-/g, '')}`}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#C59B27] text-sm font-bold text-[#1C120C] transition-colors"
              >
                <span>Secondary: {RESTAURANT_CONFIG.secondaryPhone}</span>
                <span className="text-xs text-[#C59B27] font-semibold">Call Now →</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Orders */}
          <div className="bg-white p-6 rounded-2xl border border-[#E0D8CE] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C120C]">WhatsApp Order Line</h3>
              <p className="text-xs text-[#7A6C5F] mt-1">Fast order dispatch and quick customer chat:</p>
            </div>
            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.primaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order food.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-sm font-bold text-emerald-950 transition-colors"
              >
                <span>WhatsApp: {RESTAURANT_CONFIG.primaryPhone}</span>
                <span className="text-xs text-emerald-700 font-semibold">Chat →</span>
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.secondaryWhatsApp}?text=${encodeURIComponent('Hello Salt\'n Sweet! I would like to order food.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#C59B27] text-sm font-bold text-[#1C120C] transition-colors"
              >
                <span>Alternative: {RESTAURANT_CONFIG.secondaryPhone}</span>
                <span className="text-xs text-[#C59B27] font-semibold">Chat →</span>
              </a>
            </div>
          </div>

          {/* Card 3: Location & Directions */}
          <div className="bg-white p-6 rounded-2xl border border-[#E0D8CE] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C59B27] text-[#1C120C] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C120C]">Restaurant Location</h3>
              <p className="text-xs text-[#7A6C5F] mt-1">
                {RESTAURANT_CONFIG.location}
              </p>
            </div>
            <div className="pt-1">
              <a
                href={RESTAURANT_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#1C120C] text-[#E5C365] hover:bg-[#2F2118] text-xs font-semibold transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8A7968] pt-1">
              <Clock className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
              <span>{RESTAURANT_CONFIG.hoursNote}</span>
            </div>
          </div>

        </div>

        {/* Social channels card */}
        <div className="bg-white p-6 rounded-2xl border border-[#E0D8CE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-bold text-[#1C120C]">Follow Salt'n Sweet on Social Media</h4>
            <p className="text-xs text-[#7A6C5F]">Check our official pages for current menu updates and announcements.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 font-semibold text-xs transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook Page</span>
            </a>
            <a
              href={RESTAURANT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F]/20 font-semibold text-xs transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram Profile</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
