'use strict';

const express = require('express');
const GroupCategoryController = require('../controller/group-category.controller');
const endpoint = '/group-category';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],GroupCategoryController.getAll);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupCategoryController.idValidation ], GroupCategoryController.getById);
api.post(endpoint, GroupCategoryController.create);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupCategoryController.idValidation], GroupCategoryController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, GroupCategoryController.idValidation ], GroupCategoryController.remove);

api.get(`${endpoint}/getIdConv/:id`, [mdAuth.ensureAuth],GroupCategoryController.getIdConv);

module.exports = api;
