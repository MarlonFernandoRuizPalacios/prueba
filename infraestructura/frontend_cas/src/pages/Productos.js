import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductos, agregarProducto, eliminarProducto, editarProducto } from '../actions/productoActions';

const Productos = () => {
  const dispatch = useDispatch();
  const { productos, cargando, error } = useSelector((state) => state.productos);

  // Estado para el formulario de agregar/editar producto
  const [productoForm, setProductoForm] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    categoriaId: '',
  });

  useEffect(() => {
    // Cargar productos al montar el componente
    dispatch(obtenerProductos());
  }, [dispatch]);

  // Manejo del cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoForm({ ...productoForm, [name]: value });
  };

  // Manejo del submit del formulario (Agregar o Editar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productoForm.id) {
      dispatch(editarProducto(productoForm.id, productoForm));
    } else {
      dispatch(agregarProducto(productoForm));
    }
    // Limpiar el formulario después de la operación
    setProductoForm({ id: '', nombre: '', descripcion: '', precio: '', cantidad: '', categoriaId: '' });
  };

  // Manejo de eliminación de producto
  const handleEliminar = (id) => {
    dispatch(eliminarProducto(id));
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>

      {/* Formulario para agregar/editar producto */}
      <h2>{productoForm.id ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={productoForm.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={productoForm.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="precio"
            value={productoForm.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            name="cantidad"
            value={productoForm.cantidad}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {productoForm.id ? 'Editar Producto' : 'Agregar Producto'}
        </button>
      </form>

      {/* Mostrar productos */}
      <h2>Lista de Productos</h2>
      {cargando ? (
        <div>Cargando productos...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              <button onClick={() => setProductoForm({ ...producto })}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Productos;
