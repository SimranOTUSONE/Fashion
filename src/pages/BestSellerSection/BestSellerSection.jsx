import React from "react";
import "./BestSellerSection.css";

const products = [
  {
    id: 1,
    title: "Fine-knit sweater",
    category: "Clothing, Men",
    image: "/images/model1.jpg",
    price: 28.5,
    originalPrice: 38.5,
    rating: 4,
  },
  {
    id: 2,
    title: "Fine-knit sweater",
    category: "Clothing, Men",
    image: "/images/model2.jpg",
    price: 28.5,
    originalPrice: 38.5,
    rating: 4,
  },
  {
    id: 3,
    title: "Fine-knit sweater",
    category: "Clothing, Men",
    image: "/images/model3.jpg",
    price: 28.5,
    originalPrice: 38.5,
    rating: 4,
  },
  {
    id: 4,
    title: "Fine-knit sweater",
    category: "Clothing, Men",
    image: "/images/model4.jpg",
    price: 28.5,
    originalPrice: 38.5,
    rating: 4,
  },
];

const BestsellerSection = () => {
  return (
    <div className="bestseller-section">
      <h2 style={{color:"black"}}>Browse our Bestsellers</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="image-wrapper">
              <img src={p.image} alt={p.title} />
              <span className="sale-badge">Sale</span>
            </div>
            <div className="product-info">
              <p className="category">{p.category}</p>
              <div className="rating">
                {"★".repeat(p.rating)}
                {"☆".repeat(5 - p.rating)}
              </div>
              <h3>{p.title}</h3>
              <div className="price">
                <span className="current">${p.price.toFixed(2)}</span>
                <span className="original">${p.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerSection;
