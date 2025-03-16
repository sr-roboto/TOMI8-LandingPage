import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
