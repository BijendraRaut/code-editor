export interface Product {
  name: string;
  category: string;
  price: number | string;
  image: string;
  weight?: string;
  volume?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

export interface User {
  email: string;
  isAdmin: boolean;
}