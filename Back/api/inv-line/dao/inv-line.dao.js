'use strict';

const InvLineSchema = require('../model/inv-line.model');
const mongoose = require("mongoose");

/**
 * getAll InvLines
 */

InvLineSchema.static('getAll', async (query) => {
    try{
        return await InvLineDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvLine
 */
InvLineSchema.static('getById', async (id) => {
    try{
        return await InvLineDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

InvLineSchema.static('getAllId', async (id) => {
    try{
        return await InvLineDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a InvLine
 */
InvLineSchema.static('create', async (invLine) => {
    if (typeof invLine !== 'object') {
        throw new TypeError('invLine is not a valid object.');
    }

    let _obj = new InvLineDao(invLine);
    let saved = await  _obj.save();
    let __obj = await InvLineDao.findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvLine
 */
InvLineSchema.static('update', async (id, invLine) => {
    if (typeof invLine !== 'object') {
        throw new TypeError('invLine is not a valid object.');
    }

    try {
        return await InvLineDao.findOneAndUpdate({_id: id}, invLine, {new: true})
            .populate('Convocatoria')
            .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvLine
 */
InvLineSchema.static('remove', async (id) =>{
    try{
        return await InvLineDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvLineDao = mongoose.model('invLine', InvLineSchema);
module.exports = InvLineDao;
