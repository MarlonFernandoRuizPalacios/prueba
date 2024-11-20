const { PrismaClient } = require('@prisma/client');
const { response, request } = require('express');  // Importación explícita de `request` y `response`
const prisma = new PrismaClient();

// Mostrar todos los productos
const MostrarProductos = async (req = request, res = response) => {
    try {
        const productos = await prisma.producto.findMany();
        res.status(200).json({ productos });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    } finally {
        await prisma.$disconnect();
    }
};

// Agregar un nuevo producto
const AgregarProducto = async (req = request, res = response) => {
    const { nombre, descripcion, precio, cantidad } = req.body;

    try {
        const nuevoProducto = await prisma.producto.create({
            data: {
                nombre,
                descripcion,
                precio,
                cantidad,
            },
        });
        res.status(201).json({ producto: nuevoProducto });
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        res.status(500).json({ error: 'Error al agregar el producto' });
    } finally {
        await prisma.$disconnect();
    }
};

// Mostrar un producto por ID
const MostrarProducto = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const producto = await prisma.producto.findUnique({
            where: { id: Number(id) },
        });

        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json({ producto });
    } catch (error) {
        console.error('Error al mostrar el producto:', error);
        res.status(500).json({ error: 'Error al mostrar el producto' });
    } finally {
        await prisma.$disconnect();
    }
};

// Editar un producto por ID
const EditarProducto = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad } = req.body;

    try {
        const productoActualizado = await prisma.producto.update({
            where: { id: Number(id) },
            data: { nombre, descripcion, precio, cantidad },
        });
        res.status(200).json({ producto: productoActualizado });
    } catch (error) {
        console.error('Error al editar el producto:', error);
        res.status(500).json({ error: 'Error al editar el producto' });
    } finally {
        await prisma.$disconnect();
    }
};

// Eliminar un producto por ID
const EliminarProducto = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const productoEliminado = await prisma.producto.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ producto: productoEliminado });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    MostrarProductos,
    AgregarProducto,
    MostrarProducto,
    EditarProducto,
    EliminarProducto,
};

