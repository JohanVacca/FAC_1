'use strict';

var InvLineDao = require('../dao/inv-line.dao');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvLines
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvLineDao['getAll'](query)
        .then(async invLines =>{
            res.status(200).json({"invLines": invLines});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvLine
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvLineDao['getById'](objId)
            .then(async invLine =>{
                if(!invLine){
                    res.status(404).json({message: 'invLine not found.'});
                }else {
                    res.status(200).json({"invLine": invLine});
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
 * create a InvLine
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let invLine = req.body;

        let objObj = JSON.parse(JSON.stringify(invLine));

        InvLineDao['create'](objObj)
          .then(async _obj =>{
            res.status(201).json({"invLine": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "invLine already exists."});
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
 * update a InvLine
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let invLine = req.body;
        let objObj = JSON.parse(JSON.stringify(invLine));
        let objId = req.params.id;

        InvLineDao['update'](objId, objObj)
            .then(async _obj =>{
                if(!_obj){
                    res.status(404).json({message: 'invLine not found.'});
                }else {
                    res.status(200).json({"invLine": _obj});
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
 * delete InvLine
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvLineDao['remove'](objId)
            .then(async invLine =>{
                if(!invLine){
                    res.status(404).json({message: 'invLine not found.'});
                }else {
                    res.status(200).json({message: 'invLine deleted.'});
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
    InvLineDao['getAllId'](query)
        .then(async invLines =>{
            res.status(200).json({"invLines": invLines});
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
