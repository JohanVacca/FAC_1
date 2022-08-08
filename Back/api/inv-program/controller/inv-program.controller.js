'use strict';

var InvProgramDao = require('../dao/inv-program.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvPrograms
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvProgramDao['getAll'](query)
        .then(async invPrograms =>{
            res.status(200).json({"invPrograms": invPrograms});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvProgram
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvProgramDao['getById'](objId)
            .then(async invProgram =>{
                if(!invProgram){
                    res.status(404).json({message: 'invProgram not found.'});
                }else {
                    res.status(200).json({"invProgram": invProgram});
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
 * create a InvProgram
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let invProgram = req.body;

        let obj = JSON.parse(JSON.stringify(invProgram));

        InvProgramDao['create'](obj)
          .then(async _obj =>{
            res.status(201).json({"invProgram": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "invProgram already exists."});
          }{
            res.status(500).json({message: err});
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
 * update a InvProgram
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let invProgram = req.body;
        let obj = JSON.parse(JSON.stringify(invProgram));
        let objId = req.params.id;

        InvProgramDao['update'](objId, obj)
            .then(async _obj =>{
                if(!_obj){
                    res.status(404).json({message: 'invProgram not found.'});
                }else {
                    res.status(200).json({"invProgram": _obj});
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
 * delete InvProgram
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvProgramDao['remove'](objId)
            .then(async invProgram =>{
                if(!invProgram){
                    res.status(404).json({message: 'invProgram not found.'});
                }else {
                    res.status(200).json({message: 'invProgram deleted.'});
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
    InvProgramDao['getAllId'](query)
        .then(async invPrograms =>{
            res.status(200).json({"invPrograms": invPrograms});
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
