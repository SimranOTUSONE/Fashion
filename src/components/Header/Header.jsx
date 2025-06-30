import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setHideHeader(true);
      } else if (currentScrollY < prevScrollY) {
        setHideHeader(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${hideHeader ? 'hidden' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div className="logo">
              <Link to="/">FASHIONISTA</Link>
            </div>

            <div className={`search-box ${searchOpen ? 'open' : ''}`}>
              <input type="text" placeholder="Search products..." className="search-input" />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="header-actions">
              <button className="search-toggle mobile-only" onClick={toggleSearch} aria-label="Toggle search">
                <i className="fas fa-search"></i>
              </button>
{/* 
              <Link to="/account" className="account-link">
                <i className="fas fa-user"></i>
                <span className="action-label">Account</span>
              </Link> */}

              <Link to="/wishlist" className="wishlist-link">
                <i className="fas fa-heart"></i>
                <span className="action-label">Wishlist</span>
              </Link>

              <Link to="/cart" className="cart-link">
                <i className="fas fa-shopping-bag"></i>
                <span className="action-label">Cart</span>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link></li>
            <li>
              <Link to="/categories" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
            </li>
            <li><Link to="/acc" onClick={() => setMobileMenuOpen(false)}>Account</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
