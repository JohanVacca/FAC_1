'use strict';

var RoleDao = require('../../role/dao/role.dao');
var ConvocatoriaDao = require('../dao/convocatoria.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * Método para traer los usuarios ACTIVOS
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    ConvocatoriaDao['getAll'](query)
        .then(async convocatorias =>{
            res.status(200).json({"convocatorias": convocatorias});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * Método para traer un usuario
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let convocatoriaId = req.params.id;

        ConvocatoriaDao['getById'](convocatoriaId)
            .then(async convocatoria =>{
                if(!convocatoria){
                    res.status(404).json({message: 'convocatoria not found.'});
                }else {
                    res.status(200).json({"convocatoria": convocatoria});
                }
            })
            .catch(err => {
                res.status(500).json({message: err});
            });
    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}


/**
 * Método para crear un usuario
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let convocatoria = req.body;

        bcrypt.hash(convocatoria.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                convocatoria.password = hash;
                let convocatoriaObj = JSON.parse(JSON.stringify(convocatoria));

                ConvocatoriaDao['create'](convocatoriaObj)
                    .then(async _convocatoria =>{
                        res.status(201).json({"convocatoria": _convocatoria});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "convocatoria already exists."});
                    }{
                        res.status(500).json({message: err});
                    }
                });
            }
        });


    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}


/**
 * Método para actualizar un usuario
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let convocatoria = req.body;
        let convocatoriaObj = JSON.parse(JSON.stringify(convocatoria));
        let convocatoriaId = req.params.id;

        ConvocatoriaDao['update'](convocatoriaId, convocatoriaObj)
            .then(async _convocatoria =>{
                if(!_convocatoria){
                    res.status(404).json({message: 'convocatoria not found.'});
                }else {
                    res.status(200).json({"convocatoria": _convocatoria});
                }
            }).catch(err => res.status(500).json({message: err}));

    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * Método para eliminar un Usuario
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let convocatoriaId = req.params.id;

        ConvocatoriaDao['remove'](convocatoriaId)
            .then(async convocatoria =>{
                if(!convocatoria){
                    res.status(404).json({message: 'convocatoria not found.'});
                }else {
                    res.status(200).json({message: 'convocatoria deleted.'});
                }
            })
            .catch(err => res.status(500).json({message: err}));
    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

const objectValidation = [
    check('email')
        .exists().withMessage('is required')
        .isEmail().withMessage('is an invalid Email format.'),
    check('role')
      .exists().withMessage('is required')
      .isMongoId().withMessage('is an invalid ObjectId format.'),
    check('password')
        .exists().withMessage('is required'),
];


const idAndOthersValidations = [
    check('id')
        .exists().withMessage('is required')
        .isMongoId().withMessage('is an invalid ObjectId format.'),
    check('email')
        .optional()
        .isEmail().withMessage('is an invalid Email format.'),
];

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    objectValidation,
    idAndOthersValidations
};
