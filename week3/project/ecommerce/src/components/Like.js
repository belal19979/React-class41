import heartSvg from './../assets/heart-regular.svg';
import heartSolidSvg from './../assets/heart-solid.svg';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import './Like.css';

export default function Like({ product }) {
  const { favoriteProducts, addToFavorite, removeFromFavorite } =
    useContext(ProductContext);

  const isFavorite = (id) => favoriteProducts.some((pId) => pId === id);

  return (
    <div className="img-container">
      {isFavorite(product.id) ? (
        <img
          className="fav"
          src={heartSolidSvg}
          alt="favorite-icon"
          onClick={() => {
            removeFromFavorite(product.id);
          }}
        />
      ) : (
        <img
          className="fav"
          src={heartSvg}
          alt="favorite-icon"
          onClick={() => {
            addToFavorite(product.id);
          }}
        />
      )}
    </div>
  );
}
