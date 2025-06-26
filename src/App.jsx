import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import ContactForm from './components/ShopPage/ContactForm';

import MinimalLayout from './layouts/MinimalLayout';
import MainLayout from './layouts/MainLayout';
import CategoryPage from './components/ShopPage/CategoryPage';

import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import ProductDetail from './pages/NewArrivals/ProductDetail';
// Add more full-page components as needed

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/head" element={<Header/>}/>
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/categories" element={<CategoryPage/>}/>

          {/* SHOP PAGE: Minimal layout for new tab */}
          <Route
            path="/shop"
            element={
              <MinimalLayout>
                <ShopPage />
              </MinimalLayout>
            }
          />

          {/* CART PAGE: Full layout with HeroBanner, NewArrivals, etc. */}
          <Route
            path="/"
            element={
              <MainLayout>
                <CartPage />
              </MainLayout>
            }
          />

          {/* Add more full-layout routes here if needed */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
