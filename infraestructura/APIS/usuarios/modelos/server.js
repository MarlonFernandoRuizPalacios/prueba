const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routesUsuarios = require('../rutas/rutas.usuarios'); // Ajusta la ruta si es necesario

dotenv.config(); // Cargar las variables de entorno

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3100;  // Usa el puerto de .env si está disponible, o 5000 por defecto
        this.routes();
        this.middlewares();
    }

    // Configuración de rutas
    routes() {
        this.app.use('/usuarios', routesUsuarios);  // Rutas de usuarios
    }

    // Middlewares
    middlewares() {
        this.app.use(cors());  // Habilitar CORS
        this.app.use(express.json());  // Habilitar el parsing de JSON en las peticiones
    }

    // Iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
