'use strict';

const express = require('express');
const ProductTypeController = require('../controller/product-type.controller');
const endpoint = '/product-type';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],ProductTypeController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProductTypeController.idValidation ], ProductTypeController.getById);
api.post(endpoint, ProductTypeController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProductTypeController.idValidation], ProductTypeController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, ProductTypeController.idValidation ], ProductTypeController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],ProductTypeController.getIdConv);

module.exports = api;
