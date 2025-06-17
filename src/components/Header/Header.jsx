import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
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
              <input 
                type="text" 
                placeholder="Search products..." 
                className="search-input"
              />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="header-actions">
              <button 
                className="search-toggle mobile-only"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                <i className="fas fa-search"></i>
              </button>
              
              <Link to="/account" className="account-link">
                <i className="fas fa-user"></i>
                <span className="action-label">Account</span>
              </Link>
              
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
            <li className="has-mega-menu">
              <span>Categories <i className="fas fa-chevron-down"></i></span>
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h4>Women</h4>
                  <ul>
                    <li><Link to="/shop?category=women">All Women</Link></li>
                    <li><Link to="/shop?category=women&type=dresses">Dresses</Link></li>
                    <li><Link to="/shop?category=women&type=tops">Tops</Link></li>
                    <li><Link to="/shop?category=women&type=jeans">Jeans</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Men</h4>
                  <ul>
                    <li><Link to="/shop?category=men">All Men</Link></li>
                    <li><Link to="/shop?category=men&type=shirts">Shirts</Link></li>
                    <li><Link to="/shop?category=men&type=pants">Pants</Link></li>
                    <li><Link to="/shop?category=men&type=jackets">Jackets</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Accessories</h4>
                  <ul>
                    <li><Link to="/shop?category=accessories">All Accessories</Link></li>
                    <li><Link to="/shop?category=accessories&type=bags">Bags</Link></li>
                    <li><Link to="/shop?category=accessories&type=watches">Watches</Link></li>
                    <li><Link to="/shop?category=accessories&type=jewelry">Jewelry</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-banner">
                  <img src="/assets/images/mega-menu-banner.jpg" alt="Summer Sale" />
                  <div className="banner-content">
                    <h3>Summer Sale</h3>
                    <p>Up to 50% off</p>
                    <Link to="/shop?discount=50" className="shop-now-btn">Shop Now</Link>
                  </div>
                </div>
              </div>
            </li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;