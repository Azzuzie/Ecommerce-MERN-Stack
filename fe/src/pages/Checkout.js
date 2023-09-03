import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'; // You can define your own styles
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
const Checkout = () => {
    
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const navigate=useNavigate()

  const handleAddressChange = (event) => {
    toast.success("Order placed")
    setAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Here, you can implement the logic for placing the order
    // This might involve sending the order details to a server or handling it in another way
    // Once the order is successfully placed, you can redirect the user to a confirmation page
    // You can use history.push('/confirmation') to navigate to the confirmation page
    toast("Order placed")
    navigate('/cart')
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="address-section">
        <h3>Shipping Address</h3>
        <textarea
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter your shipping address"
        />
      </div>
      <div className="payment-section">
        <h3>Payment Method</h3>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {/* Display order details here */}
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <Link to="/cart"><i class="fa-solid fa-backward"></i> Back to Cart</Link>
    </div>
  );
};

export default Checkout;
