import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearCompra } from '../actions/compraActions';

const CompraForm = () => {
  const dispatch = useDispatch();

  const [compra, setCompra] = useState({
    usuarioId: '',
    productoId: '',
    cantidad: '',
    total: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompra({ ...compra, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(crearCompra(compra));
    setCompra({ usuarioId: '', productoId: '', cantidad: '', total: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario ID</label>
        <input
          type="number"
          name="usuarioId"
          value={compra.usuarioId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Producto ID</label>
        <input
          type="number"
          name="productoId"
          value={compra.productoId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cantidad</label>
        <input
          type="number"
          name="cantidad"
          value={compra.cantidad}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Total</label>
        <input
          type="number"
          name="total"
          value={compra.total}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Crear Compra</button>
    </form>
  );
};

export default CompraForm;
