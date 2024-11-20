const express = require('express');
const { obtenerJuegos, realizarApuesta, crearJuego } = require('../controladores/controladores.juego');

const router = express.Router();

// Obtener todos los juegos
router.get('/juegos', obtenerJuegos);

// Crear un nuevo juego
router.post('/juegos', crearJuego);

// Realizar una apuesta
router.post('/apuestas', realizarApuesta);

module.exports = router;

