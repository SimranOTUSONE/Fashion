import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
// import image from '/images/shoes1';


const ProductDetail = () => {
  const { state } = useLocation();
  const product = state;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detail-info">
        <h2>{product.brand}</h2>
        <h1>{product.name}</h1>
        <p className="price">
          ${product.price.toFixed(2)}
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </p>

        <div className="color-options">
          <p>Available Colors:</p>
          {product.colors.map((c, i) => (
            <span key={i} className="color-dot" style={{ backgroundColor: c }}></span>
          ))}
        </div>

        <p className="description">
          This is a premium quality shoe from {product.brand}. Built for comfort and style.
        </p>

        <div className="actions">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
