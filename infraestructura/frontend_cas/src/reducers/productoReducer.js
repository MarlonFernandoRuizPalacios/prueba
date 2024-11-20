const initialState = {
    productos: [],
    cargando: false,
    error: null,
  };
  
  const productoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OBTENER_PRODUCTOS_REQUEST':
        return { ...state, cargando: true };
      case 'OBTENER_PRODUCTOS_EXITO':
        return { ...state, cargando: false, productos: action.payload };
      case 'OBTENER_PRODUCTOS_ERROR':
        return { ...state, cargando: false, error: action.payload };
      
      case 'AGREGAR_PRODUCTO_REQUEST':
        return { ...state, cargando: true };
      case 'AGREGAR_PRODUCTO_EXITO':
        return { ...state, cargando: false, productos: [...state.productos, action.payload] };
      case 'AGREGAR_PRODUCTO_ERROR':
        return { ...state, cargando: false, error: action.payload };
      
      case 'EDITAR_PRODUCTO_REQUEST':
        return { ...state, cargando: true };
      case 'EDITAR_PRODUCTO_EXITO':
        return {
          ...state,
          cargando: false,
          productos: state.productos.map((producto) =>
            producto.id === action.payload.id ? action.payload : producto
          ),
        };
      case 'EDITAR_PRODUCTO_ERROR':
        return { ...state, cargando: false, error: action.payload };
      
      case 'ELIMINAR_PRODUCTO_REQUEST':
        return { ...state, cargando: true };
      case 'ELIMINAR_PRODUCTO_EXITO':
        return {
          ...state,
          cargando: false,
          productos: state.productos.filter((producto) => producto.id !== action.payload),
        };
      case 'ELIMINAR_PRODUCTO_ERROR':
        return { ...state, cargando: false, error: action.payload };
      
      default:
        return state;
    }
  };
  
  export default productoReducer;
  