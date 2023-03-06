import Category from './Category';
import './Categories.css';
import { useState } from 'react';

export default function Categories({ setCategoryName }) {
  const [active, setActive] = useState();
  function activeButton(value) {
    setActive(value);
  }

  return (
    <>
      <h1>products</h1>
      <div className="categories">
        <Category
          activeButton={activeButton}
          active={active}
          setCategoryName={setCategoryName}
        />
      </div>
    </>
  );
}
