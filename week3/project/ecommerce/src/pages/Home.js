import Categories from '../components/Categories';
import Products from '../components/Products';

export default function Home({ setCategoryName, categoryName }) {
  return (
    <>
      <Categories setCategoryName={setCategoryName} />
      <Products category={categoryName} />
    </>
  );
}
