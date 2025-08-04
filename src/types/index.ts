export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  ageGroup?: string;
  weight?: string;
  isBestseller?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: string;
  shippingAddress: Address;
  paymentMethod: string;
}
