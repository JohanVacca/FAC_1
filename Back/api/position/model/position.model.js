'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PositionSchema = Schema({
    name: { type: String, unique: true},
    description: String,
});

module.exports =  PositionSchema;
