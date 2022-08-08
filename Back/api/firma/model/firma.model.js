'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FirmaSchema = Schema({
    userId: String,
    data: Object,
    name: {type: String},
    path: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports =  FirmaSchema;
