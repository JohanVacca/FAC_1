'use strict';

const express = require('express');
const UserController = require('../controller/user.controller');
const endpoint = '/user';
const mdAuth = require('../../auth/jwt/jwt.middleware');

var api = express.Router();

api.get(`${endpoint}/getCommanders`, [mdAuth.ensureAuth],UserController.getCommanders);
api.get(`${endpoint}/getInvestigators`, [mdAuth.ensureAuth],UserController.getInvestigators);
api.get(`${endpoint}/getInvestigators`, [mdAuth.ensureAuth],UserController.getInvestigators);
api.get(`${endpoint}/getAllFilterUnidad`, UserController.getAllFilterUnidad);

api.get(endpoint, [mdAuth.ensureAuth],UserController.getAll);

api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, UserController.idAndOthersValidations ], UserController.getById);
api.post(endpoint, UserController.objectValidation, UserController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, UserController.idAndOthersValidations], UserController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, UserController.idAndOthersValidations ], UserController.remove);


api.get(`${endpoint}/Correo/:id`, UserController.getForCorreo);

module.exports = api;
