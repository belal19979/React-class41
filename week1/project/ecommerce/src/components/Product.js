import './Product.css';

export default function Product({ product }) {
  return (
    <li key={product.id} className="products-item">
      <div className="product">
        <img className="product-img" src={product.image} alt={product.title} />
        <span className="product-title">{product.title}</span>
      </div>
    </li>
  );
}
