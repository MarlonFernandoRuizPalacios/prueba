const { Router } = require('express');
const router = Router();

const {
    AgregarUsuario,
    MostrarUsuarios,
    MostrarUsuario,
    EditarUsuario,
    EliminarUsuario,
} = require('../controladores/controladores.usuarios');

// Obtener todos los usuarios
router.get('/', MostrarUsuarios);

// Crear un usuario
router.post('/', AgregarUsuario);

// Obtener un usuario por ID
router.get('/:id', MostrarUsuario);

// Editar un usuario por ID
router.put('/:id', EditarUsuario);

// Eliminar un usuario por ID
router.delete('/:id', EliminarUsuario);

module.exports = router;