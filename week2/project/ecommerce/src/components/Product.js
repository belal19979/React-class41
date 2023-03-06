import './Product.css';

export default function Product({ category, product }) {
  return (
    <li className="products-item">
      <div className="product">
        <img className="product-img" src={product.image} alt={product.title} />
        <span className="product-title">{product.title}</span>
      </div>
    </li>
  );
}
