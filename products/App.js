import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="container-fluid app-container">
      <h1 className="text-center mb-4 app-heading">Search For Products</h1>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for Products, Brands and More"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="row product-list">
        {products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card product-card">
              <img src={product.image} alt={product.title} className="card-img-top product-image" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.category}</p>
                <button className="btn btn-warning">{product.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
