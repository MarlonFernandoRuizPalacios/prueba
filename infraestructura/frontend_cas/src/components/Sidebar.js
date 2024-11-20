import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Módulos</h2>
    <ul>
      <li><Link to="/usuarios">Usuarios</Link></li>
      <li><Link to="/compras">Compras</Link></li>
      <li><Link to="/juegos">Juegos</Link></li>
      <li><Link to="/productos">Productos</Link></li>
    </ul>
  </div>
);

export default Sidebar;
