import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerCompras, eliminarCompra } from '../actions/compraActions';

const ListaCompras = () => {
  const dispatch = useDispatch();
  const { compras, loading, error } = useSelector(state => state.compra);

  useEffect(() => {
    dispatch(obtenerCompras());
  }, [dispatch]);

  const handleEliminar = (id) => {
    dispatch(eliminarCompra(id));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            <p>
              Compra {compra.id} - Usuario ID: {compra.usuarioId}, Producto ID: {compra.productoId}, Cantidad: {compra.cantidad}, Total: {compra.total}
            </p>
            <button onClick={() => handleEliminar(compra.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCompras;
