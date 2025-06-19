import React from 'react';
// import Navbar from '../components/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MinimalLayout = ({ children }) => {
  return (
    <>
      
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MinimalLayout;
