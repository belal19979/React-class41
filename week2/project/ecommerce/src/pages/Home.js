import Categories from '../components/Categories';
import Products from '../components/Products';
import { useState } from 'react';

export default function Home() {
  const [categoryName, setCategoryName] = useState('');
  return (
    <>
      <Categories setCategoryName={setCategoryName} />
      <Products category={categoryName} />
    </>
  );
}
