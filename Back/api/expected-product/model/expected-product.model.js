'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ExpectedProductSchema = Schema({
  productType: { type: mongoose.Schema.Types.ObjectId, ref: 'productType' },
  entry: { type: mongoose.Schema.Types.ObjectId, ref: 'projectEntry' },
  descr: String,
  prcAirForce: Number,
  prcOther: Number,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
});

module.exports =  ExpectedProductSchema;
