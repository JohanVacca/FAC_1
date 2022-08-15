'use strict';

const { strict } = require('assert');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var i=0;

let PropiedadintSchema = Schema({
    cronograma: { type: mongoose.Schema.Types.ObjectId, ref: 'Cronograma' }, //Enlace a cronograma-actividades-subActividad.nombreSub
    descripcion: String,
    proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
    actividad: String,
    subactividad:
        {
          nombreSub: String,
          fechaInicio: Date,
          fechaFinal: Date,
          avance: Number,
          fechaReal: Date,
          Desface: Number,
          //SUBACTIVIDAD PENDIENTE AGREGAR PROTEGIDO
        },
})

module.exports = PropiedadintSchema;
//