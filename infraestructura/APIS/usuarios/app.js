require('dotenv').config();
const Server = require('./modelos/server');  // Asegúrate de que la ruta sea correcta

const server = new Server();  // Instancia de la clase Server

server.listen(); 