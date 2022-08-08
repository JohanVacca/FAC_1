'use strict';

const express = require('express');
const FirmaController = require("../controller/Firma.controller");
const fileUpload = require("express-fileupload");
const ProyectController = require("../../project/controller/project.controller");
const endpointRubro = '/ProjectRubro';
const endpoint = '/firma';

let api = express.Router();

api.patch(`${endpoint}`, FirmaController.update);
api.get(`${endpoint}/:id`, FirmaController.getById);
api.delete(`${endpoint}/:id`, FirmaController.remove);

api.use(fileUpload());
api.post(`${endpoint}`, FirmaController.create);
// update file rubro
api.post(`${endpointRubro}/:id`, ProyectController.updateRubro);
api.delete(`${endpointRubro}`, ProyectController.removeRubro);

module.exports = api;
