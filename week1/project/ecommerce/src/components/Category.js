import allCategories from '../fake-data/all-categories';
// import allProducts from '../fake-data/all-products';
import './Category.css';
import { useState } from 'react';

export default function Category({ setCategoryName }) {
  let key = 1;
  return (
    <>
      {allCategories.map((c) => {
        return (
          <div
            onClick={(e) => {
              setCategoryName(e.target.outerText);
            }}
            value={c}
            className="categories-item"
            key={++key}
          >
            {c}
          </div>
        );
      })}
    </>
  );
}
