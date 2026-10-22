import { CartItem, OrderCheckoutForm } from '../types';
import { RESTAURANT_CONFIG } from '../data/config';

export function calculateCartSummary(items: CartItem[]) {
  let verifiedSubtotal = 0;
  let hasUnconfirmedPrices = false;
  let totalItemCount = 0;

  for (const item of items) {
    totalItemCount += item.quantity;
    const unitPrice = item.selectedVariant?.price ?? item.product.price;
    const isConfirmed = item.selectedVariant ? item.selectedVariant.isPriceConfirmed : item.product.isPriceConfirmed;

    if (isConfirmed && typeof unitPrice === 'number') {
      verifiedSubtotal += unitPrice * item.quantity;
    } else {
      hasUnconfirmedPrices = true;
    }
  }

  return {
    verifiedSubtotal,
    hasUnconfirmedPrices,
    totalItemCount
  };
}

export function buildWhatsAppOrderMessage(items: CartItem[], form: OrderCheckoutForm): string {
  const { verifiedSubtotal, hasUnconfirmedPrices } = calculateCartSummary(items);

  const lines: string[] = [
    `*NEW ORDER — ${RESTAURANT_CONFIG.brandName.toUpperCase()}*`,
    `Customer: ${form.customerName.trim()}`,
    `Phone: ${form.customerPhone.trim()}`,
    `Order Type: ${form.orderType === 'delivery' ? 'Delivery' : 'Pickup'}`,
    '',
    'ITEMS:'
  ];

  items.forEach((item) => {
    const variantLabel = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
    const unitPrice = item.selectedVariant?.price ?? item.product.price;
    const isConfirmed = item.selectedVariant ? item.selectedVariant.isPriceConfirmed : item.product.isPriceConfirmed;

    if (isConfirmed && typeof unitPrice === 'number') {
      const lineTotal = unitPrice * item.quantity;
      lines.push(`- ${item.product.name}${variantLabel} x ${item.quantity} — Rs. ${lineTotal.toLocaleString('en-PK')}`);
    } else {
      lines.push(`- ${item.product.name}${variantLabel} x ${item.quantity} — Price to be confirmed`);
    }
  });

  lines.push('');
  if (verifiedSubtotal > 0) {
    lines.push(`Verified subtotal: Rs. ${verifiedSubtotal.toLocaleString('en-PK')}`);
  }
  if (hasUnconfirmedPrices) {
    lines.push('Unknown prices: To be confirmed by Salt\'n Sweet');
  }

  if (form.orderType === 'delivery' && form.deliveryAddress.trim()) {
    lines.push(`Delivery Address: ${form.deliveryAddress.trim()}`);
  }

  if (form.specialInstructions.trim()) {
    lines.push(`Special Instructions: ${form.specialInstructions.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm availability, final amount and estimated preparation/delivery time.');

  return lines.join('\n');
}

export function generateWhatsAppLink(
  items: CartItem[],
  form: OrderCheckoutForm,
  useSecondary: boolean = false
): string {
  const message = buildWhatsAppOrderMessage(items, form);
  const phoneNumber = useSecondary ? RESTAURANT_CONFIG.secondaryWhatsApp : RESTAURANT_CONFIG.primaryWhatsApp;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function generateSingleProductQuickWhatsAppLink(
  productName: string,
  variantName?: string,
  priceText?: string,
  useSecondary: boolean = false
): string {
  const itemText = variantName ? `${productName} (${variantName})` : productName;
  const priceInfo = priceText ? ` (${priceText})` : '';
  const message = `Hello Salt'n Sweet! I would like to inquire / order:\n- ${itemText}${priceInfo}\n\nPlease confirm availability and delivery to Mirpur Mathelo.`;
  const phoneNumber = useSecondary ? RESTAURANT_CONFIG.secondaryWhatsApp : RESTAURANT_CONFIG.primaryWhatsApp;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
