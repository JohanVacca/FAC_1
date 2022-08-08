'use strict';

const express = require('express');
const InvTeamPersonPositionController = require('../controller/inv-team-person-position.controller');
const endpoint = '/inv-team-person-position';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, InvTeamPersonPositionController.getAll);
api.get(`${endpoint}/:id`, [ InvTeamPersonPositionController.idValidation ], InvTeamPersonPositionController.getById);
api.post(endpoint, InvTeamPersonPositionController.create);
api.patch(`${endpoint}/:id`, [ InvTeamPersonPositionController.idValidation], InvTeamPersonPositionController.update);
api.delete(`${endpoint}/:id`, [  InvTeamPersonPositionController.idValidation ], InvTeamPersonPositionController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvTeamPersonPositionController.getIdConv);

module.exports = api;
