
import { useState } from 'react';
import { Product } from '../data/products';
import { X, Utensils, Apple, Clock, Scale } from 'lucide-react';
import ThreeViewer from './ThreeViewer';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [showThreeViewer, setShowThreeViewer] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-background/60 dark:bg-foreground/30 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div 
        className="relative bg-card rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {showThreeViewer ? (
          <div className="h-[70vh] w-full relative">
            <ThreeViewer modelPath={product.modelPath} />
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              onClick={() => setShowThreeViewer(false)}
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-64 md:h-auto relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[70vh]">
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                onClick={onClose}
              >
                <X size={20} />
              </button>
              
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-2">
                    <Utensils size={12} />
                    {product.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
                  <p className="text-xl font-medium mt-1 text-primary">${product.price}</p>
                </div>
                
                <p className="text-muted-foreground">{product.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/50">
                    <Apple size={20} className="mb-1 text-primary" />
                    <span className="text-xs text-muted-foreground">Natural</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/50">
                    <Clock size={20} className="mb-1 text-primary" />
                    <span className="text-xs text-muted-foreground">Fresh</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/50">
                    <Scale size={20} className="mb-1 text-primary" />
                    <span className="text-xs text-muted-foreground">Quality</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Details</h4>
                  <ul className="space-y-1">
                    {product.details.map((detail, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Ingredients</h4>
                    <p className="text-muted-foreground">{product.material}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Size</h4>
                    <p className="text-muted-foreground">
                      {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} {product.dimensions.unit}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    className="button-primary w-full flex items-center justify-center gap-2"
                    onClick={() => setShowThreeViewer(true)}
                  >
                    <span>View in 3D</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
