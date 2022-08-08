'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProyectoInsSchema = Schema({
  CodigoPr: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
  NombreArchivo: String,
  NombreTipo :String,
  NombreDoc:String
});

module.exports =  ProyectoInsSchema;
