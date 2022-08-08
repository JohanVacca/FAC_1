'use strict';

const express = require('express');
const ExpectedProductController = require('../controller/expected-product.controller');
const endpoint = '/expected-product';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],ExpectedProductController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, ExpectedProductController.idValidation ], ExpectedProductController.getById);
api.post(endpoint, ExpectedProductController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, ExpectedProductController.idValidation], ExpectedProductController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, ExpectedProductController.idValidation ], ExpectedProductController.remove);

module.exports = api;
