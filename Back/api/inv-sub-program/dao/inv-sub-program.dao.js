'use strict';

const InvSubProgramSchema = require('../model/inv-sub-program.model');
const mongoose = require("mongoose");

/**
 * getAll InvSubPrograms
 */

InvSubProgramSchema.static('getAll', async (query) => {
    try{
        return await InvSubProgramDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvSubProgram
 */
InvSubProgramSchema.static('getById', async (id) => {
    try{
        return await InvSubProgramDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

InvSubProgramSchema.static('getAllId', async (id) => {
    try{
        return await InvSubProgramDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a InvSubProgram
 */
InvSubProgramSchema.static('create', async (invSubProgram) => {
    if (typeof invSubProgram !== 'object') {
        throw new TypeError('invSubProgram is not a valid object.');
    }

    let _obj = new InvSubProgramDao(invSubProgram);
    let saved = await  _obj.save();
    let __obj = await InvSubProgramDao.findOne({_id: saved._id}).populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvSubProgram
 */
InvSubProgramSchema.static('update', async (id, invSubProgram) => {
    if (typeof invSubProgram !== 'object') {
        throw new TypeError('invSubProgram is not a valid object.');
    }

    try {
        return await InvSubProgramDao.findOneAndUpdate({_id: id}, invSubProgram, {new: true}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvSubProgram
 */
InvSubProgramSchema.static('remove', async (id) =>{
    try{
        return await InvSubProgramDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvSubProgramDao = mongoose.model('invSubProgram', InvSubProgramSchema);
module.exports = InvSubProgramDao;
