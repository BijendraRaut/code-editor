import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import CategoryFilter from '../../components/CategoryFilter';
import { products, getProductsByCategory } from '../../data/products';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const displayedProducts = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : products;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </aside>
        
        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {selectedCategory ? selectedCategory : 'All Products'}
            </h1>
            <p className="text-gray-500 mt-1">
              {displayedProducts.length} products available
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;