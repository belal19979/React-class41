import { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorite = (id) => {
    setFavoriteProducts((prev) => [...prev, id]);
  };

  const removeFromFavorite = (id) => {
    favoriteProducts.includes(id) &&
      setFavoriteProducts(() => favoriteProducts.filter((pId) => pId !== id));
  };

  return (
    <ProductContext.Provider
      value={{ favoriteProducts, addToFavorite, removeFromFavorite }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
