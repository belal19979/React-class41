import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import ProductPage from './pages/ProductPage';

function App() {
  const [categoryName, setCategoryName] = useState('');
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
