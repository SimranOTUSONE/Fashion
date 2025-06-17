import React from "react";
import "./NewArrivals.css";

const products = [
  {
    brand: "Nike",
    name: "SUPERFLY",
    price: 450,
    originalPrice: 475,
    image: "/images/shoes1.png",
    colors: ["#000", "#333", "#666"],
  },
  {
    brand: "Adidas Originals",
    name: "SAMBA OG",
    price: 199,
    originalPrice: 239,
    image: "/images/shoes2.png",
    colors: ["#5a905f", "#916", "#b69"],
  },
  {
    brand: "ON",
    name: "CLOUDRUNNER",
    price: 205,
    originalPrice: null,
    image: "/images/shoes3.png",
    colors: ["#00bfff", "#f4a300", "#333"],
    showButton: true,
  },
  {
    brand: "Nike",
    name: "AIR JORDEN 1",
    price: 100,
    originalPrice: 120,
    image: "/images/shoes4.png",
    colors: ["#000", "#666", "#ccc"],
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <div className="head">
        <div>
          <p className="subtitle">WE RECOMMEND</p>
          <h2>NEW ARRIVALS</h2>
        </div>
        <a href="#" className="view-all">View All</a>
      </div>

      <div className="product-row">
        {products.map((p, idx) => (
          <div className="product" key={idx}>
            <div className="image-container">
              <img src={p.image} alt={p.name} />
              {p.showButton && <button className="view-button">View Details</button>}
            </div>
            <p className="brand">{p.brand}</p>
            <div className="colors">
              {p.colors.map((c, i) => (
                <span key={i} className="color-dot" style={{ backgroundColor: c }}></span>
              ))}
            </div>
            <h3 className="name">{p.name}</h3>
            <p className="price">
              ${p.price.toFixed(2)}
              {p.originalPrice && <span className="original">${p.originalPrice.toFixed(2)}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
