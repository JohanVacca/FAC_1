'use strict';

const { strict } = require('assert');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NecesidadSchema = Schema({
    name: String,
    consecutivo: String,
    programa: '',
    subprograma: '',
    descripcion: String,
    porque: String,
    lineasinv: '',
    selectedValue : '',
    unidad: { type: mongoose.Schema.Types.ObjectId, ref: 'unidad' },
})

module.exports = NecesidadSchema;
