'use strict';

const express = require('express');
const RoleController = require('../controller/role.controller');
const endpoint = '/role';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],RoleController.getAll);
api.get(`${endpoint}/getDefaultRole`, RoleController.getDefaultRole);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, RoleController.idValidation ], RoleController.getById);
api.post(endpoint, RoleController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, RoleController.idValidation], RoleController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, RoleController.idValidation ], RoleController.remove);

module.exports = api;
