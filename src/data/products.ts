
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  modelPath: string;
  details: string[];
  material: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Chocolate Assortment",
    description: "Premium assorted chocolates made with organic cacao and natural ingredients.",
    price: 24.99,
    category: "Confectionery",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/chocolate_box.glb", // Place your model in public/models/
    details: [
      "12 premium chocolates",
      "100% organic cacao",
      "No artificial ingredients",
      "Gluten-free option available"
    ],
    material: "Dark, milk & white chocolate",
    dimensions: {
      width: 15,
      height: 3,
      depth: 15,
      unit: "cm"
    }
  },
  {
    id: "2",
    name: "Artisanal Sourdough Bread",
    description: "Freshly baked sourdough bread made with organic flour and traditional methods.",
    price: 8.99,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/bread.glb", // Place your model in public/models/
    details: [
      "24-hour fermentation",
      "Stone-baked",
      "No additives or preservatives",
      "Crispy crust, soft interior"
    ],
    material: "Organic wheat flour, water, sea salt",
    dimensions: {
      width: 20,
      height: 12,
      depth: 20,
      unit: "cm"
    }
  },
  {
    id: "3",
    name: "Gourmet Cheese Selection",
    description: "Hand-selected premium cheeses from small farms and artisanal producers.",
    price: 32.50,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/cheese.glb", // Place your model in public/models/
    details: [
      "4 different varieties",
      "Includes pairing guide",
      "Award-winning selections",
      "Perfect for entertaining"
    ],
    material: "Various milk types (cow, goat, sheep)",
    dimensions: {
      width: 25,
      height: 5,
      depth: 25,
      unit: "cm"
    }
  },
  {
    id: "4",
    name: "Fresh Organic Berry Mix",
    description: "Seasonal organic berries, freshly picked and carefully packaged for maximum freshness.",
    price: 6.99,
    category: "Produce",
    image: "https://images.unsplash.com/photo-1596591868231-05e678c7c130?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/berries.glb", // Place your model in public/models/
    details: [
      "Strawberries, blueberries, raspberries",
      "Pesticide-free",
      "Locally sourced when available",
      "High in antioxidants"
    ],
    material: "100% organic mixed berries",
    dimensions: {
      width: 12,
      height: 5,
      depth: 12,
      unit: "cm"
    }
  },
  {
    id: "5",
    name: "Premium Extra Virgin Olive Oil",
    description: "Cold-pressed extra virgin olive oil from Mediterranean olive groves.",
    price: 18.50,
    category: "Pantry",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/oil_bottle.glb", // Place your model in public/models/
    details: [
      "First cold pressed",
      "Acidity level < 0.3%",
      "Robust flavor profile",
      "Glass bottle for freshness"
    ],
    material: "100% extra virgin olive oil",
    dimensions: {
      width: 8,
      height: 25,
      depth: 8,
      unit: "cm"
    }
  },
  {
    id: "6",
    name: "Gourmet Macaron Collection",
    description: "Authentic French macarons in assorted flavors, made with premium ingredients.",
    price: 28.99,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/macarons.glb", // Place your model in public/models/
    details: [
      "12 macarons, 6 flavors",
      "Made with almond flour",
      "Natural colorings only",
      "Perfect texture and flavor"
    ],
    material: "Almond flour, egg whites, sugar",
    dimensions: {
      width: 20,
      height: 5,
      depth: 20,
      unit: "cm"
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
