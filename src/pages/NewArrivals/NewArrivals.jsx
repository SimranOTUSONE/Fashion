import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate(`/product/${product.name}`, { state: product });
  };

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
            <div
              className="image-container"
              onClick={() => handleImageClick(p)}
              style={{ cursor: "pointer" }}
            >
              <img src={p.image} alt={p.name} />
              {p.showButton && <button className="view-button">View Details</button>}
            </div>
            <p className="brand" style={{fontSize:"20px"}}>{p.brand}</p>
            <div className="colors" style={{fontSize:"18px"}}>
              {p.colors.map((c, i) => (
                <span key={i} className="color-dot" style={{ backgroundColor: c ,fontSize:"18px"}}  ></span>
              ))}
            </div>
            <h3 className="name" style={{fontSize:"20px"}}>{p.name}</h3>
            <p className="price" style={{fontSize:"20px"}}>
              ${p.price.toFixed(2)}
              {p.originalPrice && <span className="original" style={{fontSize:"20px"}}>${p.originalPrice.toFixed(2)}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
