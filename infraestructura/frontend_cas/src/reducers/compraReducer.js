const initialState = {
    compras: [],
    loading: false,
    error: null,
  };
  
  // Reducer para manejar las compras
  const compraReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OBTENER_COMPRAS_REQUEST':
        return { ...state, loading: true };
      case 'OBTENER_COMPRAS_EXITO':
        return { ...state, loading: false, compras: action.payload };
      case 'OBTENER_COMPRAS_ERROR':
        return { ...state, loading: false, error: action.payload };
  
      case 'CREAR_COMPRA_REQUEST':
        return { ...state, loading: true };
      case 'CREAR_COMPRA_EXITO':
        return { ...state, loading: false, compras: [...state.compras, action.payload] };
      case 'CREAR_COMPRA_ERROR':
        return { ...state, loading: false, error: action.payload };
  
      case 'ELIMINAR_COMPRA_REQUEST':
        return { ...state, loading: true };
      case 'ELIMINAR_COMPRA_EXITO':
        return { ...state, loading: false, compras: state.compras.filter(compra => compra.id !== action.payload) };
      case 'ELIMINAR_COMPRA_ERROR':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default compraReducer;
  