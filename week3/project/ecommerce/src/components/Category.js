import './Category.css';
import useFetch from '../useFetch';

export default function Category({ setCategoryName, activeButton, active }) {
  let key = 1;
  const {
    data: allCategories,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products/categories');

  return (
    <>
      {loading && <h3>{loading}</h3>}
      {error && <h2>{error}</h2>}
      {allCategories?.map((c) => {
        return (
          <div
            onClick={(e) => {
              setCategoryName(e.target.outerText);
              activeButton(e.target.outerText);
            }}
            value={c}
            className={active === c ? 'activeClass' : 'categories-item'}
            key={++key}
          >
            {c}
          </div>
        );
      })}
    </>
  );
}
