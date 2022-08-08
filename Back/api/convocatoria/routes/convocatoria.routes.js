'use strict';

const express = require('express');
const ConvocatoriaController = require('../controller/Convocatoria.controller');
const endpoint = '/Convocatoria';
const mdAuth = require('../../auth/jwt/jwt.middleware');

var api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],ConvocatoriaController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, ConvocatoriaController.idAndOthersValidations ], ConvocatoriaController.getById);

//[mdAuth.ensureAuth],
api.post(endpoint, ConvocatoriaController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, ConvocatoriaController.idAndOthersValidations], ConvocatoriaController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, ConvocatoriaController.idAndOthersValidations ], ConvocatoriaController.remove);

module.exports = api;
