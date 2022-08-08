'use strict';

var InvEndorserDao = require('../dao/group-category.dao');

const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvEndorsers
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvEndorserDao['getAll'](query)
        .then(async groupCategories =>{
            res.status(200).json({"groupCategories": groupCategories});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvEndorser
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvEndorserDao['getById'](objId)
            .then(async groupCategory =>{
                if(!groupCategory){
                    res.status(404).json({message: 'groupCategory not found.'});
                }else {
                    res.status(200).json({"groupCategory": groupCategory});
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
 * create a InvEndorser
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let groupCategory = req.body;

        let objObj = JSON.parse(JSON.stringify(groupCategory));

        InvEndorserDao['create'](objObj)
          .then(async _obj =>{
            res.status(201).json({"groupCategory": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "groupCategory already exists."});
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
 * update a InvEndorser
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let groupCategory = req.body;
        let objObj = JSON.parse(JSON.stringify(groupCategory));
        let objId = req.params.id;

        InvEndorserDao['update'](objId, objObj)
            .then(async _obj =>{
                if(!_obj){
                    res.status(404).json({message: 'groupCategory not found.'});
                }else {
                    res.status(200).json({"groupCategory": _obj});
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
 * delete InvEndorser
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let objId = req.params.id;

        InvEndorserDao['remove'](objId)
            .then(async groupCategory =>{
                if(!groupCategory){
                    res.status(404).json({message: 'groupCategory not found.'});
                }else {
                    res.status(200).json({message: 'groupCategory deleted.'});
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
    InvEndorserDao['getAllId'](query)
        .then(async groupCategories =>{
            res.status(200).json({"groupCategories": groupCategories});
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
