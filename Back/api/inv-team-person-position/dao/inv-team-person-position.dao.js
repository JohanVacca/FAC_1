'use strict';

const InvTeamPersonPositionSchema = require('../model/inv-team-person-position.model');
const mongoose = require("mongoose");

/**
 * getAll InvTeamPersons
 */

InvTeamPersonPositionSchema.static('getAll', async (query) => {
    try{
        return await InvTeamPersonPositionDao
          .find(query)
          .populate('Convocatoria')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvTeamPersonPosition
 */
InvTeamPersonPositionSchema.static('getById', async (id) => {
    try{
        return await InvTeamPersonPositionDao
          .findOne({_id: id})
          .populate('Convocatoria')
          .exec();
    }catch (err){
        throw err;
    }
});

InvTeamPersonPositionSchema.static('getAllId', async (id) => {
    try{
        return await InvTeamPersonPositionDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a InvTeamPersonPosition
 */
InvTeamPersonPositionSchema.static('create', async (InvTeamPersonPosition) => {
    if (typeof InvTeamPersonPosition !== 'object') {
        throw new TypeError('InvTeamPersonPosition is not a valid object.');
    }

    let _obj = new InvTeamPersonPositionDao(InvTeamPersonPosition);
    let saved = await  _obj.save();
    let __obj = await InvTeamPersonPositionDao
        .findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a InvTeamPersonPosition
 */
InvTeamPersonPositionSchema.static('update', async (id, InvTeamPersonPosition) => {
    if (typeof InvTeamPersonPosition !== 'object') {
        throw new TypeError('InvTeamPersonPosition is not a valid object.');
    }

    try {
        return await InvTeamPersonPositionDao
          .findOneAndUpdate({_id: id}, InvTeamPersonPosition, {new: true})
          .populate('Convocatoria')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvTeamPersonPosition
 */
InvTeamPersonPositionSchema.static('remove', async (id) =>{
    try{
        return await InvTeamPersonPositionDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvTeamPersonPositionDao = mongoose.model('InvTeamPersonPosition', InvTeamPersonPositionSchema);
module.exports = InvTeamPersonPositionDao;
