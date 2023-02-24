import Category from './Category';
import './Categories.css';

export default function Categories({ setCategoryName }) {
  return (
    <>
      <h1>products</h1>
      <div className="categories">
        <Category setCategoryName={setCategoryName} />
      </div>
    </>
  );
}
