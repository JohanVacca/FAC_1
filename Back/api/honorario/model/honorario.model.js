'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HonorarioSchema = Schema({
    docType: String,
    honorarioId: Number,
    formacion: String,
    experiencia: String,
    topeMaximo : Number,
});

module.exports =  HonorarioSchema;
