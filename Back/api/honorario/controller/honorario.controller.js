'use strict';

var honorarioDao = require('../dao/honorario.dao');
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
    honorarioDao['getAll'](query)
        .then(async honorarios =>{
            res.status(200).json({"honorarios": honorarios});
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

        let honorarioId = req.params.id;

        honorarioDao['getById'](honorarioId)
            .then(async honorario =>{
                if(!honorario){
                    res.status(404).json({message: 'honorario not found.'});
                }else {
                    res.status(200).json({"honorario": honorario});
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

function conteo(req,res,next){
    
    let honorarioId = req.params.id;
    honorarioDao['conteo'](honorarioId)
    .then(async honorario => {
        if(!honorario){
            res.status(200).json({"Validador": true});
        }else{
            res.status(200).json({"Validador": false});
        }
    })
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

        let honorario = req.body;

        bcrypt.hash(honorario.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                honorario.password = hash;
                let honorarioObj = JSON.parse(JSON.stringify(honorario));

                honorarioDao['create'](honorarioObj)
                    .then(async _honorario =>{
                        res.status(201).json({"honorario": _honorario});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "honorario already exists."});
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

        let honorario = req.body;
        let honorarioObj = JSON.parse(JSON.stringify(honorario));
        let honorarioId = req.params.id;

        honorarioDao['update'](honorarioId, honorarioObj)
            .then(async _honorario =>{
                if(!_honorario){
                    res.status(404).json({message: 'honorario not found.'});
                }else {
                    res.status(200).json({"honorario": _honorario});
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

        let honorarioId = req.params.id;

        honorarioDao['remove'](honorarioId)
            .then(async honorario =>{
                if(!honorario){
                    res.status(404).json({message: 'honorario not found.'});
                }else {
                    res.status(200).json({message: 'honorario deleted.'});
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
    conteo,
    objectValidation,
    idAndOthersValidations
};
