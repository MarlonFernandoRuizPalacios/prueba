import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerUsuarios, crearUsuario } from '../actions/usuarioActions';

const Usuarios = () => {
  const dispatch = useDispatch();
  const { usuarios, cargando, error } = useSelector((state) => state.usuarios);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Cargar usuarios al montar el componente
  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  // Manejador para crear un usuario
  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(crearUsuario(email, password));
    setEmail(''); // Limpiar campos
    setPassword('');
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>

      {/* Formulario para crear un usuario */}
      <form onSubmit={handleCreateUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear Usuario</button>
      </form>


      {cargando ? (
        <div>Cargando usuarios...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Usuarios;
