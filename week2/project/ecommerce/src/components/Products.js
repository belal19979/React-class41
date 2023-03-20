import Product from './Product';
import './Products.css';
import useFetch from '../useFetch';
export default function Products({ category }) {
  const {
    data: allProducts,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  let productsToShow = allProducts;
  if (category) {
    const customizedCategory = category.slice(6);
    productsToShow = allProducts.filter(
      ({ category }) => category === customizedCategory,
    );
  }

  return (
    <ul className="products">
      {loading && <h3>{loading}</h3>}
      {error && <h2>{error}</h2>}
      {productsToShow.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
