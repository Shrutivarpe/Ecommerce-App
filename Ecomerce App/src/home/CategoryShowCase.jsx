import React, { useState } from 'react';
import Rating from "../components/Rating";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: 'src/assets/images/categoryTab/01.jpg',
    cate: 'Shoes',
    title: 'Nike Premier X',
    brand: 'Nike',
    price: '$199.00',
    id: 1,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/02.jpg',
    cate: 'Bags',
    title: 'Asthetic Bags',
    brand: 'D&J Bags',
    price: '$159.00',
    id: 2,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    brand: 'Apple',
    price: '$999.00',
    id: 3,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/04.jpg',
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    brand: 'Gucci',
    price: '$249.00',
    id: 4,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/05.jpg',
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    brand: 'Nike',
    price: '$129.00',
    id: 5,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/06.jpg',
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    brand: 'Zaara',
    price: '$49.00',
    id: 6,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/07.jpg',
    cate: 'Bags',
    title: 'Look Less Chanel Bag',
    brand: 'Gucci',
    price: '$299.00',
    id: 7,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/08.jpg',
    cate: 'Shoes',
    title: 'Casual Sneakers',
    brand: 'Bata',
    price: '$89.00',
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(ProductData);
    } else {
      const filtered = ProductData.filter(item => item.cate === category);
      setItems(filtered);
    }
  };

  return (
    <div className='course-section style-3 padding-tb'>
      {/* shapes */}
      <div className='course-shape one'>
        <img src="../assets/images/shape-img/icon/01.png" alt="shape-1" />
      </div>
      <div className='course-shape two'>
        <img src="../assets/images/shape-img/icon/02.png" alt="shape-2" />
      </div>

      {/* main section */}
      <div className='container'>
        <div className="section-header text-center">
          <h2 className='title'>{title}</h2>
        </div>

        <div className='course-filter-group text-center mb-4'>
          <ul className='lab-ul d-inline-flex gap-3'>
            <li onClick={() => filterItems("All")} className="filter-btn">All</li>
            <li onClick={() => filterItems("Shoes")} className="filter-btn">Shoes</li>
            <li onClick={() => filterItems("Bags")} className="filter-btn">Bags</li>
            <li onClick={() => filterItems("Phones")} className="filter-btn">Phones</li>
            <li onClick={() => filterItems("Beauty")} className="filter-btn">Beauty</li>
          </ul>
        </div>

        {/* product cards */}
        <div className='row g-4'>
          {
            items.map(product => (
              <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'>
                <div className="course-item style-4 p-3 border rounded shadow-sm text-center h-100">
                  <div className="course-inner">
                    <div className="course-thumb mb-3">
                      <img src={product.imgUrl} alt={product.title} className='img-fluid' />
                    </div>
                    <div className="course-category mb-2 text-muted">{product.cate}</div>
                    <h5 className="mb-2">{product.title}</h5>
                    <p className="text-muted">{product.brand}</p>
                    <Rating />
                    <h6 className="mt-2 text-success">{product.price}</h6>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
