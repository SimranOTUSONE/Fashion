import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <h4 className="footer-title">About Us</h4>
              <p className="footer-about">
                Fashionista is a premium eCommerce platform that provides the latest fashion trends 
                for men and women at affordable prices.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                <a href="#" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/returns">Returns & Exchanges</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title" style={{fontColor:"black"}}>Customer Service</h4>
              <ul className="footer-links">
                <li><Link to="/my-account">My Account</Link></li>
                <li><Link to="/order-tracking">Order Tracking</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/shipping-info">Shipping Info</Link></li>
                <li><Link to="/size-guide">Size Guide</Link></li>
                <li><Link to="/gift-cards">Gift Cards</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Fashion Street, New York, NY 10001, USA</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>+1 234 567 8900</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@fashionista.com</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon - Fri: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="copyright">
              &copy; {currentYear} Fashionista. All Rights Reserved.
            </div>
            <div className="payment-methods">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;