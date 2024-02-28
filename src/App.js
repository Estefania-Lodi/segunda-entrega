import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategorySelect = (category) => {
    setCategoriaSeleccionada(category);
  };

  return (
    <Router>
      <div>
        <Navbar onSelectCategory={handleCategorySelect} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/cremas" element={<ItemListContainer categoriaSeleccionada="cremas" />} />
          <Route path="/maquillajes" element={<ItemListContainer categoriaSeleccionada="maquillajes" />} />
          <Route path="/exfoliantes" element={<ItemListContainer categoriaSeleccionada="exfoliantes" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
