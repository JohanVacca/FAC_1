'use strict';

const GroupSchema = require('../model/group.model');
const mongoose = require("mongoose");

/**
 * getAll Groups
 */

GroupSchema.static('getAll', async (query) => {
    try{
        return await GroupDao.find(query)
          .populate('category')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById Group
 */
GroupSchema.static('getById', async (id) => {
    try{
        return await GroupDao
          .findOne({_id: id})
          .populate('category')
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a Group
 */
GroupSchema.static('create', async (group) => {
    if (typeof group !== 'object') {
        throw new TypeError('group is not a valid object.');
    }

    let _obj = new GroupDao(group);
    let saved = await  _obj.save();
    let __obj = await GroupDao
      .findOne({_id: saved._id})
      .populate('category')
      .exec();
    return (__obj);
});

/**
 * update a Group
 */
GroupSchema.static('update', async (id, group) => {
    if (typeof group !== 'object') {
        throw new TypeError('group is not a valid object.');
    }

    try {
        return await GroupDao
          .findOneAndUpdate({_id: id}, group, {new: true})
          .populate('category')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a Group
 */
GroupSchema.static('remove', async (id) =>{
    try{
        return await GroupDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let GroupDao = mongoose.model('group', GroupSchema);
module.exports = GroupDao;
