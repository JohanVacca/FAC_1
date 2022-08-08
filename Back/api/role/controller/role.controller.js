'use strict';

var RoleDao = require('../dao/role.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll Roles
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    RoleDao['getAll'](query)
        .then(async roles =>{
            res.status(200).json({"roles": roles});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById Role
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let roleId = req.params.id;

        RoleDao['getById'](roleId)
            .then(async role =>{
                if(!role){
                    res.status(404).json({message: 'role not found.'});
                }else {
                    res.status(200).json({"role": role});
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
 * create a Role
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let role = req.body;

        bcrypt.hash(role.password, null, null, (err, hash) => {
            if(err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if(hash){
                role.password = hash;
                let roleObj = JSON.parse(JSON.stringify(role));

                RoleDao['create'](roleObj)
                    .then(async _role =>{
                        res.status(201).json({"role": _role});
                    }).catch(err => {
                    if(err.code === 11000){
                        res.status(409).json({message: "role already exists."});
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
 * update a Role
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let role = req.body;
        let roleObj = JSON.parse(JSON.stringify(role));
        let roleId = req.params.id;

        RoleDao['update'](roleId, roleObj)
            .then(async _role =>{
                if(!_role){
                    res.status(404).json({message: 'role not found.'});
                }else {
                    res.status(200).json({"role": _role});
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
 * delete Role
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let roleId = req.params.id;

        RoleDao['remove'](roleId)
            .then(async role =>{
                if(!role){
                    res.status(404).json({message: 'role not found.'});
                }else {
                    res.status(200).json({message: 'role deleted.'});
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

/**
 * getDefaultRole
 * @param req
 * @param res
 * @param next
 */
function getDefaultRole(req, res, next) {
  let query = req.query;
  RoleDao['getDefaultRole'](query)
    .then(async _role =>{
      res.status(200).json({"role": _role});
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
    getDefaultRole,
    idValidation
};
