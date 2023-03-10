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
      <div className="categories">
        <div className="right-div">
          <Category
            activeButton={activeButton}
            active={active}
            setCategoryName={setCategoryName}
          />
        </div>
      </div>
    </>
  );
}
