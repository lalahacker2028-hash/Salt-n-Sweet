import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeItem,
    clearCart,
    verifiedSubtotal,
    hasUnconfirmedPrices,
    totalItems
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAFAF7] shadow-2xl flex flex-col border-l border-[#EAE5DC] animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EAE5DC] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C59B27]" />
              <h2 className="font-serif text-lg font-bold text-[#1C120C]">Your Order</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F5EFE6] text-[#8C6D1F] tabular-nums">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-[#8A7968] hover:text-[#1C120C] hover:bg-[#F5F1EA] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C59B27]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C120C]">Your cart is empty</h3>
                <p className="text-xs text-[#7A6C5F] max-w-xs leading-relaxed">
                  Browse our mouth-watering burgers, pizzas, crispy chicken, and artisan cakes to add to your order.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1C120C] hover:bg-[#2F2118] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Explore Menu Now
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => {
                  const isConfirmed = item.selectedVariant
                    ? item.selectedVariant.isPriceConfirmed
                    : item.product.isPriceConfirmed;
                  const unitPrice = item.selectedVariant?.price ?? item.product.price;
                  const itemTotal = isConfirmed && typeof unitPrice === 'number'
                    ? unitPrice * item.quantity
                    : null;

                  return (
                    <div
                      key={item.cartItemId}
                      className="p-3.5 bg-white rounded-xl border border-[#EAE5DC] flex gap-3.5 shadow-2xs"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#F5F1EA] shrink-0 border border-[#F0EBE3]"
                        loading="lazy"
                      />

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-1">
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-[#1C120C] truncate font-serif">
                              {item.product.name}
                            </h4>
                            {item.selectedVariant && (
                              <span className="text-[11px] text-[#8C6D1F] font-medium block">
                                {item.selectedVariant.name}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.cartItemId)}
                            aria-label={`Remove ${item.product.name}`}
                            className="text-[#9E8E80] hover:text-rose-600 p-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            {isConfirmed && itemTotal !== null ? (
                              <span className="text-xs font-bold text-[#1C120C] tabular-nums">
                                Rs. {itemTotal.toLocaleString('en-PK')}
                              </span>
                            ) : (
                              <span className="text-[11px] font-semibold text-[#8C6D1F]">
                                Price on WhatsApp
                              </span>
                            )}
                          </div>

                          <div className="flex items-center border border-[#D5CBC0] rounded-md bg-[#FAF8F5] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, -1)}
                              className="p-1 hover:bg-[#EAE2D2] text-[#4A3E36] transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#1C120C] tabular-nums min-w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, 1)}
                              className="p-1 hover:bg-[#EAE2D2] text-[#4A3E36] transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="pt-2 text-right">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[11px] text-[#8A7968] hover:text-rose-700 underline cursor-pointer"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#EAE5DC] bg-white space-y-4 shadow-lg">
              <div className="space-y-1.5 text-xs">
                {verifiedSubtotal > 0 && (
                  <div className="flex items-center justify-between text-[#55473E]">
                    <span>Verified Items Subtotal</span>
                    <span className="font-bold text-[#1C120C] tabular-nums text-sm">
                      Rs. {verifiedSubtotal.toLocaleString('en-PK')}
                    </span>
                  </div>
                )}

                {hasUnconfirmedPrices && (
                  <div className="p-2.5 rounded-lg bg-[#FAF3E8] border border-[#ECD9BF] flex items-start gap-2 text-[11px] text-[#8C6D1F] leading-tight">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      Some items have unconfirmed prices. Salt'n Sweet will confirm the final amount on WhatsApp.
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to WhatsApp Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#8A7968]">
                No payment required now. Order is finalized directly on WhatsApp with Salt'n Sweet.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
