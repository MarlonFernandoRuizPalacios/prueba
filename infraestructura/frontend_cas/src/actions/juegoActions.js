import axios from 'axios';

// Acción para obtener todos los juegos
export const obtenerJuegos = () => async (dispatch) => {
    dispatch({ type: 'OBTENER_JUEGOS_REQUEST' });
  
    try {
      const response = await axios.get('http://localhost:3200/juegos');
      dispatch({
        type: 'OBTENER_JUEGOS_EXITO',
        payload: response.data, // Asegúrate de que los juegos se envíen correctamente en la respuesta
      });
    } catch (error) {
      dispatch({
        type: 'OBTENER_JUEGOS_ERROR',
        payload: error.message,
      });
    }
  };

// Acción para crear un nuevo juego
export const crearJuego = (juegoData) => async (dispatch) => {
  dispatch({ type: 'CREAR_JUEGO_REQUEST' });

  try {
    const response = await axios.post('http://localhost:3100/juegos', juegoData);
    dispatch({
      type: 'CREAR_JUEGO_EXITO',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CREAR_JUEGO_ERROR',
      payload: error.message,
    });
  }
};

// Acción para realizar una apuesta
export const realizarApuesta = (apuestaData) => async (dispatch) => {
  dispatch({ type: 'REALIZAR_APUESTA_REQUEST' });

  try {
    const response = await axios.post('http://localhost:3100/apuestas', apuestaData);
    dispatch({
      type: 'REALIZAR_APUESTA_EXITO',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'REALIZAR_APUESTA_ERROR',
      payload: error.message,
    });
  }
};
