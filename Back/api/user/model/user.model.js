'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    docType: String,
    identification: Number,
    names: String,
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'role' },
    profile: Object,
    email: { type: String, unique: true},
    password: String,
    isActive: { type: Boolean, default: false },
    isUser: Boolean,
    phoneNumber: { type: String },
    dependency: { type: String },
    codeNumber: { type: String },
    positionName: { type: String },
});

module.exports =  UserSchema;
