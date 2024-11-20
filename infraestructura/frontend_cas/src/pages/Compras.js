import React from 'react';
import CompraForm from '../components/CompraForm';
import ListaCompras from '../components/ListaCompras';

const Compras = () => {
  return (
    <div>
      <h1>Gestión de Compras</h1>
      <CompraForm />
      <ListaCompras />
    </div>
  );
};

export default Compras;
