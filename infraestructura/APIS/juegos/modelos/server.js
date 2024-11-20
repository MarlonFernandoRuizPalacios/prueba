const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config();


class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3200;

        this.paths = {
            usuarios: '/juegos'
        };

        // Inicializar middlewares y rutas
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json()); 
    }

    routes() {
        this.app.use(this.path, require('../rutas/rutas.juego')); 
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }

}

module.exports = Server;