'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RoleSchema = Schema({
    name: { type: String, unique: true},
    description: String,
});

module.exports =  RoleSchema;
