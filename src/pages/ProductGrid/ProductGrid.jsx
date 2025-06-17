import React from "react";
import "./ProductGrid.css";

const products = [
  {
    brand: "Jordan",
    name: "FLIGHT MVP",
    price: 305,
    originalPrice: 355,
    image: "/images/products/sweater.png",
    colors: ["#2a3f5f", "#aab2bd", "#c0e6ef"],
  },
  {
    brand: "Jordan",
    name: "FLIGHT MVP T-SHIRT",
    price: 299,
    originalPrice: null,
    image: "/images/products/wjack.png",
    colors: ["#00eaff"],
  },
  {
    brand: "Jordan",
    name: "GREY HOODIE",
    price: 190,
    originalPrice: 240,
    image: "/images/products/shirt.png",
    colors: ["#d3d3d3"],
  },
  {
    brand: "Jordan",
    name: "BLACK JACKET",
    price: 250,
    originalPrice: 270,
    image: "/images/products/hoodie.png",
    colors: ["#000000"],
  },
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      {products.map((product, idx) => (
        <div className="product-card" key={idx}>
          <div className="img-wrapper">
            <img src={product.image} alt={product.name} />
          </div>
          <p className="brand">{product.brand}</p>
          <div className="colors">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="color-dot"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <h3 className="name">{product.name}</h3>
          <p className="price">
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <span className="original">${product.originalPrice.toFixed(2)}</span>
            )}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
