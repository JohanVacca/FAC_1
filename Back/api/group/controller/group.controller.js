'use strict';

var GroupDao = require('../dao/group.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll Groups
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    GroupDao['getAll'](query)
        .then(async groups =>{
            res.status(200).json({"groups": groups});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById Group
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        GroupDao['getById'](positionId)
            .then(async group =>{
                if(!group){
                    res.status(404).json({message: 'group not found.'});
                }else {
                    res.status(200).json({"group": group});
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
 * create a Group
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let group = req.body;

        bcrypt.hash(group.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                group.password = hash;
                let positionObj = JSON.parse(JSON.stringify(group));

                GroupDao['create'](positionObj)
                    .then(async _position =>{
                        res.status(201).json({"group": _position});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "group already exists."});
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
 * update a Group
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let group = req.body;
        let positionObj = JSON.parse(JSON.stringify(group));
        let positionId = req.params.id;

        GroupDao['update'](positionId, positionObj)
            .then(async _position =>{
                if(!_position){
                    res.status(404).json({message: 'group not found.'});
                }else {
                    res.status(200).json({"group": _position});
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
 * delete Group
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        GroupDao['remove'](positionId)
            .then(async group =>{
                if(!group){
                    res.status(404).json({message: 'group not found.'});
                }else {
                    res.status(200).json({message: 'group deleted.'});
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
