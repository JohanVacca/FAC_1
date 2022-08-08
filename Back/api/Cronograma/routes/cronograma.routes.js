"use strict";

const express = require("express");
const CronogramaController = require("../controller/cronograma.controller");
const endpoint = "/cronograma";
const mdAuth = require("../../auth/jwt/jwt.middleware");

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth], CronogramaController.getAll);
api.get(
  `${endpoint}/:id`,
  [mdAuth.ensureAuth, CronogramaController.idValidation],
  CronogramaController.getById
);
api.post(endpoint, CronogramaController.create);
api.patch(
  `${endpoint}/:id`,
  [mdAuth.ensureAuth, CronogramaController.idValidation],
  CronogramaController.update
);

api.patch(
  `${endpoint}/project/:id`,
  [mdAuth.ensureAuth, CronogramaController.idValidation],
  CronogramaController.updatebyproject
);

api.delete(
  `${endpoint}/:id`,
  [mdAuth.ensureAuth, CronogramaController.idValidation],
  CronogramaController.remove
);

api.get(
  `${endpoint}/getIdConv/:id`,
  [mdAuth.ensureAuth],
  CronogramaController.getIdConv
);
api.get(
  `${endpoint}/getIdProject/:id`,
  [mdAuth.ensureAuth],
  CronogramaController.getIdProject);

module.exports = api;
