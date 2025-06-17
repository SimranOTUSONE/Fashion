import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    clearCart 
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-header">
              <h1>Shopping Cart</h1>
              <p>You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
            </div>
            
            <div className="cart-content">
              <div className="cart-items">
                <div className="cart-items-header">
                  <div className="header-product">Product</div>
                  <div className="header-price">Price</div>
                  <div className="header-quantity">Quantity</div>
                  <div className="header-total">Total</div>
                  <div className="header-remove"></div>
                </div>
                
                {cartItems.map(item => (
                  <CartItem 
                    key={`${item.id}${item.selectedSize || ''}`}
                    item={item}
                    onRemove={removeFromCart}
                    onQuantityChange={updateQuantity}
                  />
                ))}
                
                <div className="cart-actions">
                  <button className="continue-shopping">
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                  <button className="clear-cart" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-btn">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </button>
                <div className="payment-methods">
                  <p>We accept:</p>
                  <div className="payment-icons">
                    <i className="icon-visa"></i>
                    <i className="icon-mastercard"></i>
                    <i className="icon-paypal"></i>
                    <i className="icon-apple-pay"></i>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you hav
                en't added anything to your cart yet</p>
            <Link to="/shop" className="shop-now-btn">Shop Now</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;