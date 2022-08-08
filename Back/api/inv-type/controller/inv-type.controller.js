'use strict';

var InvTypeDao = require('../dao/inv-type.dao');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvTypes
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvTypeDao['getAll'](query)
        .then(async invTypes =>{
            res.status(200).json({"invTypes": invTypes});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvType
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvTypeDao['getById'](objId)
            .then(async invType =>{
                if(!invType){
                    res.status(404).json({message: 'invType not found.'});
                }else {
                    res.status(200).json({"invType": invType});
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
 * create a InvType
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let invType = req.body;

        let objObj = JSON.parse(JSON.stringify(invType));

        InvTypeDao['create'](objObj)
          .then(async _obj =>{
            res.status(201).json({"invType": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "invType already exists."});
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
 * update a InvType
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let invType = req.body;
        let objObj = JSON.parse(JSON.stringify(invType));
        let objId = req.params.id;

        InvTypeDao['update'](objId, objObj)
            .then(async _obj =>{
                if(!_obj){
                    res.status(404).json({message: 'invType not found.'});
                }else {
                    res.status(200).json({"invType": _obj});
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
 * delete InvType
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvTypeDao['remove'](objId)
            .then(async invType =>{
                if(!invType){
                    res.status(404).json({message: 'invType not found.'});
                }else {
                    res.status(200).json({message: 'invType deleted.'});
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
    InvTypeDao['getAllId'](query)
        .then(async invTypes =>{
            res.status(200).json({"invTypes": invTypes});
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
