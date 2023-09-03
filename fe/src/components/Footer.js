import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" >
        <footer>
        {/* Links for various pages */}
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <h3>Women</h3>
              <ul>
                <li><Link to="/products" state={{name:"Women-dresses"}}>Dresses</Link></li>
                <li><Link to="/products" state={{name:"Women-pants"}}>Pants</Link></li>
                <li><Link to="/products" state={{name:"Women-skirts"}}>Skirts</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h3>Men</h3>
              <ul>
                <li><Link to="/products" state={{name:"Men-Shirts"}}>Shirts</Link></li>
                <li><Link to="/products" state={{name:"Men-Pants"}}>Pants</Link></li>
                <li><Link to="/products" state={{name:"Men-Hoodies"}}>Hoodies</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h3>Kids</h3>
              <ul>
                <li><Link to="/products" state={{name:"Kids"}}>Dresses</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h3>Links</h3>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
          <hr />
          {/* copyright  */}
          <p>COPYRIGHT &copy; Ajith Design 2023</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
