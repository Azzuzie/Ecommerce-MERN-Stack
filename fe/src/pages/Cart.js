import React from 'react'
import { Link } from "react-router-dom";
import './Cart.css'
import CartGrid from '../components/CartGrid';
const Cart = () => {
  return (
     <>
        

        <div className="cart-page">
    <CartGrid/>
  
    <div className="cart-summary">
      <div className="card">
        <div className="card-header">
          <h3>Summary</h3>
        </div>
        <div className="card-body">
          <p>Product Price: $10</p>
          <p>Shipping: $5</p>
          <hr/>
          <p>Total Cost: $15</p>
          <Link to='/checkout'><button>Checkout</button></Link>
        </div>
      </div>
    </div>
  </div>


     </>
  )
}

export default Cart