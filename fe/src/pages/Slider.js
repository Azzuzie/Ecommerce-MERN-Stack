import React from 'react'
import './Homecover.css'
// Slider component
const Slider = () => {
  return (
   <>
     <div className="container-fluid">
        <div id="carouselExample" className="carousel carousel-dark slide car-box">
          <div className="carousel-inner" style={{ backgroundColor: 'rgb(243, 221, 192)', margin: '15px 0' }}>
            <h2>Featured Products</h2>
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card">
                  <div className="image-wrapper">
                    <img src="../../img/lg.jpg" className="card-img-top" alt="womendress" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Red Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/women/pants/pant5.jpeg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Jeans</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../../img/women/skirts/skirt9.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Skirt</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/kids/princess dress.webp" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Princess Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/women/pants/pant1.webp" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Red Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/men/shirts/shirt6.webp" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Jeans</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/women/pants/pant5.jpeg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Skirt</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/kids/dress7.webp" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Princess Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/women/dress/dress8.png" className="card-img-top" alt="..." />
                 </div>
                  <div className="card-body">
                    <h5 className="card-title">Skirt</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/kids/dress2.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Princess Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/women/skirts/skirt8.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Red Dress</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img src="../img/men/jeans.webp" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Jeans</h5>
                    <h5>$15</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/' className="btn btn-warning btn-hover"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
   </>
  )
}

export default Slider