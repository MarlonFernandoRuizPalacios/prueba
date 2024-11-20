const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mostrar todas las compras
const MostrarCompras = async (req = request, res = response) => {
    try {
        const compras = await prisma.compras.findMany();
        res.status(200).json({ compras });
    } catch (error) {
        console.error('Error al obtener las compras:', error);
        res.status(500).json({ error: 'Error al obtener las compras' });
    } finally {
        await prisma.$disconnect();
    }
};

// Agregar una nueva compra
const AgregarCompra = async (req = request, res = response) => {
    const { cantidad, total } = req.body;

    try {
        const nuevaCompra = await prisma.compras.create({
            data: {
                cantidad,
                total,
            },
        });
        res.status(201).json({ compra: nuevaCompra });
    } catch (error) {
        console.error('Error al agregar la compra:', error);
        res.status(500).json({ error: 'Error al agregar la compra' });
    } finally {
        await prisma.$disconnect();
    }
};

// Mostrar una compra por ID
const MostrarCompra = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const compra = await prisma.compras.findUnique({
            where: { id: Number(id) },
        });

        if (!compra) {
            return res.status(404).json({ error: 'Compra no encontrada' });
        }

        res.status(200).json({ compra });
    } catch (error) {
        console.error('Error al mostrar la compra:', error);
        res.status(500).json({ error: 'Error al mostrar la compra' });
    } finally {
        await prisma.$disconnect();
    }
};

// Editar una compra por ID
const EditarCompra = async (req = request, res = response) => {
    const { id } = req.params;
    const { cantidad, total } = req.body;

    try {
        const compraActualizada = await prisma.compras.update({
            where: { id: Number(id) },
            data: { cantidad, total },
        });
        res.status(200).json({ compra: compraActualizada });
    } catch (error) {
        console.error('Error al editar la compra:', error);
        res.status(500).json({ error: 'Error al editar la compra' });
    } finally {
        await prisma.$disconnect();
    }
};

// Eliminar una compra por ID
const EliminarCompra = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const compraEliminada = await prisma.compras.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ compra: compraEliminada });
    } catch (error) {
        console.error('Error al eliminar la compra:', error);
        res.status(500).json({ error: 'Error al eliminar la compra' });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    MostrarCompras,
    AgregarCompra,
    MostrarCompra,
    EditarCompra,
    EliminarCompra,
};
