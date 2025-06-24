import React from 'react';
import './PopularProducts.css';

import Product1 from '/images/ex1.jpg';
import Product2 from '/images/ex2.jpg';
import Product3 from '/images/ex3.jpg';

const PopularProducts = () => {
  const products = [
    {
      title: "Lobortis Elementum Nibhtellus Molestie Mauris",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      category: "LIFESTYLE",
      date: "ON JUNE 15, 2024",
      image: Product1
    },
    {
      title: "Condimentum Odvenenatis Vestibulum Dapibus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      category: "TREND",
      date: "ON JUNE 15, 2024",
      image: Product2
    },
    {
      title: "Accumsan Tortor Posuere Acut Consequat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      category: "LIFESTYLE",
      date: "ON JUNE 15, 2024",
      image: Product3
    },
  ];

  return (
    <section className="popular-products">
      <div className="container">
        <h1 className="section-title">Popular Products</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <article key={`product-${index}`} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-image"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
              <div className="product-content">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="product-category">IN {product.category}</span>
                  <span className="product-date">{product.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;