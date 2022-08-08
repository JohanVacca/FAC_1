'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let instructivoSchema = Schema({
  Codigo: String,
  Titulo: String,
  Objetivo:String,
  NombreArchivo: String,
  FechaCreacion: {type: Date, default: Date.now()},
  User: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  FModificacionM : String,
  UserMod: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  FBorrado : String,
  UserBorradir: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Estado: Number
});

module.exports =  instructivoSchema;
