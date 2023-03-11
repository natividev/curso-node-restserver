const express = require('express');
const cors = require('cors');

const app = express()

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = '/api/usuarios';

    // Middlewares, funcioes que le añadiras otras funciones a mi webServer, es como una funcion que siempre se ejecute cuando nosotros levantamos nuestro servidor
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {

    //CORS
    this.app.use(cors());

    // middlewares, Lectura y Parseo del body
    this.app.use(express.json());


    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {

    this.app.use(this.usuariosRoutePath, require('../routers/usuarios'));

    //this.app.use(this.usuariosRoutePath, require('../routers/clientes'));



  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    })
  }

}

module.exports = Server;