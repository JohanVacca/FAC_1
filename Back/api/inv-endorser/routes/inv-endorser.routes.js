'use strict';

const express = require('express');
const InvEndorserController = require('../controller/inv-endorser.controller');
const endpoint = '/inv-endorser';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvEndorserController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvEndorserController.idValidation ], InvEndorserController.getById);
api.post(endpoint, InvEndorserController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvEndorserController.idValidation], InvEndorserController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, InvEndorserController.idValidation ], InvEndorserController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],InvEndorserController.getIdConv);

module.exports = api;
