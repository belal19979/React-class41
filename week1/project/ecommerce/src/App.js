import Products from './components/Products';
import Categories from './components/Categories';
import { useState } from 'react';

function App() {
  const [categoryName, setCategoryName] = useState('');
  return (
    <>
      <Categories setCategoryName={setCategoryName} />
      <Products category={categoryName} />
    </>
  );
}

export default App;
