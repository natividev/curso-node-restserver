const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apiKey } = req.query;

  res.json({
    msg: "get API - Controlador",
    q,
    nombre,
    apiKey
  });
}


const usuariosPost = (req = request, res = response) => {
  // extraer body
  const { nombre, edad } = req.body;


  res.json({
    msg: "Post API - Controlador",

  });
}

const usuariosPut = (req, res = response) => {

  const { id } = req.params;

  res.json({
    msg: "Put API - Controlador",
    id
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - Controlador",
  });
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
}