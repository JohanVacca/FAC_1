'use strict';

const express = require('express');
const FollowingController = require('../controller/following.controller');
const endpoint = '/following';
const mdAuth = require('../../auth/jwt/jwt.middleware');

let api = express.Router();

api.get(endpoint, [mdAuth.ensureAuth],FollowingController.getAll);
api.get(`${endpoint}/generatePdf`, [mdAuth.ensureAuth],FollowingController.getAllInPdf);
api.get(`${endpoint}/:id`, [ mdAuth.ensureAuth, FollowingController.idValidation ], FollowingController.getById);
api.post(endpoint, mdAuth.ensureAuth, FollowingController.create);
api.get(`${endpoint}/:id/generatePartialReportPdf`, [ mdAuth.ensureAuth, FollowingController.idValidation ], FollowingController.getPartialReportInPdf);
api.get(`${endpoint}/:id/generateServicesPdf`, [ mdAuth.ensureAuth, FollowingController.idValidation ], FollowingController.getServicesPdf);
api.get(`${endpoint}/:id/generatePdf`, [ mdAuth.ensureAuth, FollowingController.idValidation ], FollowingController.getByIdInPdf);
api.patch(`${endpoint}/:id`, [ mdAuth.ensureAuth, FollowingController.idValidation], FollowingController.update);
api.delete(`${endpoint}/:id`, [ mdAuth.ensureAuth, FollowingController.idValidation ], FollowingController.remove);
api.post(`${endpoint}/uploadFile/:id`,mdAuth.ensureAuth,  FollowingController.uploadFile);

module.exports = api;

