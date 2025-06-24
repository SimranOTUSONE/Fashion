import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BestsellerSection from '../pages/BestSellerSection/BestSellerSection';
import NewArrivals from '../pages/NewArrivals/NewArrivals';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import CartPage from '../pages/CartPage/CartPage';
import PopularProducts from '../components/HeroBanner/PopularProducts';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <HeroBanner />
      <BestsellerSection />
      <NewArrivals />
      {/* <PopularProducts/> */}
     
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
