'use strict';

const InvEndorserSchema = require('../model/inv-endorser.model');
const mongoose = require("mongoose");

/**
 * getAll InvEndorsers
 */

InvEndorserSchema.static('getAll', async (query) => {
    try{
        return await InvEndorserDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvEndorser
 */
InvEndorserSchema.static('getById', async (id) => {
    try{
        return await InvEndorserDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

InvEndorserSchema.static('getAllId', async (id) => {
    try{
        return await InvEndorserDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a InvEndorser
 */
InvEndorserSchema.static('create', async (invEndorser) => {
    if (typeof invEndorser !== 'object') {
        throw new TypeError('invEndorser is not a valid object.');
    }

    let _obj = new InvEndorserDao(invEndorser);
    let saved = await  _obj.save();
    let __obj = await InvEndorserDao.findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvEndorser
 */
InvEndorserSchema.static('update', async (id, invEndorser) => {
    if (typeof invEndorser !== 'object') {
        throw new TypeError('invEndorser is not a valid object.');
    }

    try {
        return await InvEndorserDao.findOneAndUpdate({_id: id}, invEndorser, {new: true})
        .populate('Convocatoria')
        .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvEndorser
 */
InvEndorserSchema.static('remove', async (id) =>{
    try{
        return await InvEndorserDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvEndorserDao = mongoose.model('invEndorser', InvEndorserSchema);
module.exports = InvEndorserDao;
