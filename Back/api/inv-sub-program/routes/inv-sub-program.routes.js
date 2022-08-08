'use strict';

const express = require('express');
const InvSubProgramController = require('../controller/inv-sub-program.controller');
const endpoint = '/inv-sub-program';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvSubProgramController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvSubProgramController.idValidation ], InvSubProgramController.getById);
api.post(endpoint, InvSubProgramController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvSubProgramController.idValidation], InvSubProgramController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvSubProgramController.idValidation ], InvSubProgramController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvSubProgramController.getIdConv);

module.exports = api;
