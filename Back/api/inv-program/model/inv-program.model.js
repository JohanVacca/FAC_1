'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InvProgramSchema = Schema({
  descr: String,
  Convocatoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Convocatoria' }, 
});

module.exports =  InvProgramSchema;
