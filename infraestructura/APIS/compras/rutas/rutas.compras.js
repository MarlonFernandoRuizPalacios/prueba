const { Router } = require('express');
const router = Router();

const {
    MostrarCompras,
    AgregarCompra,
    MostrarCompra,
    EditarCompra,
    EliminarCompra,
} = require('../controladores/controladores.compras');


// Obtener todas las compras
router.get('/', MostrarCompras);

// Crear una nueva compra
router.post('/', AgregarCompra);

// Obtener una compra por ID
router.get('/:id', MostrarCompra);

// Editar una compra por ID
router.put('/:id', EditarCompra);

// Eliminar una compra por ID
router.delete('/:id', EliminarCompra);

module.exports = router;
