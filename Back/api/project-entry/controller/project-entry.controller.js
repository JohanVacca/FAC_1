'use strict';

var ProjectEntryDao = require('../dao/project-entry.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll ProjectEntries
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    ProjectEntryDao['getAll'](query)
        .then(async projectEntries =>{
            res.status(200).json({"projectEntries": projectEntries});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById ProjectEntry
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ProjectEntryDao['getById'](positionId)
            .then(async projectEntry =>{
                if(!projectEntry){
                    res.status(404).json({message: 'projectEntry not found.'});
                }else {
                    res.status(200).json({"projectEntry": projectEntry});
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
 * create a ProjectEntry
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let projectEntry = req.body;

        bcrypt.hash(projectEntry.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                projectEntry.password = hash;
                let positionObj = JSON.parse(JSON.stringify(projectEntry));

                ProjectEntryDao['create'](positionObj)
                    .then(async _position =>{
                        res.status(201).json({"projectEntry": _position});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "projectEntry already exists."});
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
 * update a ProjectEntry
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let projectEntry = req.body;
        let positionObj = JSON.parse(JSON.stringify(projectEntry));
        let positionId = req.params.id;

        ProjectEntryDao['update'](positionId, positionObj)
            .then(async _position =>{
                if(!_position){
                    res.status(404).json({message: 'projectEntry not found.'});
                }else {
                    res.status(200).json({"projectEntry": _position});
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
 * delete ProjectEntry
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let positionId = req.params.id;

        ProjectEntryDao['remove'](positionId)
            .then(async projectEntry =>{
                if(!projectEntry){
                    res.status(404).json({message: 'projectEntry not found.'});
                }else {
                    res.status(200).json({message: 'projectEntry deleted.'});
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
    ProjectEntryDao['getAllId'](query)
        .then(async projectEntrys =>{
            res.status(200).json({"projectEntrys": projectEntrys});
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
