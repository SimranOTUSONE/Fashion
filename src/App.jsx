import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Shop from './pages/ProductGrid/ProductGrid';
import ProductDetail from './pages/BestSellerSection/BestSellerSection';
import CartPage from './pages/CartPage/CartPage';
// import Checkout from './pages/Checkout/Checkout';
import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Newsletter from './Newsletter/Newsletter';
import BestsellerSection from './pages/BestSellerSection/BestSellerSection';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import ProductGrid from './pages/ProductGrid/ProductGrid';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <HeroBanner/>
          <BestsellerSection/>
          <NewArrivals/>
          <ProductDetail/>
          <CartPage/>
          <Newsletter/>
          <main>
            <Routes>
              <Route path="/head" element={<Header/>}/>
              <Route path="/foot" element={<Footer/>}/>
              <Route path="/hero" element={<HeroBanner/>}/>
              <Route path="/product" element={<BestsellerSection/>}/>
              <Route path="/new" element={<NewArrivals/>}/>
              <Route path="/pro" element={<ProductGrid/>}/>
              
              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/shop" element={<Shop />} /> */}
              {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
              <Route path="/cart" element={<CartPage />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;