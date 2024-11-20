import axios from 'axios';

// Acción para obtener usuarios
export const obtenerUsuarios = () => async (dispatch) => {
  dispatch({ type: 'OBTENER_USUARIOS_REQUEST' });

  try {
    const response = await axios.get('http://localhost:3000/usuarios');
    dispatch({
      type: 'OBTENER_USUARIOS_EXITO',
      payload: response.data.users,
    });
  } catch (error) {
    dispatch({
      type: 'OBTENER_USUARIOS_ERROR',
      payload: error.response?.data?.error || error.message,
    });
  }
};

// Acción para crear un usuario
export const crearUsuario = (email, password) => async (dispatch) => {
  dispatch({ type: 'CREAR_USUARIO_REQUEST' });

  try {
    const response = await axios.post('http://localhost:3000/usuarios', { email, password });
    dispatch({
      type: 'CREAR_USUARIO_EXITO',
      payload: response.data.result, // La respuesta depende de lo que envía el backend
    });
  } catch (error) {
    dispatch({
      type: 'CREAR_USUARIO_ERROR',
      payload: error.response?.data?.error || error.message,
    });
  }
};
