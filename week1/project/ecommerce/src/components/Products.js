import Product from './Product';
import './Products.css';

export default function Products({ category }) {
  return (
    <ul className="products">
      <Product category={category} />
    </ul>
  );
}
