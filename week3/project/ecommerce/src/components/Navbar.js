import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [title, setTitle] = useState('products');
  return (
    <div className="main">
      <h1>{title}</h1>
      <div className="links">
        <Link onClick={() => setTitle('products')} to={'/'}>
          Products
        </Link>
        <Link onClick={() => setTitle('favorites')} to={'/favorites'}>
          favorites
        </Link>
      </div>
    </div>
  );
}
