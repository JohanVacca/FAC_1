'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectEntrySchema = Schema({
  descr: String,
  Convocatoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Convocatoria' }, 
});

module.exports =  ProjectEntrySchema;
