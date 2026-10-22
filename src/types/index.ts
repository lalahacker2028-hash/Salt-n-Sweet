export type CategoryId =
  | 'pizza'
  | 'burgers'
  | 'fried-chicken'
  | 'shawarma-wraps'
  | 'sandwiches'
  | 'grilled-continental'
  | 'cakes-bakery'
  | 'pastries-sweets'
  | 'coffee-beverages'
  | 'shakes-desserts';

export interface MenuCategory {
  id: CategoryId;
  name: string;
  shortDesc: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  isPriceConfirmed: boolean;
}

export interface Product {
  id: string;
  name: string;
  categoryId: CategoryId;
  description: string;
  image: string;
  isAvailable: boolean;
  isPriceConfirmed: boolean;
  price?: number;
  variants?: ProductVariant[];
  tag?: string;
  isPopular?: boolean;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface OrderCheckoutForm {
  customerName: string;
  customerPhone: string;
  orderType: 'delivery' | 'pickup';
  deliveryAddress: string;
  specialInstructions: string;
}
