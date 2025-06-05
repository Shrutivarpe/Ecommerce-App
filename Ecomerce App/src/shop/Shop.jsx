import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';

const showResults = "Showing 01-12 of 139 Results";

const Shop = () => {    
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Side - Product Listing */}
            <div className="col-lg-9 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between align-items-center">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <button className='grid btn' onClick={() => setGridList(true)}>
                      <i className='icofont-ghost'></i>
                    </button>
                    <button className='list btn' onClick={() => setGridList(false)}>
                      <i className='icofont-listing-dots'></i>
                    </button>
                  </div>
                </div>
                <ProductCards GridList={GridList} products={products} />
              </article>
            </div>

            {/* Right Side - Sidebar or Filters */}
            <div className="col-lg-3 col-12">
              {/* You can add filters or categories here */}
              <div className="shop-sidebar">
                <h5>Right Sidebar</h5>
                <p>Categories, Price Filters, Tags etc.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
