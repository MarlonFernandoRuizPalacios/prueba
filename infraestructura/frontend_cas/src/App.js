import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Usuarios from './pages/Usuarios';
import Compras from './pages/Compras';
import Productos from './pages/Productos';

const App = () => (
  <Router>
    <Header />
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </Router>
);

export default App;
