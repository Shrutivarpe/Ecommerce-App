import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductCards = ({ GridList, products }) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {
        products.map((product, i) => (
          <div key={i} className={`col-lg-4 col-md-6 col-12 ${GridList ? "" : "col-12"}`}>
            <div className={`product-item ${GridList ? "text-center" : "product-list-item d-flex gap-4 align-items-center"}`}>
              
              {/* Product Image */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} className="img-fluid" />
                </div>

                {/* Action Buttons for Grid View */}
                {GridList && (
                  <div className="product-action-link">
                    <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                    <a href="#"><i className='icofont-heart'></i></a>
                    <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <div className='product-rating'>
                  <Rating />
                </div>
                <h6>${product.price}</h6>

                {/* Show description and button only in List view */}
                {!GridList && (
                  <>
                    <p>{product.description?.slice(0, 100)}...</p>
                    <div className="mt-2">
                      <Link to={`/shop/${product.id}`} className='btn btn-sm btn-outline-primary me-2'>View</Link>
                      <Link to="/cart-page" className='btn btn-sm btn-outline-success'>Add to Cart</Link>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductCards;
