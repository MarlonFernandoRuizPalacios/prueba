const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mostrar todos los usuarios
const MostrarUsuarios = async (req = request, res = response) => {
    try {
        const usuarios = await prisma.users.findMany();
        res.status(200).json({ usuarios });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    } finally {
        await prisma.$disconnect();
    }
};

// Agregar un nuevo usuario
const AgregarUsuario = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {
        const nuevoUsuario = await prisma.users.create({
            data: {
                email,
                password, // Asumimos que la contraseña ya está en formato adecuado.
            },
        });
        res.status(201).json({ usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al agregar el usuario:', error);
        res.status(500).json({ error: 'Error al agregar el usuario' });
    } finally {
        await prisma.$disconnect();
    }
};

// Mostrar un usuario por ID
const MostrarUsuario = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const usuario = await prisma.users.findUnique({
            where: { id: Number(id) },
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ usuario });
    } catch (error) {
        console.error('Error al mostrar el usuario:', error);
        res.status(500).json({ error: 'Error al mostrar el usuario' });
    } finally {
        await prisma.$disconnect();
    }
};

// Editar un usuario por ID
const EditarUsuario = async (req = request, res = response) => {
    const { id } = req.params;
    const { email, password } = req.body;

    try {
        const usuarioActualizado = await prisma.users.update({
            where: { id: Number(id) },
            data: { email, password },
        });
        res.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.error('Error al editar el usuario:', error);
        res.status(500).json({ error: 'Error al editar el usuario' });
    } finally {
        await prisma.$disconnect();
    }
};

// Eliminar un usuario por ID
const EliminarUsuario = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const usuarioEliminado = await prisma.users.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ usuario: usuarioEliminado });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    AgregarUsuario,
    MostrarUsuarios,
    MostrarUsuario,
    EditarUsuario,
    EliminarUsuario,
};
