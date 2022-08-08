'use strict';

const express = require('express');
const InvCenterController = require('../controller/inv-center.controller');
const endpoint = '/inv-center';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],InvCenterController.getAll);
api.post(endpoint, InvCenterController.create);
api.post(`${endpoint}/:id`, InvCenterController.edit);
api.delete(endpoint, InvCenterController.remove);

module.exports = api;
