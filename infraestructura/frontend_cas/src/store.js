import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Importamos thunk como export nombrado
import { usuariosReducer } from './reducers/usuarioReducer'; // Importación nombrada para el reducer
import  productoReducer  from './reducers/productoReducer';
import  compraReducer from './reducers/compraReducer';

// Combinación de reducers
const rootReducer = combineReducers({
  usuarios: usuariosReducer,
  productos: productoReducer,
  compra: compraReducer,
});

// Integración con Redux DevTools y aplicación de middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
