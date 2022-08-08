'use strict';

var InvTeamPerson = require('../dao/inv-team-person.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvTeamPersons
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvTeamPerson['getAll'](query)
        .then(async invTeamPersons =>{
            res.status(200).json({"invTeamPersons": invTeamPersons});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvTeamPerson
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let invTeamPersonId = req.params.id;

        InvTeamPerson['getById'](invTeamPersonId)
            .then(async invTeamPerson =>{
                if(!invTeamPerson){
                    res.status(404).json({message: 'invTeamPerson not found.'});
                }else {
                    res.status(200).json({"invTeamPerson": invTeamPerson});
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
 * create a InvTeamPerson
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let invTeamPerson = req.body;

        bcrypt.hash(invTeamPerson.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                invTeamPerson.password = hash;
                let invTeamPersonObj = JSON.parse(JSON.stringify(invTeamPerson));

                InvTeamPerson['create'](invTeamPersonObj)
                    .then(async _invTeamPerson =>{
                        res.status(201).json({"invTeamPerson": _invTeamPerson});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "invTeamPerson already exists."});
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
 * update a InvTeamPerson
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let invTeamPerson = req.body;
        let invTeamPersonObj = JSON.parse(JSON.stringify(invTeamPerson));
        let invTeamPersonId = req.params.id;

        InvTeamPerson['update'](invTeamPersonId, invTeamPersonObj)
            .then(async _invTeamPerson =>{
                if(!_invTeamPerson){
                    res.status(404).json({message: 'invTeamPerson not found.'});
                }else {
                    res.status(200).json({"invTeamPerson": _invTeamPerson});
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
 * delete InvTeamPerson
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let invTeamPersonId = req.params.id;

        InvTeamPerson['remove'](invTeamPersonId)
            .then(async invTeamPerson =>{
                if(!invTeamPerson){
                    res.status(404).json({message: 'invTeamPerson not found.'});
                }else {
                    res.status(200).json({message: 'invTeamPerson deleted.'});
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
