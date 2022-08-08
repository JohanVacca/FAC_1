'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema({
  descr: String,
  Convocatoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Convocatoria' }, 
});

module.exports =  ProductTypeSchema;
