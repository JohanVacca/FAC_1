'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ConvocatoriaSchema = Schema({
    docType: String,
    identification: Number,
    name: String,
    Descripcion : String,
    isActive: { type: Boolean, default: false },
});

module.exports =  ConvocatoriaSchema;
