'use strict';

const express = require('express');
const UnidadController = require('../controller/unidad.controller');
const endpoint = '/unidad';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],UnidadController.getAll);
api.post(endpoint, UnidadController.create);
api.delete(endpoint, UnidadController.remove);

module.exports = api;
