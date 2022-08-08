'use strict';

const express = require('express');
const InvProgramController = require('../controller/inv-program.controller');
const endpoint = '/inv-program';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvProgramController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvProgramController.idValidation ], InvProgramController.getById);
api.post(endpoint, InvProgramController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvProgramController.idValidation], InvProgramController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvProgramController.idValidation ], InvProgramController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvProgramController.getIdConv);

module.exports = api;
