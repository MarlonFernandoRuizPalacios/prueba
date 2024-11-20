const initialState = {
    usuarios: [],
    cargando: false,
    error: null,
  };
  
  export const usuariosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OBTENER_USUARIOS_REQUEST':
      case 'CREAR_USUARIO_REQUEST':
        return { ...state, cargando: true, error: null };
  
      case 'OBTENER_USUARIOS_EXITO':
        return { ...state, cargando: false, usuarios: action.payload };
  
      case 'CREAR_USUARIO_EXITO':
        return { 
          ...state, 
          cargando: false, 
          usuarios: [...state.usuarios, action.payload] // Añadimos el nuevo usuario a la lista
        };
  
      case 'OBTENER_USUARIOS_ERROR':
      case 'CREAR_USUARIO_ERROR':
        return { ...state, cargando: false, error: action.payload };
  
      default:
        return state;
    }
  };
  