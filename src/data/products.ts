
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
    name: "Artisan Chocolate Truffle Box",
    description: "Handcrafted chocolate truffles with various gourmet fillings in an elegant gift box.",
    price: 24.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/chocolate_box.glb", // Replace with your actual model path
    details: [
      "12 premium truffles",
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
    name: "Sourdough Artisan Bread",
    description: "Slow-fermented sourdough bread made with organic flour and traditional methods.",
    price: 8.99,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/bread.glb", // Replace with your actual model path
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
    name: "Premium Cheese Selection",
    description: "Curated selection of artisanal cheeses from small-batch producers around the world.",
    price: 32.50,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/cheese.glb", // Replace with your actual model path
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
    name: "Organic Berry Mix",
    description: "Fresh, seasonal organic berries packaged at peak ripeness for maximum flavor.",
    price: 6.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1596591868231-05e678c7c130?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/berries.glb", // Replace with your actual model path
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
    name: "Gourmet Olive Oil Set",
    description: "Collection of cold-pressed extra virgin olive oils from Mediterranean groves.",
    price: 45.00,
    category: "Pantry",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/oil_bottles.glb", // Replace with your actual model path
    details: [
      "3 varieties: Mild, Medium, Robust",
      "First cold pressing only",
      "Acidity level < 0.3%",
      "Sealed glass bottles"
    ],
    material: "100% extra virgin olive oil",
    dimensions: {
      width: 30,
      height: 20,
      depth: 10,
      unit: "cm"
    }
  },
  {
    id: "6",
    name: "Macarons Gift Box",
    description: "Delicate French macarons in assorted flavors, beautifully presented in a luxury gift box.",
    price: 28.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/macarons.glb", // Replace with your actual model path
    details: [
      "12 macarons, 6 flavors",
      "Made with almond flour",
      "Natural colorings only",
      "48-hour resting period for perfect texture"
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
