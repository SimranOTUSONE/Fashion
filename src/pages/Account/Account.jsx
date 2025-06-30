import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import Header from "../../components/Header/Header";

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
    dp: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  const [orders] = useState([
    { id: '#12345', date: '15 Jan 2023', status: 'Delivered', total: '$125.99' },
    { id: '#12346', date: '20 Feb 2023', status: 'Shipped', total: '$89.99' },
    { id: '#12347', date: '5 Mar 2023', status: 'Processing', total: '$45.99' },
  ]);

  const [favorites] = useState([
    { id: 1, name: 'Wireless Headphones', price: '$59.99', image: 'https://m.media-amazon.com/images/I/61BvGRyTiAL._AC_UL320_.jpg' },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: 'https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UL320_.jpg' },
  ]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="orders-section">
            <h3>Your Orders</h3>
            {orders.length > 0 ? (
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <span>Order #{order.id}</span>
                      <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                    </div>
                    <div className="order-details">
                      <span>Ordered on: {order.date}</span>
                      <span>Total: {order.total}</span>
                    </div>
                    <button className="order-action">Track Order</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>You haven't placed any orders yet.</p>
                <Link to="/shop" className="shop-now-btn">Shop Now</Link>
              </div>
            )}
          </div>
        );
      case 'favorites':
        return (
          <div className="favorites-section">
            <h3>Your Favorites</h3>
            {favorites.length > 0 ? (
              <div className="favorites-grid">
                {favorites.map((item) => (
                  <div key={item.id} className="favorite-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>You don't have any favorite items yet.</p>
                <Link to="/shop" className="shop-now-btn">Browse Products</Link>
              </div>
            )}
          </div>
        );
      case 'services':
        return (
          <div className="services-section">
            <h3>Customer Service</h3>
            <div className="service-options">
              <div className="service-card">
                <h4>Help Center</h4>
                <p>Find answers to common questions</p>
                <button>Visit Help Center</button>
              </div>
              <div className="service-card">
                <h4>Returns & Refunds</h4>
                <p>Manage your returns and refunds</p>
                <button>Start a Return</button>
              </div>
              <div className="service-card">
                <h4>Contact Us</h4>
                <p>Get in touch with our support team</p>
                <button>Contact Support</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <Header/>
    <div className="account-page" style={{marginTop:"200px"}}>
      <div className="account-header">
        <div className="user-profile">
          <img src={user.dp} alt="Profile" className="profile-pic" />
          <div className="user-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Member since {user.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="account-container">
        <div className="account-sidebar">
          <button
            className={`sidebar-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Your Orders
          </button>
          <button
            className={`sidebar-btn ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Your Favorites
          </button>
          <button
            className={`sidebar-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Customer Service
          </button>
          <button className="sidebar-btn">Your Addresses</button>
          <button className="sidebar-btn">Payment Methods</button>
          <button className="sidebar-btn">Account Settings</button>
          <button className="sidebar-btn logout">Log Out</button>
        </div>

        <div className="account-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
    </>
  );
};

export default Account;