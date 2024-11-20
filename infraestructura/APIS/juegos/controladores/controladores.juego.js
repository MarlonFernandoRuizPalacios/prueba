const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los juegos
const obtenerJuegos = async (req, res) => {
  try {
    const juegos = await prisma.juego.findMany();

    if (!juegos || juegos.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron juegos.' });
    }

    res.status(200).json(juegos); // Asegúrate de que devuelves solo el array de juegos
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los juegos.', detalles: error.message });
  }
};

// Crear un nuevo juego
const crearJuego = async (req, res) => {
  try {
    const { nombre, tipo, apuestaMin, apuestaMax, tasaPago } = req.body;

    // Validación de datos de entrada
    if (!nombre || !tipo || !apuestaMin || !apuestaMax || !tasaPago) {
      return res.status(400).json({ error: 'Faltan datos necesarios para crear el juego.' });
    }

    if (apuestaMin <= 0 || apuestaMax <= 0 || tasaPago <= 0) {
      return res.status(400).json({ error: 'Los valores de las apuestas y tasa de pago deben ser positivos.' });
    }

    // Creación del nuevo juego
    const nuevoJuego = await prisma.juego.create({
      data: { nombre, tipo, apuestaMin, apuestaMax, tasaPago },
    });

    res.status(201).json({ mensaje: 'Juego creado con éxito', juego: nuevoJuego });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el juego.', detalles: error.message });
  }
};

// Realizar una apuesta en un juego
const realizarApuesta = async (req, res) => {
  try {
    const { juegoId, monto } = req.body;

    // Validación de datos
    if (!juegoId || !monto) {
      return res.status(400).json({ error: 'Faltan datos en la solicitud.' });
    }

    // Obtener el juego
    const juego = await prisma.juego.findUnique({ where: { id: juegoId } });
    if (!juego) {
      return res.status(404).json({ error: 'Juego no encontrado.' });
    }

    // Validar que el monto esté dentro de los límites
    if (monto < juego.apuestaMin || monto > juego.apuestaMax) {
      return res.status(400).json({ error: `El monto debe estar entre ${juego.apuestaMin} y ${juego.apuestaMax}.` });
    }

    // Simulación del resultado de la apuesta
    const gana = Math.random() < 0.5; // 50% de probabilidad de ganar
    const pago = gana ? monto * juego.tasaPago : 0;

    // Crear la apuesta
    const apuesta = await prisma.apuesta.create({
      data: {
        juegoId,
        monto,
        resultado: gana,
        pago,
      },
    });

    res.status(201).json({
      mensaje: gana ? '¡Ganaste!' : 'Perdiste',
      apuesta,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al realizar la apuesta.', detalles: error.message });
  }
};

module.exports = {
  obtenerJuegos,
  crearJuego,
  realizarApuesta,
};
