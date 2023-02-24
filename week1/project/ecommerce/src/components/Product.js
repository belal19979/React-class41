import { useEffect, useState } from 'react';
import allProducts from '../fake-data/all-products';
import './Product.css';

export default function Product({ category }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (category) => {
    const customizedCategory = category.slice(6);
    const filtered = allProducts.filter(
      ({ category }) => category === customizedCategory,
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts(category);
  }, [category]);

  return (
    <>
      {filteredProducts.length === 0
        ? allProducts.map((product) => {
            return (
              <li key={product.id} className="products-item">
                <div className="product">
                  <img
                    className="product-img"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="product-title">{product.title}</span>
                </div>
              </li>
            );
          })
        : filteredProducts.map((product) => {
            return (
              <li key={product.id} className="products-item">
                <div className="product">
                  <img
                    className="product-img"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="product-title">{product.title}</span>
                </div>
              </li>
            );
          })}
    </>
  );
}
