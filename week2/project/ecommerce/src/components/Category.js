import './Category.css';

export default function Category({
  setCategoryName,
  activeButton,
  active,
  name,
}) {
  return (
    <div
      onClick={(e) => {
        setCategoryName(name);
        activeButton(name);
      }}
      value={name}
      className={active === name ? 'activeClass' : 'categories-item'}
    >
      {name}
    </div>
  );
}
