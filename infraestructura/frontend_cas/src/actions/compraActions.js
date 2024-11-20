import axios from 'axios';

// Acción para obtener todas las compras
export const obtenerCompras = () => async (dispatch) => {
  dispatch({ type: 'OBTENER_COMPRAS_REQUEST' });

  try {
    const response = await axios.get('http://localhost:3300/compras');
    dispatch({
      type: 'OBTENER_COMPRAS_EXITO',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'OBTENER_COMPRAS_ERROR',
      payload: error.message,
    });
  }
};

// Acción para crear una compra
export const crearCompra = (compra) => async (dispatch) => {
  dispatch({ type: 'CREAR_COMPRA_REQUEST' });

  try {
    const response = await axios.post('http://localhost:3300/compras', compra);
    dispatch({
      type: 'CREAR_COMPRA_EXITO',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CREAR_COMPRA_ERROR',
      payload: error.message,
    });
  }
};

// Acción para eliminar una compra
export const eliminarCompra = (id) => async (dispatch) => {
  dispatch({ type: 'ELIMINAR_COMPRA_REQUEST' });

  try {
    await axios.delete(`http://localhost:3300/compras/${id}`);
    dispatch({
      type: 'ELIMINAR_COMPRA_EXITO',
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: 'ELIMINAR_COMPRA_ERROR',
      payload: error.message,
    });
  }
};
