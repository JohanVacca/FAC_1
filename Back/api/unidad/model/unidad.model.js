'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var i=0;

let UnidadSchema = Schema({
    name: String,
    ubicacion: String,
    rResponsable: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    comandante: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

})

module.exports = UnidadSchema;
//