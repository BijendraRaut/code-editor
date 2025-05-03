import { Order } from '../types';

// Sample orders for demo purposes
export const orders: Order[] = [
  {
    id: '1001',
    items: [
      {
        name: "Fresh Milk",
        category: "Dairy",
        price: 60,
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg",
        volume: "1 L",
        quantity: 2
      },
      {
        name: "Harvest Gold Atta Bread",
        category: "Bakery",
        price: 45,
        image: "https://harvestgold.in/image/ProductImage/cd3ea4bf6482efebe5d2c4ff7a38211c.jpg",
        weight: "400g",
        quantity: 1
      }
    ],
    totalAmount: 165,
    customerName: 'Raj Sharma',
    customerEmail: 'raj.sharma@example.com',
    customerAddress: '123 Main St, Bengaluru, Karnataka',
    status: 'delivered',
    date: '2023-10-15'
  },
  {
    id: '1002',
    items: [
      {
        name: "Marigold Garland",
        category: "Flowers",
        price: 150,
        image: "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
        weight: "2 strings",
        quantity: 3
      }
    ],
    totalAmount: 450,
    customerName: 'Priya Patel',
    customerEmail: 'priya.patel@example.com',
    customerAddress: '456 Park Avenue, Mumbai, Maharashtra',
    status: 'shipped',
    date: '2023-10-18'
  },
  {
    id: '1003',
    items: [
      {
        name: "Amul Paneer",
        category: "Dairy",
        price: 80,
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg",
        weight: "200g",
        quantity: 1
      },
      {
        name: "Mother Dairy Dahi",
        category: "Dairy",
        price: 45,
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
        weight: "400g",
        quantity: 2
      },
      {
        name: "Pav Buns",
        category: "Bakery",
        price: 30,
        image: "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
        weight: "6 pieces",
        quantity: 1
      }
    ],
    totalAmount: 200,
    customerName: 'Ananya Singh',
    customerEmail: 'ananya.singh@example.com',
    customerAddress: '789 MG Road, New Delhi, Delhi',
    status: 'pending',
    date: '2023-10-20'
  }
];