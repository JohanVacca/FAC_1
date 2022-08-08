'use strict';

const {validationResult} = require('express-validator/check');
const UnidadDao = require('../dao/unidad.dao');

/**
 * getAll unidades
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    UnidadDao['getAll'](query)
        .then(async unidades => {
            res.status(200).json({"unidades": unidades});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
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

        let unidad = req.body;

        let objObj = JSON.parse(JSON.stringify(unidad));

        UnidadDao['create'](objObj)
            .then(async _obj => {
                res.status(201).json({"unidad": _obj});
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
 * Método para eliminar unidad
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try {
        validationResult(req).throw();

        let {id} = req.body;
        let idObj = JSON.parse(JSON.stringify(id));

        UnidadDao['remove'](idObj)
            .then(async unidad => {
                if (!unidad) {
                    res.status(404).json({message: 'unidad not found.'});
                } else {
                    res.status(200).json({message: 'unidad deleted.'});
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
    remove
}
