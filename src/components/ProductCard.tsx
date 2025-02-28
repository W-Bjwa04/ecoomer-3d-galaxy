
import { useState } from 'react';
import { Product } from '../data/products';
import { Utensils } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card rounded-xl overflow-hidden bg-card hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-spring"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0
          }}
        />
        
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
            <Utensils size={12} />
            {product.category}
          </span>
        </div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 transition-all duration-300 ease-spring"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(4px)',
            opacity: isHovered ? 1 : 0
          }}
        >
          <button className="w-full py-2 rounded-lg bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm hover:bg-primary transition-colors">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary font-medium">${product.price}</span>
          {product.material && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-secondary-foreground">
              {product.material}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
