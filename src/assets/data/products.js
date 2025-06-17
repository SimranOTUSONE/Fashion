// src/data/products.js

export const featuredProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    image: "/assets/images/products/hoodie.png",
    category: "men",
    isNew: true,
    stock: 10,
    sku: "CT001",
    description: "Classic white cotton t-shirt for everyday wear.",
   images: [
      "/assets/images/products/body.png",
      "/assets/images/products/hoodie.png",
      "/assets/images/products/shoes.png"
    ],
    sizes: ["S", "M", "L", "XL"],
    date: "2023-05-15"
  },
  {
    id: 2,
    name: "Black Skinny Jeans",
    price: 59.99,
    image: "/assets/images/products/wjack.png",
    category: "women",
    stock: 15,
    sku: "BJ002",
    description: "Slim fit black jeans made with stretch denim for comfort.",
    images: [
      "/assets/images/products/body.png",
      "/assets/images/products/hoodie.png",
      "/assets/images/products/shoes.png"
    ],
    sizes: ["XS", "S", "M", "L"],
    date: "2023-04-20"
  }
];

export const allProducts = [
  ...featuredProducts,
  {
    id: 3,
    name: "Striped Summer Dress",
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    image: "/assets/images/products/sweater.png",
    category: "women",
    isNew: true,
    stock: 8,
    sku: "SD003",
    description: "Lightweight striped dress perfect for summer days.",
    images: [
      "/assets/images/products/body.png",
      "/assets/images/products/hoodie.png",
      "/assets/images/products/shoes.png"
    ],
    sizes: ["S", "M", "L"],
    date: "2023-06-10"
  }
];
