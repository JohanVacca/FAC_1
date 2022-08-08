'use strict';

const InvTeamPersonPositionDao = require('../dao/inv-team-person-position.dao');
const { check, validationResult } = require('express-validator/check');

/**
 * getAll InvTeamPersonPositions
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvTeamPersonPositionDao['getAll'](query)
        .then(async invTeamPersonPositions =>{
            res.status(200).json({"invTeamPersonPositions": invTeamPersonPositions});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * getById InvTeamPersonPosition
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let invTeamPersonId = req.params.id;

        InvTeamPersonPositionDao['getById'](invTeamPersonId)
            .then(async InvTeamPersonPosition =>{
                if(!InvTeamPersonPosition){
                    res.status(404).json({message: 'InvTeamPersonPosition not found.'});
                }else {
                    res.status(200).json({"InvTeamPersonPosition": InvTeamPersonPosition});
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
 * create a InvTeamPersonPosition
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let InvTeamPersonPosition = req.body;

        let invTeamPersonObj = JSON.parse(JSON.stringify(InvTeamPersonPosition));
  
        InvTeamPersonPositionDao['create'](invTeamPersonObj)
          .then(async _invTeamPerson =>{
            res.status(201).json({"InvTeamPersonPosition": _invTeamPerson});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "InvTeamPersonPosition already exists."});
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
 * update a InvTeamPersonPosition
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let InvTeamPersonPosition = req.body;
        let obj = JSON.parse(JSON.stringify(InvTeamPersonPosition));
        let objId = req.params.id;

        InvTeamPersonPositionDao['update'](objId, obj)
            .then(async _invTeamPerson =>{
                if(!_invTeamPerson){
                    res.status(404).json({message: 'InvTeamPersonPosition not found.'});
                }else {
                    res.status(200).json({"InvTeamPersonPosition": _invTeamPerson});
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
 * delete InvTeamPersonPosition
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let invTeamPersonId = req.params.id;

        InvTeamPersonPositionDao['remove'](invTeamPersonId)
            .then(async InvTeamPersonPosition =>{
                if(!InvTeamPersonPosition){
                    res.status(404).json({message: 'InvTeamPersonPosition not found.'});
                }else {
                    res.status(200).json({message: 'InvTeamPersonPosition deleted.'});
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
    InvTeamPersonPositionDao['getAllId'](query)
        .then(async invTeamPersonPositions =>{
            res.status(200).json({"invTeamPersonPositions": invTeamPersonPositions});
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
