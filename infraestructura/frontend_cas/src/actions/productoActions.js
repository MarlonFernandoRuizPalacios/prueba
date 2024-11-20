import axios from 'axios';

// Acción para obtener productos
export const obtenerProductos = () => async (dispatch) => {
  dispatch({ type: 'OBTENER_PRODUCTOS_REQUEST' });

  try {
    const response = await axios.get('http://localhost:3200/productos');
    dispatch({
      type: 'OBTENER_PRODUCTOS_EXITO',
      payload: response.data.productos,
    });
  } catch (error) {
    dispatch({
      type: 'OBTENER_PRODUCTOS_ERROR',
      payload: error.message,
    });
  }
};

// Acción para agregar un nuevo producto
export const agregarProducto = (producto) => async (dispatch) => {
  dispatch({ type: 'AGREGAR_PRODUCTO_REQUEST' });

  try {
    const response = await axios.post('http://localhost:3200/productos', producto);
    dispatch({
      type: 'AGREGAR_PRODUCTO_EXITO',
      payload: response.data.nuevoProducto,
    });
  } catch (error) {
    dispatch({
      type: 'AGREGAR_PRODUCTO_ERROR',
      payload: error.message,
    });
  }
};

// Acción para editar un producto
export const editarProducto = (id, producto) => async (dispatch) => {
  dispatch({ type: 'EDITAR_PRODUCTO_REQUEST' });

  try {
    const response = await axios.put(`http://localhost:3200/productos/${id}`, producto);
    dispatch({
      type: 'EDITAR_PRODUCTO_EXITO',
      payload: response.data.productoActualizado,
    });
  } catch (error) {
    dispatch({
      type: 'EDITAR_PRODUCTO_ERROR',
      payload: error.message,
    });
  }
};

// Acción para eliminar un producto
export const eliminarProducto = (id) => async (dispatch) => {
  dispatch({ type: 'ELIMINAR_PRODUCTO_REQUEST' });

  try {
    await axios.delete(`http://localhost:3200/productos/${id}`);
    dispatch({
      type: 'ELIMINAR_PRODUCTO_EXITO',
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: 'ELIMINAR_PRODUCTO_ERROR',
      payload: error.message,
    });
  }
};
