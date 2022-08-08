'use strict';


const _ = require('lodash');
const instructivoSchema = require('../model/intructivo.model');
const mongoose = require("mongoose");

/**
 * getAll InvTeamPersons
 */

instructivoSchema.static('getAll', async (query) => {
    return "h"
});

/**
 * create a instructivos
 */
instructivoSchema.static('create', async (instructivos) => {
    if (typeof instructivos !== 'object') {
        throw new TypeError('instructivos is not a valid object.');
    }

    let _obj = new instructivoDao(instructivos);
    let saved = await _obj.save();
    let __obj = await instructivoDao.findOne({_id: saved._id}).populate('User')
        .exec();
    return (__obj);
});

instructivoSchema.static('update', async (id, instructivo) => {
    if (typeof instructivo !== 'object') {
        throw new TypeError('instructivo is not a valid object.');
    }

    try {
        return await instructivoDao.findOneAndUpdate({_id: id}, instructivo, {new: true}).populate('User').exec();
    } catch (err) {
        throw err;
    }
});


let instructivoDao = mongoose.model('instructivo', instructivoSchema);
module.exports = instructivoDao;
