'use strict';

var ExpectedProductDao = require('../dao/expected-product.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll ExpectedProducts
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    ExpectedProductDao['getAll'](query)
        .then(async expectedProducts =>{
            res.status(200).json({"expectedProducts": expectedProducts});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById ExpectedProduct
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ExpectedProductDao['getById'](positionId)
            .then(async expectedProduct =>{
                if(!expectedProduct){
                    res.status(404).json({message: 'expectedProduct not found.'});
                }else {
                    res.status(200).json({"expectedProduct": expectedProduct});
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
 * create a ExpectedProduct
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let expectedProduct = req.body;

        bcrypt.hash(expectedProduct.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                expectedProduct.password = hash;
                let positionObj = JSON.parse(JSON.stringify(expectedProduct));

                ExpectedProductDao['create'](positionObj)
                    .then(async _position =>{
                        res.status(201).json({"expectedProduct": _position});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "expectedProduct already exists."});
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
 * update a ExpectedProduct
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let expectedProduct = req.body;
        let positionObj = JSON.parse(JSON.stringify(expectedProduct));
        let positionId = req.params.id;

        ExpectedProductDao['update'](positionId, positionObj)
            .then(async _position =>{
                if(!_position){
                    res.status(404).json({message: 'expectedProduct not found.'});
                }else {
                    res.status(200).json({"expectedProduct": _position});
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
 * delete ExpectedProduct
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ExpectedProductDao['remove'](positionId)
            .then(async expectedProduct =>{
                if(!expectedProduct){
                    res.status(404).json({message: 'expectedProduct not found.'});
                }else {
                    res.status(200).json({message: 'expectedProduct deleted.'});
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


const idValidation = [
    check('id')
        .exists().withMessage('is required')
        .isMongoId().withMessage('is an invalid ObjectId format.')
];

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    idValidation
};
