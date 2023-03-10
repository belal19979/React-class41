import React, { useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { useContext } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import Like from '../components/Like';
import './Favorite.css';

export default function Favorite() {
  const { favoriteProducts } = useContext(ProductContext);
  let [ArrayOfFavorites, setArrayOfFavorites] = useState(favoriteProducts);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function fetchFilmsById() {
    ArrayOfFavorites = await Promise.all(
      favoriteProducts.map(async (id) => {
        try {
          setLoading('loading ..');
          setError(null);
          const res = await axios.get(
            `https://fakestoreapi.com/products/${id}`,
          );

          return res.data;
        } catch (e) {
          setLoading(false);
          setError('An error occurred. Awkward..');
        } finally {
          setLoading(false);
        }
      }),
    );
  }

  useEffect(() => {
    fetchFilmsById().then(() => {
      setLoading(false);
      setArrayOfFavorites(ArrayOfFavorites);
    });
  }, [favoriteProducts]);

  return (
    <>
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error}</h1>}
      {ArrayOfFavorites.length === 0 ? (
        <h4>sorry you do not have any favorites</h4>
      ) : (
        ArrayOfFavorites.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <Product product={product} />
              <Like product={product} />
            </div>
          );
        })
      )}
    </>
  );
}
