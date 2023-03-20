import Product from './Product';
import './Products.css';
import allProducts from '../fake-data/all-products';

export default function Products({ category }) {
  let productsToShow = allProducts;
  if (category) {
    const customizedCategory = category.slice(6);
    productsToShow = allProducts.filter(
      ({ category }) => category === customizedCategory,
    );
  }

  return (
    <ul className="products">
      {productsToShow.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
