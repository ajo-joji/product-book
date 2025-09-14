//Contact.js

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    bottles: 1,
    deliveryOption: '' 
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOptionSelect = (option) => {
    setFormData({
      ...formData,
      deliveryOption: option
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2 >Contact Us</h2>
      <div className="contact-form-description">
        We would love to hear from you! Please fill out the form below to get in touch.
      </div>

      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
        </label>
        <br />

        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Number of Bottles:
          <input type="number" name="bottles" min="1" value={formData.bottles} onChange={handleChange} required />
        </label>
        <br />

<div style={{ margin: '15px 0' }}>
  <p>Choose an option:</p>

  <label style={{ marginRight: '15px' }}>
    <input
      type="radio"
      name="orderOption"
      value="Pickup"
      onChange={() => handleOptionSelect('Pickup')}
    />
    Pickup
  </label>

  <label>
    <input
      type="radio"
      name="orderOption"
      value="Delivery"
      onChange={() => handleOptionSelect('Delivery')}
    />
    Delivery
  </label>
</div>

        <button type="submit">Submit</button>
      </form>

      
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Details</h3>
          <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Bottles</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.address}</td>
                <td>{submittedData.contact}</td>
                <td>{submittedData.bottles}</td>
                <td>{submittedData.deliveryOption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

     
    </div>
  );
}

export default Contact;