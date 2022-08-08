'use strict';

const express = require('express');
const HonorarioController = require('../controller/honorario.controller');
const endpoint = '/Honorario';
const mdAuth = require('../../auth/jwt/jwt.middleware');

var api = express.Router();

api.get(endpoint,HonorarioController.getAll);

api.get(`${endpoint}/conteo/:id`, HonorarioController.conteo);

api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, HonorarioController.idAndOthersValidations ], HonorarioController.getById);

//[mdAuth.ensureAuth],
api.post(endpoint, HonorarioController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, HonorarioController.idAndOthersValidations], HonorarioController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, HonorarioController.idAndOthersValidations ], HonorarioController.remove);

module.exports = api;
