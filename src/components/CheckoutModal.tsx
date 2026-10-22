import React, { useState } from 'react';
import { X, MessageCircle, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/config';
import { OrderCheckoutForm } from '../types';
import { generateWhatsAppLink, buildWhatsAppOrderMessage } from '../utils/whatsapp';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    verifiedSubtotal,
    hasUnconfirmedPrices,
    totalItems
  } = useCart();

  const [form, setForm] = useState<OrderCheckoutForm>({
    customerName: '',
    customerPhone: '',
    orderType: 'delivery',
    deliveryAddress: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showConfirmationTip, setShowConfirmationTip] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!form.customerName.trim()) {
      errs.customerName = 'Please enter your full name';
    } else if (form.customerName.trim().length < 2) {
      errs.customerName = 'Name must be at least 2 characters';
    }

    const cleanPhone = form.customerPhone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.customerPhone = 'Please enter your contact phone number';
    } else if (cleanPhone.length < 10) {
      errs.customerPhone = 'Enter a valid Pakistani phone number (e.g. 0300-1234567)';
    }

    if (form.orderType === 'delivery') {
      if (!form.deliveryAddress.trim()) {
        errs.deliveryAddress = 'Please provide your delivery address in Mirpur Mathelo';
      } else if (form.deliveryAddress.trim().length < 6) {
        errs.deliveryAddress = 'Please include street / landmark details in Mirpur Mathelo';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendOrder = (useSecondary: boolean = false) => {
    if (!validate()) {
      return;
    }

    if (items.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }

    setShowConfirmationTip(true);

    const whatsappUrl = generateWhatsAppLink(items, form, useSecondary);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const previewMessage = items.length > 0 ? buildWhatsAppOrderMessage(items, form) : '';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center text-left">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCheckoutOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E0D8CE] overflow-hidden my-8 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#1C120C] text-white flex items-center justify-between border-b border-[#C59B27]/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">
                WhatsApp Order Checkout
              </h2>
              <p className="text-[11px] text-[#E5C365]">
                {RESTAURANT_CONFIG.brandName} · Mirpur Mathelo ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1 rounded-lg text-[#D6C7BA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Order Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1C120C] uppercase tracking-wider block">
              1. Choose Order Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, orderType: 'delivery' })}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  form.orderType === 'delivery'
                    ? 'border-[#1C120C] bg-[#1C120C] text-[#E5C365] shadow-xs'
                    : 'border-[#D5CBC0] bg-white text-[#4A3E36] hover:border-[#C59B27]'
                }`}
              >
                <MapPin className={`w-5 h-5 ${form.orderType === 'delivery' ? 'text-[#E5C365]' : 'text-[#8A7968]'}`} />
                <div>
                  <span className="text-xs font-bold block">Home Delivery</span>
                  <span className="text-[10px] opacity-80 block">Within Mirpur Mathelo city</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setForm({ ...form, orderType: 'pickup' })}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  form.orderType === 'pickup'
                    ? 'border-[#1C120C] bg-[#1C120C] text-[#E5C365] shadow-xs'
                    : 'border-[#D5CBC0] bg-white text-[#4A3E36] hover:border-[#C59B27]'
                }`}
              >
                <Phone className={`w-5 h-5 ${form.orderType === 'pickup' ? 'text-[#E5C365]' : 'text-[#8A7968]'}`} />
                <div>
                  <span className="text-xs font-bold block">Takeaway / Pickup</span>
                  <span className="text-[10px] opacity-80 block">Near Bus Stand, Data-3 Petroleum</span>
                </div>
              </button>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-[#1C120C] uppercase tracking-wider block">
              2. Customer Contact Details
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Customer Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#55473E] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  value={form.customerName}
                  onChange={(e) => {
                    setForm({ ...form, customerName: e.target.value });
                    if (errors.customerName) setErrors({ ...errors, customerName: '' });
                  }}
                  placeholder="e.g. Tariq Khan"
                  style={{ fontSize: '16px' }} // At least 16px to prevent iOS auto-zoom
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-xl text-sm text-[#1C120C] placeholder-[#9E8E80] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                    errors.customerName ? 'border-rose-500' : 'border-[#D5CBC0]'
                  }`}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-rose-600 font-medium">{errors.customerName}</p>
                )}
              </div>

              {/* Customer Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#55473E] flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Contact Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  value={form.customerPhone}
                  onChange={(e) => {
                    setForm({ ...form, customerPhone: e.target.value });
                    if (errors.customerPhone) setErrors({ ...errors, customerPhone: '' });
                  }}
                  placeholder="0300-1234567"
                  style={{ fontSize: '16px' }} // At least 16px to prevent iOS auto-zoom
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-xl text-sm text-[#1C120C] placeholder-[#9E8E80] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                    errors.customerPhone ? 'border-rose-500' : 'border-[#D5CBC0]'
                  }`}
                />
                {errors.customerPhone && (
                  <p className="text-[11px] text-rose-600 font-medium">{errors.customerPhone}</p>
                )}
              </div>
            </div>

            {/* Delivery Address (only if delivery) */}
            {form.orderType === 'delivery' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#55473E] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Delivery Address in Mirpur Mathelo *</span>
                </label>
                <textarea
                  value={form.deliveryAddress}
                  onChange={(e) => {
                    setForm({ ...form, deliveryAddress: e.target.value });
                    if (errors.deliveryAddress) setErrors({ ...errors, deliveryAddress: '' });
                  }}
                  rows={2}
                  placeholder="House / Shop No., Street name, Near Landmark, Mirpur Mathelo"
                  style={{ fontSize: '16px' }} // At least 16px to prevent iOS auto-zoom
                  className={`w-full px-3.5 py-2 bg-[#FAF8F5] border rounded-xl text-sm text-[#1C120C] placeholder-[#9E8E80] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                    errors.deliveryAddress ? 'border-rose-500' : 'border-[#D5CBC0]'
                  }`}
                />
                {errors.deliveryAddress && (
                  <p className="text-[11px] text-rose-600 font-medium">{errors.deliveryAddress}</p>
                )}
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#55473E] flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Special Instructions (Optional)</span>
              </label>
              <input
                type="text"
                value={form.specialInstructions}
                onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
                placeholder="e.g. Extra spicy, no onions, write Happy Birthday on cake"
                style={{ fontSize: '16px' }}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CBC0] rounded-xl text-sm text-[#1C120C] placeholder-[#9E8E80] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
              />
            </div>
          </div>

          {/* Order Summary & Pricing */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
            <h4 className="text-xs font-bold text-[#1C120C] uppercase tracking-wider">
              3. Items in this Order ({totalItems})
            </h4>

            <div className="divide-y divide-[#EAE5DC] text-xs">
              {items.map((item) => {
                const isConfirmed = item.selectedVariant
                  ? item.selectedVariant.isPriceConfirmed
                  : item.product.isPriceConfirmed;
                const unitPrice = item.selectedVariant?.price ?? item.product.price;
                const lineTotal = isConfirmed && typeof unitPrice === 'number'
                  ? unitPrice * item.quantity
                  : null;

                return (
                  <div key={item.cartItemId} className="py-2 flex items-center justify-between gap-2">
                    <div>
                      <span className="font-semibold text-[#1C120C]">
                        {item.product.name}
                      </span>
                      {item.selectedVariant && (
                        <span className="text-[#8C6D1F] ml-1">({item.selectedVariant.name})</span>
                      )}
                      <span className="text-[#7A6C5F] ml-2">x {item.quantity}</span>
                    </div>
                    <div className="font-semibold tabular-nums">
                      {lineTotal !== null ? (
                        <span className="text-[#1C120C]">Rs. {lineTotal.toLocaleString('en-PK')}</span>
                      ) : (
                        <span className="text-[#8C6D1F] text-[11px]">Price to be confirmed</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#D5CBC0] flex flex-col gap-1 text-xs">
              {verifiedSubtotal > 0 && (
                <div className="flex items-center justify-between font-bold text-[#1C120C]">
                  <span>Verified Subtotal:</span>
                  <span className="text-sm tabular-nums text-[#1C120C]">
                    Rs. {verifiedSubtotal.toLocaleString('en-PK')}
                  </span>
                </div>
              )}
              {hasUnconfirmedPrices && (
                <div className="text-[11px] text-[#8C6D1F]">
                  * Unconfirmed items will have their final prices added by Salt'n Sweet.
                </div>
              )}
            </div>
          </div>

          {/* Friendly instructions note */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Next Step: Send inside WhatsApp</p>
              <p className="text-[11px] text-emerald-900 leading-relaxed">
                Clicking the button below will open WhatsApp with your pre-formatted order. <strong>Please remember to press the Send button inside WhatsApp</strong> so Salt'n Sweet receives your message!
              </p>
            </div>
          </div>

          {showConfirmationTip && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                WhatsApp opened! If you did not see WhatsApp open, click the button again or use our secondary line below.
              </span>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#E0D8CE] space-y-3">
          <button
            type="button"
            onClick={() => handleSendOrder(false)}
            className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Order on WhatsApp ({RESTAURANT_CONFIG.primaryPhone})</span>
          </button>

          {/* Alternative Line Fallback */}
          <div className="flex items-center justify-between gap-3 pt-1 text-xs">
            <span className="text-[#7A6C5F]">Primary number busy?</span>
            <button
              type="button"
              onClick={() => handleSendOrder(true)}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
            >
              Send to Alternate WhatsApp ({RESTAURANT_CONFIG.secondaryPhone})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
