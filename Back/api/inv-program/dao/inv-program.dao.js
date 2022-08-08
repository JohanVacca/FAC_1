'use strict';

const InvProgramSchema = require('../model/inv-program.model');
const mongoose = require("mongoose");

/**
 * getAll InvPrograms
 */

InvProgramSchema.static('getAll', async (query) => {
    try{
        return await InvProgramDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvProgram
 */
InvProgramSchema.static('getById', async (id) => {
    try{
        return await InvProgramDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

InvProgramSchema.static('getAllId', async (id) => {
    try{
        return await InvProgramDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a InvProgram
 */
InvProgramSchema.static('create', async (InvProgram) => {
    if (typeof InvProgram !== 'object') {
        throw new TypeError('InvProgram is not a valid object.');
    }

    let _obj = new InvProgramDao(InvProgram);
    let saved = await  _obj.save();
    let __obj = await InvProgramDao.findOne({_id: saved._id}).populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvProgram
 */
InvProgramSchema.static('update', async (id, InvProgram) => {
    if (typeof InvProgram !== 'object') {
        throw new TypeError('InvProgram is not a valid object.');
    }

    try {
        return await InvProgramDao.findOneAndUpdate({_id: id}, InvProgram, {new: true}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvProgram
 */
InvProgramSchema.static('remove', async (id) =>{
    try{
        return await InvProgramDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvProgramDao = mongoose.model('invProgram', InvProgramSchema);
module.exports = InvProgramDao;
