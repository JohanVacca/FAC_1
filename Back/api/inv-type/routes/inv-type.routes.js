'use strict';

const express = require('express');
const InvTypeController = require('../controller/inv-type.controller');
const endpoint = '/inv-type';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvTypeController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTypeController.idValidation ], InvTypeController.getById);
api.post(endpoint, InvTypeController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTypeController.idValidation], InvTypeController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTypeController.idValidation ], InvTypeController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvTypeController.getIdConv);

module.exports = api;
