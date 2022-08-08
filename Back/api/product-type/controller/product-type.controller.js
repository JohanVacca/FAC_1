'use strict';

var ProductTypeDao = require('../dao/product-type.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll ProductTypes
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    ProductTypeDao['getAll'](query)
        .then(async productTypes =>{
            res.status(200).json({"productTypes": productTypes});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById ProductType
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ProductTypeDao['getById'](positionId)
            .then(async productType =>{
                if(!productType){
                    res.status(404).json({message: 'productType not found.'});
                }else {
                    res.status(200).json({"productType": productType});
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
 * create a ProductType
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let productType = req.body;

        bcrypt.hash(productType.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                productType.password = hash;
                let positionObj = JSON.parse(JSON.stringify(productType));

                ProductTypeDao['create'](positionObj)
                    .then(async _position =>{
                        res.status(201).json({"productType": _position});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "productType already exists."});
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
 * update a ProductType
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let productType = req.body;
        let positionObj = JSON.parse(JSON.stringify(productType));
        let positionId = req.params.id;

        ProductTypeDao['update'](positionId, positionObj)
            .then(async _position =>{
                if(!_position){
                    res.status(404).json({message: 'productType not found.'});
                }else {
                    res.status(200).json({"productType": _position});
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
 * delete ProductType
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ProductTypeDao['remove'](positionId)
            .then(async productType =>{
                if(!productType){
                    res.status(404).json({message: 'productType not found.'});
                }else {
                    res.status(200).json({message: 'productType deleted.'});
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

function getIdConv(req, res) {
    let query = req.params.id;
    ProductTypeDao['getAllId'](query)
        .then(async productTypes =>{
            res.status(200).json({"productTypes": productTypes});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
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
    getIdConv,
    idValidation
};
