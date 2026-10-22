/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PopularSection } from './components/PopularSection';
import { MenuSection } from './components/MenuSection';
import { BakerySection } from './components/BakerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1C120C]">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <PopularSection />
          <MenuSection />
          <BakerySection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <CheckoutModal />
        <FloatingActions />
      </div>
    </CartProvider>
  );
}
