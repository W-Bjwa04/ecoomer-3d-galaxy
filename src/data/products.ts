
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
    name: "Lays Classic Potato Chips",
    description: "Crispy, thinly sliced potato chips with the perfect amount of salt for a satisfying crunch.",
    price: 3.99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/chips.glb", // Place your model in public/models/
    details: [
      "8oz family size bag",
      "Made with real potatoes",
      "No artificial flavors",
      "Perfect for parties"
    ],
    material: "Potatoes, vegetable oil, salt",
    dimensions: {
      width: 10,
      height: 25,
      depth: 5,
      unit: "cm"
    }
  },
  {
    id: "2",
    name: "Coca-Cola Classic",
    description: "The original cola soft drink that's been refreshing the world since 1886.",
    price: 1.99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/cola.glb", // Place your model in public/models/
    details: [
      "20oz bottle",
      "Classic cola taste",
      "Served best when cold",
      "America's favorite soda"
    ],
    material: "Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine",
    dimensions: {
      width: 8,
      height: 25,
      depth: 8,
      unit: "cm"
    }
  },
  {
    id: "3",
    name: "Sprite Lemon-Lime Soda",
    description: "Crisp, refreshing and clean-tasting lemon-lime flavored soft drink that quenches your thirst.",
    price: 1.79,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/sprite.glb", // Place your model in public/models/
    details: [
      "16.9oz bottle",
      "Caffeine-free",
      "Lemon-lime flavor",
      "Crisp, clean taste"
    ],
    material: "Carbonated water, high fructose corn syrup, citric acid, natural flavors, sodium citrate",
    dimensions: {
      width: 7,
      height: 22,
      depth: 7,
      unit: "cm"
    }
  },
  {
    id: "4",
    name: "Doritos Nacho Cheese",
    description: "Bold, nacho cheese flavored tortilla chips that pack a punch with every bite.",
    price: 4.49,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1600952899395-ad99e4a99a8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/chips.glb", // Place your model in public/models/
    details: [
      "9.75oz bag",
      "Bold nacho cheese flavor",
      "Made with real cheese",
      "Perfect movie night snack"
    ],
    material: "Corn, vegetable oil, cheese seasoning",
    dimensions: {
      width: 10,
      height: 28,
      depth: 5,
      unit: "cm"
    }
  },
  {
    id: "5",
    name: "Mountain Dew",
    description: "Bright citrus flavor with a refreshing charge that keeps you energized and ready for anything.",
    price: 1.89,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1622766815178-641bef2615de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/soda.glb", // Place your model in public/models/
    details: [
      "20oz bottle",
      "Caffeine-enhanced",
      "Citrus flavor",
      "Gaming fuel"
    ],
    material: "Carbonated water, high fructose corn syrup, citric acid, natural and artificial flavor, sodium benzoate, caffeine",
    dimensions: {
      width: 8,
      height: 25,
      depth: 8,
      unit: "cm"
    }
  },
  {
    id: "6",
    name: "Cheetos Crunchy",
    description: "Crunchy, cheese-flavored snacks that leave your fingers deliciously orange.",
    price: 3.99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/snack.glb", // Place your model in public/models/
    details: [
      "8.5oz bag",
      "Dangerously cheesy",
      "Made with real cheese",
      "Crunchy texture"
    ],
    material: "Enriched corn meal, vegetable oil, cheese seasoning",
    dimensions: {
      width: 10,
      height: 26,
      depth: 5,
      unit: "cm"
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
