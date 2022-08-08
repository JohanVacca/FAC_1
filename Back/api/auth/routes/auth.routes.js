'use strict';

const express = require('express');
const AuthController = require('../controller/auth.controller');
const endpoint = '/auth';

var api = express.Router();

api.post(`${endpoint}/register`, AuthController.objectValidation, AuthController.register);
api.post(`${endpoint}/login`, AuthController.loginValidation, AuthController.login);
api.get(`${endpoint}/getRole`, AuthController.getRoleByToken);


module.exports = api;
