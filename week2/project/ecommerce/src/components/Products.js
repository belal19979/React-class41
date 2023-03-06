import Product from './Product';
import './Products.css';
import useFetch from '../useFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products({ category }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: allProducts,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  const { data: filtered } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );

  useEffect(() => {
    category && setFilteredProducts(filtered);
  }, [filtered, category]);

  return (
    <>
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error}</h1>}
      <ul className="products">
        {filteredProducts?.length === 0
          ? allProducts?.map((product) => {
              return (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <Product product={product} category={category} />
                </Link>
              );
            })
          : filteredProducts?.map((product) => {
              return (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <Product product={product} category={category} />
                </Link>
              );
            })}
      </ul>
    </>
  );
}
