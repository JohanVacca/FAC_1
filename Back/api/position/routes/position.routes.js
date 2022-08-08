'use strict';

const express = require('express');
const PositionController = require('../controller/position.controller');
const endpoint = '/position';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],PositionController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, PositionController.idValidation ], PositionController.getById);
api.post(endpoint, mdAuth.ensureAuth, PositionController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, PositionController.idValidation], PositionController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, PositionController.idValidation ], PositionController.remove);

module.exports = api;
