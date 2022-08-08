'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GroupSchema = Schema({
    name: String,
    code: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'groupCategory' },
    antiquity: Number,
    entity: String,
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
});

module.exports =  GroupSchema;
