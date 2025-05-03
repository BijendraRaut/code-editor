import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import Card, { CardContent } from './ui/Card';
import Button from './ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative pt-[100%] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {product.weight || product.volume}
          </p>
          <p className="text-lg font-semibold text-gray-900">₹{product.price}</p>
        </div>
        <Button 
          className="mt-4 flex items-center justify-center gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;