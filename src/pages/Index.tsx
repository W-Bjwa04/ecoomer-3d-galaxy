
import { useState } from 'react';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { ThemeToggle } from '../components/ThemeToggle';
import { ShoppingBag } from 'lucide-react';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary" size={24} />
            <h2 className="text-xl font-bold">FoodCraft</h2>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto py-12 md:py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Delicious Treats
          </h1>
          <p className="text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Explore our delectable collection of premium edible products with detailed 3D views
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <div className="product-grid animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Index;
