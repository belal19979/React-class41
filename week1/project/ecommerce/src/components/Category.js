import allCategories from '../fake-data/all-categories';
// import allProducts from '../fake-data/all-products';
import './Category.css';

export default function Category({ setCategoryName }) {
  let key = 1;
  return (
    <>
      {allCategories.map((name) => {
        return (
          <div
            onClick={(e) => {
              setCategoryName(name);
            }}
            value={name}
            className="categories-item"
            key={++key}
          >
            {name}
          </div>
        );
      })}
    </>
  );
}
