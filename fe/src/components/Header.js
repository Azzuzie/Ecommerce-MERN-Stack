import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { addUser } from "../redux/userSlice";
const Header = () => {
 
  const array= useSelector(state=>state.user)
  let { user} = array;
  user= user[0];
// const navigate=useNavigate()
// const dispatch=useDispatch()

//   useEffect(() => {
//     // const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch(addUser(user));
//     } 
//   }, [dispatch,user]);


  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" id="header">
          <Link className="navbar-brand brand-style" to="/">
            <h2 className="brand">Ecommerce</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="d-flex search-form">
                  <input
                    className="form-control me-2 search"
                    type="search"
                    placeholder="Search for products"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-warning btn-hover"
                    type="submit"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav">
            {user ? (
            <>
              <li className="nav-item me-3 login-btn">
                {/* Show user's name and cart icon */}
                <Link
                  className="nav-link btn btn-warning lg-btn btn-hover"
                  to="/profile"
                  style={{ color: "black" }}
                >
                  {`Hello, ${user.name}`} 
                  </Link>
              </li>
              <li className="nav-item cart-logo">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item me-3 login-btn">
                {/* Show login button */}
                <Link
                  className="nav-link btn btn-warning lg-btn btn-hover"
                  to="/login"
                  style={{ color: "black" }}
                >
                  Login
                </Link>
              </li>
            </>
          )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Top Header end */}
      {/* Bottom Header start */}
      {/* Nav Links */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav navbar-nav-small">
              <li className="nav-item li-width">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item li-width">
                <Link className="nav-link" to="/products/allProducts" state={{name:"All-Products"}}>
                  All Products
                </Link>
              </li>


              <li className="nav-item dropdown li-width">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/products/women" role="button" aria-expanded="false">
                  Women
                </Link>
                <ul className="dropdown-menu">
                  {/* dropdown items */}
                  <li>
                  <Link
                className="dropdown-item"
                to='/products/women/allProducts' state={{name:"Women-All"}}
              >
                All
              </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/products/women/dresses' state={{name:"Women-dresses"}}
                >
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/products/women/pants' state={{name:"Women-pants"}}>
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/products/women/skirts' state={{name:"Women-skirts"}}>
                      Skirts
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown li-width">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/products/men"
                  role="button"
                  aria-expanded="false"
                >
                  Men
                </Link>
                <ul className="dropdown-menu">
                  {/* dropdown items */}
                  <li>
                    <Link className="dropdown-item" to="/products/men/allProducts" state={{name:"Men-All"}}>
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/men/shirts" state={{name:"Men-Shirts"}}>
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/men/pants" state={{name:"Men-Pants"}}>
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/men/hoodies" state={{name:"Men-Hoodies"}}>
                      Hoodies
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item li-width">
                <Link className="nav-link" to='/products/kids' state={{name:"Kids"}}>
                  Kids
                </Link>
              </li>

              <li className="nav-item li-width">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
