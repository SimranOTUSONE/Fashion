import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ShopPage.css';

const categories = [
  {
    name: 'T-Shirts',
    items: [
      {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 15.99,
        image: '/images/sweater.png',
      },
      {
        id: 2,
        name: 'Black Graphic Tee',
        price: 18.99,
        image: '/images/sweater.png',
      },
    ],
  },
  {
    name: 'Jeans',
    items: [
      {
        id: 3,
        name: 'Slim Fit Jeans',
        price: 39.99,
        image: 'images/sweater.png',
      },
      {
        id: 4,
        name: 'Relaxed Fit Jeans',
        price: 42.50,
        image: '/images/sweater.png',
      },
    ],
  },
  {
    name: 'Jackets',
    items: [
      {
        id: 5,
        name: 'Denim Jacket',
        price: 55.00,
        image: '/images/sweater.png',
      },
      {
        id: 6,
        name: 'Leather Jacket',
        price: 99.99,
        image: '/images/sweater.png',
      },
    ],
  },
  {
    name: 'Shoes',
    items: [
      {
        id: 7,
        name: 'Running Sneakers',
        price: 65.99,
        image: '/images/sweater.png',
      },
      {
        id: 8,
        name: 'Leather Boots',
        price: 85.50,
        image: '/images/sweater.png',
      },
    ],
  },
];

const ShopPage = () => {
  const { addToCart } = useContext(CartContext);

  const handleBuy = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <div className="shop-page">
      <h1>Clothing Shop</h1>

      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h2>{category.name}</h2>
          <div className="product-list">
            {category.items.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => handleBuy(item)}>Buy</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
