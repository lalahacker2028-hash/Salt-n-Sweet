import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, Check, MessageCircle } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { generateSingleProductQuickWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, quickOrder } = useCart();

  // If product has variants, pick first by default
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  // Determine current active price
  const isConfirmed = selectedVariant ? selectedVariant.isPriceConfirmed : product.isPriceConfirmed;
  const currentPrice = selectedVariant?.price ?? product.price;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
    }, 1500);
  };

  const handleQuickOrder = () => {
    quickOrder(product, selectedVariant);
  };

  const priceDisplayText = isConfirmed && typeof currentPrice === 'number'
    ? `Rs. ${currentPrice.toLocaleString('en-PK')}`
    : 'Price on WhatsApp';

  return (
    <div className="flex flex-col bg-white rounded-xl border border-[#EAE5DC] overflow-hidden hover:border-[#C59B27]/60 hover:shadow-md transition-all duration-200 group text-left">
      {/* Product Image Box */}
      <div className="relative aspect-4/3 w-full bg-[#F5F1EA] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Fallback container */}
        <div className="hidden absolute inset-0 items-center justify-center bg-[#2A1D16] text-[#E5C365] p-4 text-center">
          <span className="font-serif font-bold text-sm">{product.name}</span>
        </div>

        {/* Editorial tag (clean subtle badge, not generic slop) */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#1C120C]/85 backdrop-blur-xs text-[#E5C365] text-[11px] font-semibold px-2.5 py-1 rounded border border-[#C59B27]/40">
            {product.tag}
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg font-bold text-[#1C120C] leading-snug group-hover:text-[#8C6D1F] transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-xs text-[#6B5E51] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Variants Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="pt-2">
              <span className="text-[11px] font-medium text-[#8A7968] block mb-1.5">
                Select Option:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`text-xs px-2.5 py-1 rounded border transition-all cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#1C120C] text-[#E5C365] border-[#1C120C] font-semibold shadow-xs'
                          : 'bg-[#F9F7F4] text-[#55473E] border-[#E0D8CE] hover:border-[#C59B27]'
                      }`}
                    >
                      {variant.name}
                      {variant.isPriceConfirmed && variant.price && (
                        <span className="ml-1 opacity-80 text-[10px] tabular-nums">
                          (Rs. {variant.price})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Price & Quantity & Actions */}
        <div className="pt-3 border-t border-[#F2ECE3] space-y-3">
          <div className="flex items-center justify-between gap-2">
            {/* Price display */}
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8A7968] block">Price</span>
              <span
                className={`text-base font-bold tabular-nums ${
                  isConfirmed ? 'text-[#1C120C]' : 'text-[#8C6D1F] text-xs font-semibold'
                }`}
              >
                {priceDisplayText}
              </span>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#D5CBC0] rounded-lg bg-[#FAF8F5] overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-1.5 hover:bg-[#EAE2D2] text-[#4A3E36] transition-colors cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 text-xs font-bold text-[#1C120C] tabular-nums min-w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-1.5 hover:bg-[#EAE2D2] text-[#4A3E36] transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs ${
                isAddedFeedback
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#1C120C] hover:bg-[#332218] text-[#F5F1EA]'
              }`}
            >
              {isAddedFeedback ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#E5C365]" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleQuickOrder}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
