'use strict'


var instructivoDao = require('../dao/instructivo.dao');

const { check, validationResult } = require('express-validator/check');

/**
 * Método para traer los usuarios ACTIVOS
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
  let query = req.query;
  instructivoDao['getAll'](query)
      .then(async instructivos =>{
          res.status(200).json({"instructivos": instructivos});
      })
      .catch(async instructivos =>{
          res.status(200).json({"instructivos": instructivos});
      });
}

/**
 * create a instructivo
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {
    try {
        validationResult(req).throw();
        let instructivo = req.body;

        let objObj = JSON.parse(JSON.stringify(instructivo));
        
        instructivoDao['create'](objObj)
          .then(async _obj =>{
            res.status(201).json({"instructivo": _obj});
          }).catch(err => {
          if(err.code === 11000){
            res.status(409).json({message: "instructivo already exists."});
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

function update(req, res, next) {
    
  try {
      validationResult(req).throw();

      let invProgram = req.body;
      let obj = JSON.parse(JSON.stringify(invProgram));
      let objId = req.params.id;

      instructivoDao['update'](objId, obj)
          .then(async _obj =>{
              if(!_obj){
                  res.status(404).json({message: 'instructivo not found.'});
              }else {
                  res.status(200).json({"instructivo": _obj});
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

module.exports = {
    create,
    getAll,
    update
};