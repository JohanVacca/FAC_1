'use strict';

const express = require('express');
const ProyectController = require('../controller/project.controller');
const endpoint = '/Project';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth], ProyectController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth ], ProyectController.getById);
api.post(endpoint, ProyectController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth], ProyectController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth ], ProyectController.remove);
api.get(`${endpoint}/getIdConv/:id`, ProyectController.getIdConv);

module.exports = api;
