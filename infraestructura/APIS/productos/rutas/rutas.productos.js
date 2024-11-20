const { Router } = require('express');
const router = Router();

const {
    MostrarProductos,
    AgregarProducto,
    MostrarProducto,
    EditarProducto,
    EliminarProducto,
} = require('../controladores/controladores.productos');


// Obtener todos los productos
router.get('/', MostrarProductos);

// Crear un nuevo producto
router.post('/', AgregarProducto);

// Obtener un producto por ID
router.get('/:id', MostrarProducto);

// Editar un producto por ID
router.put('/:id', EditarProducto);

// Eliminar un producto por ID
router.delete('/:id', EliminarProducto);

module.exports = router;
