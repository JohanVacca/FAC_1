'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InvCenterSchema = Schema({
    name: String,
    jefe: {
        _id: String,
        profile: {
            names: String,
            surname: String
        }
    }
});

module.exports =  InvCenterSchema;
