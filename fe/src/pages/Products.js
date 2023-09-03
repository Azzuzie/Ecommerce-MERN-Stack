import React, { useEffect } from 'react';
import './Product.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from '../redux/productSlice';
import axios from "axios";
import {  toast } from 'react-toastify';
// import { fetchCartProducts } from '../redux/productSlice';


const Products = () => {
  const dispatch = useDispatch();

  const location = useLocation('/products');
  const { name } = location.state;

  let { products } = useSelector(selectProducts);
  products=products.products
  console.log(products)
  debugger

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const CONFIG_OBJ={
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  }


  const HandleCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:3300/addToCart/${productId}`, {}, CONFIG_OBJ);
      debugger

      if (response.status === 200) {
        // Check if the response status code is 200 (OK)
        // console.log(response.data.message)
       
        toast.success(response.data.message);
      } 
    } catch (error) {
      // console.error("Error while making the request:", error);
      toast.error("Error while adding to cart.");
    }
  };
  
  return (
    <div className="container-fluid">
      <h2 className="products-heading">{name}</h2>
      <div className="card-grid">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <div className="image-wrapper">
              <img src={product.image} className="card-img-top" alt={product.name} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h5>${product.price}</h5>
              <p className="card-text">{product.description}</p>
              <button  className="btn btn-warning btn-hover" onClick={()=>HandleCart(product._id)}>
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
