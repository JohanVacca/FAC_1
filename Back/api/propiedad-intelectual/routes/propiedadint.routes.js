'use strict';

const express = require('express');
const PropiedadintController = require('../controller/propiedadint.controller');
const endpoint = '/propiedadint';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],PropiedadintController.getAll);
api.post(endpoint,[mdAuth.ensureAuth], PropiedadintController.create);
api.delete(endpoint,[mdAuth.ensureAuth], PropiedadintController.remove);


//CodaltecJV
//api.get('/necesidad/:id', [mdAuth.ensureAuth], PropiedadintController.obtenerNecesidadById) //Obtener 1 necesidad
//api.patch('/necesidad/:id', [mdAuth.ensureAuth], PropiedadintController.actualizarNecesidad)  //Actualizar 1 necesidad


module.exports = api;