'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InvTeamPersonSchema = Schema({
  names: String,
  lastName: String,
  identification: Number,
  grade: String,
  position: { type: mongoose.Schema.Types.ObjectId, ref: 'InvTeamPersonPosition' },
  dedication: String,
  hasGroup: Boolean,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'group' },
});

module.exports =  InvTeamPersonSchema;
