import { Product } from '../types';

// Convert all price strings to numbers
const formatProduct = (product: Product): Product => ({
  ...product,
  price: typeof product.price === 'string' ? parseFloat(product.price) : product.price
});

export const products: Product[] = [
  // Dairy Products
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: 60,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg",
    volume: "1 L",
  },
  {
    name: "Amul Paneer",
    category: "Dairy",
    price: 80,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg",
    weight: "200g",
  },
  {
    name: "Mother Dairy Dahi",
    category: "Dairy",
    price: 45,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
    weight: "400g",
  },
  {
    name: "AMUL TAAZA TONED MILK",
    category: "Dairy",
    volume: "500.00 ML",
    price: 25,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg",
  },
  {
    name: "AMUL COW MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: 29,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg",
  },
  {
    name: "AMUL GOLD PASTEURISED FULL CREAM MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: 33,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xrj8lmdwtc3ll27s9wvc",
  },
  {
    name: "Mother Dairy TONED MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: 28,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg",
  },
  {
    name: "Mother Dairy COW MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: 29,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
  },
  {
    name: "Mother Dairy FULL CREAM MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: 33,
    image: "https://www.bigbasket.com/media/uploads/p/l/40147028_5-mother-dairy-full-cream-milk.jpg",
  },
  
  // Bakery Products
  {
    name: "Harvest Gold Atta Bread",
    category: "Bakery",
    price: 45,
    image: "https://harvestgold.in/image/ProductImage/cd3ea4bf6482efebe5d2c4ff7a38211c.jpg",
    weight: "400g",
  },
  {
    name: "Fresh Butter Croissant",
    category: "Bakery",
    price: 35,
    image: "https://harvestgold.in/image/ProductImage/8132120b9685aa81e452c78b77db9225.png",
    weight: "60g",
  },
  {
    name: "Multigrain Bread",
    category: "Bakery",
    price: 55,
    image: "https://harvestgold.in/image/ProductImage/621c0748a21b315ec92b005107e3b1f8.jpg",
    weight: "450g",
  },
  {
    name: "Chocolate Muffins",
    category: "Bakery",
    price: 40,
    image: "https://harvestgold.in/image/ProductImage/469ff8e684cece134c857e0cf014e1d0.png",
    weight: "4 pieces",
  },
  {
    name: "Pav Buns",
    category: "Bakery",
    price: 30,
    image: "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
    weight: "6 pieces",
  },
  {
    name: "HARVEST GOLD WHITE BREAD",
    category: "Bakery",
    weight: "350.00 G",
    price: 40,
    image: "https://harvestgold.in/image/ProductImage/2e59c4e30312f9c14b5fbf18f31e2ccb.png",
  },
  {
    name: "HARVEST GOLD ZERO MAIDA PAV",
    category: "Bakery",
    weight: "250.00 G",
    price: 45,
    image: "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
  },
  {
    name: "HARVEST GOLD KULCHA BREAD",
    category: "Bakery",
    weight: "250.00 G",
    price: 35,
    image: "https://harvestgold.in/image/ProductImage/8461ac9d832d52e43f25e8de1c500b4a.png",
  },
  {
    name: "HARVEST GOLD ATTA BURGER BUNS",
    category: "Bakery",
    weight: "200.00 G",
    price: 45,
    image: "https://harvestgold.in/image/ProductImage/8132120b9685aa81e452c78b77db9225.png",
  },
  
  // Flowers
  {
    name: "Lotus Flowers",
    category: "Flowers",
    price: 199,
    image: "https://www.bigbasket.com/media/uploads/p/l/40201307_1-fresho-white-orchids.jpg",
    weight: "5 stems",
  },
  {
    name: "Marigold Garland",
    category: "Flowers",
    price: 150,
    image: "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
    weight: "2 strings",
  },
  {
    name: "Mixed Puja Flowers",
    category: "Flowers",
    price: 399,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/246204fb8d4388d43c5892d71a30a9e3",
    weight: "15 stems",
  },
  {
    name: "Jasmine Gajra",
    category: "Flowers",
    price: 80,
    image: "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
    weight: "2 pieces",
  },
  {
    name: "Roses",
    category: "Flowers",
    price: 120,
    image: "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
  },
  {
    name: "Orchids",
    category: "Flowers",
    price: 150,
    image: "https://www.bigbasket.com/media/uploads/p/l/40201307_1-fresho-white-orchids.jpg",
  },
  {
    name: "Shevanti",
    category: "Flowers",
    price: 150,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/246204fb8d4388d43c5892d71a30a9e3",
  },
].map(formatProduct);

export const getCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};