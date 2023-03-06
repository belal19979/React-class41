import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../components/Product';
import useFetch from '../useFetch';

function ProductPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`,
  );
  return (
    <>
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error}</h1>}
      {data && <Product product={data} />}
      {!data && loading === false && (
        <h1>Sorry , there is no product with this Id</h1>
      )}
      <Link to={'/products'}>back to products</Link>
    </>
  );
}

export default ProductPage;
