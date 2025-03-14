import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
