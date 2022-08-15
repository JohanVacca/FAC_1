'use strict';

const { validationResult } = require('express-validator/check');
const PropiedadintDao = require('../dao/propiedadint.dao');
const PropiedadintSchema = require('../model/propiedadint.model');

const CronogramaDao = require('../../cronograma/dao/cronograma.dao');
const ProyectoDao = require('../../project/dao/project.dao');

/**
 * create propiedadint
 * @param req
 * @param res
 * @param next
 */
 function create(req, res, next) {
    try {
        validationResult(req).throw();
        let propiedadint = req.body;
        let objObj = JSON.parse(JSON.stringify(propiedadint));
        //console.log(objObj);
        let cronoId = objObj.cronograma;
        let proyectoId = objObj.proyecto;
        objObj.descripcion = objObj.detalleProteccion.descrProteccion;
        //objObj.actividad = objObj.actividad;
        //console.log("CronoId: ",cronoId);

        ProyectoDao.findOne({ _id: proyectoId }).then(proyecto => {
            objObj.proyecto = proyecto;
            //console.log("Pr 2: ",objObj.proyecto);
        }),
        CronogramaDao.findOne({ _id: cronoId }).then(cronograma => {
            objObj.cronograma = cronograma;
            //console.log("Crono 2: ",objObj.cronograma);

            PropiedadintDao['create'](objObj)
                .then(async _obj => {
                    res.status(201).json({ "propiedadint": _obj });
                });
        })

        // console.log("Imprimiendo objObj:");
        // console.log(objObj.descripcion);
        //console.log("//////////////////////////////");

    } catch (err) {
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * getAll unidades
 * @param req
 * @param res
 * @param next
 */
 const getAll = async (req, res, next) => {
    let query = req.query;

    PropiedadintDao['getAll'](query)
        .then(async propiedades => {
            res.status(200).json(propiedades);//si ternona object hay que dejarlo de esta manera
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
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

        let { id } = req.body;
        let idObj = JSON.parse(JSON.stringify(id));

        PropiedadintDao['remove'](idObj)
            .then(async propiedad => {
                if (!propiedad) {
                    res.status(404).json({ message: 'propiedad not found.' });
                } else {
                    res.status(200).json({ message: 'propiedad deleted.' });
                }
            })
            .catch(err => res.status(500).json({ message: err }));
    } catch (err) {
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({ errors: result.array() });
        }
    }
}

module.exports = {
    create,
    getAll,
    remove,
}