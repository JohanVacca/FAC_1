'use strict';

const express = require('express');
const GroupController = require('../controller/group.controller');
const endpoint = '/group';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],GroupController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupController.idValidation ], GroupController.getById);
api.post(endpoint, GroupController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupController.idValidation], GroupController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupController.idValidation ], GroupController.remove);

module.exports = api;
