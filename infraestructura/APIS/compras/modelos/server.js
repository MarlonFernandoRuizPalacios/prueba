const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routesCompras = require('../rutas/rutas.compras'); 

dotenv.config(); // Cargar las variables de entorno

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3400;  
        this.routes();
        this.middlewares();
    }

    // Configuración de rutas
    routes() {
        this.app.use('/compras', routesCompras);  
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