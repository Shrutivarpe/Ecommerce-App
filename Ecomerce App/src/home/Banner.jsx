import React, { useState, useEffect } from 'react';
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    // Filter based on both search and category
    const filtered = productData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchInput, selectedCategory]);

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          <h2>Search Your One From <span>Thousand</span> of products</h2>
          <form>
            <SelectedCategory value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit"><i className="icofont-search"></i></button>
          </form>
          <p>We have the largest collection of products</p>
          <ul className='lab-ul'>
            {searchInput && filteredProducts.map((product, i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
