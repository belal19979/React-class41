import Category from './Category';
import './Categories.css';
import { useState } from 'react';
import useFetch from '../useFetch';

export default function Categories({ setCategoryName }) {
  const [active, setActive] = useState();
  function activeButton(value) {
    setActive(value);
  }

  const {
    data: allCategories,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products/categories');

  return (
    <>
      <h1>products</h1>
      {loading && <h3>{loading}</h3>}
      {error && <h2>{error}</h2>}
      <div className="categories">
        {allCategories?.map((name) => (
          <Category
            key={name}
            name={name}
            activeButton={activeButton}
            active={active}
            setCategoryName={setCategoryName}
          />
        ))}
      </div>
    </>
  );
}
