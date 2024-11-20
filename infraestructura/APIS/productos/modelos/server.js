const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routesProductos = require('../rutas/rutas.productos'); 

dotenv.config(); // Cargar las variables de entorno

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3300;  
        this.routes();
        this.middlewares();
    }

    // Configuración de rutas
    routes() {
        this.app.use('/productos', routesProductos);  
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
