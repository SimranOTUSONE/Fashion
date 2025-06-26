import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-form-box">
        <h2>Contact Us</h2>
        <p>Have a question? Reach out to our team.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
          {submitted && <p className="success-msg">Thanks! We'll be in touch soon.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
