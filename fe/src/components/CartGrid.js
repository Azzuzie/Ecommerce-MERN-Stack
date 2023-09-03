import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProducts, selectProducts } from '../redux/productSlice';

const CartGrid = () => {
  const dispatch = useDispatch();

  let { products } = useSelector(selectProducts);
  products = products.products;
  console.log(products);
  debugger;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(fetchCartProducts(user));
  }, [dispatch]);

//   const [quan,setQuan]=useState()

  return (
    <div className="cart-items">
      <div className="cart-header">
        <h3>Cart Items</h3>
      </div>
      {products.length === 0 ? ( // Use ternary operator to conditionally render content
        <p>No products in cart.</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product._id} className="cart-grid">
              <div className="item-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="item-details">
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <button>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </div>
              <div className="item-quantity">

                <button className="btn-hover" >
                  <i className="fa fa-minus "></i>
                </button>

                <input type="number" value={product.quantity} />

                <button className="btn-hover">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          ))}
          <hr />
        </div>
      )}
    </div>
  );
};

export default CartGrid;
