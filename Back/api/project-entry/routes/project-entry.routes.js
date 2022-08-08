'use strict';

const express = require('express');
const ProjectEntryController = require('../controller/project-entry.controller');
const endpoint = '/project-entry';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],ProjectEntryController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProjectEntryController.idValidation ], ProjectEntryController.getById);
api.post(endpoint, ProjectEntryController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProjectEntryController.idValidation], ProjectEntryController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProjectEntryController.idValidation ], ProjectEntryController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],ProjectEntryController.getIdConv);

module.exports = api;
