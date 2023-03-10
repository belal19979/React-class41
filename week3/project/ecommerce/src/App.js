import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import ProductPage from './pages/ProductPage';
import Favorite from './pages/Favorite';
import Navbar from './components/Navbar';

function App() {
  const [categoryName, setCategoryName] = useState('');
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
          }
        />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
