'use strict';

const express = require('express');
const NecesidadController = require('../controller/necesidad.controller');
const endpoint = '/necesidad';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],NecesidadController.getAll);
api.post(endpoint,[mdAuth.ensureAuth], NecesidadController.create);
api.delete(endpoint,[mdAuth.ensureAuth], NecesidadController.remove);


//CodaltecJV
api.get('/necesidad/:id', [mdAuth.ensureAuth], NecesidadController.obtenerNecesidadById) //Obtener 1 necesidad
api.patch('/necesidad/:id', [mdAuth.ensureAuth], NecesidadController.actualizarNecesidad)  //Actualizar 1 necesidad


module.exports = api;
