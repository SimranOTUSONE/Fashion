import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
// import CategorySection from '../../components/CategorySection/CategorySection';
import ProductCard from '../../components/ProductCard/ProductCard';
// import Newsletter from '../../components/Newsletter/Newsletter';
import { featuredProducts } from '../../assets/data/products';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner 
        title="Summer Collection 2023"
        subtitle="Discover our new arrivals"
        buttonText="Shop Now"
        buttonLink="/shop"
        backgroundImage="/assets/images/hero-banner.jpg"
      />
      
      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <CategorySection />
      </section>
      
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <a href="/shop" className="view-all">View All</a>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="promo-banner">
        <div className="promo-content">
          <h3>Limited Time Offer</h3>
          <h2>Get 30% Off On All Items</h2>
          <p>Use code: SUMMER30</p>
          <a href="/shop" className="shop-now-btn">Shop Now</a>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default Home;