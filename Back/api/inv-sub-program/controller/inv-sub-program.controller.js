'use strict';

var InvSubProgramDao = require('../dao/inv-sub-program.dao');
var jwt = require('../../auth/jwt/jwt.service');
var bcrypt = require('bcrypt-nodejs');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvSubPrograms
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvSubProgramDao['getAll'](query)
        .then(async invSubPrograms =>{
            res.status(200).json({"invSubPrograms": invSubPrograms});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvSubProgram
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvSubProgramDao['getById'](objId)
            .then(async invSubProgram =>{
                if(!invSubProgram){
                    res.status(404).json({message: 'invSubProgram not found.'});
                }else {
                    res.status(200).json({"invSubProgram": invSubProgram});
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
 * create a InvSubProgram
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let invSubProgram = req.body;

        let obj = JSON.parse(JSON.stringify(invSubProgram));
  
        InvSubProgramDao['create'](obj)
          .then(async _obj =>{
            res.status(201).json({"invSubProgram": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "invSubProgram already exists."});
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
 * update a InvSubProgram
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let invSubProgram = req.body;
        let obj = JSON.parse(JSON.stringify(invSubProgram));
        let objId = req.params.id;

        InvSubProgramDao['update'](objId, obj)
            .then(async _obj =>{
                if(!_obj){
                    res.status(404).json({message: 'invSubProgram not found.'});
                }else {
                    res.status(200).json({"invSubProgram": _obj});
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
 * delete InvSubProgram
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvSubProgramDao['remove'](objId)
            .then(async invSubProgram =>{
                if(!invSubProgram){
                    res.status(404).json({message: 'invSubProgram not found.'});
                }else {
                    res.status(200).json({message: 'invSubProgram deleted.'});
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
    InvSubProgramDao['getAllId'](query)
        .then(async invSubPrograms =>{
            res.status(200).json({"invSubPrograms": invSubPrograms});
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
