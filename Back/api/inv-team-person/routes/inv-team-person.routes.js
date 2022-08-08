'use strict';

const express = require('express');
const InvTeamPersonController = require('../controller/inv-team-person.controller');
const endpoint = '/inv-team-person';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvTeamPersonController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTeamPersonController.idValidation ], InvTeamPersonController.getById);
api.post(endpoint, InvTeamPersonController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTeamPersonController.idValidation], InvTeamPersonController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvTeamPersonController.idValidation ], InvTeamPersonController.remove);

module.exports = api;
