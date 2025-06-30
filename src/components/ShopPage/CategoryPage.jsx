import React from 'react';
import './CategoryPage.css';
import Header from "../Header/Header";

const categories = [
  {
    name: 'Men',
    image: '/images/shirt.png',
    description: 'Trendy outfits and accessories for men.',
  },
  {
    name: 'Women',
    image: '/images/sweater.png',
    description: 'Stylish clothing and fashion for women.',
  },
  {
    name: 'Kids',
    image: '/images/shirt.png',
    description: 'Cute and comfy clothes for kids.',
  },
  {
    name: 'Accessories',
    image: '/images/shirt.png',
    description: 'Bags, belts, jewelry & more.',
  },
];

const CategoryPage = () => {
  return (<>
  <Header/>
    <div className="category-container" style={{marginTop:"70px"}}>
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <div className="category-info">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <button>Explore {cat.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CategoryPage;
