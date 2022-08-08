'use strict';

const {validationResult} = require('express-validator/check');
const InvCenterDao = require('../dao/inv-center.dao');

/**
 * getAll invCenters
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    InvCenterDao['getAll'](query)
        .then(async invCenters => {
            res.status(200).json({"invCenters": invCenters});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * editar un invCenter
 * @param req
 * @param res
 * @param next
 */
function edit(req, res, next) {
    try {
        validationResult(req).throw();
        let centro = req.body;
        let centroObj = JSON.parse(JSON.stringify(centro));
        let centroId = req.params.id;
        InvCenterDao['update'](centroId, centroObj)
            .then(async _centro => {
                if (!_centro) {
                    res.status(404).json({message: 'centro not found.'});
                } else {
                    res.status(200).json({"centro": _centro});
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
 * create a invCenter
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {
    try {
        validationResult(req).throw();

        let invCenter = req.body;

        let objObj = JSON.parse(JSON.stringify(invCenter));

        InvCenterDao['create'](objObj)
            .then(async _obj => {
                res.status(201).json({"invCenter": _obj});
            });


    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}

/**
 * Método para eliminar invCenter
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try {
        validationResult(req).throw();

        let {id} = req.body;
        let idObj = JSON.parse(JSON.stringify(id));

        InvCenterDao['remove'](idObj)
            .then(async invCenter => {
                if (!invCenter) {
                    res.status(404).json({message: 'invCenter not found.'});
                } else {
                    res.status(200).json({message: 'invCenter deleted.'});
                }
            })
            .catch(err => res.status(500).json({message: err}));
    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}

module.exports = {
    create,
    getAll,
    remove,
    edit
}
