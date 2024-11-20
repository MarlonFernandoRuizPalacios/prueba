import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerUsuarios, crearUsuario } from '../actions/usuarioActions';

const Usuarios = () => {
  const dispatch = useDispatch();
  const { usuarios, cargando, error } = useSelector((state) => state.usuarios);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(crearUsuario(email, password));
    setEmail(''); // Limpiamos los campos después de crear
    setPassword('');
  };

  if (cargando) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!usuarios || usuarios.length === 0) return <div>No hay usuarios disponibles.</div>;

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      
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

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
