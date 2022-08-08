'use strict';

const InvTypeSchema = require('../model/inv-type.model');
const mongoose = require("mongoose");

/**
 * getAll InvTypes
 */

InvTypeSchema.static('getAll', async (query) => {
    try{
        return await InvTypeDao
            .find(query)
            .populate('Convocatoria')
            .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvType
 */
InvTypeSchema.static('getById', async (id) => {
    try{
        return await InvTypeDao
            .findOne({_id: id})
            .populate('Convocatoria')
            .exec();
    }catch (err){
        throw err;
    }
});

InvTypeSchema.static('getAllId', async (id) => {
    try{
        return await InvTypeDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a InvType
 */
InvTypeSchema.static('create', async (invType) => {
    if (typeof invType !== 'object') {
        throw new TypeError('invType is not a valid object.');
    }

    let _obj = new InvTypeDao(invType);
    let saved = await  _obj.save();
    let __obj = await InvTypeDao.findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvType
 */
InvTypeSchema.static('update', async (id, invType) => {
    if (typeof invType !== 'object') {
        throw new TypeError('invType is not a valid object.');
    }

    try {
        return await InvTypeDao.findOneAndUpdate({_id: id}, invType, {new: true})
        .populate('Convocatoria')
        .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvType
 */
InvTypeSchema.static('remove', async (id) =>{
    try{
        return await InvTypeDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvTypeDao = mongoose.model('invType', InvTypeSchema);
module.exports = InvTypeDao;
