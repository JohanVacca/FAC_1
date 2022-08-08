'use strict';


const _ = require('lodash');
const ProyectInsSchema = require('../model/intructivo.model');
const mongoose = require("mongoose");

/**
 * getAll InvTeamPersons
 */

ProyectInsSchema.static('getAll', async (query) => {
    // try{
        //return await ProyectInsSchema.find()
        return "h"
    // }catch(err){
    //     throw err;
    // }
});

ProyectInsSchema.static('getAllId', async (id) => {
    try{
        return await ProyectInsDao.find({CodigoPr: id}).populate('CodigoPr').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a instructivos
 */
ProyectInsSchema.static('create', async (instructivos) => {
    if (typeof instructivos !== 'object') {
        throw new TypeError('instructivos is not a valid object.');
    }

    let _obj = new ProyectInsDao(instructivos);
    let saved = await  _obj.save();
    let __obj = await ProyectInsDao.findOne({_id: saved._id}).populate('CodigoPr')
        .exec();
    return (__obj);
});

ProyectInsSchema.static('update', async (id, instructivo) => {
    if (typeof instructivo !== 'object') {
        throw new TypeError('instructivo is not a valid object.');
    }

    try {
        return await ProyectInsDao.findOneAndUpdate({_id: id}, instructivo, {new: true}).populate('CodigoPr').exec();
    }catch (err){
        throw err;
    }
});

ProyectInsSchema.static('remove', async (id) =>{
    try{
        return await ProyectInsDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let ProyectInsDao = mongoose.model('ProyectIns', ProyectInsSchema);
module.exports = ProyectInsDao;
