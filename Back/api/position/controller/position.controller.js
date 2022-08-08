'use strict';

var PositionDao = require('../dao/position.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll Positions
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    PositionDao['getAll'](query)
        .then(async positions =>{
            res.status(200).json({"positions": positions});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById Position
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        PositionDao['getById'](positionId)
            .then(async position =>{
                if(!position){
                    res.status(404).json({message: 'position not found.'});
                }else {
                    res.status(200).json({"position": position});
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
 * create a Position
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let position = req.body;

        bcrypt.hash(position.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                position.password = hash;
                let positionObj = JSON.parse(JSON.stringify(position));

                PositionDao['create'](positionObj)
                    .then(async _position =>{
                        res.status(201).json({"position": _position});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "position already exists."});
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
 * update a Position
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let position = req.body;
        let positionObj = JSON.parse(JSON.stringify(position));
        let positionId = req.params.id;

        PositionDao['update'](positionId, positionObj)
            .then(async _position =>{
                if(!_position){
                    res.status(404).json({message: 'position not found.'});
                }else {
                    res.status(200).json({"position": _position});
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
 * delete Position
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        PositionDao['remove'](positionId)
            .then(async position =>{
                if(!position){
                    res.status(404).json({message: 'position not found.'});
                }else {
                    res.status(200).json({message: 'position deleted.'});
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
