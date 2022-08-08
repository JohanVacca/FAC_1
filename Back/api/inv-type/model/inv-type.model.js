'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InvTypeSchema = Schema({
  descr: String,
  Convocatoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Convocatoria' }, 
});

module.exports =  InvTypeSchema;
