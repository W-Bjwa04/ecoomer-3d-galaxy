
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
    name: "Modern Lounge Chair",
    description: "A sleek and comfortable lounge chair with a minimalist design.",
    price: 599,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/chair.glb", // This would be the path to your 3D model
    details: [
      "Ergonomic design",
      "High-quality materials",
      "Adjustable height",
      "360° swivel base"
    ],
    material: "Premium leather and aluminum",
    dimensions: {
      width: 70,
      height: 80,
      depth: 75,
      unit: "cm"
    }
  },
  {
    id: "2",
    name: "Ceramic Vase Collection",
    description: "Handcrafted ceramic vases in various shapes and sizes.",
    price: 129,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1612196808214-b40b6dfde3ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/vase.glb",
    details: [
      "Handmade ceramics",
      "Multiple designs available",
      "Unique textures",
      "Dishwasher safe"
    ],
    material: "Premium ceramic",
    dimensions: {
      width: 15,
      height: 30,
      depth: 15,
      unit: "cm"
    }
  },
  {
    id: "3",
    name: "Minimalist Table Lamp",
    description: "A beautifully designed table lamp with ambient lighting.",
    price: 249,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/lamp.glb",
    details: [
      "Dimmable LED",
      "Touch controls",
      "Energy efficient",
      "Warm light temperature"
    ],
    material: "Brushed aluminum and frosted glass",
    dimensions: {
      width: 25,
      height: 45,
      depth: 25,
      unit: "cm"
    }
  },
  {
    id: "4",
    name: "Wireless Bluetooth Speaker",
    description: "Premium audio speaker with sleek design and powerful sound.",
    price: 179,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/speaker.glb",
    details: [
      "360° sound",
      "20-hour battery life",
      "Water resistant",
      "Voice assistant compatible"
    ],
    material: "Aircraft-grade aluminum and fabric",
    dimensions: {
      width: 10,
      height: 15,
      depth: 10,
      unit: "cm"
    }
  },
  {
    id: "5",
    name: "Leather Messenger Bag",
    description: "Handcrafted leather bag perfect for work and everyday use.",
    price: 349,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/bag.glb",
    details: [
      "Full-grain leather",
      "Adjustable strap",
      "Multiple compartments",
      "Laptop sleeve"
    ],
    material: "Premium full-grain leather",
    dimensions: {
      width: 40,
      height: 30,
      depth: 12,
      unit: "cm"
    }
  },
  {
    id: "6",
    name: "Smart Digital Watch",
    description: "Feature-packed smartwatch with elegant design and health tracking.",
    price: 299,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modelPath: "/models/watch.glb",
    details: [
      "Heart rate monitor",
      "GPS tracking",
      "5-day battery life",
      "Water resistant to 50m"
    ],
    material: "Stainless steel and sapphire glass",
    dimensions: {
      width: 4.5,
      height: 1.2,
      depth: 4.5,
      unit: "cm"
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
