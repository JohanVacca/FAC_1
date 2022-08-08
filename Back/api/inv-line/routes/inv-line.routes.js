'use strict';

const express = require('express');
const InvLineController = require('../controller/inv-line.controller');
const endpoint = '/inv-line';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvLineController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvLineController.idValidation ], InvLineController.getById);
api.post(endpoint, InvLineController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvLineController.idValidation], InvLineController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvLineController.idValidation ], InvLineController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvLineController.getIdConv);

module.exports = api;
