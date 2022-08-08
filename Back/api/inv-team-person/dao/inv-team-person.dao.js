'use strict';

const InvTeamPersonSchema = require('../model/inv-team-person.model');
const mongoose = require("mongoose");

/**
 * getAll InvTeamPersons
 */

InvTeamPersonSchema.static('getAll', async (query) => {
    try{
        return await InvTeamPersonDao
          .find(query)
          .populate('group')
          .populate('position')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById InvTeamPerson
 */
InvTeamPersonSchema.static('getById', async (id) => {
    try{
        return await InvTeamPersonDao
          .findOne({_id: id})
          .populate('group')
          .populate('position')
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a InvTeamPerson
 */
InvTeamPersonSchema.static('create', async (invTeamPerson) => {
    if (typeof invTeamPerson !== 'object') {
        throw new TypeError('invTeamPerson is not a valid object.');
    }

    let _invTeamPerson = new InvTeamPersonDao(invTeamPerson);
    let saved = await  _invTeamPerson.save();
    let __invTeamPerson = await InvTeamPersonDao
      .findOne({_id: saved._id})
      .populate('group')
      .populate('position')
      .exec();
    return (__invTeamPerson);
});

/**
 * update a InvTeamPerson
 */
InvTeamPersonSchema.static('update', async (id, invTeamPerson) => {
    if (typeof invTeamPerson !== 'object') {
        throw new TypeError('invTeamPerson is not a valid object.');
    }

    try {
        return await InvTeamPersonDao
          .findOneAndUpdate({_id: id}, invTeamPerson, {new: true})
          .populate('group')
          .populate('position')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a InvTeamPerson
 */
InvTeamPersonSchema.static('remove', async (id) =>{
    try{
        return await InvTeamPersonDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvTeamPersonDao = mongoose.model('invTeamPerson', InvTeamPersonSchema);
module.exports = InvTeamPersonDao;
